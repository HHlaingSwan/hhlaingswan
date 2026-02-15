"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiExpo,
  SiPostgresql,
} from "react-icons/si";

const tools = [
  {
    icon: <SiTypescript size={34} />,
    name: "TypeScript",
    color: "#3178C6",
    bg: "rgba(49, 120, 198, 0.1)",
  },
  {
    icon: <FaReact size={34} />,
    name: "React",
    color: "#61DAFB",
    bg: "rgba(97, 218, 251, 0.1)",
  },
  {
    icon: <SiNextdotjs size={34} />,
    name: "Next.js",
    color: "currentColor",
    bg: "rgba(255, 255, 255, 0.1)",
  },
  {
    icon: <SiExpo size={34} />,
    name: "Expo",
    color: "currentColor",
    bg: "rgba(255, 255, 255, 0.1)",
  },
  {
    icon: <FaNodeJs size={34} />,
    name: "Node.js",
    color: "#68A063",
    bg: "rgba(104, 160, 99, 0.1)",
  },
  {
    icon: <SiMongodb size={34} />,
    name: "MongoDB",
    color: "#47A248",
    bg: "rgba(71, 162, 72, 0.1)",
  },
  {
    icon: <SiPostgresql size={34} />,
    name: "PostgreSQL",
    color: "#336791",
    bg: "rgba(51, 103, 145, 0.1)",
  },
  {
    icon: <FaDocker size={34} />,
    name: "Docker",
    color: "#2496ED",
    bg: "rgba(36, 150, 237, 0.1)",
  },
];

const ToolsMarquee = () => {
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <motion.section
      id="tools"
      className="py-10 bg-background w-full overflow-hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
                <span className="text-foreground" style={{ color: tool.color }}>
                  {tool.icon}
                </span>
              </div>
              <span className="text-base font-semibold text-foreground">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ToolsMarquee;
