"use client";
import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Code, GraduationCap, University } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    icon: <University />,
    title: "My University",
    subtitle: "Myanmar Technopreneur Academy - MTA",
    date: "2024 - 2027",
    description:
      "During my studies at Myanmar Technopreneur Academy (MTA), I built a solid foundation in computer science, mastering core principles, algorithms, and software development. I actively participated in coding competitions and hackathons, applying theoretical concepts to real-world challenges and enhancing my problem-solving abilities.",
  },
  {
    icon: <Code />,
    title: "Relevant Coursework",
    subtitle: "Technical Coursework",
    courses: [
      "Full-Stack Web Development (MERN)",
      "Object-Oriented Programming (Java)",
      "Backend Development with Node.js & Express",
      "Database Management Systems (SQL & NoSQL)",
      "Mobile App Development (React Native)",
      "Data Structures & Algorithms",
    ],
  },
  {
    icon: <GraduationCap />,
    title: "Key Achievements",
    achievements: [
      "Developed full-stack web applications, enhancing skills in front-end and back-end development.",
      "Gained proficiency in Java for server-side development and object-oriented programming.",
      "Acquired expertise in both SQL and NoSQL databases, including MongoDB and MySQL.",
      "Completed coursework in advanced web technologies and software architecture.",
      "Mastered version control with Git and collaborated on various projects.",
      "Continuously learning and expanding my skill set in cloud technologies and DevOps.",
    ],
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
      const cards = gsap.utils.toArray<HTMLElement>("[data-education-card]");
      const dots = gsap.utils.toArray<HTMLElement>("[data-timeline-dot]");

      // Create a single timeline for all animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 0.5,
        },
      });

      // Animate the main timeline bar
      tl.from(timeline, { scaleY: 0, duration: 3 }); // Give it a duration so it animates over the scroll

      // Animate the education cards with a stagger
      tl.from(
        cards,
        {
          opacity: 0,
          y: 50,
          stagger: 0.2,
        },
        "<0.2",
      ); // Start 0.2s after the timeline animation starts

      // Animate the timeline dots with a stagger
      tl.from(
        dots,
        {
          scale: 0,
          stagger: 0.2,
        },
        "<", // Start at the same time as the card animation
      ); // Start 0.2s after the timeline animation starts
    }, container);

    return () => ctx.revert();
  }, []); // Dependency array can be empty now

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
        <div className="text-center mb-14 md:mb-18 text-foreground max-w-3xl mx-auto">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
            Learning Path
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <AuroraText>About My Education</AuroraText>
          </h2>

          <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mx-auto">
            Explore my academic background and the skills I&apos;ve gained
            throughout my educational journey at Myanmar Technopreneur Academy.
          </p>
        </div>

        <div
          className="max-w-3xl mx-auto relative"
          ref={containerRef}
        >
          {/* Main timeline line that grows with scroll using GSAP */}
          <div
            ref={timelineRef}
            className="absolute left-[11px] md:left-3 top-4 bottom-0 w-px bg-border origin-top"
          ></div>

          {educationData.map((item, index) => (
            <div key={index} className="mb-8 md:mb-10 pl-10 md:pl-14 relative">
              {/* Timeline Dot - Outer circle is animated by GSAP */}
              <div
                data-timeline-dot
                className="absolute left-0 md:left-0 top-6 w-6 h-6 rounded-full border border-primary/50 flex items-center justify-center bg-background"
              >
                {/* Inner dot with a subtle pulse animation */}
                <div className="w-2.5 h-2.5 rounded-full bg-primary/90 animate-pulse"></div>
              </div>

              {/* Content Card */}
              <div
                data-education-card
                className="bg-card/70 p-5 md:p-6 border border-border/60 rounded-xl backdrop-blur-sm shadow-sm"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 gap-3">
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-lg flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-card-foreground">
                    {item.title}
                  </h3>
                </div>

                {item.subtitle && (
                  <div className="mb-4">
                    <h4 className="text-sm md:text-base font-semibold text-primary">
                      {item.subtitle}
                    </h4>
                    {item.date && (
                      <div className="flex items-center text-muted-foreground mt-1 text-sm">
                        <Calendar className="mr-2 size-4" />
                        <span>{item.date}</span>
                      </div>
                    )}
                  </div>
                )}

                {item.description && (
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.courses && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">
                    {item.courses.map((course, i) => (
                      <li
                        key={i}
                        className="bg-muted/50 border border-border/50 p-3 rounded-lg text-sm text-foreground/90"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                )}

                {item.achievements && (
                  <ul className="text-muted-foreground text-sm md:text-base space-y-2 mt-4">
                    {item.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 flex-shrink-0" />
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
