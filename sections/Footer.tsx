"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='py-8 bg-background border-t border-border/50'>
			<div className='container mx-auto md:max-w-7xl px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='flex flex-col md:flex-row justify-between items-center gap-4'>
					<p className='text-sm text-muted-foreground'>
						&copy; {currentYear} Htat Hlaing Swan. All rights reserved.
					</p>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
