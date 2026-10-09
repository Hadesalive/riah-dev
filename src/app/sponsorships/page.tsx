import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SectorList } from "@/components/blocks";
import { ClosingCall } from "@/components/closing-call";
import { PageHero } from "@/components/page-hero";
import { Pictogram, type PictogramName } from "@/components/pictogram";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { Text } from "@/components/ui/text";

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
        eyebrow="Global exchange"
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
        <Card className="mt-12 gap-3 shadow-md lg:grid lg:grid-cols-2 lg:items-baseline lg:gap-12">
          <Heading as="h2" size="h3">
            Our main funding need
          </Heading>
          <Text size="lead">
            Travel, accommodation and registration. Covering these is usually
            what decides whether our team can attend.
          </Text>
        </Card>
      </Section>

      <Section tone="alt" aria-labelledby="partners-title">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Heading id="partners-title">What partners get</Heading>
          <Button href="/contact?topic=sponsorship" variant="signal" size="lg">
            Discuss a sponsorship
          </Button>
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-3 lg:gap-6">
          {value.map((v) => (
            <li key={v.name}>
              <Card className="h-full">
                <Pictogram name={v.pictogram} className="size-14" />
                <Heading as="h3" size="h4" className="mt-5">
                  {v.name}
                </Heading>
                <Text className="mt-2">{v.body}</Text>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <SectorList />

      <ClosingCall />
    </>
  );
}
