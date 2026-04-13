import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Town & Cattle — Premium Beef, Direct from Ranchers",
  description:
    "Shop premium beef direct from verified ranchers. Traceable sourcing, fair pricing without middleman markup, delivered to your door. Centuries Mutual, LLC.",
  metadataBase: new URL("https://townandcattle.com"),
  openGraph: {
    title: "Town & Cattle — Premium Beef Marketplace",
    description:
      "Better quality beef from the source. Competitive prices. Confidence in every cut.",
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
      className={`${sourceSerif.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="tc-body flex min-h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
