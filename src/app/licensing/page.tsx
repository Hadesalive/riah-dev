import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ClosingCall } from "@/components/closing-call";
import { PageHero } from "@/components/page-hero";
import { Pictogram } from "@/components/pictogram";
import { Card } from "@/components/ui/card";
import { Eyebrow, Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { licensing } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Zoho, firewall licences & Waka TV in Sierra Leone",
  description:
    "Zoho CRM, Desk, Workplace and MDM, next-generation firewall licences and Waka TV enterprise IPTV, supplied, installed and renewed in Sierra Leone by RIAH SL.",
  path: "/licensing",
});

export default function LicensingPage() {
  return (
    <>
      <PageHero eyebrow="Licensing" title="Software & licences" pictogram="key">
        <p>
          We supply the licences and set up the products, so the people who
          sell them to you are the people who install and renew them.
        </p>
      </PageHero>

      <Section tone="alt">
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
          {licensing.map((row) => (
            <Card key={row.product} as="article" className="shadow-md">
              <Pictogram name={row.pictogram} className="size-16" />
              <Heading as="h2" size="h3" className="mt-6">
                {row.product}
              </Heading>
              <Eyebrow className="mt-6">What we do</Eyebrow>
              <Text className="mt-2">{row.services}</Text>
              <Eyebrow className="mt-6">Suited to</Eyebrow>
              <Text className="mt-2">{row.fit}</Text>
            </Card>
          ))}
        </div>
        <Text size="lead" className="mt-10">
          Ask for a quote that combines licences with installation and support.
        </Text>
      </Section>

      <ClosingCall />
    </>
  );
}
