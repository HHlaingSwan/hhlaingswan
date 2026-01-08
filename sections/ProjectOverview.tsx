"use client";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/aurora-text";
import { useIsMobile } from "@/hooks/use-mobile";
import { content } from "@/lib/projects";
import type { Project } from "@/types";
import { ExternalLink, Github, Star } from "lucide-react";

const ProjectOverview = () => {
  const isMobile = useIsMobile();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  if (isMobile) {
    return (
      <section id="projects" className="py-20 px-4">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">
            <AuroraText>Project Highlights</AuroraText>
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground">
            A showcase of my recent work and capabilities, demonstrating my
            skills in creating modern web applications.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col gap-6"
        >
          {content.map((item: Project, index: number) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileTap={{ scale: 0.98 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-2xl opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-500" />

              <div className="relative bg-card rounded-2xl overflow-hidden border border-border/50">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted to-card">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                  >
                    {item.content}
                  </motion.div>
                  <div className="absolute top-3 right-3 z-20">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-primary/90 backdrop-blur-sm p-2 rounded-full text-white shadow-lg"
                    >
                      <ExternalLink size={16} />
                    </motion.button>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h2 className="text-xl font-bold line-clamp-2 flex-1">
                      {item.title}
                    </h2>
                    <div className="flex items-center gap-1 text-yellow-500 shrink-0">
                      <Star size={16} fill="currentColor" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {index % 2 === 0 ? (
                      <>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          React
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          Tailwind
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          MERN
                        </span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          Node.js
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {typeof item.description === "string"
                      ? item.description
                      : "Click to view details"}
                  </p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ x: 0 }}
                    className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    View Project
                    <ExternalLink size={14} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-2">
            Want to see more?
          </p>
          <a
            href="https://github.com/HHlaingSwan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-lg font-medium transition-colors"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </section>
    );
  }

  return (
    <div id="projects" className="p-4 md:p-10">
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
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default ProjectOverview;
