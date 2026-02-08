"use client";

import Image from "next/image";
import { translations } from "@/lib/translations";
import { useLanguage } from "./language-provider";

const WhatsappFloat = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.ariaLabel}
      className="fixed bottom-6 right-1 z-50 w-10 h-10 md:w-16 md:h-16 rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.35)] flex items-center justify-center transition-transform duration-200 hover:scale-105"
    >
      <Image
        src="/whatsapp-icon.svg"
        alt=""
        width={40}
        height={40}
        className="w-8 h-8 md:w-9 md:h-9"
        priority
      />
    </a>
  );
};

export default WhatsappFloat;
