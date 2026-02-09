"use client";

import Image from "next/image";
import React from "react";
import { AuroraText } from "@/components/ui/aurora-text";
import { certificates } from "@/lib/certificates";

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(
    date,
  );

const Achievements = () => {
  if (!certificates.length) return null;

  return (
    <section id="achievements" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 space-y-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <AuroraText>Achievement</AuroraText>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            Explore my journey through various courses, certifications, and
            learning milestones that have shaped my expertise.
          </p>
        </div>

        <div className="flex gap-4 md:gap-6   overflow-x-auto overflow-hidden p-4 md:p-0 md:w-80vw  w-screen">
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="w-72 md:w-120 shrink-0 rounded-md  border border-border/60 bg-card/80 shadow-lg shadow-primary/10"
            >
              <div className="relative h-44 md:h-76 overflow-hidden rounded-t-lg">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  fill
                  className="object-cover brightness-105"
                  priority
                />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] md:tracking-[0.3em] text-white/70">
                    {certificate.institution}
                  </p>
                  <h3 className="text-base md:text-lg font-semibold">
                    {certificate.title}
                  </h3>
                  <p className="text-[10px] md:text-[11px] text-white/80">
                    {formatDate(new Date(certificate.date))}
                  </p>
                </div>
              </div>
              <div className="px-4 md:px-5 py-3 md:py-4 space-y-3">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {certificate.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-border/50 px-2.5 md:px-3 py-1 text-[8px] md:text-[11px] font-semibold uppercase tracking-[0.18em] md:tracking-[0.2em] text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
