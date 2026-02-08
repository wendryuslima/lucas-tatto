"use client";

import Image from "next/image";
import { motion } from "motion/react";

const works = [
  {
    id: 1,
    src: "/imagem-tatto-1.jpg",
    alt: "Tatuaje realista en brazo",
  },
  {
    id: 2,
    src: "/imagem-tatto-2.jpg",
    alt: "Retrato en tinta negra",
  },
  {
    id: 3,
    src: "/imagem-tatto-3.jpg",
    alt: "Manga de tatuaje en progreso",
  },
  {
    id: 4,
    src: "/tatto-4.jpg",
    alt: "Diseño geométrico minimalista",
  },
  {
    id: 5,
    src: "/imagem-tatto-1.jpg",
    alt: "Detalle de sombreado realista",
  },
  {
    id: 6,
    src: "/imagem-tatto-3.jpg",
    alt: "Tatuaje de línea fina",
  },
];

const columnas = [
  [works[0], works[1]],
  [works[2], works[3]],
  [works[4], works[5]],
];

const Works = () => {
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
          Mis trabajos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {columnas.map((coluna, colunaIndex) => (
            <div
              key={`coluna-${colunaIndex}`}
              className={`flex flex-col gap-6 ${
                colunaIndex === 1 ? "md:mt-8" : ""
              } ${colunaIndex === 2 ? "lg:mt-12" : ""}`}
            >
              {coluna.map((trabalho, trabalhoIndex) => {
                const isTall = trabalhoIndex === 0;

                return (
                  <motion.div
                    key={trabalho.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: (colunaIndex * 2 + trabalhoIndex) * 0.1,
                    }}
                    className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                      isTall ? "aspect-[4/5]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={trabalho.src}
                      alt={trabalho.alt}
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
