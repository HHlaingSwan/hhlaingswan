"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Here you would typically handle the form submission,
		// e.g., by sending the data to an API endpoint.
		alert("Form submission logic not implemented yet.");
	};

	return (
		<section
			id='contact'
			className='py-20 bg-background'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center mb-16'>
					<h2 className='md:text-4xl font-display text-3xl font-bold mb-3 text-foreground'>
						Get In Touch
					</h2>
					<p className='text-muted-foreground font-lora max-w-2xl text-sm md:text-base mx-auto'>
						Have a project in mind or just want to say hello? Feel free to reach
						out.
					</p>
				</motion.div>

				<motion.form
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					onSubmit={handleSubmit}
					className='max-w-2xl mx-auto space-y-6 bg-card/50 p-8 rounded-lg border border-border'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<Input
							placeholder='Your Name'
							name='name'
							required
						/>
						<Input
							type='email'
							placeholder='Your Email'
							name='email'
							required
						/>
					</div>
					<Textarea
						placeholder='Your Message'
						name='message'
						rows={5}
						required
					/>
					<div className='text-center'>
						<Button
							type='submit'
							className='gap-2'>
							Send Message <Send className='w-4 h-4' />
						</Button>
					</div>
				</motion.form>
			</div>
		</section>
	);
};

export default Contact;
