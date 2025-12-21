"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 z-30 bg-background border-t border-border/50">
      <div className="container mx-auto md:max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/HHlaingSwan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/h-hlaing-swan-345956353/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.facebook.com/h.hlaing.swan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              <Facebook size={24} />
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">
              Home
            </a>
            <a href="#about" className="hover:text-foreground">
              About
            </a>
            <a href="#projects" className="hover:text-foreground">
              Projects
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Htat Hlaing Swan. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
