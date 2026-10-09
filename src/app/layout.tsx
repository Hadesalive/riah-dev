import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next, Bowlby_One, Geist } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ogImage, organizationJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

// Geist for headings, a highly legible sans for everything read. Showcard
// lettering stays only until the inner pages move to the new system.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});
const showcard = Bowlby_One({
  variable: "--font-showcard",
  weight: "400",
  subsets: ["latin"],
});
const body = Atkinson_Hyperlegible_Next({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "RIAH SL — Network, cloud and payment engineering in Sierra Leone",
    template: "%s | RIAH SL",
  },
  description: site.description,
  keywords: [
    "network consultancy Sierra Leone",
    "RapidPro SMS integration",
    "Monime payment gateway",
    "application deployment testing",
    "DHIS2 implementation",
    "Linux system administration",
    "Zoho implementation Sierra Leone",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.legalName,
    locale: "en_GB",
    url: "/",
    title: "RIAH SL — Network, cloud and payment engineering in Sierra Leone",
    description: site.description,
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", images: [ogImage.url] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${geist.variable} ${showcard.variable} ${body.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only z-50 bg-sign px-4 py-2 font-bold text-ink focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
