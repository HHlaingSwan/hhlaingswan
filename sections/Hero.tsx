"use client";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { AuroraText } from "@/components/ui/aurora-text";
import { motion } from "framer-motion";
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        introRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 },
      )
        .fromTo(
          headingRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3",
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3",
        )
        .fromTo(
          buttonsRef.current?.children || [],
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.12 },
          "-=0.3",
        )
        .fromTo(
          lottieRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.8 },
          "-=0.6",
        );

      const statEls = statsRef.current?.querySelectorAll("[data-count]");
      if (statEls) {
        statEls.forEach((el) => {
          const target = parseInt(el.getAttribute("data-count") || "0", 10);
          gsap.fromTo(
            el,
            { innerText: 0 },
            {
              innerText: target,
              duration: 1.5,
              ease: "power2.out",
              snap: { innerText: 1 },
              delay: 0.8,
            },
          );
        });
      }

      // Circle reveal scroll animation
      if (circleRef.current) {
        gsap.fromTo(
          circleRef.current,
          { clipPath: "circle(0% at 50% 50%)" },
          {
            clipPath: "circle(150% at 50% 50%)",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=150%",
              pin: true,
              scrub: 1,
            },
          },
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen w-full flex items-center bg-foreground text-background overflow-hidden px-4 py-12"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[linear-gradient(to_bottom,white,transparent)] pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-primary/5 animate-pulse" />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-foreground via-transparent to-foreground pointer-events-none" />

      {/* Circle reveal overlay */}
      <div
        ref={circleRef}
        className="absolute inset-0 z-20 bg-background pointer-events-none"
      />

      <div className="container mx-auto md:max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <p
                ref={introRef}
                className="text-sm md:text-lg text-background/60 opacity-0"
              >
                Hi, I&apos;m{" "}
                <span className="font-bold text-background">
                  Htet Hlaing Swan
                </span>
                .
              </p>

              <h1
                ref={headingRef}
                className="text-2xl md:text-5xl text-background font-bold leading-tight opacity-0"
              >
                I&apos;m a{" "}
                <span className="inline-block">
                  <AuroraText>
                    <TypingAnimation
                      cursorStyle="block"
                      words={[
                        "Frontend Architect",
                        "Backend Engineer",
                        "Java Developer",
                      ]}
                      loop
                    />
                  </AuroraText>
                </span>
              </h1>

              <p
                ref={descRef}
                className="text-background/60 text-base md:text-lg max-w-md opacity-0"
              >
                Building elegant, scalable solutions with and modern
                technologies. Let&apos;s build something great together.
              </p>
            </div>

            <div ref={buttonsRef} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-background/90 transition-colors opacity-0"
              >
                See What I Build
                <ArrowRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 border border-background/20 rounded-lg font-medium hover:bg-background/5 transition-colors opacity-0"
              >
                About Me
              </a>
            </div>

            <div
              ref={statsRef}
              className="flex items-center gap-4 md:gap-8 pt-4"
            >
              <div>
                <p className="text-xl md:text-2xl font-bold">
                  <span data-count="2">0</span> +
                </p>
                <p className="text-xs md:text-sm text-background/60">Years</p>
              </div>
              <div className="w-px h-10 md:h-12 bg-background/10" />
              <div>
                <p className="text-xl md:text-2xl font-bold">
                  <span data-count="8">0</span> +
                </p>
                <p className="text-xs md:text-sm text-background/60">
                  Projects
                </p>
              </div>
              <div className="w-px h-10 md:h-12 bg-background/10" />
              <div>
                <p className="text-xl md:text-2xl font-bold">
                  <span data-count="3">0</span> +
                </p>
                <p className="text-xs md:text-sm text-background/60">Tech</p>
              </div>
            </div>
          </div>

          <div
            ref={lottieRef}
            className="flex justify-center relative order-first md:order-last opacity-0"
          >
            <div className="relative w-full aspect-square max-w-137.5">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-full h-full flex items-center justify-center cursor-default"
              >
                <DotLottieReact
                  src="/developer.lottie"
                  loop
                  autoplay
                  className="w-full h-full transition-all duration-300"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
