"use client";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { AuroraText } from "@/components/ui/aurora-text";
import { Meteors } from "@/components/ui/meteors";
import React from "react";
import Image from "next/image";
import { Code2, Briefcase, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "3+", label: "Years" },
  { icon: Briefcase, value: "15+", label: "Projects" },
  { icon: Code2, value: "10+", label: "Tech" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg px-4 py-12 bg-gradient-to-b from-background via-secondary to-background dark:via-slate-950"
    >
      <div className="flex flex-col items-center text-center z-10">
        <Meteors number={30} className="stroke-accent" />

        <p className="text-sm md:text-lg text-muted-foreground">
          Hi, I&apos;m{" "}
          <span className="font-bold text-indigo-600">Htet Hlaing Swan</span>.
        </p>

        <h1 className="text-2xl font-bold md:text-6xl mt-2">
          I&apos;m a{" "}
          <AuroraText>
            <TypingAnimation
              cursorStyle="underscore"
              words={[
                "Backend Engineer",
                "Frontend Architect ",
                "Database Specialist",
                "Full-Stack Developer",
              ]}
              loop
            />
          </AuroraText>
        </h1>

        <p className="mt-3 max-w-lg mx-auto text-xs md:text-md text-muted-foreground">
          I transform complex ideas into seamless digital realities.
        </p>
      </div>

      <div className="flex w-full items-center justify-center mt-6 z-10">
        <div className="w-[180px] h-[180px] md:w-[400px] md:h-[400px]">
          <Image
            src="/Man-thinking.png"
            alt="Htet Hlaing Swan"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6 w-full max-w-md z-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-1 px-3 py-4 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <stat.icon className="size-4 md:size-5 text-primary" />
            </div>
            <p className="text-lg md:text-2xl font-bold">{stat.value}</p>
            <p className="text-[10px] md:text-xs text-muted-foreground">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
