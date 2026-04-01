"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  AnimatedSpan,
  TypingAnimation,
} from "@/components/ui/terminal";
import { Code, Database, Globe, Monitor, Cpu, Layers } from "lucide-react";

const About = () => {
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

  const expertise = [
    {
      icon: Code,
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: Monitor,
      title: "Desktop App",
      items: ["Java Swing", "JavaFX", "Scene Builder", "JDBC"],
    },
    {
      icon: Database,
      title: "Backend",
      items: ["Node.js", "Express", "Java", "MongoDB"],
    },
    { icon: Globe, title: "DevOps", items: ["Docker", "Git", "CI/CD", "AWS"] },
  ];

  return (
    <motion.section
      id="about"
      className="py-20 md:py-28 bg-background"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Based in Myanmar, I build full-stack products with React and
              Node.js, with strong focus on performance, clean architecture, and
              practical delivery.
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Layers className="size-6 text-primary" />
                Expertise
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {expertise.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="p-5 md:p-6 rounded-xl border border-border/60 bg-card/50 hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <category.icon className="size-5 text-primary" />
                      </div>
                      <h4 className="font-semibold">{category.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-center gap-2 leading-relaxed"
                        >
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl  font-bold flex items-center gap-3">
                <Cpu className="size-6 text-primary" />
                My Journey
              </h3>
              <div className="divide-y divide-border">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="py-5 first:pt-0"
                  >
                    <div className="flex flex-col md:flex-row gap-3 md:gap-8">
                      <div className="md:w-2/6 shrink-0">
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <p className="text-base text-muted-foreground mt-1">
                          {item.company}
                        </p>
                        <span className="text-sm text-muted-foreground">
                          {item.year}
                        </span>
                      </div>
                      <p className="md:w-4/6 text-base text-muted-foreground leading-7">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center space-y-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                I build end-to-end web applications from idea to deployment,
                balancing user experience, backend reliability, and long-term
                maintainability.
              </p>
            </div>

            <div className="flex justify-center  w-full">
              <Terminal className="max-w-2xl md:max-w-3xl w-full">
                <TypingAnimation>&gt; design --ux</TypingAnimation>
                <AnimatedSpan className="text-green-500 mb-6">
                  ✔ Designing interfaces that are simple, clear, and
                  user-focused
                </AnimatedSpan>

                <TypingAnimation>&gt; develop --full-stack</TypingAnimation>
                <AnimatedSpan className="text-blue-500 mb-6">
                  ✔ Building maintainable codebases with practical engineering
                  standards
                </AnimatedSpan>

                <TypingAnimation>&gt; deploy --production</TypingAnimation>
                <AnimatedSpan className="text-purple-500 mb-6">
                  ✔ Deploying scalable services with CI/CD and production
                  discipline
                </AnimatedSpan>

                <TypingAnimation className="text-muted-foreground">
                  &gt; status: Ready for next challenge...
                </TypingAnimation>
              </Terminal>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">
              Let&apos;s work together on your next project
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
