import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";

// --- Core Data Interface ---
export interface ChainItem {
	id: string | number; // Unique ID
	name: string;
	icon?: React.ReactNode;
	color?: string;
	/** A secondary string line for the item, e.g., a short description or a value. */
	details?: string;
	logo?: React.ReactNode; // Optional image URL
}

// --- Internal Animated Type ---
/** The specific type returned by getVisibleItems, extending the base ChainItem. */
type AnimatedChainItem = ChainItem & {
	distanceFromCenter: number;
	originalIndex: number;
};

// --- Component Props Interfaces ---

interface CarouselItemProps {
	chain: AnimatedChainItem;
	side: "left" | "right";
}

interface ChainCarouselProps {
	/** The list of items to display in the carousel. (REQUIRED) */
	items: ChainItem[];
	/** The speed of the auto-scroll rotation in milliseconds. */
	scrollSpeedMs?: number;
	/** The number of carousel items visible at once (must be an odd number). */
	visibleItemCount?: number;
	/** Custom class for the main container div. */
	className?: string;
}

// --- Helper Components ---

/** A single item card for the carousel. */
const CarouselItemCard: React.FC<CarouselItemProps> = ({ chain, side }) => {
	const {
		distanceFromCenter,
		id,
		name,
		details,
		logo,
		icon: FallbackIcon,
	} = chain;
	const distance = Math.abs(distanceFromCenter);
	// Visual effects based on distance from the center (0)
	const opacity = 1 - distance / 4;
	const scale = 1 - distance * 0.1;
	const yOffset = distanceFromCenter * 90;
	const xOffset = side === "left" ? -distance * 50 : distance * 50;

	const IconOrLogo = (
		<div
			style={{ color: chain.color }}
			className='rounded-full  p-2'>
			{logo ? (
				<div className='size-12'>{logo}</div>
			) : (
				<div className='size-12'>{FallbackIcon}</div>
			)}
		</div>
	);

	return (
		<motion.div
			key={id}
			className={`absolute flex items-center gap-4 text-background  px-6 py-3 
                ${side === "left" ? "flex-row-reverse" : "flex-row"}`}
			animate={{
				opacity,
				scale,
				y: yOffset,
				x: xOffset,
				rotate: distanceFromCenter * 1,
			}}
			transition={{ duration: 0.4, ease: "easeInOut" }}>
			{IconOrLogo}

			<div
				className={`flex flex-col mx-4 ${
					side === "left" ? "text-right" : "text-left"
				}`}>
				{/* FIX: Added whitespace-nowrap to prevent the name from wrapping. */}
				<span className='text-md lg:text-lg font-semibold text-foreground whitespace-nowrap'>
					{name}
				</span>
				{/* Display generic details/description */}
				<span className='text-xs lg:text-sm text-gray-500'>{details}</span>
			</div>
		</motion.div>
	);
};

// --- Main Component ---

const ChainCarousel: React.FC<ChainCarouselProps> = ({
	items,
	scrollSpeedMs = 1500,
	visibleItemCount = 9,
	className = "",
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	// References for Framer Motion scroll-based animation
	const rightSectionRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(rightSectionRef, {
		margin: "-100px 0px -100px 0px",
	});
	const totalItems = items.length;

	// 1. Auto-scroll effect
	useEffect(() => {
		if (isPaused || totalItems === 0) return;

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % totalItems);
		}, scrollSpeedMs);

		return () => clearInterval(interval);
	}, [isPaused, totalItems, scrollSpeedMs]);

	// 2. Scroll listener to pause carousel on page scroll
	useEffect(() => {
		let timeoutId: NodeJS.Timeout;
		const handleScroll = () => {
			setIsPaused(true);
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				setIsPaused(false);
			}, 2000); // Resume auto-scroll after 2000ms of no scrolling
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
			clearTimeout(timeoutId);
		};
	}, []);

	// Memoized function for carousel items
	const getVisibleItems = useCallback((): AnimatedChainItem[] => {
		// Explicitly define return type
		const visibleItems: AnimatedChainItem[] = [];
		if (totalItems === 0) return [];

		// Ensure visibleItemCount is an odd number for a clear center item
		const itemsToShow =
			visibleItemCount % 2 === 0 ? visibleItemCount + 1 : visibleItemCount;
		const half = Math.floor(itemsToShow / 2);

		for (let i = -half; i <= half; i++) {
			let index = currentIndex + i;
			if (index < 0) index += totalItems;
			if (index >= totalItems) index -= totalItems;

			visibleItems.push({
				...items[index],
				originalIndex: index,
				distanceFromCenter: i,
			});
		}
		return visibleItems;
	}, [currentIndex, items, totalItems, visibleItemCount]);

	const currentItem = items[currentIndex];

	// --- JSX Render ---
	return (
		<div
			id='explore-section'
			className={` space-y-20
            ${className}`}>
			<div
				className='flex flex-col xl:flex-row 
            max-w-7xl mx-auto px-4 md:px-8 gap-12 justify-center items-center'>
				{/* Left Section - Chain Carousel (Hidden on smaller screens) */}
				<motion.div
					className='relative w-full max-w-md xl:max-w-2xl h-[500px] 
                 items-center justify-center hidden xl:flex -left-14 '
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
					initial={{ x: "-100%", opacity: 0 }}
					animate={isInView ? { x: 0, opacity: 1 } : {}}
					transition={{
						type: "spring",
						stiffness: 80,
						damping: 20,
						duration: 0.8,
					}}>
					{/* Fading overlay to mask items */}
					<div className='absolute inset-0 z-10 pointer-events-none'>
						<div className='absolute top-0 h-1/4 w-full bg-transparent'></div>
						<div className='absolute bottom-0 h-1/4 w-full bg-transparent '></div>
					</div>

					{getVisibleItems().map((chain) => (
						<CarouselItemCard
							key={chain.id}
							chain={chain} // Renamed prop to 'chain' for this component's context
							side='left'
						/>
					))}
				</motion.div>

				{/* Middle Section - Currently Selected Item Display */}
				<div className='flex flex-col text-center 2xl:text-center xl:text-center w-96  gap-6 '>
					{currentItem && (
						<div className='flex flex-col items-center justify-center gap-0 mt-4'>
							<div
								className='p-2 rounded-full '
								style={{ color: currentItem.color }}>
								{currentItem.logo ? (
									<div className='size-12'>{currentItem.logo}</div>
								) : (
									<div className='size-12'>{currentItem.icon}</div>
								)}
							</div>
							<h3 className='text-xl xl:text-2xl font-bold text-foreground mt-2'>
								{currentItem.name}
							</h3>
							<p className='text-sm xl:text-lg text-gray-400'>
								{currentItem.details || "View Details"}
							</p>
						</div>
					)}
				</div>

				{/* Right Section - Chain Carousel */}
				<motion.div
					ref={rightSectionRef}
					className='relative w-full max-w-md  xl:max-w-2xl h-[500px] 
                flex items-center justify-center -right-14 '
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
					initial={{ x: "100%", opacity: 0 }}
					animate={isInView ? { x: 0, opacity: 1 } : {}}
					transition={{
						type: "spring",
						stiffness: 80,
						damping: 20,
						duration: 0.8,
					}}>
					{/* Fading overlay to mask items */}
					<div className='absolute inset-0 z-10 pointer-events-none'>
						<div className='absolute top-0 h-1/4 w-full bg-transparent '></div>
						<div className='absolute bottom-0 h-1/4 w-full bg-transparent '></div>
					</div>

					{getVisibleItems().map((chain) => (
						<CarouselItemCard
							key={chain.id}
							chain={chain}
							side='right'
						/>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default ChainCarousel;
