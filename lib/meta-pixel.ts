type Fbq = (...args: unknown[]) => void;

const getFbq = (): Fbq | undefined => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const fbq = (window as Window & { fbq?: Fbq }).fbq;
  return typeof fbq === "function" ? fbq : undefined;
};

export const trackWhatsAppClick = () => {
  const fbq = getFbq();

  if (!fbq) {
    return;
  }

  fbq("track", "Contact", { channel: "whatsapp" });
};
