"use client";

import Image from "next/image";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Instagram, Menu, MessageCircle } from "lucide-react";
import { translations } from "@/lib/translations";
import { useLanguage } from "./language-provider";

const socialItems = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5511999999999",
    icon: MessageCircle,
  },
];

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const navItems = t.header.navItems;
  const flagSrc = language === "es" ? "/brasil.png" : "/espanha.png";
  const flagAlt = t.header.flagAlt;
  const toggleLabel = t.header.toggleLabel;
  const sheetLanguageLabel = t.header.sheetLanguageLabel;
  const menuLabel = t.header.menuLabel;

  return (
    <header className="fixed top-0 left-0 right-0 h-[var(--header-height)] bg-zinc-950/95 backdrop-blur-sm z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto h-full px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white flex items-center justify-center">
              <span className="text-black text-xl font-serif">LS</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm tracking-wider hover:text-gray-400 transition-colors uppercase text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {socialItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="hover:text-gray-400 transition-colors text-white"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                aria-label={menuLabel}
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-zinc-950/95 backdrop-blur-sm text-white border-zinc-800 p-6"
            >
              <div className="flex flex-col">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <a
                        href={item.href}
                        className="text-sm tracking-wider hover:text-gray-400 transition-colors uppercase text-left text-white"
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                  <div className="flex gap-4 mt-4">
                    {socialItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <SheetClose key={item.href} asChild>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                            className="hover:text-gray-400 transition-colors text-white"
                          >
                            <Icon size={20} />
                          </a>
                        </SheetClose>
                      );
                    })}
                  </div>
                </nav>
                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <button
                    type="button"
                    onClick={toggleLanguage}
                    aria-label={toggleLabel}
                    className="flex items-center gap-3 text-sm tracking-wider uppercase text-white hover:text-gray-400 transition-colors"
                  >
                    <Image
                      src={flagSrc}
                      alt={flagAlt}
                      width={28}
                      height={28}
                      className="h-7 w-7 object-contain"
                    />
                    <span>{sheetLanguageLabel}</span>
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
