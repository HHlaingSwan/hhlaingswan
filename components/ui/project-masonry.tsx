"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ZoomIn } from "lucide-react";
import type { Project } from "@/types";
import { AuroraText } from "@/components/ui/aurora-text";

interface ProjectMasonryProps {
  projects: Project[];
}

const MasonryItem = ({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="mb-4  break-inside-avoid"
      onClick={onClick}
    >
      <div className="group relative rounded-xl overflow-hidden cursor-pointer bg-card shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          {project.images?.[0] ? (
            <Image
              src={project.images[0]}
              alt={project.title}
              width={400}
              height={260}
              className="w-full h-44 sm:h-48 md:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          ) : (
            <div className="w-full h-44 sm:h-48 md:h-52 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">No Image</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 md:group-hover:opacity-95 transition-opacity duration-300" />

          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-3 right-3 opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
            <div className="p-2 rounded-full bg-white/20 backdrop-blur-md">
              <ZoomIn className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 hidden md:block">
            <h3 className="text-white font-bold text-base md:text-lg mb-1 opacity-0 md:group-hover:opacity-100 transform translate-y-2 md:group-hover:translate-y-0 transition-all duration-300">
              {project.title}
            </h3>
            {project.impact && (
              <p className="text-xs md:text-sm text-white/80 opacity-0 md:group-hover:opacity-100 transform translate-y-2 md:group-hover:translate-y-0 transition-all duration-300 line-clamp-2">
                {project.impact}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-3 md:hidden space-y-1">
        <h3 className="font-semibold text-sm">{project.title}</h3>
        {project.impact && (
          <p className="text-xs text-muted-foreground line-clamp-2">
            {project.impact}
          </p>
        )}
      </div>

      {project.tags && project.tags.length > 0 && (
        <div className="mt-2 md:mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-1 rounded-full bg-secondary/60 text-muted-foreground border border-border/60"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const SidePanel = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 26, stiffness: 260 }}
        className="fixed right-0 top-0 z-50 h-full w-full sm:max-w-xl bg-card border-l border-border/60 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="relative h-64 sm:h-72 md:h-80">
            {project.images?.[0] && (
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
                unoptimized
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h2 className="text-xl font-bold text-white">
                <AuroraText>{project.title}</AuroraText>
              </h2>
            </div>

            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="p-4 md:p-6">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              {project.details}
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 border-t border-border/50 bg-gradient-to-b from-card/50 to-card flex-shrink-0">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Live Project</span>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              {project.url && project.url !== "#" && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground text-xs md:text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Visit</span>
                </a>
              )}
              <a
                href="https://github.com/HHlaingSwan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary hover:bg-secondary/80 rounded-lg font-medium text-xs md:text-sm transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default function ProjectMasonry({ projects }: ProjectMasonryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedProject =
    selectedIndex !== null ? projects[selectedIndex] : null;

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-5 space-y-4  md:space-y-8 px-2 md:px-0">
        {projects.map((project, index) => (
          <MasonryItem
            key={index}
            project={project}
            index={index}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && selectedIndex !== null && (
          <SidePanel project={selectedProject} onClose={handleClose} />
        )}
      </AnimatePresence>
    </>
  );
}
