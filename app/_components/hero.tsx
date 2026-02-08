import Image from "next/image";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-zinc-950 text-white pt-20"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagem-lucas.jpeg"
          alt="Tattoo Studio"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl mb-4 tracking-tight">
              Lucas Tatto
            </h1>
          </div>

          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl leading-relaxed">
            Historias únicas transformadas en arte que vive en la piel.
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 border border-white/30 rounded-full p-2">
        <ArrowDown className="h-5 w-5" />
      </div>
    </section>
  );
};

export default Hero;
