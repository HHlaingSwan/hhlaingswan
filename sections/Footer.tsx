"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/HHlaingSwan", icon: Github },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/h-hlaing-swan-345956353",
      icon: Linkedin,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/h.hlaing.swan",
      icon: Facebook,
    },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const items = [headingRef, ctaRef, infoRef, barRef];
      items.forEach((ref, i) => {
        if (!ref.current) return;
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3 + i * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      id="footer"
      className="relative  bg-background w-full border-t border-border/50"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto max-w-3xl px-4 py-12 md:py-16">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Heading */}
          <div ref={headingRef} className="space-y-3 opacity-0">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Open for Work
            </p>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight">
              Let&apos;s build something useful and scalable.
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Full-stack web development from idea to production.
            </p>
          </div>

          {/* CTA */}
          <a
            ref={ctaRef}
            href="mailto:htethlaingswan@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 opacity-0"
          >
            <Mail className="size-4" />
            Start a Project
          </a>

          {/* Contact info */}
          <div
            ref={infoRef}
            className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground font-mono opacity-0"
          >
            <span>htethlaingswan@gmail.com</span>
            <span className="hidden sm:inline">•</span>
            <span>Mandalay, Myanmar</span>
            <span className="hidden sm:inline">•</span>
            <span>+95 995 464 1112</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                aria-label={social.name}
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div ref={barRef} className="border-t border-border/40 py-5 opacity-0">
        <div className="container mx-auto max-w-3xl px-4 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p className="font-mono">
            &lt;/&gt; with <span className="text-red-500">♥</span> by Htet
            Hlaing Swan
          </p>
          <p>&copy; {currentYear} Htet Hlaing Swan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
