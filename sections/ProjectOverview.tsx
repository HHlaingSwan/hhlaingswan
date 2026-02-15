"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/aurora-text";
import { content } from "@/lib/projects";
import { ExternalLink, Github } from "lucide-react";

const ProjectOverview = () => {
  const projects = [
    ...content.filter((project) => project.title === "E-Commerce Platform"),
    ...content.filter((project) => project.title !== "E-Commerce Platform"),
  ];

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

      <div className="space-y-6 md:space-y-7">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="rounded-2xl border border-border/60 bg-card/80 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-60 md:h-80 lg:h-96 bg-muted/20">
              <div className="absolute left-4 top-4 z-20 rounded-full bg-black/55 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/90">
                Project 0{index + 1}
              </div>
              {project.images?.[0] ? (
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                  priority={index === 0}
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
                  No image
                </div>
              )}
            </div>

            <div className="p-5 md:p-7 grid gap-4 md:gap-6 lg:grid-cols-[1.2fr_1fr_auto] lg:items-end">
              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold">{project.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {project.impact ?? project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border border-border/60 bg-secondary/60 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
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
                <a
                  href="https://github.com/HHlaingSwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/70 text-sm font-medium hover:bg-muted transition-colors"
                >
                  <Github className="size-4" />
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectOverview;
