"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/aurora-text";
import { certificates } from "@/lib/certificates";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, ExternalLink, Award } from "lucide-react";
import Image from "next/image";

// --- Spotlight Card Component ---
const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(120, 119, 198, 0.2)",
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {/* Content wrapper to ensure z-index above spotlight */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-4 relative overflow-hidden bg-background"
    >
      {/* Subtle Background decoration - optional, keeping it very light */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="mb-16 text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <AuroraText>Achievements</AuroraText>
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground text-lg">
            A showcase of my professional milestones and certifications.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <Dialog key={certificate.id}>
              <DialogTrigger asChild>
                <div className="h-full cursor-pointer">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="h-full"
                  >
                    <SpotlightCard className="h-full group flex flex-col">
                      {/* Image Area */}
                      <div className="relative aspect-video overflow-hidden border-b border-border/50">
                        <Image
                          width={1000}
                          height={1000}
                          src={certificate.image}
                          alt={certificate.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                        {/* Hover Overlay Icon */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg">
                            <ExternalLink className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-5 flex flex-col flex-grow space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <Badge
                            variant="secondary"
                            className="text-[10px] uppercase font-bold tracking-wider opacity-80"
                          >
                            {certificate.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {certificate.date}
                          </span>
                        </div>

                        <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                          {certificate.title}
                        </h3>

                        <div className="mt-auto pt-2 flex items-center gap-2 text-sm text-muted-foreground">
                          <Award className="w-4 h-4" />
                          <span className="truncate">
                            {certificate.institution}
                          </span>
                        </div>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                </div>
              </DialogTrigger>

              <DialogContent className="sm:max-w-3xl overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-primary">
                    {certificate.title}
                  </DialogTitle>
                  <DialogDescription className="text-base flex items-center gap-2 mt-2">
                    <span className="font-medium text-foreground">
                      {certificate.institution}
                    </span>
                    <span>•</span>
                    <span>{certificate.date}</span>
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6 space-y-8">
                  <div className="relative w-full rounded-xl overflow-hidden border shadow-sm bg-muted/50">
                    <Image
                      width={1000}
                      height={1000}
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                        Description
                      </h4>
                      <p className="leading-relaxed text-foreground/90">
                        {certificate.description}
                      </p>
                    </div>

                    {certificate.skills && certificate.skills.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                          Skills Acquired
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {certificate.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="px-3 py-1"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <DialogFooter className="mt-8 pt-6 border-t flex gap-4 sm:justify-between">
                  <div className="flex gap-2">
                    {certificate.pdf && (
                      <Button asChild>
                        <a
                          href={certificate.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          View Certificate PDF
                        </a>
                      </Button>
                    )}
                  </div>
                  <DialogTrigger asChild>
                    <Button variant="outline">Close</Button>
                  </DialogTrigger>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
