import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProjectSteps, SectorList, ServiceCards } from "@/components/blocks";
import { ClosingCall } from "@/components/closing-call";
import { PageHero } from "@/components/page-hero";
import { Pictogram, type PictogramName } from "@/components/pictogram";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { Text } from "@/components/ui/text";

export const metadata: Metadata = pageMetadata({
  title: "About us: IT engineers in Sierra Leone",
  description:
    "RIAH SL Limited is an ICT engineering company in Sierra Leone: networks, Linux servers, software testing, RapidPro SMS, Monime payments and DHIS2.",
  path: "/about",
});

const capabilities: { name: string; pictogram: PictogramName; body: string }[] =
  [
    {
      name: "Network and application consultancy",
      pictogram: "testing",
      body: "Architecture reviews, application testing and production deployments.",
    },
    {
      name: "Messaging and payment integration",
      pictogram: "sms",
      body: "Automated SMS through RapidPro, connected to mobile money through Monime.",
    },
    {
      name: "Networks and servers",
      pictogram: "network",
      body: "Networks with backup links, and hardened Linux servers that stay up.",
    },
    {
      name: "Public health informatics",
      pictogram: "health",
      body: "DHIS2 set up for each programme, and the data-collection tablets that feed it.",
    },
  ];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Engineers, based in Sierra Leone"
        pictogram="globe"
      >
        <p>
          RIAH SL Limited works on networks, Linux servers, software testing and
          deployment, RapidPro SMS, Monime payments and DHIS2.
        </p>
      </PageHero>

      <Section aria-labelledby="how-title">
        <SectionHead
          id="how-title"
          align="split"
          title="How we work"
          lead="We design for limited bandwidth and unreliable power, and we hand over systems your own team can run after we leave."
        />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {capabilities.map((c) => (
            <li key={c.name}>
              <Card className="h-full">
                <Pictogram name={c.pictogram} className="size-14" />
                <Heading as="h3" size="h4" className="mt-5">
                  {c.name}
                </Heading>
                <Text className="mt-2">{c.body}</Text>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <ProjectSteps />

      <SectorList />

      <ServiceCards />

      <ClosingCall />
    </>
  );
}
