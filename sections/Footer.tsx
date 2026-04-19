"use client";

import React from "react";
import { Github, Linkedin, Facebook } from "lucide-react";

const EnhancedFooter = () => {
  const currentYear = new Date().getFullYear();

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

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      id="footer"
      className="w-full bg-background border-t border-border py-12"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Brand */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground">
              Htet Hlaing Swan
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Full-stack Engineer
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border/60 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                aria-label={social.name}
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border/30" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 w-full text-center">
            <p className="text-xs text-muted-foreground">
              &copy; {currentYear} Htet Hlaing Swan. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">Built with passion</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
