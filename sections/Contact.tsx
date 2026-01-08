"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, User, MessageSquare, Loader2 } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { env } from "@/lib/env";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formspreeId = env.NEXT_PUBLIC_FORMSPREE_ID;
    const formspreeEndpoint = formspreeId
      ? `https://formspree.io/f/${formspreeId}`
      : null;

    try {
      if (formspreeEndpoint) {
        const response = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
          setIsSubmitting(false);
          return;
        }
      }

      // Fallback: mailto link if Formspree is not configured
      const subject = `Portfolio Contact: ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0D%0AMessage:%0D%0A${formData.message}`;
      window.open(
        `mailto:htethlaingswan@gmail.com?subject=${subject}&body=${body}`
      );
    } catch (error) {
      // Fallback: mailto link
      const subject = `Portfolio Contact: ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0D%0AMessage:%0D%0A${formData.message}`;
      window.open(
        `mailto:htethlaingswan@gmail.com?subject=${subject}&body=${body}`
      );
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Have a project in mind or want to collaborate? I&apos;d love to hear
              from you. Send me a message and I&apos;ll get to you as soon as
              possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Let&apos;s Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                 I&apos;m currently available for freelance projects and full-time
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0" aria-hidden="true">
                    <Mail className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:htethlaingswan@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Send email to htethlaingswan@gmail.com"
                    >
                      htethlaingswan@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0" aria-hidden="true">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground" aria-label="Current location">
                      Yangon, Myanmar
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border/50"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="size-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for reaching out. I&apos;ll get to you soon!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <span className="sr-only">Name icon</span>
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" aria-hidden="true" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        required
                        aria-required="true"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary/30 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="sr-only">Email icon</span>
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" aria-hidden="true" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        required
                        aria-required="true"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary/30 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <div className="relative">
                      <span className="sr-only">Message icon</span>
                      <MessageSquare className="absolute left-3 top-3 size-5 text-muted-foreground" aria-hidden="true" />
                      <textarea
                        id="message"
                        name="message"
                        required
                        aria-required="true"
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Tell me about your project..."
                        className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary/30 border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                    className="w-full py-3 px-6 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-5 animate-spin" aria-hidden="true" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="size-5" aria-hidden="true" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
