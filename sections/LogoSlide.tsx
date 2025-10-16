"use client";
import React from "react";
import { useTheme } from "next-themes";
import ChainCarousel from "@/components/ui/chain-carousel";
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

const logos = [
	{
		icon: <SiJavascript size={44} />,
		name: "JavaScript",
		lightColor: "#F7DF1E",
	},
	{
		icon: <SiTypescript size={44} />,
		name: "TypeScript",
		lightColor: "#3178C6",
	},
	{
		icon: <FaReact size={44} />,
		name: "React",
		lightColor: "#61DAFB",
	},
	{
		icon: <SiNextdotjs size={44} />,
		name: "Next.js",
		lightColor: "#3b82f6",
	},
	{
		icon: <SiTailwindcss size={44} />,
		name: "Tailwind CSS",
		lightColor: "#06B6D4",
	},
	{
		icon: <SiShadcnui size={44} />,
		name: "Shadcn/UI",
		lightColor: "#3b82f6",
	},
	{
		icon: <SiMongodb size={44} />,
		name: "MongoDB",
		lightColor: "#47A248",
	},
	{
		icon: <SiPrisma size={44} />,
		name: "Prisma",
		lightColor: "#2D3748",
	},
	{
		icon: <FaGitAlt size={44} />,
		name: "Git",
		lightColor: "#F05032",
	},
	{
		icon: <FaJava size={44} />,
		name: "Java",
		lightColor: "#007396",
	},
	{
		icon: <SiReactquery size={44} />,
		name: "TanStack Query",
		lightColor: "#FF4154",
	},
];

const LogoSlide = () => {
	const chainItems = logos.map((logo, index) => ({
		id: index,
		name: logo.name,
		logo: logo.icon,
		details: logo.name,
		color: logo.lightColor,
	}));

	return (
		<ChainCarousel
			items={chainItems}
			scrollSpeedMs={2000}
		/>
	);
};

export default LogoSlide;
