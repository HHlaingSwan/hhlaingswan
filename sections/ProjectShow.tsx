"use client";
import React from "react";
import ThreeDCarousel from "@/components/ui/3d-carousel";

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

const ProjectShow = () => {
	const carouselItems = projects.map((project, index) => ({
		id: index,
		title: project.title,
		brand: project.tags[0],
		description: project.description,
		tags: project.tags,
		imageUrl: project.image,
		link: project.liveUrl,
	}));

	return (
		<section
			id='projects'
			className='py-20 bg-background '>
			<div className='container mx-auto  px-4 '>
				<div className='text-center  mb-16'>
					<h2 className='md:text-4xl font-display text-2xl font-bold mb-3 text-foreground'>
						My Creative Workspace
					</h2>
					<p className='text-muted-foreground font-lora max-w-2xl text-sm md:text-base mx-auto'>
						Here are some of the projects I've worked on. Each one was a
						learning experience and a step forward in my journey as a developer.
					</p>
				</div>
				<ThreeDCarousel items={carouselItems} />
			</div>
		</section>
	);
};

export default ProjectShow;
