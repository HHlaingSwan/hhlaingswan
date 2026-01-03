"use client";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { AuroraText } from "@/components/ui/aurora-text";
import { Meteors } from "@/components/ui/meteors";
import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="#home"
      className="relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg px-4 bg-gradient-to-b from-background via-secondary to-background dark:via-slate-950"
    >
      <div className="flex flex-col  items-center text-center">
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
          I specialize in building exceptional digital experiences, turning
          complex ideas into beautiful and intuitive applications.
        </p>
      </div>
      <div className="flex w-full  items-center  justify-center">
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
    </section>
  );
};

export default Hero;
