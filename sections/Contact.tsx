"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarClock,
  Mail,
  MapPin,
  PhoneCall,
  Send,
} from "lucide-react";

const channels = [
  {
    title: "Email",
    value: "htethlaingswan@gmail.com",
    href: "mailto:htethlaingswan@gmail.com",
    icon: Mail,
  },
  {
    title: "Phone",
    value: "+95 995 464 1112",
    href: "tel:+959954641112",
    icon: PhoneCall,
  },
  {
    title: "Location",
    value: "Yangon, Myanmar",
    href: "https://maps.google.com/?q=Yangon,Myanmar",
    icon: MapPin,
    external: true,
  },
  {
    title: "Telegram",
    value: "R R ( Robert Rebellion )",
    href: "https://t.me/Hhs4438",
    icon: Send,
    external: true,
  },
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="w-full px-4 bg-background py-20 md:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto md:max-w-7xl px-0">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="mb-3 text-2xl font-bold md:text-5xl">Contact</h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
            Choose a direct channel below. No form.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="grid gap-4">
            {channels.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 md:p-6`}
              >
                <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-foreground/3 to-transparent dark:from-foreground/6" />
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
              </motion.a>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-6 md:p-7"
          >
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-foreground/4 via-transparent to-foreground/2 dark:from-foreground/8 dark:to-foreground/3" />
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
          </motion.aside>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
