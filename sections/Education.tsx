"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Code, GraduationCap, University } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { useTheme } from "next-themes";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
	{
		icon: <University />,
		title: "My University",
		subtitle: "Myanmar Technopreneur Academy - MTA",
		date: "2024 - 2027",
		description:
			"During my studies at Myanmar Technopreneur Academy (MTA), I built a solid foundation in computer science, mastering core principles, algorithms, and software development. I actively participated in coding competitions and hackathons, applying theoretical concepts to real-world challenges and enhancing my problem-solving abilities.",
	},
	{
		icon: <Code />,
		title: "Relevant Coursework",
		subtitle: "Technical Coursework",
		courses: [
			"Full-Stack Web Development (MERN)",
			"Object-Oriented Programming (Java)",
			"Backend Development with Node.js & Express",
			"Database Management Systems (SQL & NoSQL)",
			"Mobile App Development (React Native)",
			"Data Structures & Algorithms",
		],
	},
	{
		icon: <GraduationCap />,
		title: "Key Achievements",
		achievements: [
			"Developed full-stack web applications, enhancing skills in front-end and back-end development.",
			"Gained proficiency in Java for server-side development and object-oriented programming.",
			"Acquired expertise in both SQL and NoSQL databases, including MongoDB and MySQL.",
			"Completed coursework in advanced web technologies and software architecture.",
			"Mastered version control with Git and collaborated on various projects.",
			"Continuously learning and expanding my skill set in cloud technologies and DevOps.",
		],
	},
];

const Education = () => {
	const { theme } = useTheme();
	const containerRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const container = containerRef.current;
		const timeline = timelineRef.current;
		if (!container || !timeline) return;

		const ctx = gsap.context(() => {
			// Create a single timeline for all animations
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: container,
					start: "top 80%",
					end: "bottom 20%",
					scrub: 0.5,
				},
			});

			// Animate the main timeline bar
			tl.from(timeline, { scaleY: 0, duration: 3 }); // Give it a duration so it animates over the scroll

			// Animate the education cards with a stagger
			tl.from(
				".education-card",
				{
					opacity: 0,
					y: 50,
					stagger: 0.2,
				},
				"<0.2"
			); // Start 0.2s after the timeline animation starts

			// Animate the timeline dots with a stagger
			tl.from(
				".timeline-dot",
				{
					scale: 0,
					stagger: 0.2,
				},
				"<" // Start at the same time as the card animation
			); // Start 0.2s after the timeline animation starts
		}, container);

		return () => ctx.revert();
	}, []); // Dependency array can be empty now

	return (
		<section
			id='about'
			className='py-20 bg-background'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-20 text-foreground'>
					<h2 className='md:text-4xl font-display text-2xl font-bold mb-3'>
						About My Education
					</h2>
					<p className='text-muted-foreground font-lora max-w-2xl text-sm md:text-base mx-auto'>
						Explore my academic background and the skills I've gained throughout
						my educational journey at Myanmar Technopreneur Academy.
					</p>
				</div>

				<div
					className='max-w-4xl mx-auto relative [perspective:1000px]'
					ref={containerRef}>
					{/* Main timeline line that grows with scroll using GSAP */}
					<div
						ref={timelineRef}
						className='absolute left-[7px] top-[30px] bottom-0 w-1 bg-secondary origin-top'></div>

					{educationData.map((item, index) => (
						<div
							key={index}
							className='mb-12 pl-10 relative'>
							{/* Timeline Dot */}
							<div className='timeline-dot absolute -left-1 top-2 w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center bg-background'>
								<div className='w-4 h-4 rounded-full bg-primary'></div>
							</div>

							{/* Content Card */}
							<MagicCard
								gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
								className='p-1'>
								<div className='education-card bg-card/80  p-6   '>
									<div className='flex items-center mb-4'>
										<div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 text-primary text-xl'>
											{item.icon}
										</div>
										<h3 className='md:text-2xl text-xl font-bold text-card-foreground'>
											{item.title}
										</h3>
									</div>

									{item.subtitle && (
										<div className='mb-4'>
											<h4 className='md:text-lg text-base font-semibold text-primary'>
												{item.subtitle}
											</h4>
											{item.date && (
												<div className='flex items-center text-muted-foreground mt-1'>
													<Calendar className='mr-2' />
													<span>{item.date}</span>
												</div>
											)}
										</div>
									)}

									{item.description && (
										<p className='text-muted-foreground'>{item.description}</p>
									)}

									{item.courses && (
										<ul className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4'>
											{item.courses.map((course, i) => (
												<li
													key={i}
													className='bg-secondary/50 p-3 rounded-md text-secondary-foreground text-sm'>
													{course}
												</li>
											))}
										</ul>
									)}

									{item.achievements && (
										<ul className='list-disc list-inside text-muted-foreground space-y-2 mt-4'>
											{item.achievements.map((achievement, i) => (
												<li key={i}>{achievement}</li>
											))}
										</ul>
									)}
								</div>
							</MagicCard>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Education;
