import type { Metadata } from "next";
import { services, site } from "@/lib/site";

/** Link-preview card shared by every page (public/og.png, 1200×630). */
export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "RIAH SL: networks, servers, SMS and payments in Sierra Leone",
};

/** Per-page metadata: canonical URL plus matching Open Graph and Twitter cards. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.legalName,
      locale: "en_GB",
      url: path,
      title: `${title} | ${site.name}`,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [ogImage.url],
    },
  };
}

/** Schema.org description of the company, rendered once in the root layout. */
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#organization`,
      name: site.legalName,
      alternateName: site.name,
      url: site.url,
      logo: `${site.url}/brand/riah-logo.png`,
      image: `${site.url}/og.png`,
      email: site.email,
      description: site.description,
      address: { "@type": "PostalAddress", addressCountry: "SL" },
      areaServed: [
        { "@type": "Country", name: "Sierra Leone" },
        { "@type": "Place", name: "West Africa" },
      ],
      knowsAbout: [
        "Network consultancy",
        "Network security and firewalls",
        "Starlink and fibre multi-WAN",
        "RapidPro SMS",
        "Monime mobile money integration",
        "DHIS2",
        "Linux server administration",
        "PostgreSQL",
        "Application testing and deployment",
        "Zoho implementation",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.summary,
            url: s.id === "licensing" ? `${site.url}/licensing` : `${site.url}/services#${s.id}`,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.legalName,
      inLanguage: "en-GB",
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};
