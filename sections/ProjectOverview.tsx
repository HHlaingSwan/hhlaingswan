"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/aurora-text";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { content } from "@/lib/projects";
import type { Project } from "@/types";
import { ExternalLink, Github, Star } from "lucide-react";

const ProjectOverview = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  return (
    <section id="projects" className="py-20 px-4">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <AuroraText>Project Highlights</AuroraText>
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground">
          A showcase of my recent work and capabilities, demonstrating my skills
          in creating modern web applications.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-12"
      >
        {content.map((item: Project, index: number) => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            className={`group relative lg:py-16 py-8 flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-0 md:gap-18 items-center max-w-6xl mx-auto`}
          >
            <div className="relative  w-full lg:w-1/2">
              <div className="relative h-64 md:h-96 overflow-hidden rounded-2xl border border-border/20 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full"
                >
                  {item.content}
                </motion.div>
              </div>
            </div>

            <div className="relative  w-full lg:w-1/2 space-y-6 p-2 md:px-18 lg:p-8">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg md:text-2xl text-indigo-300 font-bold line-clamp-2 flex-1">
                  {item.title}
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {item.description}
              </p>

              <div className="flex gap-3">
                {item.details && (
                  <motion.button
                    whileHover={{ x: 5 }}
                    whileTap={{ x: 0 }}
                    onClick={() => setSelectedProject(item)}
                    className="inline-flex items-center text-sm lg:text-base gap-3  px-5 py-4  bg-primary/10 hover:bg-primary/20 text-primary font-semibold rounded-full border border-primary/20 transition-all"
                  >
                    View Details
                    <ExternalLink size={16} />
                  </motion.button>
                )}
                <motion.a
                  whileHover={{ x: 5 }}
                  whileTap={{ x: 0 }}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm lg:text-base gap-3 px-5 py-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold rounded-full border border-secondary/20 transition-all"
                >
                  Live Demo
                  <ExternalLink size={16} />
                </motion.a>
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
        <p className="text-sm text-muted-foreground mb-2">Want to see more?</p>
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

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className=" min-w-[70vw] max-h-[90vh] p-0 overflow-hidden flex flex-col">
          {/* Header with gradient background */}
          <div className="relative p-8  border-b border-border/20   flex-shrink-0">
            <DialogHeader className="pr-16">
              <DialogTitle className="text-3xl md:text-4xl font-bold    leading-tight text-left">
                {selectedProject?.title}
              </DialogTitle>
            </DialogHeader>
          </div>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto px-8 py-6 min-h-0">
            <div className="space-y-8 pb-4">{selectedProject?.details}</div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border/20 bg-gradient-to-t from-background/90 to-background flex-shrink-0">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Live Project</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedProject?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  Visit Live Site
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProjectOverview;
