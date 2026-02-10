"use client";

import Image from "next/image";
import { Instagram, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { translations } from "@/lib/translations";
import { useLanguage } from "./language-provider";
import Link from "next/link";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="contato"
      className="bg-zinc-950 text-white py-20 md:py-32 overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center mb-12 md:mb-16 tracking-tight uppercase"
        >
          {t.contact.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 min-w-0"
          >
            <h3 className="text-2xl mb-6 tracking-wide">
              {t.contact.subtitle}
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold mb-1">{t.contact.studioLabel}</p>
                  <p className="text-gray-400">{t.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold mb-1">{t.contact.emailLabel}</p>
                  <a
                    href="mailto:contato@devila.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    lucas@exemplo.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <a
                href="https://www.instagram.com/lucastatt00s/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5511993461896"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
              >
                <Image
                  src="/whatsapp-icon.svg"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-6 bg-zinc-800 border border-zinc-700 text-white p-8 md:p-12 min-w-0"
          >
            <h3 className="text-2xl tracking-wide">{t.contact.rightTitle}</h3>
            <p className="text-gray-300">{t.contact.rightDescription}</p>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5511993461896"
            >
              <Button
                type="button"
                className="bg-white text-black px-8 py-4 hover:bg-gray-200 transition-all duration-300 uppercase tracking-widest text-sm w-full"
              >
                {t.contact.buttonLabel}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
