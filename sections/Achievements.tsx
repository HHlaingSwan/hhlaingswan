"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/aurora-text";
import { certificates } from "@/lib/certificates";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award } from "lucide-react";
import Image from "next/image";

export default function Achievements() {
  const isSingle = certificates.length === 1;

  return (
    <section
      id="achievements"
      className="py-24 px-4 relative overflow-hidden bg-background"
    >
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

      <div className="max-w-7xl mx-auto relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background to-transparent" />
        <div
          className={`flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-none ${
            isSingle ? "justify-center" : ""
          }`}
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`snap-center shrink-0 ${
                isSingle ? "w-full max-w-sm" : "w-[85%] sm:w-[60%] lg:w-[40%]"
              }`}
            >
              <div className="h-full w-full overflow-hidden rounded-lg border border-border/60 bg-card shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[16/9]">
                  <Image
                    width={1000}
                    height={1000}
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2 text-white">
                    <h3 className="font-semibold text-lg leading-tight">
                      {certificate.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-white/80">
                      <span className="inline-flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        {certificate.institution}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {certificate.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <Badge
                      variant="secondary"
                      className="text-[10px] uppercase font-bold tracking-wider opacity-80"
                    >
                      {certificate.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground text-center">
          Swipe to view more certificates
        </p>
      </div>
    </section>
  );
}
