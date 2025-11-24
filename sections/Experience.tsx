"use client";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ShineBorder } from "@/components/ui/shine-border";

interface Experience {
	position: string;
	company: string;
	duration: string;
	description: string[];
	technologies: string[];
}

const experienceData: Experience[] = [
	{
		position: "Front-End Developer",
		company: "MY DAY THU KYAWL CO.LTD",
		duration: "Sep 2024 - Present",
		description: [
			"Developed and maintained front-end web applications using the React framework Next.js.",
			"Collaborated with cross-functional teams to deliver high-quality software products using React and Next.js.",
			"Designed and implemented RESTful APIs to support front-end functionality and data management.",
			"Collaborated with cross-functional teams to deliver high-quality software products.",
			"Integrated third-party services and APIs to extend application capabilities.",
		],
		technologies: [
			"React",
			"Next.js",
			"Tailwind CSS",
			"MUI",
			"TypeScript",
			"REST API",
			"Git",
		],
	},
	{
		position: "FreeLancer",
		company: "Various Clients",
		duration: "2023 - 2024",
		description: [
			"Gained hands-on experience with both front-end and back-end development.",
			"Assisted in building and maintaining client websites using React and Next.js",
			"Contributed to the development of a full-stack project, learning about databases and server-side logic.",
			"Participated in code reviews and learned best practices for software development.",
		],
		technologies: ["Next", "React", "Tailwind", "Express", "Git"],
	},
];

const Experience = () => {
	return (
		<section
			id='experience'
			className='py-20 bg-background'>
			<div className='container mx-auto px-4'>
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}>
					<h2 className='md:text-4xl font-display text-2xl font-bold mb-3 text-foreground'>
						Work Experience
					</h2>
					<p className='text-muted-foreground text-sm md:text-base max-w-3xl mx-auto'>
						My professional journey and contributions in the field of web
						development.
					</p>
				</motion.div>

				<div className='space-y-8 max-w-4xl mx-auto'>
					{experienceData.map((job, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}>
							<Card className='bg-card/80 backdrop-blur-sm  hover:border-primary/30 transition-colors duration-300'>
								<ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
								<CardHeader>
									<div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
										<div className='mb-2 sm:mb-0'>
											<CardTitle className='text-xl sm:text-2xl font-bold text-foreground'>
												{job.position}
											</CardTitle>
											<CardDescription className='text-base text-muted-foreground'>
												{job.company}
											</CardDescription>
										</div>
										<div className='text-left sm:text-right'>
											<p className='text-sm text-muted-foreground'>
												{job.duration}
											</p>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<ul className='list-disc list-inside mb-6 text-muted-foreground space-y-2'>
										{job.description.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
									<div className='flex flex-wrap gap-2'>
										{job.technologies.map((tech, i) => (
											<span
												key={i}
												className='bg-primary/10 text-primary text-xs px-3 py-1 rounded-full'>
												{tech}
											</span>
										))}
									</div>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
