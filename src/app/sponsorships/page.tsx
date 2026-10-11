import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { SectorList } from "@/components/blocks";
import { ClosingCall } from "@/components/closing-call";
import { PageHero } from "@/components/page-hero";
import { Pictogram, type PictogramName } from "@/components/pictogram";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { Text } from "@/components/ui/text";
import departureLounge from "../../../public/photos/departure-lounge.jpg";

export const metadata: Metadata = pageMetadata({
  title: "Global exchange & sponsorships",
  description:
    "RIAH SL takes part in international ICT forums, health information system convenings and developer summits, with support from sponsors and grant partners.",
  path: "/sponsorships",
});

const value: { name: string; pictogram: PictogramName; body: string }[] = [
  {
    name: "Knowledge transfer",
    pictogram: "globe",
    body: "What we learn at international forums goes into our public and private projects in the region.",
  },
  {
    name: "Regional case studies",
    pictogram: "network",
    body: "We present our own work on low-bandwidth networks, RapidPro SMS and Monime payments at international events.",
  },
  {
    name: "Sponsor visibility",
    pictogram: "tv",
    body: "Sponsors are credited across our digital channels, technical publications and event panels.",
  },
];

export default function SponsorshipsPage() {
  return (
    <>
      <PageHero
        title="Global exchange & sponsorships"
        pictogram="globe"
      >
        <p>
          We take part in international ICT forums, health information system
          convenings, developer summits and technical working groups.
        </p>
      </PageHero>

      <Section aria-labelledby="help-title">
        <SectionHead
          id="help-title"
          align="split"
          title="How sponsors help"
          lead="Development partners, technology vendors and grant-making institutions help our team attend these events."
        />
        <div className="tone-dark relative isolate mt-12 overflow-hidden rounded-lg bg-night">
          {/* A departure lounge at dusk (AI-generated placeholder) */}
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <Image
              src={departureLounge}
              alt=""
              fill
              sizes="(min-width: 1280px) 80rem, 100vw"
              placeholder="blur"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-linear-to-r from-night/95 via-night/75 to-night/20" />
          </div>
          <div className="max-w-2xl px-6 py-section-sm sm:px-10 lg:px-16 lg:py-section">
            <Heading as="h3" size="h4" className="text-(--fg-muted)">
              Our main funding need
            </Heading>
            <p className="mt-4 font-heading text-h1 text-(--fg)">
              Travel, accommodation and registration.
            </p>
            <Text size="lead" className="mt-6 max-w-md">
              Covering these is usually what decides whether our team can
              attend.
            </Text>
          </div>
        </div>
      </Section>

      <Section tone="alt" aria-labelledby="partners-title">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading id="partners-title">What partners get</Heading>
          <Button href="/contact?topic=sponsorship" variant="signal" size="lg">
            Discuss a sponsorship
          </Button>
        </div>
        <ul className="mt-12 grid border-y border-line md:grid-cols-3 md:divide-x md:divide-line">
          {value.map((v, i) => (
            <li
              key={v.name}
              className={`py-8 md:px-8 md:first:pl-0 md:last:pr-0 ${i ? "border-t border-line md:border-t-0" : ""}`}
            >
              <Pictogram name={v.pictogram} className="size-14" />
              <Heading as="h3" size="h3" className="mt-5">
                {v.name}
              </Heading>
              <Text className="mt-3">{v.body}</Text>
            </li>
          ))}
        </ul>
      </Section>

      <SectorList />

      <ClosingCall />
    </>
  );
}
