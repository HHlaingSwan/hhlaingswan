"use client";

import Image from "next/image";
import React from "react";
import { certificates } from "@/lib/certificates";

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(
    date,
  );

const Achievements = () => {
  if (!certificates.length) return null;

  return (
    <section id="achievements" className="py-20 md:py-24">
      <div className="container mx-auto px-4 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Certifications
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Achievements
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            Explore my journey through various courses, certifications, and
            learning milestones that have shaped my expertise.
          </p>
        </div>

        <div
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {certificates.map((certificate, index) => (
            <article
              key={certificate.id}
              className="w-[72vw] md:w-[36vw] lg:w-[30vw] shrink-0 snap-start rounded-xl border border-border/60 bg-card/85 shadow-md shadow-primary/5"
            >
              <div className="relative h-44 md:h-64 overflow-hidden rounded-t-xl">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  fill
                  className="object-cover brightness-105"
                  sizes="(max-width: 768px) 288px, 480px"
                  priority={index === 0}
                />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/70">
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
              <div className="px-4 md:px-5 py-4 space-y-3">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed min-h-12">
                  {certificate.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-border/50 px-2.5 md:px-3 py-1 text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground"
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
