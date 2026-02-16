"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Cpu, Layers } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2024 - 2026",
      title: "React Frontend Developer",
      company: "WeDay Social E commerce Platform",
      description:
        "Shipped storefront features in Next.js and supported Express API integration for a social e-commerce product.",
    },
    {
      year: "2023 - 2024",
      title: "Web Development Student",
      company: "Self-Learning | Education",
      description:
        "Completed a self-guided track in React, Node.js, and databases while delivering practical projects.",
    },
  ];

  const expertise = [
    {
      icon: Code,
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      items: ["React Native", "Expo", "React Navigation"],
    },
    {
      icon: Database,
      title: "Backend",
      items: ["Node.js", "Express", "MongoDB", "Java (Learning)"],
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Based in Myanmar, I build full-stack products with React and
              Node.js, with strong focus on performance, clean architecture,
              and practical delivery.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Cpu className="size-6 text-primary" />
                My Journey
              </h3>
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="relative pl-12 pb-8"
                  >
                    <div className="absolute left-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-background rounded-full" />
                    </div>
                    <article className="rounded-xl border border-border/60 bg-card/60 p-4 md:p-5">
                      <p className="text-xs md:text-sm text-primary font-medium mb-1">
                        {item.year}
                      </p>
                      <h4 className="text-base md:text-lg font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground mb-3">
                        {item.company}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </article>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Layers className="size-6 text-primary" />
                Expertise
              </h3>
              <div className="grid grid-cols-2 gap-6">
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

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Design & UX",
                  desc: "Designing interfaces that are simple, clear, and user-focused",
                },
                {
                  title: "Development",
                  desc: "Building maintainable codebases with practical engineering standards",
                },
                {
                  title: "Deployment",
                  desc: "Deploying scalable services with CI/CD and production discipline",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-6 rounded-xl bg-secondary/30 border border-border/50"
                >
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
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
