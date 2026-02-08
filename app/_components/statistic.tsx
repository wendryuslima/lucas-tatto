"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { translations } from "@/lib/translations";
import { useLanguage } from "./language-provider";

const Stats = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const stats = t.stats.items;

  return (
    <section className="relative bg-zinc-950 py-20 border-y border-zinc-800 overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/tatuador.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={`${stat.number}-${stat.label}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl mb-3 tracking-tight text-white">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="relative z-10 items-center text-center flex justify-center gap-2 mt-12">
        <h2 className="text-white text-2xl">{t.stats.closing}</h2>
      </div>
    </section>
  );
};

export default Stats;
