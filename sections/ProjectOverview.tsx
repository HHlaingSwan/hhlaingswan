"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";
import { AuroraText } from "@/components/ui/aurora-text";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { ShineBorder } from "@/components/ui/shine-border";

import IntegrationAPI from "@/assets/images/IntegrationAPI.png";
import shareLoc from "@/assets/images/shareLoc.png";
import canViewImage from "@/assets/images/canViewImage.png";
import canPlayVd from "@/assets/images/canPlayVd.png";
import cmtImageHoverView from "@/assets/images/cmtImageHoverView.png";
import arcane from "@/assets/images/arcane.png";
import { content } from "@/lib/projects";

const ProjectOverview = () => {
  const isMobile = useIsMobile();

  return (
    <div className="p-4 md:p-10">
      <AuroraText>
        <div className="text-center">
          <h1 className="text-3xl font-bold md:text-5xl">Project Highlights</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-lg">
            A showcase of my recent work and capabilities, demonstrating my
            skills in creating modern web applications.
          </p>
        </div>
      </AuroraText>
      <div className="mt-8">
        {isMobile ? (
          <div className="flex flex-col gap-8">
            {content.map((item: any) => (
              <div key={item.title} className="relative rounded-lg">
                <ShineBorder
                  className="rounded-lg"
                  shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                />
                <div className="rounded-lg  dark:bg-neutral-900 bg-white">
                  <div className="overflow-hidden rounded-t-lg">
                    {item.content}
                  </div>
                  <div className="p-4">
                    <h2 className="text-2xl font-bold  dark:text-white text-gray-800">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-base  dark:text-gray-400 text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <StickyScroll content={content} />
        )}
      </div>
    </div>
  );
};

export default ProjectOverview;
