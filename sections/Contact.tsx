"use client";

import React from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Globe } from "lucide-react";

const EnhancedContact = () => {
  const contactCards = [
    {
      icon: <Mail className="size-5" />,
      label: "Email",
      value: "htethlaingswan@gmail.com",
      href: "mailto:htethlaingswan@gmail.com",
    },
    {
      icon: <Phone className="size-5" />,
      label: "Phone",
      value: "+95 995 464 1112",
      href: "tel:+959954641112",
    },
    {
      icon: <MapPin className="size-5" />,
      label: "Location",
      value: "Yangon, Myanmar",
      href: "https://maps.google.com/?q=Yangon,Myanmar",
    },
    {
      icon: <Send className="size-5" />,
      label: "Telegram",
      value: "@Hhs4438",
      href: "https://t.me/Hhs4438",
    },
    {
      icon: <CheckCircle2 className="size-5" />,
      label: "Available",
      value: "Within 24 hours",
      href: null,
    },
    {
      icon: <Globe className="size-5" />,
      label: "Time Zone",
      value: "GMT+6:30 (Myanmar)",
      href: null,
    },
  ];

  return (
    <section id="contact" className="w-full px-4 bg-background py-20 md:py-24">
      <div className="container mx-auto max-w-5xl px-0">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Get In Touch
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactCards.map((card) => {
            const isExternal = card.href
              ? /^https?:\/\//.test(card.href)
              : false;
            const content = (
              <div className="flex items-center gap-4 p-4 rounded-lg border border-border/60 hover:border-foreground/20 hover:bg-muted/20 transition-all duration-300">
                <div className="p-2 rounded-full bg-muted/30 text-muted-foreground">
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {card.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {card.value}
                  </p>
                </div>
              </div>
            );

            if (!card.href) {
              return <div key={card.label}>{content}</div>;
            }

            return (
              <a
                key={card.label}
                href={card.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnhancedContact;
