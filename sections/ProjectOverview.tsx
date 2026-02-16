"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/aurora-text";
import { content } from "@/lib/projects";
import { ExternalLink, Github as GithubIcon } from "lucide-react";

const ProjectOverview = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 md:py-24 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
          Selected Work
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          <AuroraText>Project Showcase</AuroraText>
        </h2>
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          My main projects with preview, stack, and direct links.
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        {content.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
          >
            <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
              <div className="relative h-56 md:h-80 lg:h-96 rounded-2xl border border-border/60 bg-muted/20 overflow-hidden shadow-sm">
                <div className="absolute left-4 top-4 z-20 rounded-full bg-black/55 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/90">
                  Project 0{index + 1}
                </div>
                {project.images?.[0] ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 92vw, (max-width: 1024px) 88vw, 960px"
                    priority={index === 0}
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
                    No image
                  </div>
                )}
              </div>
            </div>

            <div
              className={`rounded-2xl w-full h-full p-4 md:p-7 grid gap-3 md:gap-5 ${
                index % 2 === 0 ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <div className="space-y-2 ">
                <h3 className="text-lg md:text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base  text-muted-foreground leading-relaxed">
                  {project.impact ?? project.description}
                </p>
                <div className="flex flex-wrap  gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {project.url && project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                  </a>
                )}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/70 text-sm font-medium hover:bg-muted transition-colors"
                  >
                    <GithubIcon className="size-4" />
                    Source
                  </a>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectOverview;
