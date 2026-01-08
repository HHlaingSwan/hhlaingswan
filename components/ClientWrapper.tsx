"use client";
import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/sections/Hero";
import { NavigationBar } from "./NavigationBar";
import About from "@/sections/About";
import {
  SectionSkeleton,
  FormSkeleton,
  TimelineSkeleton,
  CardSkeleton,
} from "./ui/skeleton";

const LogoSlide = dynamic(() => import("@/sections/LogoSlide"), {
  loading: () => <SectionSkeleton />,
});
const Footer = dynamic(() => import("@/sections/Footer"), {
  loading: () => <SectionSkeleton />,
});
const ProjectOverview = dynamic(() => import("@/sections/ProjectOverview"), {
  loading: () => <SectionSkeleton />,
});
const Education = dynamic(() => import("@/sections/Education"), {
  loading: () => <TimelineSkeleton />,
});
const Contact = dynamic(() => import("@/sections/Contact"), {
  loading: () => <FormSkeleton />,
});

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
