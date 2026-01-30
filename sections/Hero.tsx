"use client";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { AuroraText } from "@/components/ui/aurora-text";
import { Meteors } from "@/components/ui/meteors";
import { StatGrid } from "@/components/ui/stat-card";
import React from "react";
import Image from "next/image";
import { Code2, Briefcase, Calendar } from "lucide-react";

const stats = [
  {
    icon: <Calendar className="size-4 md:size-5 text-primary" />,
    value: "2+",
    label: "Years",
  },
  {
    icon: <Briefcase className="size-4 md:size-5 text-primary" />,
    value: "11+",
    label: "Projects",
  },
  {
    icon: <Code2 className="size-4 md:size-5 text-primary" />,
    value: "5+",
    label: "Tech",
  },
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
          <span className="font-bold text-indigo-500">Htet Hlaing Swan</span>.
        </p>

        <h1 className="text-2xl font-bold md:text-6xl mt-2">
          I&apos;m a{" "}
          <AuroraText>
            <TypingAnimation
              cursorStyle="underscore"
              words={[
                "DevOps Student",
                "Backend Engineer",
                "Frontend Architect",
                "Database Specialist",
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
            alt="Htet Hlaing Swan - Full-Stack Developer"
            width={500}
            height={500}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <StatGrid stats={stats} />
    </section>
  );
};

export default Hero;
