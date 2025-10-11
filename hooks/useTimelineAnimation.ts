import { useLayoutEffect } from "react";
import { gsap } from "gsap";

interface UseTimelineAnimationOptions {
	start?: string;
	end?: string;
	scrub?: number;
}

export const useTimelineAnimation = (
	containerRef: React.RefObject<HTMLElement | null>,
	timelineRef: React.RefObject<HTMLElement | null>,
	scrollTriggerOptions?: UseTimelineAnimationOptions
): void => {
	const { start, end, scrub } = scrollTriggerOptions || {};

	useLayoutEffect(() => {
		if (!containerRef.current || !timelineRef.current) return;

		const container = containerRef.current;
		const timeline = timelineRef.current;

		const ctx = gsap.context(() => {
			gsap.from(timeline, {
				scaleY: 0,
				scrollTrigger: {
					trigger: container,
					...scrollTriggerOptions,
				},
			});
		}, container);

		return () => ctx.revert();
	}, [start, end, scrub]);
};
