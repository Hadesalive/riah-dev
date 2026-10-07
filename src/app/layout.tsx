import type { Metadata } from "next";
import { Atkinson_Hyperlegible_Next, Bowlby_One } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import "./globals.css";

// Showcard lettering for the signs, a highly legible sans for everything read
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
  openGraph: {
    type: "website",
    siteName: site.legalName,
    url: site.url,
    description: site.description,
    images: [{ url: "/brand/riah-logo.png", width: 2896, height: 616, alt: site.legalName }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${showcard.variable} ${body.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
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
