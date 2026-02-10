"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { LucideIcon } from "lucide-react";
import { Instagram, Menu } from "lucide-react";
import { translations, type Language } from "@/lib/translations";
import { useLanguage } from "./language-provider";


type SocialItem =
  | {
      label: string;
      href: string;
      icon: LucideIcon;
    }
  | {
      label: string;
      href: string;
      imageSrc: string;
      imageAlt?: string;
      width?: number;
      height?: number;
    };

const socialItems: SocialItem[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/lucastatt00s/",
    icon: Instagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5511993461896",
    imageSrc: "/whatsapp-icon.svg",
    imageAlt: "WhatsApp",
  },
];

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const navItems = t.header.navItems;
  const languageLabel = t.header.languageLabel;
  const languageOptions: Array<{
    value: Language;
    label: string;
    flagSrc: string;
    flagAlt: string;
  }> = [
    {
      value: "es",
      label: t.header.languageOptions.es,
      flagSrc: "/espanha.png",
      flagAlt: t.header.languageFlags.es,
    },
    {
      value: "pt",
      label: t.header.languageOptions.pt,
      flagSrc: "/brasil.png",
      flagAlt: t.header.languageFlags.pt,
    },
    {
      value: "en",
      label: t.header.languageOptions.en,
      flagSrc: "/estados-unidos-da-america.png",
      flagAlt: t.header.languageFlags.en,
    },
  ];
  const menuLabel = t.header.menuLabel;
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    navItems[0]?.href.replace("#", "") ?? "",
  );

  useEffect(() => {
    const sectionIds = navItems
      .map((item) => item.href.replace("#", ""))
      .filter(Boolean);

    if (sectionIds.length === 0) {
      return;
    }

    const getHeaderOffset = () => {
      const rootStyles = window.getComputedStyle(document.documentElement);
      const rawValue = rootStyles.getPropertyValue("--header-height").trim();
      const fontSize = parseFloat(rootStyles.fontSize) || 16;

      if (rawValue.endsWith("rem")) {
        const remValue = parseFloat(rawValue);
        return Number.isNaN(remValue) ? 72 : remValue * fontSize;
      }

      if (rawValue.endsWith("px")) {
        const pxValue = parseFloat(rawValue);
        return Number.isNaN(pxValue) ? 72 : pxValue;
      }

      const fallbackValue = parseFloat(rawValue);
      return Number.isNaN(fallbackValue) ? 72 : fallbackValue;
    };

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + getHeaderOffset() + 1;
      let currentSection = sectionIds[0];

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (!section) {
          continue;
        }

        if (section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [navItems]);
  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    closeSheet = false,
  ) => {
    if (!href.startsWith("#")) {
      return;
    }

    event.preventDefault();
    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    if (closeSheet) {
      setSheetOpen(false);
    }

    const delay = closeSheet ? 200 : 0;
    window.setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, delay);
  };

  const handleLanguageChange = (value: string) => {
    if (value === language) {
      return;
    }

    if (value === "es" || value === "pt" || value === "en") {
      setLanguage(value);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-[var(--header-height)] bg-zinc-950/95 backdrop-blur-sm z-50 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto h-full px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/logo-lt-removebg-preview.png"
                alt="LT"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => handleNavClick(event, item.href)}
                className="text-sm tracking-wider hover:text-gray-400 transition-colors uppercase text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="border-zinc-800  text-white bg-transparent hover:border-zinc-600 focus-visible:ring-zinc-600 focus-visible:border-zinc-600">
                <SelectValue placeholder={languageLabel} />
              </SelectTrigger>
              <SelectContent
                position="popper"
                side="bottom"
                sideOffset={8}
                avoidCollisions={false}
                className="bg-zinc-950 text-white border-zinc-800"
              >
                {languageOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    <span className="flex items-center gap-2">
                      <Image
                        src={option.flagSrc}
                        alt={option.flagAlt}
                        width={18}
                        height={18}
                        className="h-4 w-4 object-contain"
                      />
                      <span>{option.label}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {socialItems.map((item) => {
              if ("imageSrc" in item) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="hover:text-gray-400 transition-colors text-white"
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt ?? item.label}
                      width={item.width ?? 20}
                      height={item.height ?? 20}
                      className="h-5 w-5 object-contain"
                    />
                  </a>
                );
              }

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

          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
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
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) =>
                          handleNavClick(event, item.href, true)
                        }
                        className={`text-sm tracking-wider hover:text-gray-400 transition-colors uppercase text-left text-white border-l-2 pl-4 ${
                          activeSection === item.href.replace("#", "")
                            ? "border-white"
                            : "border-transparent"
                        }`}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  ))}
                  <div className="flex gap-4 mt-4">
                    {socialItems.map((item) => {
                      if ("imageSrc" in item) {
                        return (
                          <SheetClose key={item.href} asChild>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={item.label}
                              className="hover:text-gray-400 transition-colors text-white"
                            >
                              <Image
                                src={item.imageSrc}
                                alt={item.imageAlt ?? item.label}
                                width={item.width ?? 20}
                                height={item.height ?? 20}
                                className="h-5 w-5 object-contain"
                              />
                            </a>
                          </SheetClose>
                        );
                      }

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
                  <div className="space-y-2">
                    <span className="text-xs tracking-widest uppercase text-gray-400">
                      {languageLabel}
                    </span>
                    <Select
                      value={language}
                      onValueChange={handleLanguageChange}
                    >
                      <SelectTrigger className="w-full border-zinc-800 text-white bg-transparent hover:border-zinc-600 focus-visible:ring-zinc-600 focus-visible:border-zinc-600">
                        <SelectValue placeholder={languageLabel} />
                      </SelectTrigger>
                      <SelectContent
                        position="popper"
                        side="bottom"
                        sideOffset={8}
                        avoidCollisions={false}
                        className="bg-zinc-950 text-white border-zinc-800"
                      >
                        {languageOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            <span className="flex items-center gap-2">
                              <Image
                                src={option.flagSrc}
                                alt={option.flagAlt}
                                width={18}
                                height={18}
                                className="h-4 w-4 object-contain"
                              />
                              <span>{option.label}</span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
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
