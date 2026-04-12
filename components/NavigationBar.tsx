"use client";

import React from "react";
import Link from "next/link";
import {
  UserIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  MailIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/ui/dock";

const DATA = {
  navbar: [
    { href: "#about", icon: UserIcon, label: "Me" },
    { href: "#education", icon: GraduationCapIcon, label: "Education" },
    { href: "#projects", icon: BriefcaseIcon, label: "Projects" },
    { href: "#contact", icon: MailIcon, label: "Contact" },
  ],
};

export function NavigationBar() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TooltipProvider>
        <Dock direction="center" orientation="vertical">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "w-full h-full rounded-full text-foreground",
                    )}
                  >
                    <item.icon className="size-[55%]" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="left">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
