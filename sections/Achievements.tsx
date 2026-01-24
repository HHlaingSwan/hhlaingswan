import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/ui/aurora-text";
import { certificates } from "@/lib/certificates";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4">
          <AuroraText>Achievements & Certificates</AuroraText>
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground">
          A collection of my academic achievements and professional
          certifications.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="relative block overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {certificate.institution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
