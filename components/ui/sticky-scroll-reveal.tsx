"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const backgroundGradients = [
  "linear-gradient(to bottom right, #f0f4f8, #d9e2ec)",
  "linear-gradient(to bottom right, #fdf4f4, #f8e8e8)",
  "linear-gradient(to bottom right, #f0faf5, #e6f5ed)",
  "linear-gradient(to bottom right, #f9f4ff, #f2eaff)",
  "linear-gradient(to bottom right, #fffaf0, #fff0db)",
];

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: React.ReactNode;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const cardLength = content.length;

  const [backgroundGradient, setBackgroundGradient] = React.useState(
    backgroundGradients[0]
  );

  React.useEffect(() => {
    setBackgroundGradient(
      backgroundGradients[activeCard % backgroundGradients.length]
    );
  }, [activeCard]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="relative flex justify-center space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-lg">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-40">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-foreground"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-secondary-foreground/60"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-1/2 -translate-y-1/2 hidden h-96 w-[30rem] overflow-hidden rounded-md  lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
