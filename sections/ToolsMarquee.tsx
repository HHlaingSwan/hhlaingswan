"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaReact, FaNodeJs, FaDocker, FaJava } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiExpo } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

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
    icon: <FaDocker size={34} />,
    name: "Docker",
    color: "#2496ED",
    bg: "rgba(36, 150, 237, 0.1)",
  },
  {
    icon: <FaJava size={34} />,
    name: "Java",
    color: "#007396",
    bg: "rgba(0, 115, 150, 0.1)",
  },
];

const ToolsMarquee = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const marquee = marqueeRef.current;
    if (!section || !marquee) return;

    const ctx = gsap.context(() => {
      const totalWidth = marquee.scrollWidth / 3;

      const tween = gsap.to(marquee, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });

      cardsRef.current.forEach((card) => {
        if (!card) return;
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -4,
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
            duration: 0.3,
            ease: "power2.out",
          });
          tween.timeScale(0.3);
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            duration: 0.3,
            ease: "power2.out",
          });
          tween.timeScale(1);
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <section
      ref={sectionRef}
      id="tools"
      className="py-10 bg-background w-full overflow-hidden"
    >
      <div className="relative">
        <div ref={marqueeRef} className="flex gap-4 w-max">
          {duplicatedTools.map((tool, index) => (
            <div
              key={`tool-${index}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="flex items-center gap-4 px-6 py-4 rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-sm whitespace-nowrap cursor-default"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsMarquee;
