"use client";
import { TypeAnimation } from "@/components/TypeAnimation";
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

        <h1 className="text-2xl font-bold md:text-5xl">
          Transforming Concepts <br className="md:hidden block" />
          into
          <br className="hidden md:block" /> Seamless{" "}
          <AuroraText>
            <TypeAnimation />
          </AuroraText>
        </h1>
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
