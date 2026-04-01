"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/lib/projects";
import { ExternalLink, Github as GithubIcon } from "lucide-react";

const ProjectOverview = () => {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3"
        >
          Selected Work
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Project Showcase
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm md:text-lg text-muted-foreground leading-relaxed"
        >
          A collection of digital experiences built with precision and modern
          technology.
        </motion.p>
      </div>

      <div className="flex flex-col gap-20 md:gap-32 w-full">
        {content.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-16 items-center`}
            >
              {/* Image Container */}
              <div className="w-full md:w-3/5 group">
                <div className="relative aspect-4/3 md:aspect-video overflow-hidden rounded-2xl border border-border/50 bg-muted/30 shadow-2xl">
                  {project.images?.[0] ? (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 800px"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
                      No image
                    </div>
                  )}
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              {/* Content Container */}
              <div className="w-full md:w-2/5 flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                  <div className="h-1 w-12 bg-primary rounded-full" />
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {project.impact && (
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-xs md:text-sm font-medium text-primary/80">
                      Key Impact:
                    </p>
                    <p className="text-sm">{project.impact}</p>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] md:text-[11px] px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {project.url && project.url !== "#" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20"
                    >
                      <ExternalLink className="size-4" />
                      Live Preview
                    </a>
                  )}
                  <a
                    href={project.repoUrl || "https://github.com/HHlaingSwan"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background text-sm font-semibold hover:bg-muted transition-all hover:-translate-y-0.5"
                  >
                    <GithubIcon className="size-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectOverview;
