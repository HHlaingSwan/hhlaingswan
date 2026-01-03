"use client";
import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/sections/Hero";
import { NavigationBar } from "./NavigationBar";
import About from "@/sections/About";

// Lazy-load all sections that are "below the fold"
const LogoSlide = dynamic(() => import("@/sections/LogoSlide"));
const Footer = dynamic(() => import("@/sections/Footer"));
const ProjectOverview = dynamic(() => import("@/sections/ProjectOverview"));
const Education = dynamic(() => import("@/sections/Education"));
const Contact = dynamic(() => import("@/sections/Contact"));

const ClientWrapper = () => {
  return (
    <div className="relative flex flex-col justify-center items-center pb-32">
      <Hero />

      <About />
      <Education />
      <ProjectOverview />
      <Contact />
      <Footer />
      <div className="fixed bottom-10 md:bottom-14  left-1/2 -translate-x-1/2">
        <NavigationBar />
      </div>
    </div>
  );
};

export default ClientWrapper;
