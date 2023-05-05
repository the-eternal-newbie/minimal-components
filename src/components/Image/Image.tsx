import React, { FC, useState } from 'react';
import { classNames } from '~utils/ClassNames';
import { generateSrc } from '~utils/SourceSet';

import './Image.scss';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export interface ISrcSet {
	srcVariants: string[];
	sizeVariants: string[];
}

export type ConditionalProps =
	| {
			srcSet?: string;
			sizes?: string;
			variants?: never;
	  }
	| {
			srcSet?: never;
			sizes?: never;
			variants?: ISrcSet[];
	  };

export interface IImage extends React.HTMLProps<HTMLPictureElement> {
	fallback?: string;
	lazy?: boolean;
}

export type Props = IImage & ConditionalProps;

const Image: FC<Props> = (props: Props) => {
	const { className, srcSet, sizes, variants, fallback, lazy, alt, ...rest } = props;
	const [loaded, setLoaded] = useState(false);
	const [failed, setFailed] = useState(false);
	const [ref, inView] = useIntersectionObserver<HTMLDivElement>();

	const baseClassName = classNames('image', className, loaded ? 'loaded' : '');
	const altSrc = fallback ?? 'src/assets/img/placeholder.svg';
	const useVariants = !!variants && !srcSet && !sizes;
	const loading = lazy ? 'lazy' : 'eager';

	const onError = () => {
		setFailed(true);
		setLoaded(false);
	};
	const onLoad = () => setLoaded(true);

	return (
		<div ref={ref}>
			{inView ? (
				<picture {...rest} className={baseClassName} onError={onError} onLoad={onLoad}>
					{failed ? null : useVariants ? (
						generateSrc(variants).map((image, index) => (
							<source key={index} {...image} />
						))
					) : (
						<source srcSet={srcSet} sizes={sizes} />
					)}
					<img src={altSrc} alt={alt} loading={loading} />
				</picture>
			) : null}
		</div>
	);
};

export default Image;
