"use client";
import FlyingLoading from "@/components/FlyingLoading";
import { NavigationBar } from "@/components/NavigationBar";
import { ScrollBasedVelocity } from "@/components/ScrollBasedVelocity";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Hero from "@/sections/Hero";
import ProjectShow from "@/sections/ProjectShow";
import React from "react";
import LogoSlide from "@/sections/LogoSlide";

const page = () => {
	return (
		<div className=' relative flex flex-col justify-center items-center'>
			<Hero />
			<Education />
			<section className='py-20 bg-gradient-to-b from-[var(--color-bg-primary)] via-slate-950 to-[var(--color-bg-primary)] relative w-full overflow-hidden'>
				<div className='container mx-auto mb-12 text-center'>
					<h2 className='md:text-4xl font-display text-2xl font-extrabold text-[var(--color-text-primary)] mb-4 tracking-tight'>
						Technologies I Work With
					</h2>
					<p className='text-[var(--color-text-tertiary)] max-w-xl mx-auto px-8 my-8 text-base'>
						I’m proficient in these modern technologies and frameworks and
						always eager to learn new ones to expand my skill set.
					</p>
				</div>
				<LogoSlide />
				<div className='pointer-events-none absolute top-0 left-0 h-full w-32 z-20 bg-gradient-to-r from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent' />
				<div className='pointer-events-none absolute top-0 right-0 h-full w-32 z-20 bg-gradient-to-l from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent' />
			</section>
			{/* <Experience /> */}
			<ProjectShow />
			<div className='relative  w-full mb-20 h-48  overflow-hidden  '>
				<FlyingLoading />
			</div>
			<div className='fixed bottom-10 md:bottom-12 left-1/2 -translate-x-1/2'>
				<NavigationBar />
			</div>
		</div>
	);
};

export default page;
