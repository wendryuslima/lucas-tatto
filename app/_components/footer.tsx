"use client";

import { ArrowUp } from "lucide-react";
import type { MouseEvent } from "react";
import { translations } from "@/lib/translations";
import { useLanguage } from "./language-provider";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const handleBackToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.querySelector("#home");

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white flex items-center justify-center">
              <span className="text-black font-serif">LS</span>
            </div>
            <span className="text-sm text-gray-400">Lucas Silva</span>
          </div>

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>

          <a
            href="#home"
            onClick={handleBackToTop}
            className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2"
          >
            {t.footer.backToTop}
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
