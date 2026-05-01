"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Briefcase, Calendar, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  const timeline = [
    {
      year: "2024 - 2026",
      title: "Frontend Engineer (React/TypeScript)",
      company: "WeDay Social E commerce Platform",
      location: "Yangon, Myanmar",
    },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Scale up animation to complement Hero scale-down morph
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          { scale: 0.8, opacity: 0, filter: "blur(10px)" },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: section,
              start: "top center",
              end: "center center",
              scrub: 0.5,
            },
          },
        );
      }

      gsap.fromTo(
        headingRef.current?.children ?? [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        },
      );

      // Stagger job card reveals
      timelineRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-16 md:py-28 z-10">
      <div
        ref={contentRef}
        className="container mx-auto px-4 md:px-8 max-w-6xl"
      >
        <div className="space-y-12 md:space-y-20">
          <div ref={headingRef} className="text-center max-w-5xl   mx-auto">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Introduction
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4"> About Me</h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed opacity-0">
              Full-Stack Engineer building fast, reliable apps with React,
              Next.js, and Node.js. I care deeply about performance and failure
              cases—clear loading states, graceful errors, careful validation,
              and predictable APIs. I like shipping small improvements,
              measuring what matters, and fixing root causes so the product
              feels smooth for users and stable for the team.
            </p>
          </div>

          {/* Side-by-Side List */}
          <div className="max-w-3xl  mx-auto space-y-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  timelineRef.current[index] = el;
                }}
                className="flex flex-col  md:flex-row gap-4 md:gap-8 opacity-0 pb-6 border-b border-border last:border-0"
              >
                {/* Company (Left) */}
                <div className="md:w-1/2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary shrink-0" />
                  <p className="font-semibold text-base">{item.company}</p>
                </div>

                {/* Details (Right) */}
                <div className="md:w-1/2 space-y-2">
                  <div className="flex items-center  gap-2">
                    <Briefcase className="w-4 h-4 text-muted-foreground shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex items-center  gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
                    <p className="text-xs text-muted-foreground">{item.year}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
                    <p className="text-xs text-muted-foreground">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
