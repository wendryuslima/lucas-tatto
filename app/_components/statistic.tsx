"use client";

import Image from "next/image";
import { motion } from "motion/react";

const Stats = () => {
  const stats = [
    {
      id: 1,
      numero: "+10",
      label: "Años de Experiencia",
    },
    {
      id: 2,
      numero: "+3000",
      label: "Clientes Atendidos",
    },
    {
      id: 3,
      numero: "+5000",
      label: "Tatuajes Realizados",
    },
    {
      id: 4,
      numero: "100%",
      label: "Satisfacción Garantizada",
    },
  ];

  return (
    <section className="relative bg-zinc-950 py-20 border-y border-zinc-800 overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/tatuador.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-5"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl mb-3 tracking-tight text-white">
                {stat.numero}
              </div>
              <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="relative z-10 items-center text-center flex justify-center gap-2 mt-12">
        <h2 className="text-white text-2xl">
          Entregamos más que tatuajes: son marcas que cuentan una historia
        </h2>
      </div>
    </section>
  );
};

export default Stats;
