"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<(HTMLDivElement | null)[]>([]);

  const timeline = [
    {
      year: "2026-02 - 2026-03",
      title: "Project Leader (React & Node.js)",
      company: "One Month One Project Program",
      description:
        "Led a team of 4 to build a full-stack social web app in 4 weeks, using React, Node.js, and MongoDB. Oversaw project planning, development, and deployment, resulting in a successful launch and positive user feedback.",
    },
    {
      year: "2024 - 2026",
      title: "React Frontend Developer",
      company: "WeDay Social E commerce Platform",
      description:
        "Developed and maintained the frontend of a social e-commerce platform using React, TypeScript, and Tailwind CSS. Collaborated with designers and backend developers to implement new features, optimize performance, and ensure a seamless user experience.",
    },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
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

      timelineRef.current.forEach((item, i) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.15,
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
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="space-y-12 md:space-y-20">
          <div
            ref={headingRef}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3 opacity-0">
              Introduction
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 opacity-0">
              About Me
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed opacity-0">
              Java & Full-Stack Developer building fast, reliable apps with
              React, Node.js, and Java.
            </p>
          </div>

          <div className="divide-y divide-border">
            {timeline.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  timelineRef.current[index] = el;
                }}
                className="py-5 first:pt-0 opacity-0"
              >
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-10">
                  <div className="lg:w-2/6 shrink-0">
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="text-base text-muted-foreground mt-1">
                      {item.company}
                    </p>
                    <span className="text-sm text-muted-foreground">
                      {item.year}
                    </span>
                  </div>
                  <ul className="lg:w-4/6 space-y-2 text-base text-muted-foreground leading-7">
                    {item.description
                      .split(". ")
                      .filter(Boolean)
                      .map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                          <span>{point.replace(/\.$/, "")}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Let&apos;s work together on your next project
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
