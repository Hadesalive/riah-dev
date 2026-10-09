import Link from "next/link";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { Pictogram } from "@/components/pictogram";
import { Button } from "@/components/ui/button";
import { Card, CardLink } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Eyebrow, Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { Text } from "@/components/ui/text";
import { licensing, menu, sectors, services } from "@/lib/site";

const headline = ["Networks.", "Servers.", "SMS.", "Payments."];

const steps = [
  { name: "Audit", detail: "We map what you run today and find where it fails." },
  { name: "Design", detail: "Network, servers, integrations and security, planned before anything is bought." },
  { name: "Test", detail: "Code review, load and acceptance testing in your real conditions." },
  { name: "Deploy", detail: "A staged go-live, hardened servers and handover documents." },
  { name: "Support", detail: "Monitoring, licence renewals and someone to call when it breaks." },
];

const featured = services.filter((s) => s.id === "network" || s.id === "messaging");
const others = services.filter((s) => s.id !== "network" && s.id !== "messaging");

export default function Home() {
  return (
    <>
      {/* Hero: an inset night card that the header floats over */}
      <section className="tone-dark -mt-header bg-night-deep p-2 lg:p-3">
        <div className="relative isolate flex min-h-[min(88svh,56rem)] flex-col justify-end overflow-hidden rounded-lg bg-night pt-[calc(var(--spacing-header)+3rem)] pb-section lg:pb-section-lg">
          <HeroBackdrop />
          <Container>
            <h1 className="font-heading text-display text-fg-inverse">
              {headline.map((w, i) => (
                <span key={w} className="rise block" style={{ ["--i" as string]: i }}>
                  {w}
                </span>
              ))}
            </h1>
            <Text
              size="lead"
              className="rise mt-8 max-w-measure"
              style={{ ["--i" as string]: 4 }}
            >
              We design, install and run IT systems for ministries, health
              programmes, banks and hotels in Sierra Leone.
            </Text>
            <div className="rise mt-10 flex flex-wrap gap-3" style={{ ["--i" as string]: 5 }}>
              <Button href="/contact" variant="signal" size="lg">
                Request a consultation
              </Button>
              <Button href="/services" variant="outline" size="lg">
                See all services
              </Button>
            </div>
          </Container>
        </div>
      </section>

      {/* What we do: the quick index straight under the hero */}
      <Section tone="alt" size="sm" aria-labelledby="index-title">
        <Eyebrow id="index-title">What we do</Eyebrow>
        <ul className="mt-6 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
          {menu.map((m) => (
            <li key={m.label}>
              <Link
                href={m.href}
                className="group flex items-center gap-4 rounded-sm py-3 transition-colors duration-(--duration-fast)"
              >
                <Pictogram name={m.pictogram} className="size-10 shrink-0" />
                <span className="min-w-0">
                  <span className="block font-semibold text-fg underline decoration-transparent decoration-1 underline-offset-4 transition-colors group-hover:decoration-accent">
                    {m.label}
                  </span>
                  <span className="block text-small text-fg-muted">{m.detail}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Sectors */}
      <Section aria-labelledby="sectors-title">
        <SectionHead
          id="sectors-title"
          title="Who we work for"
          lead="Most of our clients work with unreliable power and patchy connections, so that is what we design for."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:gap-6">
          {sectors.map((s) => (
            <CardLink
              key={s.id}
              href={`/industries#${s.id}`}
              className="sm:flex-row sm:gap-6"
            >
              <Pictogram name={s.pictogram} className="size-16 shrink-0 sm:size-20" />
              <div className="mt-5 sm:mt-0">
                <Heading as="h3" size="h3">
                  {s.name}
                </Heading>
                <Text className="mt-2">{s.need}</Text>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Services they use">
                  {s.uses.map((u) => (
                    <li key={u} className="rounded-xs bg-surface-alt px-2.5 py-1 text-caption text-fg">
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </CardLink>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section tone="alt" aria-labelledby="services-title">
        <SectionHead
          id="services-title"
          align="split"
          eyebrow="Services"
          title="From the cable to the code"
          lead="We handle the network, the servers, the integrations and the licences ourselves, so you have one team to call when something stops working."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2 lg:gap-6">
          {featured.map((s) => (
            <Card key={s.id} className="shadow-md">
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <Text size="small" className="font-semibold text-accent-strong">
                    {s.title}
                  </Text>
                  <Heading as="h3" size="h3" className="mt-2">
                    {s.plain}
                  </Heading>
                </div>
                <Pictogram name={s.pictogram} className="size-14 shrink-0 sm:size-20" />
              </div>
              <ul className="mt-6 divide-y divide-line border-t border-line">
                {s.offerings.map((o) => (
                  <li key={o.name} className="py-4">
                    <span className="block font-semibold text-fg">{o.name}</span>
                    <span className="mt-1 block text-small text-fg-muted">{o.detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <Button href={`/services#${s.id}`} variant="link">
                  {s.id === "network" ? "More about networks" : "More about SMS and payments"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4 lg:gap-6">
          {others.map((s) => (
            <li key={s.id}>
              <CardLink
                href={s.id === "licensing" ? "/licensing" : `/services#${s.id}`}
                className="h-full p-6 sm:p-6"
              >
                <Pictogram name={s.pictogram} className="size-12" />
                <Heading as="h3" size="h4" className="mt-5">
                  {s.plain}
                </Heading>
                <Text size="small" className="mt-1 font-semibold text-accent-strong">
                  {s.title}
                </Text>
                <Text size="small" className="mt-3">
                  {s.summary}
                </Text>
              </CardLink>
            </li>
          ))}
        </ul>
      </Section>

      {/* How a project runs */}
      <Section tone="night" aria-labelledby="steps-title">
        <SectionHead
          id="steps-title"
          eyebrow="How we work"
          title="How a project runs"
        />
        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li key={step.name}>
              <Card look="glass" className="h-full p-6 sm:p-6">
                <span className="font-heading text-h2 text-fg-inverse-muted tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Heading as="h3" size="h4" className="mt-6">
                  {step.name}
                </Heading>
                <Text size="small" className="mt-2">
                  {step.detail}
                </Text>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      {/* Licensing */}
      <Section aria-labelledby="licensing-title">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <SectionHead
            id="licensing-title"
            align="start"
            eyebrow="Licensing"
            title="We also supply the software"
            lead="We install and renew every licence we sell."
            action={<Button href="/licensing">See licensing</Button>}
          />
          <ul className="divide-y divide-line border-y border-line">
            {licensing.map((l) => (
              <li key={l.product} className="grid grid-cols-[auto_1fr] items-start gap-x-5 py-6">
                <Pictogram name={l.pictogram} className="size-12" />
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <Heading as="h3" size="h4">
                      {l.short}
                    </Heading>
                    <Text as="span" size="caption" tone="subtle" className="uppercase tracking-wide">
                      Supplied and installed
                    </Text>
                  </div>
                  <Text size="small" className="mt-1">
                    {l.fit}
                  </Text>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Closing call */}
      <Section tone="deep" aria-labelledby="closing-title">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <SectionHead
            id="closing-title"
            align="start"
            title="Tell us what needs fixing."
            lead="A few lines is enough. We reply with questions or a proposed scope."
            action={
              <Button href="/contact" size="lg">
                Request a consultation
              </Button>
            }
          />
          <Pictogram name="sms" className="hidden size-36 lg:block" />
        </div>
      </Section>
    </>
  );
}
