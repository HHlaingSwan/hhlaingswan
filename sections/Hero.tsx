"use client";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { AuroraText } from "@/components/ui/aurora-text";
import { Meteors } from "@/components/ui/meteors";
import React from "react";
import Image from "next/image";
import { Code2, Briefcase, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "3+", label: "Years Experience" },
  { icon: Briefcase, value: "15+", label: "Projects Completed" },
  { icon: Code2, value: "10+", label: "Technologies" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg px-4 bg-gradient-to-b from-background via-secondary to-background dark:via-slate-950"
    >
      <div className="flex flex-col items-center text-center">
        <Meteors number={50} className="stroke-accent" />

        <p className=" md:text-lg text-md text-muted-foreground">
          Hi, I&apos;m{" "}
          <span className="font-bold text-blue-600">Htet Hlaing Swan</span>.
          Welcome to my playground.
        </p>

        <h1 className="text-3xl font-bold md:text-6xl">
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

        <p className="mt-4 max-w-2xl md:text-md text-sm text-muted-foreground">
          I transform complex ideas into seamless digital realities. Explore my work and see how I can help bring your vision to life.
        </p>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="w-[250px] h-[250px] mt-10 md:w-[400px] md:h-[400px]">
          <Image
            src="/Man-thinking-bro.png"
            alt="Man thinking"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-3 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-default"
          >
            <div className="p-2 bg-primary/10 rounded-lg">
              <stat.icon className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
