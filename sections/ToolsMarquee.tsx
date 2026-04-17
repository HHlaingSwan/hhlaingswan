"use client";
import React, { useLayoutEffect, useRef, useCallback, useMemo } from "react";
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
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Memoize the duplicated tools array to prevent unnecessary re-renders
  const duplicatedTools = useMemo(() => [...tools, ...tools, ...tools], []);

  const handleCardInteraction = useCallback(
    (card: HTMLDivElement, isEntering: boolean) => {
      if (!tweenRef.current) return;

      gsap.to(card, {
        scale: isEntering ? 1.05 : 1,
        y: isEntering ? -4 : 0,
        boxShadow: isEntering
          ? "0 8px 30px rgba(0,0,0,0.12)"
          : "0 1px 3px rgba(0,0,0,0.06)",
        duration: 0.3,
        ease: "power2.out",
      });

      tweenRef.current.timeScale(isEntering ? 0.3 : 1);
    },
    [],
  );

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const marquee = marqueeRef.current;

    if (!section || !marquee) return;

    const ctx = gsap.context(() => {
      const totalWidth = marquee.scrollWidth / 3;

      tweenRef.current = gsap.to(marquee, {
        x: -totalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });

      cardsRef.current.forEach((card) => {
        if (!card) return;

        // Use mouseenter/mouseleave for better performance than mouseover/mouseout
        card.addEventListener("mouseenter", () =>
          handleCardInteraction(card, true),
        );
        card.addEventListener("mouseleave", () =>
          handleCardInteraction(card, false),
        );
      });
    }, section);

    return () => {
      ctx.revert();
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, [handleCardInteraction]);

  return (
    <section
      ref={sectionRef}
      id="tools"
      className="py-10 bg-background w-full overflow-hidden"
      aria-label="Technologies and tools showcase"
    >
      <div className="relative">
        <div ref={marqueeRef} className="flex gap-4 w-max" role="marquee">
          {duplicatedTools.map((tool, index) => (
            <div
              key={`tool-${index}`}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="flex items-center gap-4 px-6 py-4 rounded-xl border border-border/60 bg-card/80 backdrop-blur-sm shadow-sm whitespace-nowrap cursor-default"
              role="button"
              tabIndex={0}
              aria-label={`${tool.name} technology`}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: tool.bg }}
                aria-hidden="true"
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
