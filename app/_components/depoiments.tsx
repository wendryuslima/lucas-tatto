"use client";

import { Star } from "lucide-react";
import { motion } from "motion/react";

const Depoiments = () => {
  const depoiments = [
    {
      id: 1,
      label: "Diego Santos",
      description:
        "Tatuagem foda demais, traço e qualidade foram do cmomum! Próximo passo é fechar as costas",
    },
    {
      id: 2,
      label: "Victor Sanches",
      description:
        "Lucas é um profissional incrivel, já queria ter feito a um bom tempo. Tatugem monstra demais, qualidade do cara é impecavel",
    },
    {
      id: 3,
      label: "Victoria Periera",
      description:
        "Fechei as costas e ficou incrivel. Fecharia o corpo todo, recomendo muito",
    },
  ];

  return (
    <section id="depoimentos" className="bg-zinc-900 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-12 md:mb-16 tracking-tight uppercase text-white"
        >
          Depoimentos
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {depoiments.map((depoiment, index) => (
            <motion.div
              key={depoiment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="border border-zinc-700 bg-zinc-800/50 p-8 hover:shadow-lg hover:shadow-zinc-950/50 transition-shadow duration-300"
            >
              <p className="text-gray-300 mb-6 leading-relaxed">
                {depoiment.label}
              </p>
              <div
                className="flex items-center gap-1 text-yellow-400 mb-6"
                aria-label="Avaliação cinco estrelas"
              >
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star
                    key={`star-${depoiment.id}-${starIndex}`}
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
