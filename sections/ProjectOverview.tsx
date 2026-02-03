"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/aurora-text";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { content } from "@/lib/projects";
import type { Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image"; // Keep this import

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
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {content.map((item: Project, index: number) => (
          <motion.div
            key={item.title}
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col bg-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all"
          >
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="h-full w-full"
              >
                {item.content}
              </motion.div>
            </div>

            <div className="relative p-5 flex flex-col flex-1">
              <h2 className="text-lg font-bold text-indigo-500 mb-2 line-clamp-1">
                {item.title}
              </h2>

              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                {item.description}
              </p>

              <div className="flex gap-2 mt-auto">
                {item.details && (
                  <motion.button
                    whileHover={{ x: 3 }}
                    whileTap={{ x: 0 }}
                    onClick={() => setSelectedProject(item)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-semibold rounded-lg border border-primary/20 transition-all"
                  >
                    Details
                    <ExternalLink size={14} />
                  </motion.button>
                )}
                <motion.a
                  whileHover={{ x: 3 }}
                  whileTap={{ x: 0 }}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm font-semibold rounded-lg border border-secondary/20 transition-all"
                >
                  Demo
                  <ExternalLink size={14} />
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
          <div className="relative p-6  border-b border-border/20   flex-shrink-0">
            <DialogHeader className="pr-16">
              <DialogTitle className="text-xl md:text-3xl font-bold    leading-tight text-left">
                <AuroraText>{selectedProject?.title}</AuroraText>
              </DialogTitle>
            </DialogHeader>
          </div>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto px-8 py-6  min-h-0">
            {selectedProject?.images && selectedProject.images.length > 0 && (
              <div className="mb-6 rounded-lg overflow-hidden border border-border/20 shadow-lg">
                <Image
                  src={selectedProject.images[0]}
                  alt={`${selectedProject.title} demo`}
                  width={1200}
                  height={600}
                  layout="responsive"
                  className="object-contain"
                />
              </div>
            )}
            <div className="space-y-8 p-3">{selectedProject?.details}</div>
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
