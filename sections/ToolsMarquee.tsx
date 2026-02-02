"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiTypescript, SiXcode, SiExpo, SiPostgresql } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const tools = [
  { icon: <TbBrandVscode size={34} />, name: "VS Code", color: "#007ACC", bg: "rgba(0, 122, 204, 0.1)" },
  { icon: <SiXcode size={34} />, name: "Xcode", color: "#1575F9", bg: "rgba(21, 117, 249, 0.1)" },
  { icon: <SiTypescript size={34} />, name: "TypeScript", color: "#3178C6", bg: "rgba(49, 120, 198, 0.1)" },
  { icon: <FaReact size={34} />, name: "React", color: "#61DAFB", bg: "rgba(97, 218, 251, 0.1)" },
  { icon: <SiNextdotjs size={34} />, name: "Next.js", color: "#FFFFFF", bg: "rgba(255, 255, 255, 0.1)" },
  { icon: <SiExpo size={34} />, name: "Expo", color: "#FFFFFF", bg: "rgba(255, 255, 255, 0.1)" },
  { icon: <FaNodeJs size={34} />, name: "Node.js", color: "#68A063", bg: "rgba(104, 160, 99, 0.1)" },
  { icon: <SiMongodb size={34} />, name: "MongoDB", color: "#47A248", bg: "rgba(71, 162, 72, 0.1)" },
  { icon: <SiPostgresql size={34} />, name: "PostgreSQL", color: "#336791", bg: "rgba(51, 103, 145, 0.1)" },
  { icon: <SiTailwindcss size={34} />, name: "Tailwind", color: "#06B6D4", bg: "rgba(6, 182, 212, 0.1)" },
  { icon: <FaGitAlt size={34} />, name: "Git", color: "#F05032", bg: "rgba(240, 80, 50, 0.1)" },
  { icon: <FaDocker size={34} />, name: "Docker", color: "#2496ED", bg: "rgba(36, 150, 237, 0.1)" },
];

const ToolsMarquee = () => {
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <section id="tools" className="py-10 bg-background w-full overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-4 w-max"
        >
          {duplicatedTools.map((tool, index) => (
            <motion.div
              key={`tool-${index}`}
              className="flex items-center gap-4 px-6 py-4 rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: tool.bg }}
              >
                <span style={{ color: tool.color }}>{tool.icon}</span>
              </div>
              <span className="text-base font-semibold text-foreground">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsMarquee;
