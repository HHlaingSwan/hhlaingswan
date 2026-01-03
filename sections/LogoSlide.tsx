"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJava, FaNodeJs, FaGitAlt, FaDocker, FaAws } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMysql,
  SiReactquery,
  SiShadcnui,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiGithub,
  SiVercel,
} from "react-icons/si";

const LogoSlide = () => {
  const logos = [
    { icon: <SiJavascript size={44} />, name: "JavaScript", color: "#F7DF1E" },
    { icon: <SiTypescript size={44} />, name: "TypeScript", color: "#3178C6" },
    { icon: <FaReact size={44} />, name: "React", color: "#61DAFB" },
    { icon: <SiNextdotjs size={44} />, name: "Next.js", color: "#000000" },
    { icon: <FaNodeJs size={44} />, name: "Node.js", color: "#68A063" },
    { icon: <SiExpress size={44} />, name: "Express", color: "#000000" },
    { icon: <SiMongodb size={44} />, name: "MongoDB", color: "#47A248" },
    { icon: <SiPostgresql size={44} />, name: "PostgreSQL", color: "#336791" },
    { icon: <SiMysql size={44} />, name: "MySQL", color: "#4479A1" },
    { icon: <SiRedis size={44} />, name: "Redis", color: "#DC382D" },
    { icon: <FaJava size={44} />, name: "Java", color: "#007396" },
    { icon: <SiPrisma size={44} />, name: "Prisma", color: "#0C344B" },
    { icon: <SiTailwindcss size={44} />, name: "Tailwind", color: "#06B6D4" },
    { icon: <SiShadcnui size={44} />, name: "shadcn/ui", color: "#000000" },
    { icon: <SiReactquery size={44} />, name: "TanStack Query", color: "#FF4154" },
    { icon: <FaGitAlt size={44} />, name: "Git", color: "#F05032" },
    { icon: <SiGithub size={44} />, name: "GitHub", color: "#181717" },
    { icon: <FaDocker size={44} />, name: "Docker", color: "#2496ED" },
    { icon: <SiFirebase size={44} />, name: "Firebase", color: "#FFCA28" },
    { icon: <SiVercel size={44} />, name: "Vercel", color: "#000000" },
  ];

  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col gap-6">
        <div className="relative">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 px-4"
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`top-${index}`}
                className="flex flex-col items-center gap-3 w-28 shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:border-primary/50 transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    style={{ color: logo.color }}
                  >
                    {logo.icon}
                  </motion.div>
                </div>
                <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        </div>

        <div className="relative">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 px-4"
          >
            {duplicatedLogos.map((logo, index) => (
              <motion.div
                key={`bottom-${index}`}
                className="flex flex-col items-center gap-3 w-28 shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-card to-card/50 rounded-2xl border border-border/50 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:border-primary/50 transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: [0, 10, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    style={{ color: logo.color }}
                  >
                    {logo.icon}
                  </motion.div>
                </div>
                <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </div>
  );
};

export default LogoSlide;
