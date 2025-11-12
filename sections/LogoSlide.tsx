"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
	SiNextdotjs,
	SiMongodb,
	SiPrisma,
	SiTailwindcss,
	SiJavascript,
	SiTypescript,
	SiExpress,
	SiMysql,
	SiReactquery,
	SiShadcnui,
} from "react-icons/si";

const LogoSlide = () => {
	const logos = [
		{ icon: <SiJavascript size={44} />, name: "JavaScript", color: "#F7DF1E" }, // Yellow
		{ icon: <SiTypescript size={44} />, name: "TypeScript", color: "#3178C6" }, // Blue
		{ icon: <FaReact size={44} />, name: "React", color: "#61DAFB" }, // React Blue
		{ icon: <SiNextdotjs size={44} />, name: "Next.js", color: "#FFFFFF" }, // White for dark backgrounds
		// { icon: <FaNodeJs size={44} />, name: "Node.js", color: "#68A063" }, // Node Green
		// { icon: <SiExpress size={44} />, name: "Express.js", color: "#FFFFFF" }, // White for dark backgrounds
		{
			icon: <SiTailwindcss size={44} />,
			name: "Tailwind CSS",
			color: "#06B6D4",
		}, // Tailwind Blue
		{ icon: <SiShadcnui size={44} />, name: "Shadcn/UI", color: "#FFFFFF" }, // White for dark backgrounds
		{ icon: <SiMongodb size={44} />, name: "MongoDB", color: "#47A248" }, // Mongo Green
		// { icon: <SiMysql size={44} />, name: "MySQL", color: "#4479A1" }, // MySQL Blue
		{ icon: <SiPrisma size={44} />, name: "Prisma", color: "#2D3748" }, // Prisma Dark, but let's use a lighter one for visibility
		{ icon: <FaGitAlt size={44} />, name: "Git", color: "#F05032" }, // Git Orange
		{ icon: <FaJava size={44} />, name: "Java", color: "#007396" }, // Java Blue
		{
			icon: <SiReactquery size={44} />,
			name: "TanStack Query",
			color: "#FF4154", // TanStack Red
		},
	];

	const duplicatedLogos = [...logos, ...logos];

	return (
		<>
			<div className='flex flex-col gap-8 my-5'>
				{/* First row (scrolls left) */}
				<div className='flex  my-4'>
					<div className='scrolling-logos-left flex gap-12 px-6'>
						{duplicatedLogos.map((logo, index) => (
							<motion.div
								key={`top-${index}`}
								className='flex flex-col items-center group w-24'
								animate={{ y: ["0rem", "-1rem", "0rem"] }}
								transition={{
									y: {
										delay: index * 0.1,
										repeat: Infinity,
										repeatType: "mirror",
										duration: 1.5,
										ease: "easeInOut",
									},
								}}>
								<div className='transition-transform duration-300 ease-in-out group-hover:-translate-y-2'>
									<div
										className='w-24 h-24 flex items-center justify-center rounded-2xl   transition-colors duration-300 mb-3   cursor-pointer'
										style={{ color: logo.color }}>
										<div className='transition-transform duration-300 ease-in-out group-hover:scale-110'>
											{logo.icon}
										</div>
									</div>
									<span className='text-sm font-medium text-center block text-[var(--color-text-subtle)]'>
										{logo.name}
									</span>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Second row (scrolls right) */}
				<div className='flex '>
					<div className='scrolling-logos-right flex gap-12 px-6'>
						{duplicatedLogos.map((logo, index) => (
							<motion.div
								key={`bottom-${index}`}
								className='flex flex-col items-center group w-24'
								animate={{ y: ["0rem", "1rem", "0rem"] }} // Opposite wave
								transition={{
									y: {
										delay: index * 0.1,
										repeat: Infinity,
										repeatType: "mirror",
										duration: 1.5,
										ease: "easeInOut",
									},
								}}>
								<div className='transition-transform duration-300 ease-in-out group-hover:-translate-y-2'>
									<div
										className='w-24 h-24 flex items-center justify-center rounded-2xl transition-colors duration-300 mb-3 cursor-pointer'
										style={{ color: logo.color }}>
										<div className='transition-transform duration-300 ease-in-out group-hover:scale-110'>
											{logo.icon}
										</div>
									</div>
									<span className='text-sm font-medium text-center block text-[var(--color-text-subtle)]'>
										{logo.name}
									</span>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default LogoSlide;
