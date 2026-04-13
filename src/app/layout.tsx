import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
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
      className={`${playfair.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="tc-body flex min-h-full flex-col">{children}</body>
    </html>
  );
}
