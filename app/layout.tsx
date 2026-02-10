import type { Metadata } from "next";
import { Geist_Mono, Inter, Merriweather, Sacramento } from "next/font/google";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans-next",
  weight: ["400", "500", "600", "700"],
});

const fontSerif = Merriweather({
  subsets: ["latin"],
  variable: "--font-serif-next",
  weight: ["400", "700"],
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono-next",
  weight: ["400", "500", "600", "700"],
});

const fontScript = Sacramento({
  subsets: ["latin"],
  variable: "--font-script-next",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Lucas Tattooo",
  description:
    "Portfólio de Lucas Tattooo: tatuagens autorais, agenda e contato.",
  icons: {
    icon: "/logo-lt-removebg-preview.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} ${fontScript.variable} dark antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
