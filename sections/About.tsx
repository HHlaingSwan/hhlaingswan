"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Terminal, Cpu, Layers } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";

const About = () => {
  const timeline = [
    {
      year: "2024 - 2026",
      title: "Junior Developer",
      company: "WeDay Social E commerce Platform",
      description:
        "Contributed to frontend and backend development of an e-commerce platform using Next.js and Express.",
    },
    {
      year: "2023 - 2024",
      title: "Web Development Student",
      company: "Self-Learning",
      description:
        "Mastered frontend technologies React and backend development (Node.js, databases).",
    },
  ];

  const expertise = [
    {
      icon: Code,
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: Database,
      title: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    { icon: Globe, title: "DevOps", items: ["Docker", "Git", "CI/CD", "AWS"] },
    {
      icon: Terminal,
      title: "Tools",
      items: ["VS Code", "Figma", "Postman", "Chrome DevTools"],
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
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
              <AuroraText>About Me</AuroraText>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I&apos;m a passionate full-stack developer from Myanmar with 2+
              years of experience building digital products. I love turning
              complex problems into simple, beautiful solutions.
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
                    <div className="mb-2">
                      <span className="text-sm text-primary font-medium">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.company}
                    </p>
                    <p className="text-muted-foreground">{item.description}</p>
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
                    className="p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all"
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
                          className="text-sm text-muted-foreground flex items-center gap-2"
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
                I specialize in building full-stack applications with a focus on
                user experience, performance, and scalability. From concept to
                deployment, I handle every aspect of the development process.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Design & UX",
                  desc: "Creating intuitive interfaces with modern design principles",
                },
                {
                  title: "Development",
                  desc: "Writing clean, maintainable code with best practices",
                },
                {
                  title: "Deployment",
                  desc: "Setting up scalable infrastructure and CI/CD pipelines",
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
