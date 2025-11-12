"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Github, Link as LinkIcon, ExternalLink } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

const projects = [
	{
		title: "Arcane Animated Series",
		description:
			"Fan website for the Arcane series with character profiles and interactive elements. The website features a user-friendly interface, secure payment system, and a wide selection of movies to choose from.",
		image: "/projects/arcane.png",
		tags: ["React", "GSAP", "Tailwind CSS", "Game Concept"],
		liveUrl: "https://arcane-game.vercel.app/",
		githubUrl: "https://github.com/HHlaingSwan/Arcane-Game",
	},
	{
		title: "Free Movie Channel ",
		description:
			"A movie streaming website that allows users to watch movies online for free. The website features a user-friendly interface, secure payment system, and a wide selection of movies to choose from.",
		image: "/projects/movie.png",
		tags: ["Next.js", "TypeScript", "IMDB API", "Tailwind CSS"],
		liveUrl: "https://imdb-next-h-hlaing-swans-projects.vercel.app/",
		githubUrl: "https://github.com/HHlaingSwan/IMDB-Next",
	},
	{
		title: "Snake Game",
		description:
			"A classic snake game built using HTML, CSS, and JavaScript. The game features a user-friendly interface, secure payment system, and a wide selection of movies to choose from.",
		image: "/projects/snake.png",
		tags: ["React", "Fun", "Tailwind CSS", "Ai Learning"],
		liveUrl: "https://snake-game-black-eight.vercel.app/",
		githubUrl: "https://github.com/HHlaingSwan/Snake-Game",
	},
	{
		title: "Chat App",
		description:
			"A chat app built using React, Firebase, and Material UI. The app features a user-friendly interface, secure payment system, and a wide selection of movies to choose from.",
		image: "/projects/unitChat.png",
		tags: ["React", "Firebase", "Real-time Database"],
		liveUrl: "https://unit-chat-seven.vercel.app/",
		githubUrl: "https://github.com/HHlaingSwan/Unit-Chat",
	},
];

const gridContainerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const gridItemVariants: Variants = {
	hidden: { opacity: 0, rotateY: -180 },
	show: {
		opacity: 1,
		rotateY: 0,
		transition: {
			type: "spring", // Using a spring for a more natural feel
			damping: 20,
			stiffness: 150,
		},
	},
};

const ProjectShow = () => {
	return (
		<section
			id='projects'
			className='py-10 bg-background [perspective:1200px] '>
			<div className='container mx-auto md:max-w-7xl p-4'>
				<div className='text-center my-16'>
					<h2 className='md:text-4xl font-display text-2xl font-bold mb-3 text-foreground'>
						My Creative Workspace
					</h2>
					<p className='text-muted-foreground font-lora max-w-2xl text-sm md:text-base mx-auto'>
						Here are some of the projects I&apos;ve worked on. Each one was a
						learning experience and a step forward in my journey as a developer.
					</p>
				</div>

				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'
					initial='hidden'
					whileInView='show'
					viewport={{ once: true, amount: 0.2 }}
					variants={gridContainerVariants}>
					{projects.map((project, index) => {
						const spans = [
							"lg:col-span-3 lg:row-span-2", // Item 0 - Large
							"lg:col-span-3 lg:row-span-2", // Item 1 - Large
							"lg:col-span-2", // Item 2
							"lg:col-span-2", // Item 3
							"lg:col-span-2", // Item 4
						]; // Item 5 will default to lg:col-span-2
						const spanClass = spans[index % spans.length] || "lg:col-span-2";
						return (
							<motion.div
								key={project.title}
								className={`bg-card mt-10 rounded-xl overflow-hidden shadow-lg flex flex-col transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:-translate-y-2 [transform-style:preserve-3d] ${spanClass}`}
								variants={gridItemVariants}>
								<div className='relative w-full aspect-video'>
									<Image
										src={project.image}
										alt={project.title}
										fill
										className='object-cover'
									/>
								</div>
								<div className='p-6 flex flex-col flex-grow'>
									<h3 className='text-xl font-bold text-primary mb-2'>
										{project.title}
									</h3>
									<p className='text-muted-foreground text-sm mb-4 flex-grow'>
										{project.description}
									</p>
									<div className='flex flex-wrap gap-2 mb-6'>
										{project.tags.map(
											(tag) =>
												tag && (
													<span
														key={tag}
														className='bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full'>
														{tag}
													</span>
												)
										)}
									</div>
									<div className='flex items-center gap-4 mt-auto pt-4 border-t border-border/50'>
										<a
											href={project.liveUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline'>
											<ExternalLink className='w-4 h-4' />
											Live Demo
										</a>
										<a
											href={project.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors'>
											<Github className='w-4 h-4' />
											Source Code
										</a>
									</div>
								</div>
								<BorderBeam
									duration={8}
									size={100}
								/>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectShow;
