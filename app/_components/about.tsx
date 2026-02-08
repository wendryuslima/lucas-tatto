"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Stats from "./statistic";
import { translations } from "@/lib/translations";
import { useLanguage } from "./language-provider";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <section id="historia" className="py-20 md:py-32 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-9xl font-serif border-4 border-white w-full h-full flex items-center justify-center">
                    LS
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl mt-4 text-center md:text-5xl tracking-tight uppercase border-b border-white pb-4 text-white">
                {t.about.historyTitle}
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                {t.about.historyParagraphs.map((paragraph, index) => (
                  <p key={`history-${index}`}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="espanha" className="overflow-x-hidden pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <Image
                src="/bandeira_espanha-removebg-preview.png"
                alt={t.about.spainFlagAlt}
                width={512}
                height={512}
                sizes="(min-width: 900px) 32rem, 90vw"
                className="w-full max-w-[32rem] h-auto object-contain -mb-4 md:-mb-6"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-5xl text-center md:text-6xl tracking-tight uppercase border-b border-white pb-4 text-white">
                {t.about.spainTitle}
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                {t.about.spainParagraphs.map((paragraph, index) => (
                  <p key={`spain-${index}`}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />
    </>
  );
};

export default About;
