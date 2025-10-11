import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFadeInOptions {
	duration?: number;
	delay?: number;
	stagger?: number;
	y?: number;
	start?: string;
	[key: string]: any;
}

export const useScrollFadeIn = (
	ref: React.RefObject<HTMLElement | null>,
	selector: string,
	options: ScrollFadeInOptions = {}
) => {
	useLayoutEffect(() => {
		if (!ref.current) return;

		const elements = gsap.utils.toArray(selector, ref.current);

		const ctx = gsap.context(() => {
			gsap.from(elements, {
				opacity: 0,
				y: 50,
				stagger: 0.2,
				...options,
			});
		}, ref.current);

		return () => ctx.revert();
	}, [ref, selector, options]);
};
