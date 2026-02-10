import type { Metadata } from "next";
import Script from "next/script";
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
        <Script id="meta-pixel" strategy="afterInteractive">{`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1659500178350933');
fbq('track', 'PageView');
        `}</Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1659500178350933&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
