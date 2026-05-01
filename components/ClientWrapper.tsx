"use client";
import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/sections/Hero";
import { NavigationBar } from "./NavigationBar";
import { MobileBottomSheet } from "./MobileBottomSheet";
import About from "@/sections/About";

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
      <About />
      <ToolsMarquee />
      <Education />
      <Achievements />
      <ProjectOverview />
      <Contact />
      <Footer />
      {/* Desktop Navigation */}
      <div className="hidden md:block fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50">
        <NavigationBar />
      </div>

      {/* Mobile Navigation */}
      <MobileBottomSheet />
    </div>
  );
};

export default ClientWrapper;
