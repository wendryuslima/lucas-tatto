"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { translations } from "@/lib/translations";
import { useLanguage } from "./language-provider";

const works = [
  {
    id: 1,
    src: "/imagem-tatto-1.jpg",
  },
  {
    id: 2,
    src: "/imagem-tatto-2.jpg",
  },
  {
    id: 3,
    src: "/imagem-tatto-3.jpg",
  },
  {
    id: 4,
    src: "/tatto-4.jpg",
  },
  {
    id: 5,
    src: "/imagem-tatto-1.jpg",
  },
  {
    id: 6,
    src: "/imagem-tatto-3.jpg",
  },
];

const Works = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const worksWithAlt = works.map((work, index) => ({
    ...work,
    alt: t.works.items[index],
  }));

  const columns = [
    [worksWithAlt[0], worksWithAlt[1]],
    [worksWithAlt[2], worksWithAlt[3]],
    [worksWithAlt[4], worksWithAlt[5]],
  ];

  return (
    <section id="galeria" className="bg-zinc-950 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-12 md:mb-16 tracking-tight uppercase"
        >
          {t.works.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {columns.map((column, columnIndex) => (
            <div
              key={`column-${columnIndex}`}
              className={`flex flex-col gap-6 ${
                columnIndex === 1 ? "md:mt-8" : ""
              } ${columnIndex === 2 ? "lg:mt-12" : ""}`}
            >
              {column.map((work, workIndex) => {
                const isTall = workIndex === 0;

                return (
                  <motion.div
                    key={work.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: (columnIndex * 2 + workIndex) * 0.1,
                    }}
                    className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                      isTall ? "aspect-[4/5]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={work.src}
                      alt={work.alt}
                      fill
                      sizes="(min-width: 1024px) 22rem, (min-width: 768px) 42vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
