"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    email: "htethlaingswan@gmail.com",
    location: "Yangon, Myanmar",
    phone: "+95 995 464 1112",
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/HHlaingSwan",
      icon: Github,
    },
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

  return (
    <footer id="footer" className="relative z-30 bg-background border-t border-border/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto md:max-w-7xl px-4 py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center gap-7"
        >
          <div className="space-y-3 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              Open for Work
            </p>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight">
              Let&apos;s build something useful and scalable.
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Full-stack web development from idea to production.
            </p>
          </div>

          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Mail className="size-4" />
            Start a Project
          </a>

          <div className="text-sm text-muted-foreground">
            <span className="font-mono">{contactInfo.email}</span>
            <span className="mx-2">•</span>
            <span>{contactInfo.location}</span>
            <span className="mx-2">•</span>
            <span>{contactInfo.phone}</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.name}
              >
                {social.name}
              </a>
            ))}
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground border-t border-border/60 pt-6">
            <p className="font-mono">
              &lt;/&gt; with <span className="text-red-500">♥</span> by Htet
              Hlaing Swan
            </p>
            <p>&copy; {currentYear} Htet Hlaing Swan. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
