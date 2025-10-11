"use client";
import { TypeAnimation } from "@/components/TypeAnimation";
import { AuroraText } from "@/components/ui/aurora-text";
import { Highlighter } from "@/components/ui/highlighter";
import { Meteors } from "@/components/ui/meteors";
import { Ripple } from "@/components/ui/ripple";
import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";

const Hero = () => {
	return (
		<section
			id='#home'
			className='relative flex h-[88vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg px-4'>
			<div className='flex flex-col items-center justify-center text-center'>
				<Meteors number={50} />
				<h4 className='mb-8 text-xs font-bold uppercase tracking-widest text-muted-foreground'>
					<TextAnimate
						animation='blurInUp'
						by='character'
						once>
						Dynamic Web Magic With Next.js
					</TextAnimate>
				</h4>
				<h1 className='text-2xl font-bold md:text-6xl'>
					Transforming Concepts into
					<br className='hidden md:block' />
					Seamless{" "}
					<AuroraText>
						<TypeAnimation />
					</AuroraText>
				</h1>
				<h3 className='mt-8 max-w-xl text-xs font-semibold capitalize text-gray-400 md:text-xl'>
					Hi! I&apos;m{" "}
					<Highlighter
						action='underline'
						color='#FF9800'>
						Htat Hlaing Swan
					</Highlighter>
					, a developer based in{" "}
					<Highlighter
						action='highlight'
						color='#FF9800'>
						Myanmar.
					</Highlighter>
				</h3>
			</div>
		</section>
	);
};

export default Hero;
