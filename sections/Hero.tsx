"use client";
import { TypeAnimation } from "@/components/TypeAnimation";
import { AuroraText } from "@/components/ui/aurora-text";
import { Highlighter } from "@/components/ui/highlighter";
import { Meteors } from "@/components/ui/meteors";
import { TextAnimate } from "@/components/ui/text-animate";
import React from "react";

const Hero = () => {
  return (
    <section
      id="#home"
      className="relative flex h-[88vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg px-4 bg-gradient-to-b from-background via-secondary to-background dark:via-slate-950"
    >
      <div className="flex flex-col items-center md:justify-center  text-center">
        <Meteors number={50} className="stroke-accent" />
        <h4 className="mb-12 text-sm font-bold uppercase tracking-widest text-muted-foreground">
          <TextAnimate animation="blurInUp" by="character" once>
            Crafting Full-Stack Experiences
          </TextAnimate>
        </h4>
        <h1 className="text-3xl font-bold md:text-6xl">
          Transforming Concepts <br className="md:hidden block" />
          into
          <br className="hidden md:block" /> Seamless{" "}
          <AuroraText>
            <TypeAnimation />
          </AuroraText>
        </h1>
        <h3 className="mt-10 max-w-2xl text-xs font-semibold capitalize text-gray-400 md:text-xl">
          Hi ! I&apos;m{" "}
          <Highlighter action="underline" color="#FF9800">
            Htet Hlaing Swan
          </Highlighter>
          , a full-stack developer based in{" "}
          <Highlighter action="highlight" color="var(--accent)">
            Myanmar.
          </Highlighter>
        </h3>
      </div>
    </section>
  );
};

export default Hero;
