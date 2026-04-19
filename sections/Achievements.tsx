"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certificates } from "@/lib/certificates";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = cardsRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const cards = container.querySelectorAll("article");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
    }, container);

    return () => ctx.revert();
  }, []);

  if (!certificates.length) return null;

  return (
    <section id="achievements" className="py-20 md:py-24 bg-background">
      <div className="w-screen md:w-[85vw] mx-auto px-4 md:px-0">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Certifications
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4"> Achievements</h2>
          <p className="text-base text-muted-foreground">
            Explore my journey through various courses, certifications, and
            learning milestones that have shaped my expertise.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="rounded-sm overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="relative h-56  md:h-72">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  fill
                  className="object-fill brightness-105 "
                  sizes="(max-width: 768px) 100vw, 28vw"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
