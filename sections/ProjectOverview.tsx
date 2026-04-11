"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { content } from "@/lib/projects";
import { ExternalLink, Github as GithubIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ProjectOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<(HTMLElement | null)[]>([]);
  const imagesRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        const children = headerRef.current.children;
        gsap.fromTo(
          children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
            },
          }
        );
      }

      articlesRef.current.forEach((article, i) => {
        if (!article) return;

        const image = imagesRef.current[i];
        const contentEl = contentsRef.current[i];
        const isEven = i % 2 === 0;

        gsap.fromTo(
          article,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.1,
            scrollTrigger: {
              trigger: article,
              start: "top 85%",
            },
          }
        );

        if (image) {
          const img = image.querySelector("img");
          if (img) {
            gsap.fromTo(
              img,
              { scale: 1.2 },
              {
                scale: 1,
                duration: 1.2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: article,
                  start: "top 80%",
                  end: "bottom 20%",
                  scrub: 1,
                },
              }
            );
          }

          gsap.fromTo(
            image,
            { opacity: 0, x: isEven ? -80 : 80, rotateY: isEven ? 8 : -8 },
            {
              opacity: 1,
              x: 0,
              rotateY: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: article,
                start: "top 80%",
              },
            }
          );
        }

        if (contentEl) {
          const elements = contentEl.querySelectorAll(".anim-child");
          gsap.fromTo(
            elements,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: "power3.out",
              scrollTrigger: {
                trigger: contentEl,
                start: "top 85%",
              },
            }
          );
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 md:py-32 px-4 max-w-7xl mx-auto overflow-hidden"
    >
      <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3 opacity-0">
          Selected Work
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 opacity-0">
          Project Showcase
        </h2>
        <p className="text-sm md:text-lg text-muted-foreground leading-relaxed opacity-0">
          A collection of digital experiences built with precision and modern
          technology.
        </p>
      </div>

      <div className="flex flex-col gap-20 md:gap-32 w-full">
        {content.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <article
              key={project.title}
              ref={(el) => {
                articlesRef.current[index] = el;
              }}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-16 items-center opacity-0`}
            >
              <div
                ref={(el) => {
                  imagesRef.current[index] = el;
                }}
                className="w-full md:w-3/5 opacity-0"
                style={{ perspective: "1000px" }}
              >
                <div className="relative aspect-4/3 md:aspect-video overflow-hidden rounded-2xl border border-border/50 bg-muted/30 shadow-2xl">
                  {project.images?.[0] ? (
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 800px"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-sm text-muted-foreground">
                      No image
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>

              <div
                ref={(el) => {
                  contentsRef.current[index] = el;
                }}
                className="w-full md:w-2/5 flex flex-col justify-center space-y-6"
              >
                <div className="anim-child space-y-2 opacity-0">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                  <div className="h-1 w-12 bg-primary rounded-full" />
                </div>

                <p className="anim-child text-sm md:text-base text-muted-foreground leading-relaxed opacity-0">
                  {project.description}
                </p>

                {project.highlights?.length ? (
                  <ul className="anim-child space-y-2 text-sm md:text-base text-muted-foreground leading-7 opacity-0">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/80 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="anim-child flex flex-wrap items-center gap-4 pt-4 opacity-0">
                  {project.url && project.url !== "#" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20"
                    >
                      <ExternalLink className="size-4" />
                      Live Preview
                    </a>
                  )}
                  <a
                    href={project.repoUrl || "https://github.com/HHlaingSwan"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background text-sm font-semibold hover:bg-muted transition-all hover:-translate-y-0.5"
                  >
                    <GithubIcon className="size-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectOverview;
