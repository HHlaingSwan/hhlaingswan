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

const channels = [
  {
    title: "Email",
    value: "htethlaingswan@gmail.com",
    href: "mailto:htethlaingswan@gmail.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "09 95 464 1112",
    href: "tel:+959954641112",
    icon: PhoneCall,
  },
  {
    title: "Location",
    value: "Mandalay, Myanmar",
    href: "https://maps.google.com/?q=Yangon,Myanmar",
    icon: MapPin,
    external: true,
  },
  {
    title: "Telegram",
    value: "Reach out on Telegram",
    href: "https://t.me/Hhs4438",
    icon: Send,
    external: true,
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const asideRef = useRef<HTMLElement>(null);

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
        }
      );

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, x: -40, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );

        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(card, {
            x: x * 0.08,
            y: y * 0.08,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
        });
      });

      if (asideRef.current) {
        gsap.fromTo(
          asideRef.current,
          { opacity: 0, x: 60, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.7,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: asideRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full px-4 bg-background py-20 md:py-24"
    >
      <div className="container mx-auto md:max-7xl px-0">
        <div ref={headingRef} className="mb-8 text-center md:mb-10 opacity-0">
          <h2 className="mb-3 text-2xl font-bold md:text-5xl">Contact</h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            Choose a direct channel below. No form.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="grid gap-4">
            {channels.map((item, index) => (
              <a
                key={item.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 md:p-6 opacity-0"
              >
                <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-foreground/3 to-transparent" />
                <div className="relative flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-background/80 text-foreground">
                      <item.icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.13em] text-muted-foreground">
                        {item.title}
                      </p>
                      <p className="truncate text-xs sm:text-sm font-semibold md:text-base">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
              </a>
            ))}
          </div>

          <aside
            ref={asideRef}
            className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 md:p-7 opacity-0"
          >
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-foreground/4 via-transparent to-foreground/2" />
            <div className="relative mb-4 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-1.5 text-xs text-muted-foreground">
              <CalendarClock className="size-3.5" />
              Availability
            </div>
            <h3 className="relative mb-2 text-xl font-semibold">
              Open to work
            </h3>
            <p className="relative text-sm text-muted-foreground">
              Freelance projects and full-time opportunities.
            </p>
            <div className="relative mt-6 grid gap-3 text-sm">
              <div className="flex items-center justify-between rounded-xl border border-border/60 bg-background/70 px-3 py-3.5">
                <span className="text-muted-foreground">Preferred</span>
                <span className="font-medium">Email</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border/60 bg-background/70 px-3 py-3.5">
                <span className="text-muted-foreground">Time zone</span>
                <span className="font-medium">GMT+6:30</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-border/60 bg-background/70 px-3 py-3.5">
                <span className="text-muted-foreground">Response</span>
                <span className="font-medium">Within 24h</span>
              </div>
            </div>
            <div className="relative mt-4 inline-flex items-center gap-2 rounded-lg border border-border/60 bg-background/70 px-3 py-1.5 text-xs font-medium text-foreground">
              <span className="size-2 rounded-full bg-foreground" />
              Currently available
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
