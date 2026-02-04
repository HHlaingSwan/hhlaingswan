"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="mb-4 break-inside-avoid"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="group relative rounded-xl overflow-hidden cursor-pointer bg-card shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          {project.images?.[0] ? (
            <Image
              src={project.images[0]}
              alt={project.title}
              width={400}
              height={280}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              unoptimized
            />
          ) : (
            <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">No Image</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300" />

          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="p-2 rounded-full bg-white/20 backdrop-blur-md">
              <ZoomIn className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-white font-bold text-base md:text-lg mb-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {project.title}
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Lightbox = ({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 p-2 md:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[85vh] bg-card rounded-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 md:h-64 flex-shrink-0">
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
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <h2 className="text-xl md:text-2xl font-bold text-white">
              <AuroraText>{project.title}</AuroraText>
            </h2>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
          <div className="max-w-2xl mx-auto">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              {project.details}
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 border-t border-border/50 bg-gradient-to-b from-card/50 to-card flex-shrink-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground order-2 sm:order-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Live Project</span>
            </div>

            <div className="flex items-center gap-2 md:gap-3 order-1 sm:order-2">
              {project.url && project.url !== "#" && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 md:gap-2 px-4 md:px-5 py-2.5 md:py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground text-xs md:text-sm font-semibold rounded-full transition-all duration-200 hover:scale-105"
                >
                  <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">Visit</span>
                </a>
              )}
              <a
                href="https://github.com/HHlaingSwan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 md:gap-2 px-4 md:px-5 py-2.5 md:py-3 bg-secondary hover:bg-secondary/80 rounded-lg font-medium text-xs md:text-sm transition-colors"
              >
                <Github className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span className="hidden sm:inline">Source</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ProjectMasonry({ projects }: ProjectMasonryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex !== null && selectedIndex < projects.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  }, [selectedIndex, projects.length]);

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
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 md:gap-5 space-y-3 md:space-y-5 px-2 md:px-0">
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
          <Lightbox
            project={selectedProject}
            onClose={handleClose}
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={selectedIndex > 0}
            hasNext={selectedIndex < projects.length - 1}
          />
        )}
      </AnimatePresence>
    </>
  );
}
