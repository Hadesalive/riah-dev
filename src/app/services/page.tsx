import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ClosingCall } from "@/components/closing-call";
import { PageHero } from "@/components/page-hero";
import { Pictogram } from "@/components/pictogram";
import { SubNav } from "@/components/sub-nav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { services } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Network, server, SMS & DHIS2 services in Sierra Leone",
  description:
    "Network consultancy, firewalls, Starlink and fibre, RapidPro SMS, Monime mobile money, app testing, Linux and PostgreSQL, and DHIS2 in Sierra Leone.",
  path: "/services",
});

const engineering = services.filter((s) => s.offerings.length > 0);

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Services" pictogram="servers">
        <p>
          Five kinds of engineering work, done by one team. Most projects use
          two or three of them together.
        </p>
      </PageHero>

      <SubNav
        label="Services on this page"
        items={engineering.map((s) => ({ id: s.id, label: s.short, pictogram: s.pictogram }))}
      />

      {engineering.map((s, i) => (
        <Section
          key={s.id}
          id={s.id}
          tone={i % 2 ? "alt" : "surface"}
          aria-labelledby={`${s.id}-title`}
          className="scroll-mt-32"
        >
          <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <div>
              <Pictogram name={s.pictogram} className="size-20 sm:size-24" />
              <Text size="small" className="mt-6 font-semibold text-accent-strong">
                {s.title}
              </Text>
              <Heading id={`${s.id}-title`} className="mt-2">
                {s.plain}
              </Heading>
              <Text size="lead" className="mt-4 max-w-md">
                {s.summary}
              </Text>
            </div>
            <dl className="divide-y divide-line border-y border-line lg:mt-2">
              {s.offerings.map((o) => (
                <div key={o.name} className="py-6">
                  <dt className="font-heading text-h4 text-fg">{o.name}</dt>
                  <dd className="mt-1.5 max-w-2xl text-fg-muted">{o.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>
      ))}

      <Section tone="alt" size="sm" aria-labelledby="supply-title">
        <Card className="items-start gap-6 shadow-md sm:flex-row sm:items-center">
          <Pictogram name="key" className="size-16 shrink-0" />
          <div className="flex-1">
            <Heading as="h2" size="h3" id="supply-title">
              Buying the software and hardware too?
            </Heading>
            <Text className="mt-2">
              We supply and install Zoho products, next-generation firewall
              licences and Waka TV.
            </Text>
          </div>
          <Button href="/licensing">See licensing</Button>
        </Card>
      </Section>

      <ClosingCall />
    </>
  );
}
