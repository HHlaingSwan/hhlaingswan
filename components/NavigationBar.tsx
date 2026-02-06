"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  GithubIcon,
  HomeIcon,
  Linkedin,
  MailIcon,
  UserIcon,
  BriefcaseIcon,
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
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  email: (props: IconProps) => <MailIcon {...props} />,
  linkedin: (props: IconProps) => <Linkedin {...props} />,
  facebook: (props: IconProps) => <Facebook {...props} />,
  github: (props: IconProps) => <GithubIcon {...props} />,
};

const DATA = {
  navbar: [
    { href: "#home", icon: HomeIcon, label: "Home" },
    { href: "#about", icon: UserIcon, label: "About" },
    { href: "#projects", icon: BriefcaseIcon, label: "Projects" },
  ],
  social: [
    {
      name: "GitHub",
      url: "https://github.com/HHlaingSwan",
      icon: Icons.github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/h-hlaing-swan-345956353",
      icon: Icons.linkedin,
    },
  ],
};

export function NavigationBar() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <DockIcon>
            <AnimatedThemeToggler className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "size-12 rounded-full"
            )} />
          </DockIcon>
          {DATA.social.map((social) => (
            <DockIcon key={social.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <social.icon className="size-5" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
