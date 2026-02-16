"use client";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { AuroraText } from "@/components/ui/aurora-text";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden px-4 py-12"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[linear-gradient(to_bottom,white,transparent)] dark:mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-primary/5 animate-pulse" />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="container mx-auto md:max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm md:text-lg text-muted-foreground">
                Hi, I&apos;m{" "}
                <span className="font-bold text-foreground">
                  Htet Hlaing Swan
                </span>
                .
              </p>

              <h1 className="text-2xl md:text-5xl font-bold leading-tight">
                I&apos;m a{" "}
                <span className="inline-block">
                  <AuroraText>
                    <TypingAnimation
                      cursorStyle="block"
                      words={[
                        "Backend Engineer",
                        "Frontend Architect",
                        "DevOps Student",
                      ]}
                      loop
                    />
                  </AuroraText>
                </span>
              </h1>

              <p className="text-muted-foreground text-base md:text-lg max-w-md">
                Building elegant, scalable solutions with clean code and modern
                technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                See What I Build
                <ArrowRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
              >
                About Me
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-2xl font-bold">2+</p>
                <p className="text-sm text-muted-foreground">Years</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-2xl font-bold">6+</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="text-2xl font-bold">5+</p>
                <p className="text-sm text-muted-foreground">Tech</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-70 h-70 md:w-100 md:h-100">
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
              <Image
                src="/Man-thinking.png"
                alt="Htet Hlaing Swan - Full-Stack Developer"
                width={500}
                height={500}
                sizes="(max-width: 768px) 280px, 400px"
                className="object-contain relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
