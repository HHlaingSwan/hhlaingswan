"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/aurora-text";
import { content } from "@/lib/projects";
import { Github } from "lucide-react";
import ProjectMasonry from "@/components/ui/project-masonry";

const ProjectOverview = () => {
  return (
    <section id="projects" className="py-20 px-4 max-w-8xl mx-auto ">
      <div className="mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          <AuroraText>Project Highlights</AuroraText>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground"
        >
          A showcase of my recent work and capabilities, demonstrating my skills
          in creating modern web applications.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className=" md:mt-20 mt-10"
      >
        <ProjectMasonry projects={content} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
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
    </section>
  );
};

export default ProjectOverview;
