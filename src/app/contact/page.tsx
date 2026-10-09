import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Suspense } from "react";
import { ContactForm, TopicAwareContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Request a technical consultation",
  description:
    "Contact RIAH SL in Sierra Leone about network consultancy, RapidPro SMS and Monime integration, application testing, Linux servers, DHIS2 or software licensing.",
  path: "/contact",
});

const emails = [
  { label: "New projects", address: site.email },
  { label: "Existing clients", address: site.supportEmail },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Request a technical consultation" pictogram="sms">
        <p>
          Tell us what you run today and what you need. The more detail you
          give, the more useful our first reply will be.
        </p>
      </PageHero>

      <Section tone="alt" className="flex-1">
        <div className="grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-12">
          <dl className="space-y-8">
            {emails.map((e) => (
              <div key={e.address}>
                <Text as="dt" size="small">
                  {e.label}
                </Text>
                <dd className="mt-1">
                  <a
                    href={`mailto:${e.address}`}
                    className="font-heading text-h3 break-all text-fg underline decoration-line decoration-1 underline-offset-[6px] transition-colors duration-(--duration-fast) hover:decoration-accent"
                  >
                    {e.address}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <Card as="section" aria-label="Consultation request form" className="shadow-md">
            <Suspense fallback={<ContactForm />}>
              <TopicAwareContactForm />
            </Suspense>
          </Card>
        </div>
      </Section>
    </>
  );
}
