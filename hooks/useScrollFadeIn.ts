import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * A reusable hook for creating scroll-triggered fade-in animations.
 * @param {React.RefObject} ref - The ref of the container element to scope the animations.
 * @param {string} selector - The selector for the elements to animate.
 * @param {object} options - Optional GSAP and ScrollTrigger configuration.
 */
export const useScrollFadeIn = (ref, selector, options = {}) => {
    useLayoutEffect(() => {
        if (!ref.current) return;

        const elements = gsap.utils.toArray(selector, ref.current);
        if (elements.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.from(elements, {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                ...options.vars,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                    ...options.scrollTrigger,
                },
            });
        }, ref);

        return () => ctx.revert();
    }, [ref, selector, options]);
};