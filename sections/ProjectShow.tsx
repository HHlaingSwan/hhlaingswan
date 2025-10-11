"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Link as LinkIcon } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";

const projects = [
	{
		title: "Arcane Animated Series",
		description:
			"A series of animated games built using Unity and C#. Each game features unique characters, levels, and environments, and is designed to be fun and engaging for players of all ages.",
		image: "/projects/arcane.png",
		tags: ["React", , "GSAP", "Tailwind CSS", "Game Concept"],
		liveUrl: "#",
		githubUrl: "#",
	},
	{
		title: "Free Movie Channel ",
		description:
			"A movie streaming website that allows users to watch movies online for free. The website features a user-friendly interface, secure payment system, and a wide selection of movies to choose from.",
		image: "/projects/movie.png",
		tags: ["Next.js", "TypeScript", "IMDB API", "Tailwind CSS"],
		liveUrl: "#",
		githubUrl: "#",
	},
	{
		title: "Snake Game",
		description:
			"A classic snake game built using HTML, CSS, and JavaScript. The game features a user-friendly interface, secure payment system, and a wide selection of movies to choose from.",
		image: "/projects/snake.png",
		tags: ["React", "Fun", "Tailwind CSS", "Ai Learning"],
		liveUrl: "#",
		githubUrl: "#",
	},
	{
		title: "Chat App",
		description:
			"A chat app built using React, Firebase, and Material UI. The app features a user-friendly interface, secure payment system, and a wide selection of movies to choose from.",
		image: "/projects/unitChat.png",
		tags: ["React", "Firebase", "Real-time Database", "Material UI"],
		liveUrl: "#",
		githubUrl: "#",
	},
];

const ProjectShow = () => {
	return (
		<section
			id='projects'
			className='py-20 bg-background'>
			<div className='container mx-auto md:max-w-7xl px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center mb-16'>
					<h2 className='md:text-4xl font-display text-2xl font-bold mb-3 text-foreground'>
						My Creative Workspace
					</h2>
					<p className='text-muted-foreground font-lora max-w-2xl text-sm md:text-base mx-auto'>
						Here are some of the projects I've worked on. Each one was a
						learning experience and a step forward in my journey as a developer.
					</p>
				</motion.div>

				<div className='space-y-28'>
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
								index % 2 !== 0 ? "md:flex-row-reverse" : ""
							}`}>
							{/* Image Side */}
							<div className='w-full md:w-1/2 rounded-lg overflow-hidden shadow-xl'>
								<Image
									src={project.image}
									alt={project.title}
									width={1200}
									height={800}
									className='object-cover w-full h-full'
								/>
							</div>

							{/* Content Side */}
							<div className='w-full md:w-1/2'>
								<h3 className='text-2xl md:text-3xl font-bold text-primary mb-4'>
									<TextAnimate
										animation='blurInUp'
										by='character'
										once>
										{project.title}
									</TextAnimate>
								</h3>
								<p className='text-muted-foreground mb-6'>
									{project.description}
								</p>
								<div className='flex flex-wrap gap-2 mb-6'>
									{project.tags.map((tag) => (
										<span
											key={tag}
											className='bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full'>
											{tag}
										</span>
									))}
								</div>
								<div className='flex items-center gap-4'>
									<a
										href={project.liveUrl}
										target='_blank'
										rel='noopener noreferrer'
										className='inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline'>
										<LinkIcon className='w-4 h-4' />
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
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProjectShow;
