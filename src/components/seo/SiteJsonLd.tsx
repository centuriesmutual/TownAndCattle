import {
  MARKET_PRODUCTS,
  OG_IMAGE_URL,
  SITE_URL,
} from "@/data/site";

export function SiteJsonLd() {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Town & Cattle",
    alternateName: "Centuries Mutual, LLC",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: OG_IMAGE_URL,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${SITE_URL}/#contact`,
      areaServed: "US",
      availableLanguage: ["English", "German"],
    },
    sameAs: [
      "https://github.com/centuriesmutual/TownAndCattle",
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Town & Cattle",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Town & Cattle",
    image: OG_IMAGE_URL,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "State",
      name: "Texas",
    },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };

  const itemList = {
    "@type": "ItemList",
    name: "Featured beef cuts",
    itemListElement: MARKET_PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.description,
        image: p.image,
        sku: p.sku,
        brand: {
          "@type": "Brand",
          name: "Town & Cattle",
        },
        offers: {
          "@type": "Offer",
          price: p.price,
          priceCurrency: p.priceCurrency,
          availability: "https://schema.org/PreOrder",
          url: `${SITE_URL}/#shop`,
        },
      },
    })),
  };

  const graph = [
    organization,
    website,
    localBusiness,
    breadcrumb,
    itemList,
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}
