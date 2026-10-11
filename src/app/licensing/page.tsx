import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { SectorList, ServiceCards } from "@/components/blocks";
import { ClosingCall } from "@/components/closing-call";
import { PageHero } from "@/components/page-hero";
import { Pictogram } from "@/components/pictogram";
import { Heading } from "@/components/ui/heading";
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
      <PageHero title="Software & licences" pictogram="key">
        <p>
          We supply the licences and set up the products, so the people who sell
          them to you are the people who install and renew them.
        </p>
      </PageHero>

      <Section tone="alt" aria-label="Products we supply">
        <ul className="tone-light divide-y divide-line overflow-hidden rounded-md bg-surface shadow-md ring-1 ring-line">
          {licensing.map((row) => (
            <li
              key={row.product}
              className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[4fr_5fr_5fr] lg:gap-12 lg:p-10"
            >
              <div className="flex items-center gap-5 lg:block">
                <Pictogram name={row.pictogram} className="size-14 shrink-0 lg:size-16" />
                <Heading as="h2" size="h3" className="lg:mt-5">
                  {row.product}
                </Heading>
              </div>
              <div>
                <Text size="small" className="font-semibold text-fg">
                  What we do
                </Text>
                <Text className="mt-2">{row.services}</Text>
              </div>
              <div>
                <Text size="small" className="font-semibold text-fg">
                  Suited to
                </Text>
                <Text className="mt-2">{row.fit}</Text>
              </div>
            </li>
          ))}
        </ul>
        <Text size="lead" className="mt-10">
          Ask for a quote that combines licences with installation and support.
        </Text>
      </Section>

      <ServiceCards except={["licensing"]} tone="surface" />

      <SectorList tone="alt" />

      <ClosingCall />
    </>
  );
}
