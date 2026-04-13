import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Cormorant_Garamond, IBM_Plex_Sans } from "next/font/google";
import { SiteJsonLd } from "@/components/seo/SiteJsonLd";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const ibmSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

/** Browser tab title — unchanged per product requirement */
export const metadata: Metadata = {
  title: "Town & Cattle — Premium Beef, Direct from Ranchers",
  description:
    "Buy premium beef online—grass-fed beef direct from ranch. Best beef prices online. Order ranch beef; buy beef direct from rancher. Traceable Texas beef, no middleman markup.",
  keywords: [
    "buy premium beef online",
    "grass-fed beef direct from ranch",
    "best beef prices online",
    "order ranch beef",
    "buy beef direct from rancher",
    "Town and Cattle",
    "Texas beef marketplace",
  ],
  authors: [{ name: "Centuries Mutual, LLC", url: "https://townandcattle.com" }],
  creator: "Centuries Mutual, LLC",
  publisher: "Centuries Mutual, LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "/",
  },
  metadataBase: new URL("https://townandcattle.com"),
  openGraph: {
    title: "Town & Cattle — Ranch to Table. No Middleman.",
    description:
      "Buy premium beef online from verified ranchers. Grass-fed and ranch-direct cuts, fair pricing, traceable sourcing—Hill Country craft meets German precision.",
    url: "https://townandcattle.com",
    siteName: "Town & Cattle",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Premium marbled beef—Town and Cattle ranch-direct marketplace hero image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Town & Cattle — Premium Beef, Direct from Ranchers",
    description:
      "Buy premium beef online. Grass-fed beef direct from ranch, best prices, order ranch beef with traceability.",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
    site: "@townandcattle",
    creator: "@townandcattle",
  },
  category: "food",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1410",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${ibmSans.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="tc-body flex min-h-full flex-col">
        {children}
        <SiteJsonLd />
        <Analytics />
      </body>
    </html>
  );
}
