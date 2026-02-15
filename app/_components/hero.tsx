"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { translations } from "@/lib/translations";
import { WHATSAPP_LINK } from "@/lib/whatsapp";
import { useLanguage } from "./language-provider";
import HeroCta from "./hero-cta";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-zinc-950 text-white pt-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagem-lucas.jpeg"
          alt={t.hero.imageAlt}
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-5xl md:text-7xl mb-4 tracking-normal font-script"
            >
              {t.hero.title}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
            className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl leading-relaxed space-y-2"
          >
            <p>{t.hero.tagline}</p>
            <p>{t.hero.tagline2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4"
          >
            <HeroCta
              label={t.hero.ctaLabel}
              href={WHATSAPP_LINK}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 border border-white/30 rounded-full p-2"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
};

export default Hero;
