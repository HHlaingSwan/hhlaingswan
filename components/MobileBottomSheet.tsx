"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  MailIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";

const NAV_ITEMS = [
  { href: "#about", icon: UserIcon, label: "About" },
  { href: "#education", icon: GraduationCapIcon, label: "Education" },
  { href: "#projects", icon: BriefcaseIcon, label: "Projects" },
  { href: "#contact", icon: MailIcon, label: "Contact" },
];

export function MobileBottomSheet() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeSheet = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Close sheet when scrolling
  useEffect(() => {
    if (!isOpen) return;

    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      {/* Floating Trigger Button */}
      <motion.button
        onClick={toggleSheet}
        className="md:hidden fixed right-4 top-4 z-50 p-3 rounded-full bg-background/80 backdrop-blur-md border border-border/60 shadow-lg"
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <XIcon className="size-5 text-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MenuIcon className="size-5 text-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeSheet}
          />
        )}
      </AnimatePresence>

      {/* Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-t border-border/60 rounded-t-3xl shadow-2xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
          >
            {/* Drag Handle */}
            <div
              className="flex justify-center pt-3 pb-2 cursor-pointer"
              onClick={closeSheet}
            >
              <div className="w-12 h-1.5 rounded-full bg-muted-foreground/30" />
            </div>

            {/* Header */}
            <div className="px-6 pb-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Navigate to
              </p>
            </div>

            {/* Nav Items */}
            <nav className="px-4 pb-8">
              <div className="grid grid-cols-2 gap-3">
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeSheet}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="p-2.5 rounded-xl bg-background border border-border/60 group-hover:border-primary/30 transition-colors">
                        <item.icon className="size-5 text-foreground" />
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Bottom Safe Area */}
            <div className="h-safe-area-inset-bottom" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
