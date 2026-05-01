"use client";

import React from "react";
import { Github, Linkedin, Facebook, Mail, MapPin } from "lucide-react";

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

  const contactInfo = {
    email: "htethlaingswan@gmail.com",
    location: "Yangon, Myanmar",
  };

  return (
    <footer
      id="footer"
      className="w-full bg-background border-t border-border py-12"
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Grid Layout - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Column 1 - Brand + Contact */}
          <div className="space-y-6">
            {/* Brand */}
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">
                Htet Hlaing Swan
              </h3>
              <p className="text-sm text-muted-foreground">
                Full-stack Engineer
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                {contactInfo.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Map */}
          <div className="rounded-lg overflow-hidden border border-border h-full min-h-50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244397.67773647384!2d96.06760505!3d16.83948345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1949e223e196b%3A0x54f5a4658a47f89d!2sYangon%2C%20Myanmar%20(Burma)!5e0!3m2!1sen!2sus!4v1704000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "200px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yangon Location"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border/30 mb-8" />

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
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

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Htet Hlaing Swan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
