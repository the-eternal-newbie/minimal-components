import React, { FC, useState } from 'react';
import { classNames } from '~utils/ClassNames';
import { generateSrc } from '~utils/SourceSet';

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
}

export type Props = IImage & ConditionalProps;

const Image: FC<Props> = (props: Props) => {
	const { className, srcSet, sizes, variants, fallback, ...rest } = props;
	const [loaded, setLoaded] = useState(false);
	const baseClassName = classNames('image', className, loaded ? 'loaded' : '');
	const altSrc = fallback ?? 'src/assets/img/placeholder.svg';
	const useVariants = !!variants && !srcSet && !sizes;

	const onError = () => setLoaded(false);
	const onLoad = () => setLoaded(true);

	return (
		<picture {...rest} className={baseClassName} onError={onError} onLoad={onLoad}>
			{loaded ? (
				useVariants ? (
					generateSrc(variants).map((image, index) => <source key={index} {...image} />)
				) : (
					<source srcSet={srcSet} sizes={sizes} />
				)
			) : null}
			<img src={altSrc} />
		</picture>
	);
};

export default Image;
