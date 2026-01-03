"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  Terminal,
  Code2,
  Database,
  Layout,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    email: "htethlaingswan@gmail.com",
    location: "Yangon, Myanmar",
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/HHlaingSwan",
      icon: Github,
      color: "hover:text-[#fff]",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/h-hlaing-swan-345956353",
      icon: Linkedin,
      color: "hover:text-[#0077b5]",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/h.hlaing.swan",
      icon: Facebook,
      color: "hover:text-[#1877f2]",
    },
  ];

  const skills = [
    { icon: Code2, label: "Frontend" },
    { icon: Database, label: "Backend" },
    { icon: Layout, label: "Full Stack" },
  ];

  return (
    <footer className="py-12 z-30 bg-background border-t border-border/50">
      <div className="container mx-auto md:max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-8"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Terminal className="size-5 text-primary" />
                <h3 className="text-lg font-semibold">Let's Build Together</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transforming ideas into elegant, scalable solutions through
                clean code and modern technologies.
              </p>
              <div className="flex gap-2">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-muted/50 text-xs font-medium"
                  >
                    <skill.icon className="size-3.5" />
                    <span>{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for Work
              </h3>
              <p className="text-sm text-muted-foreground">
                Currently open to freelance projects and full-time opportunities.
              </p>
              <div className="space-y-2">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail size={16} className="group-hover:scale-110 transition-transform" />
                  <span className="font-mono">{contactInfo.email}</span>
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  <span>{contactInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="grid grid-cols-3 gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center justify-center p-3 rounded-lg bg-muted/50 text-muted-foreground transition-all hover:bg-primary hover:text-primary-foreground ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                    <span className="text-xs mt-1">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <Separator />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p className="font-mono">
              &lt;/&gt; with <span className="text-red-500">♥</span> by Htat Hlaing
              Swan
            </p>
            <p>
              &copy; {currentYear} Htat Hlaing Swan. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
