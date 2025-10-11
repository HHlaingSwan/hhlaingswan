"use client";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, CheckCircle } from "lucide-react";

const experienceData = [
	{
		company: "MyDay Thu Kyawl Co.ltd",
		title: "Frontend Developer",
		duration: "Nov 2024 - Present",
		description: [
			"Developing and maintaining user-facing features using modern frontend technologies.",
			"Collaborating with designers and backend developers to create seamless and responsive web applications.",
			"Working on improving website performance and user experience.",
			"Participating in code reviews to maintain high code quality and standards.",
		],
		icon: <Briefcase />,
	},
];

const Experience = () => {
	return (
		<section
			id='experience'
			className='py-20 bg-background'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center mb-16'>
					<h2 className='md:text-4xl font-display text-2xl font-bold mb-3 text-foreground'>
						Work Experience
					</h2>
					<p className='text-muted-foreground font-lora max-w-2xl text-sm md:text-base mx-auto'>
						My professional journey and contributions in the field of web
						development.
					</p>
				</motion.div>

				<div className='relative max-w-4xl mx-auto'>
					{experienceData.map((job, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ duration: 0.6 }}
							className='relative pl-16'>
							<div className='absolute left-0 top-1'>
								<div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary'>
									{job.icon}
								</div>
							</div>
							<h3 className='text-2xl font-bold text-primary'>{job.title}</h3>
							<p className='font-semibold text-foreground/90'>{job.company}</p>
							<p className='text-sm text-muted-foreground mb-4'>
								{job.duration}
							</p>
							<ul className='space-y-2 text-muted-foreground'>
								{job.description.map((point, i) => (
									<li
										key={i}
										className='flex items-start'>
										<CheckCircle className='w-4 h-4 mr-2 mt-1 text-primary/70 flex-shrink-0' />
										<span>{point}</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
