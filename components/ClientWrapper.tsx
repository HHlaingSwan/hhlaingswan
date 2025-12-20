"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/sections/Hero";
import { NavigationBar } from "./NavigationBar";
import FlyingLoading from "./FlyingLoading";
import ParticleOrbitEffect from "@/components/ui/particle-orbit-effect";

// Lazy-load all sections that are "below the fold"
const Education = dynamic(() => import("@/sections/Education"));
const LogoSlide = dynamic(() => import("@/sections/LogoSlide"));
const Footer = dynamic(() => import("@/sections/Footer"));
const ProjectOverview = dynamic(() => import("@/sections/ProjectOverview"));

const ClientWrapper = () => {
  return (
    <div className="relative flex flex-col justify-center items-center pb-32">
      {/* <ParticleOrbitEffect /> */}
      <Hero />
      <div className="w-full overflow-hidden h-32">
        <FlyingLoading />
      </div>
      <ProjectOverview />

      {/* <Education /> */}

      <section className="py-20 bg-gradient-to-b from-background via-secondary to-background dark:via-slate-950 z-20 relative w-full overflow-hidden">
        <div className="container mx-auto mb-12 text-center">
          <h2 className="md:text-4xl font-display text-2xl font-extrabold text-[var(--color-text-primary)] mb-4 tracking-tight">
            Technologies I Work With
          </h2>
          <p className="text-[var(--color-text-tertiary)] max-w-xl mx-auto px-8 my-8 text-base">
            I’m proficient in these modern technologies and frameworks and
            always eager to learn new ones to expand my skill set.
          </p>
        </div>
        <LogoSlide />
        <div className="pointer-events-none absolute top-0 left-0 h-full w-32 z-20 bg-gradient-to-r from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 h-full w-32 z-20 bg-gradient-to-l  from-[var(--color-bg-primary)] via-[var(--color-bg-primary)]/80 to-transparent" />
      </section>
      <Footer />
      <div className="fixed bottom-10 md:bottom-14 left-1/2 -translate-x-1/2">
        <NavigationBar />
      </div>
    </div>
  );
};

export default ClientWrapper;
