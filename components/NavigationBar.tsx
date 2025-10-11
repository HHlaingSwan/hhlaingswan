"use client";

import React from "react";
import Link from "next/link";
import {
	CalendarIcon,
	Facebook,
	GithubIcon,
	HomeIcon,
	Linkedin,
	MailIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
	calendar: (props: IconProps) => <CalendarIcon {...props} />,
	email: (props: IconProps) => <MailIcon {...props} />,
	linkedin: (props: IconProps) => <Linkedin {...props} />,
	facebook: (props: IconProps) => <Facebook {...props} />,
	github: (props: IconProps) => <GithubIcon {...props} />,
};

const DATA = {
	navbar: [{ href: "#home", icon: HomeIcon, label: "Home" }],
	contact: {
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/HHlaingSwan",
				icon: Icons.github,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "#",
				icon: Icons.linkedin,
			},
			Facebook: {
				name: "Facebook",
				url: "#",
				icon: Icons.facebook,
			},
			Email: {
				name: "Send Email",
				url: "htethlaingswan@gmail.com",
				icon: Icons.email,
			},
		},
	},
};

export function NavigationBar() {
	return (
		<div className='flex flex-col items-center justify-center'>
			<TooltipProvider>
				<Dock direction='middle'>
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
										)}>
										<item.icon className='size-5' />
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.label}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
					<Separator
						orientation='vertical'
						className='h-full'
					/>
					{Object.entries(DATA.contact.social).map(([name, social]) => (
						<DockIcon key={name}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href={social.url}
										aria-label={social.name}
										className={cn(
											buttonVariants({ variant: "ghost", size: "icon" }),
											"size-12 rounded-full"
										)}>
										<social.icon className='size-5' />
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>{name}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
					<Separator
						orientation='vertical'
						className='h-full'
					/>
					<DockIcon>
						<AnimatedThemeToggler />
					</DockIcon>
				</Dock>
			</TooltipProvider>
		</div>
	);
}
