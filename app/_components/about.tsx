"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Stats from "./statistic";

const About = () => {
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
                Mi historia
                Mi historia
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Este año cumplo 10 años en el mundo del tatuaje y elegí que
                  este también fuera el momento de hacer realidad un sueño
                  antiguo: salir de Brasil por primera vez para tatuar en el
                  extranjero.
                </p>

                <p>
                  Barcelona no fue una elección aleatoria ni una decisión tomada
                  a la ligera. Fue una elección que nació desde el corazón.
                </p>

                <p>
                  En 2025, tuve el placer de pasar mis vacaciones durante el
                  verano europeo y conocer varias ciudades. Entre todas ellas,
                  Barcelona fue la que más me marcó. La vibra de la ciudad, la
                  energía de sus calles y la calidez de su gente me tocaron de
                  una forma especial. Fue allí donde sentí que debía regresar,
                  no como turista, sino como tatuador.
                </p>

                <p>
                  Durante ese viaje conocí a Digo, un tatuador brasileño
                  propietario de un estudio ubicado cerca de la Sagrada Familia.
                  La conexión fue inmediata. Fue él quien me invitó a trabajar
                  en su estudio y me brindó la oportunidad de tatuar en
                  Barcelona. Todo ocurrió de manera natural, como si las cosas
                  estuvieran alineadas para suceder en ese momento.
                </p>

                <p>
                  Elegí Barcelona para marcar un hito tan importante en mi
                  carrera: mi primera Eurotour, celebrando 10 años de dedicación
                  al tatuaje.
                </p>

                <p>
                  Estoy viviendo un sueño. Cada tatuaje realizado aquí será
                  hecho con entrega total, no solo por el aspecto económico,
                  sino por la experiencia, el aprendizaje y la oportunidad de
                  ejercer lo que amo en un lugar donde realmente me sentí en
                  casa.
                </p>

                <p>
                  Espero cumplir plenamente las expectativas de cada persona que
                  confió en mí. Pueden estar seguros de que cada trabajo es
                  realizado con alma y corazón.
                </p>
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
                alt="Bandeira da Espanha"
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
                Por qué elegí España?
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Este año cumplo 10 años en el mundo del tatuaje y elegí que
                  este también fuera el momento de hacer realidad un sueño
                  antiguo: salir de Brasil por primera vez para tatuar en el
                  extranjero.
                </p>

                <p>
                  Barcelona no fue una elección aleatoria ni una decisión tomada
                  a la ligera. Fue una elección que nació desde el corazón.
                </p>

                <p>
                  En 2025, tuve el placer de pasar mis vacaciones durante el
                  verano europeo y conocer varias ciudades. Entre todas ellas,
                  Barcelona fue la que más me marcó. La vibra de la ciudad, la
                  energía de sus calles y la calidez de su gente me tocaron de
                  una forma especial. Fue allí donde sentí que debía regresar,
                  no como turista, sino como tatuador.
                </p>

                <p>
                  Durante ese viaje conocí a Digo, un tatuador brasileño
                  propietario de un estudio ubicado cerca de la Sagrada Familia.
                  La conexión fue inmediata. Fue él quien me invitó a trabajar
                  en su estudio y me brindó la oportunidad de tatuar en
                  Barcelona. Todo ocurrió de manera natural, como si las cosas
                  estuvieran alineadas para suceder en ese momento.
                </p>

                <p>
                  Elegí Barcelona para marcar un hito tan importante en mi
                  carrera: mi primera Eurotour, celebrando 10 años de dedicación
                  al tatuaje.
                </p>

                <p>
                  Estoy viviendo un sueño. Cada tatuaje realizado aquí será
                  hecho con entrega total, no solo por el aspecto económico,
                  sino por la experiencia, el aprendizaje y la oportunidad de
                  ejercer lo que amo en un lugar donde realmente me sentí en
                  casa.
                </p>

                <p>
                  Espero cumplir plenamente las expectativas de cada persona que
                  confió en mí. Pueden estar seguros de que cada trabajo es
                  realizado con alma y corazón.
                </p>
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
