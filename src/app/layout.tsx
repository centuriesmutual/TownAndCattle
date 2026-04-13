import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Town & Cattle — The Digital Stockyard",
  description:
    "A multi-domain commerce and identity ecosystem by Centuries Mutual, LLC. Centralized trust, deterministic routing, and modern settlement—built with the discipline of German engineering and the plainspoken integrity of the Texas stockyard.",
  metadataBase: new URL("https://townandcattle.com"),
  openGraph: {
    title: "Town & Cattle — The Digital Stockyard",
    description:
      "One backend. Many storefronts. Rule-driven commerce across townandcattle.com and partner domains.",
    siteName: "Town & Cattle",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${newsreader.variable} ${ibmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
