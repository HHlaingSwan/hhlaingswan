"use client";
import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/sections/Hero";
import { NavigationBar } from "./NavigationBar";
import About from "@/sections/About";

const Footer = dynamic(() => import("@/sections/Footer"));
const ProjectOverview = dynamic(() => import("@/sections/ProjectOverview"));
const ToolsMarquee = dynamic(() => import("@/sections/ToolsMarquee"));
const Education = dynamic(() => import("@/sections/Education"));
const Achievements = dynamic(() => import("@/sections/Achievements"));

const ClientWrapper = () => {
  return (
    <div className="relative flex flex-col justify-center items-center pb-28">
      <Hero />
      <ToolsMarquee />
      <About />
      <Education />
      <Achievements />
      <ProjectOverview />
      <Footer />
      <div className="fixed bottom-10 md:bottom-14  left-1/2 -translate-x-1/2">
        <NavigationBar />
      </div>
    </div>
  );
};

export default ClientWrapper;
