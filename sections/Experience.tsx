"use client";
import React from "react";
import { ScrollTimeline } from "@/components/ui/scroll-timeline";
import { Briefcase } from "lucide-react";

const experienceData = [
	{
		company: "MyDay Thu Kyawl Co.ltd",
		title: "Frontend Developer",
		duration: "Nov 2024 - Present",
		icon: <Briefcase />,
	},
];

const Experience = () => {
	const timelineEvents = experienceData.map((job, index) => ({
		id: String(index),
		year: job.duration,
		title: job.title,
		subtitle: job.company,
		description: "",
		icon: job.icon,
	}));

	return (
		<section
			id='experience'
			className='py-20 bg-background'>
			<ScrollTimeline
				events={timelineEvents}
				title='Work Experience'
				subtitle='My professional journey and contributions in the field of web development.'
			/>
		</section>
	);
};

export default Experience;
