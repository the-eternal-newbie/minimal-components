import { useState, useRef, useEffect, LegacyRef } from 'react';

export type UseIntersectionObserverResult<T extends HTMLElement> = [LegacyRef<T>, boolean];

export const useIntersectionObserver = <T extends HTMLElement = HTMLElement>(
	options?: IntersectionObserverInit
): UseIntersectionObserverResult<T> => {
	const [inView, setInView] = useState(false);
	const ref = useRef<T>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					ref.current && observer.unobserve(ref.current);
				}
			},
			{ ...options }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [options]);

	return [ref, inView];
};
