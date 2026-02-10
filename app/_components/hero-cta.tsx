"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroCtaProps = {
  label: string;
  href: string;
  className?: string;
};

const HeroCta = ({ label, href, className }: HeroCtaProps) => {
  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "bg-white text-black hover:bg-gray-200 transition-colors uppercase tracking-widest text-xs md:text-sm w-full sm:w-auto",
        className,
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {label}
      </a>
    </Button>
  );
};

export default HeroCta;
