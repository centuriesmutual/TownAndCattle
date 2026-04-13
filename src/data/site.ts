/** Shared constants for SEO JSON-LD and product markup */
export const SITE_URL = "https://townandcattle.com";

/** 1200×630 crop for Open Graph / Twitter */
export const OG_IMAGE_URL =
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&h=630&q=80";

export const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=80";

export type MarketProduct = {
  name: string;
  description: string;
  ranch: string;
  price: string;
  priceCurrency: string;
  grade: string;
  image: string;
  sku: string;
};

export const MARKET_PRODUCTS: MarketProduct[] = [
  {
    name: "Bone-in ribeye steak",
    description:
      "Premium bone-in ribeye from Llano Estacado Ranch—marbled, dry-aged ready for the grill.",
    ranch: "Llano Estacado Ranch",
    price: "48.00",
    priceCurrency: "USD",
    grade: "USDA Prime",
    sku: "tc-ribeye-bone-in",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Filet mignon pair",
    description:
      "Tender filet mignon two-pack from Red River Cattle Co., grass-fed and ranch-verified.",
    ranch: "Red River Cattle Co.",
    price: "62.00",
    priceCurrency: "USD",
    grade: "Premium Choice+",
    sku: "tc-filet-pair",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Whole packer brisket",
    description:
      "Full packer brisket from Caprock Heritage Beef—smokehouse ready, Angus verified.",
    ranch: "Caprock Heritage Beef",
    price: "12.00",
    priceCurrency: "USD",
    grade: "Angus verified",
    sku: "tc-brisket-packer",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Strip steak bundle",
    description:
      "New York strip bundle from West Texas Prime, dry-aged 21 days for deep flavor.",
    ranch: "West Texas Prime",
    price: "39.00",
    priceCurrency: "USD",
    grade: "Dry-aged 21d",
    sku: "tc-strip-bundle",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80",
  },
];
