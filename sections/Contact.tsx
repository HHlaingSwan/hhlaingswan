"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  CalendarClock,
  Mail,
  MapPin,
  PhoneCall,
  Send,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLAnchorElement>(null);
  const phoneRef = useRef<HTMLAnchorElement>(null);
  const locationRef = useRef<HTMLAnchorElement>(null);
  const telegramRef = useRef<HTMLAnchorElement>(null);
  const availRef = useRef<HTMLDivElement>(null);
  const tzRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        },
      );

      const cards = [
        { ref: emailRef, dir: { x: -50, y: -30 } },
        { ref: phoneRef, dir: { x: 50, y: -20 } },
        { ref: locationRef, dir: { x: 50, y: 20 } },
        { ref: telegramRef, dir: { x: -50, y: 30 } },
        { ref: availRef, dir: { x: 0, y: 40 } },
        { ref: tzRef, dir: { x: 0, y: 40 } },
      ];

      cards.forEach(({ ref, dir }, i) => {
        if (!ref.current) return;
        gsap.fromTo(
          ref.current,
          { opacity: 0, x: dir.x, y: dir.y, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full px-4 bg-background py-20 md:py-24"
    >
      <div className="container mx-auto max-w-5xl px-0">
        <div ref={headingRef} className="mb-10 text-center md:mb-14 opacity-0">
          <h2 className="mb-3 text-2xl font-bold md:text-5xl">Touch Here</h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            Whether you have a question, want to collaborate, or just want to
            say hi, I&apos;m here to help.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-4 md:gap-5 auto-rows-[140px] md:auto-rows-[160px]">
          {/* Email - large card */}
          <a
            ref={emailRef}
            href="mailto:htethlaingswan@gmail.com"
            className="group col-span-2 row-span-2 rounded-2xl border border-border/60 bg-card p-6 md:p-8 flex flex-col justify-between overflow-hidden relative opacity-0"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="size-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  Email
                </span>
              </div>
              <p className="text-lg md:text-2xl font-bold break-all">
                htethlaingswan@gmail.com
              </p>
            </div>
            <div className="relative flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              <span>Send a message</span>
              <ArrowUpRight className="size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* Phone */}
          <a
            ref={phoneRef}
            href="tel:+959954641112"
            className="group rounded-2xl border border-border/60 bg-card p-5 flex flex-col justify-between relative overflow-hidden opacity-0"
          >
            <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-transparent pointer-events-none" />
            <div className="relative flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <PhoneCall className="size-4 text-green-500" />
              </div>
            </div>
            <div className="relative">
              <p className="text-xs text-muted-foreground mb-1">Phone</p>
              <p className="text-sm font-semibold">09 95 464 1112</p>
            </div>
          </a>

          {/* Location */}
          <a
            ref={locationRef}
            href="https://maps.google.com/?q=Yangon,Myanmar"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-border/60 bg-card p-5 flex flex-col justify-between relative overflow-hidden opacity-0"
          >
            <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-transparent pointer-events-none" />
            <div className="relative flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                <MapPin className="size-4 text-amber-500" />
              </div>
            </div>
            <div className="relative">
              <p className="text-xs text-muted-foreground mb-1">Location</p>
              <p className="text-sm font-semibold">Yangon, Myanmar</p>
            </div>
          </a>

          {/* Telegram */}
          <a
            ref={telegramRef}
            href="https://t.me/Hhs4438"
            target="_blank"
            rel="noopener noreferrer"
            className="group col-span-2 rounded-2xl border border-border/60 bg-card p-5 md:p-6 flex items-center justify-between relative overflow-hidden opacity-0"
          >
            <div className="absolute inset-0 bg-linear-to-br from-sky-500/5 to-transparent pointer-events-none" />
            <div className="relative flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-500/10 flex items-center justify-center">
                <Send className="size-5 text-sky-500" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Telegram</p>
                <p className="text-base font-semibold">@Hhs4438</p>
              </div>
            </div>
            <ArrowUpRight className="relative size-5 text-muted-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground transition-all" />
          </a>

          {/* Availability */}
          <div
            ref={availRef}
            className="rounded-2xl border border-border/60 bg-card p-5 flex flex-col justify-between relative overflow-hidden opacity-0"
          >
            <div className="absolute inset-0 bg-linear-to-br from-foreground/3 to-transparent pointer-events-none" />
            <div className="relative flex items-center gap-2">
              <CalendarClock className="size-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                Availability
              </span>
            </div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-1">
                <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-sm font-semibold">Available</p>
              </div>
              <p className="text-xs text-muted-foreground">Within 24h</p>
            </div>
          </div>

          {/* Timezone */}
          <div
            ref={tzRef}
            className="rounded-2xl border border-border/60 bg-card p-5 flex flex-col justify-between relative overflow-hidden opacity-0"
          >
            <div className="absolute inset-0 bg-linear-to-br from-foreground/3 to-transparent pointer-events-none" />
            <div className="relative">
              <p className="text-xs text-muted-foreground mb-1">Time Zone</p>
              <p className="text-xl md:text-2xl font-bold">GMT+6:30</p>
            </div>
            <div className="relative">
              <p className="text-xs text-muted-foreground">
                Myanmar Standard Time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
