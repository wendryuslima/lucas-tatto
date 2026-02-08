"use client";

import { Star } from "lucide-react";
import { motion } from "motion/react";
import { translations } from "@/lib/translations";
import { useLanguage } from "./language-provider";

const Depoiments = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const depoiments = t.depoiments.items;

  return (
    <section id="depoimentos" className="bg-zinc-900 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-12 md:mb-16 tracking-tight uppercase text-white"
        >
          {t.depoiments.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {depoiments.map((depoiment, index) => (
            <motion.div
              key={`${depoiment.name}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="border border-zinc-700 bg-zinc-800/50 p-8 hover:shadow-lg hover:shadow-zinc-950/50 transition-shadow duration-300"
            >
              <p className="text-gray-300 mb-6 leading-relaxed">
                {depoiment.name}
              </p>
              <div
                className="flex items-center gap-1 text-yellow-400 mb-6"
                aria-label={t.depoiments.starsLabel}
              >
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={`star-${depoiment.name}-${starIndex}`}
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="font-semibold text-white">
                {depoiment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoiments;
