"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { content } from "@/lib/projects";
import { ExternalLink, Github } from "lucide-react";

const ProjectOverview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
          Selected Work
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Projects Showcase
        </h2>
        <p className="text-base text-muted-foreground">
          A collection of digital experiences built with precision and modern
          technology.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {content.map((project) => (
          <motion.article
            key={project.title}
            variants={itemVariants}
            className="group"
          >
            {/* Image */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-video overflow-hidden rounded-xl border border-border/50 bg-muted/30 mb-4"
            >
              {project.images?.[0] ? (
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
                  No image
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </a>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex items-center gap-4 pt-2">
                {project.url && project.url !== "#" && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink className="size-4" />
                    Live
                  </a>
                )}
                <a
                  href={project.repoUrl || "https://github.com/HHlaingSwan"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="size-4" />
                  Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectOverview;
