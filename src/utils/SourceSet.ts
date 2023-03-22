import { ISrcSet } from '~components/Image/Image';

export const generateSrc = (images: ISrcSet[]) =>
	images.map(({ srcVariants, sizeVariants }) => {
		const type = `image/${srcVariants[0].split('.').pop()}`;

		const srcSet = srcVariants
			.reduce(
				(acc: string[], src, index) =>
					sizeVariants?.[index]
						? [...acc, `${src} ${sizeVariants[index].replace(/[a-zA-Z%]+/g, '')}w`]
						: acc,
				[]
			)
			.toString();

		const sizes = sizeVariants
			.map((size, index) =>
				index === sizeVariants.length - 1 ? size : `(max-width: ${size}) ${size}`
			)
			.toString();

		return { type, srcSet, sizes };
	});
