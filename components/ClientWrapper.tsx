"use client";
import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/sections/Hero";
import { NavigationBar } from "./NavigationBar";
import About from "@/sections/About";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Footer = dynamic(() => import("@/sections/Footer"));
const ProjectOverview = dynamic(() => import("@/sections/ProjectOverview"));
const ToolsMarquee = dynamic(() => import("@/sections/ToolsMarquee"));
const Education = dynamic(() => import("@/sections/Education"));
const Achievements = dynamic(() => import("@/sections/Achievements"));
const Contact = dynamic(() => import("@/sections/Contact"));

const ClientWrapper = () => {
  return (
    <div className="relative flex w-full flex-col items-center gap-6 md:gap-8 ">
      <Hero />
      <ToolsMarquee />
      <About />
      <Education />
      <Achievements />
      <ProjectOverview />
      <Contact />
      <Footer />
      <div className="hidden md:block fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50">
        <NavigationBar />
      </div>
      <div className="fixed left-4 md:left-6 bottom-4 md:bottom-6 z-50 w-28 h-28 md:w-40 md:h-40">
        <DotLottieReact
          src="/catPlaying.lottie"
          loop
          autoplay
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ClientWrapper;
