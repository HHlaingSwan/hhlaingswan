"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/sections/Hero";
import { NavigationBar } from "./NavigationBar";
import FlyingLoading from "./FlyingLoading";

// Lazy-load all sections that are "below the fold"
const Education = dynamic(() => import("@/sections/Education"));
const Experience = dynamic(() => import("@/sections/Experience"));
const LogoSlide = dynamic(() => import("@/sections/LogoSlide"));
const ProjectShow = dynamic(() => import("@/sections/ProjectShow"));
const Contact = dynamic(() => import("@/sections/Contact"));

// A simple loader component to show while sections are loading
const SectionLoader = () => (
	<div className='h-96 w-full flex items-center justify-center'>
		<div className='w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin'></div>
	</div>
);

const ClientWrapper = () => {
	return (
		<div className='relative flex flex-col justify-center items-center pb-32'>
			<Hero />
			<Suspense fallback={<SectionLoader />}>
				<Education />
				{/* <Experience /> */}
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
				<ProjectShow />
				<div className='w-full overflow-hidden h-48'>
					<FlyingLoading />
				</div>
				{/* <Contact /> */}
			</Suspense>
			<div className='fixed bottom-10 md:bottom-14 left-1/2 -translate-x-1/2'>
				<NavigationBar />
			</div>
		</div>
	);
};

export default ClientWrapper;
