import { useState, useEffect } from "react";

/**
 * Custom hook to track whether the page has been scrolled past a certain threshold.
 * @param {number} [threshold=10] - The scroll threshold in pixels.
 * @returns {boolean} - True if the page is scrolled past the threshold, false otherwise.
 */
export const useScroll = (threshold = 10) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > threshold);
        };

        window.addEventListener("scroll", handleScroll);

        // Call handler on mount to set initial state
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return scrolled;
};
