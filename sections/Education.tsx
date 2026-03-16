"use client";

import React, { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    semester: "CodeHub MM",
    title: "JavaScript Full Stack Mastery",
    topics: [
      "React | Next.js | TypeScript",
      "Node.js | Express.js",
      "MongoDB | PostgreSQL | Prisma",
      "Docker | Git | GitHub",
    ],
    institution: "CodeHub Myanmar",
  },
  {
    semester: "AWS | Simplilearn",
    title: "Fundamental of DevOps On AWS",
    topics: [
      "Introduction to DevOps",
      "Introduction to AWS",
      "Introduction to CI/CD",
      "Introduction to Docker",
    ],
    institution: "SimpliLearn | SkillUp",
  },
  {
    semester: "Semester 1",
    title: "Java Developer Certificate",
    topics: [
      "Logical Thinking and Problem Solving",
      "Relational Database Management System",
      "MongoDB",
      "Java 12",
    ],
    institution: "NIIT University (India)",
  },
  {
    semester: "Semester 2",
    title: "Honors Full-Stack Diploma",
    topics: [
      "Responsive Web (HTML, CSS, JavaScript)",
      "React",
      "React Native",
      "Stat e Management",
    ],
    institution: "NIIT University (India)",
  },
  {
    semester: "Semester 3",
    title: "Professional Full-Stack Diploma",
    topics: [
      "Spring Boot",
      "JUnit 5 (Java Testing)",
      "REST API Design",
      "SQL Performance Basics",
    ],
    institution: "NIIT University (India)",
  },
];

const Education = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const timeline = timelineRef.current;
    if (!container || !timeline) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        timeline,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.6,
          },
        },
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      id="education"
      className="py-20 md:py-24 bg-background"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 text-foreground max-w-3xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            My Education Path
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional Diploma Roadmap
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Four semesters of structured training and credentials from NIIT
            University (India).
          </p>
        </div>

        <div className="relative max-w-6xl w-full mx-auto" ref={containerRef}>
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/70 -translate-x-1/2" />
          <div
            ref={timelineRef}
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 via-indigo-500 to-fuchsia-500 origin-top -translate-x-1/2"
          />

          <div className="space-y-10">
            {educationData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={item.semester} className="relative">
                  <div className="absolute left-1/2  top-6 size-3 rounded-full bg-primary -translate-x-1/2 " />

                  <div className="grid md:grid-cols-2  gap-8 md:gap-16 items-start">
                    <motion.div
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className={`w-full  p-6 md:p-10 ${
                        isLeft
                          ? "md:col-start-1 md:pr-10"
                          : "md:col-start-2 md:pl-10"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-5 mb-4">
                        <span className="text-[14px] uppercase tracking-[0.3em] text-primary font-semibold">
                          {item.semester}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {item.institution}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-6 ">
                        {item.title}
                      </h3>

                      <ul className="space-y-2 text-base  text-muted-foreground">
                        {item.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
