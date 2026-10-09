import Link from "next/link";
import { LicensingColumns, ProjectSteps, SectorList } from "@/components/blocks";
import { ClosingCall } from "@/components/closing-call";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { Pictogram } from "@/components/pictogram";
import { Button } from "@/components/ui/button";
import { Card, CardLink } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { SectionHead } from "@/components/ui/section-head";
import { Text } from "@/components/ui/text";
import { menu, services } from "@/lib/site";

const headline = ["Networks.", "Servers.", "SMS.", "Payments."];

const featured = services.filter(
  (s) => s.id === "network" || s.id === "messaging",
);
const others = services.filter(
  (s) => s.id !== "network" && s.id !== "messaging",
);

export default function Home() {
  return (
    <>
      {/* Hero: an inset night card that the header floats over */}
      <section className="tone-dark -mt-header bg-surface p-2 lg:p-3">
        <div className="relative isolate flex min-h-[min(88svh,56rem)] flex-col justify-end overflow-hidden rounded-lg bg-night pt-[calc(var(--spacing-header)+3rem)] pb-section lg:pb-section-lg">
          <HeroBackdrop />
          <Container className="grid items-end gap-12 lg:grid-cols-[7fr_5fr] lg:gap-12">
            <div>
              <h1 className="font-heading text-display text-fg-inverse">
                {headline.map((w, i) => (
                  <span
                    key={w}
                    className="rise block"
                    style={{ ["--i" as string]: i }}
                  >
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
              <div
                className="rise mt-10 flex flex-wrap gap-3"
                style={{ ["--i" as string]: 5 }}
              >
                <Button href="/contact" variant="signal" size="lg">
                  Request a consultation
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  See all services
                </Button>
              </div>
            </div>

            {/* What we do: a frosted panel over the photo */}
            <nav
              aria-labelledby="menu-title"
              className="rise rounded-md bg-night/70 p-5 ring-1 ring-white/10 backdrop-blur-md sm:p-7"
              style={{ ["--i" as string]: 6 }}
            >
              <Heading as="h2" size="h3" id="menu-title" className="px-2">
                What we do
              </Heading>
              <ul className="mt-3 divide-y divide-(--hairline)">
                {menu.map((m) => (
                  <li key={m.label}>
                    <Link
                      href={m.href}
                      className="group flex items-center gap-4 rounded-sm px-2 py-2.5 transition-colors duration-(--duration-fast) hover:bg-white/[0.06]"
                    >
                      <Pictogram
                        name={m.pictogram}
                        className="size-10 shrink-0"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-fg-inverse">
                          {m.label}
                        </span>
                        <span className="block text-small text-fg-inverse-muted">
                          {m.detail}
                        </span>
                      </span>
                      <svg
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        className="size-3.5 shrink-0 text-fg-inverse-muted opacity-0 transition-[opacity,translate] duration-(--duration-fast) group-hover:translate-x-0.5 group-hover:opacity-100"
                      >
                        <path
                          d="M5 11 L11 5 M6 5 H11 V10"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          fill="none"
                          strokeLinecap="round"
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </div>
      </section>

      <SectorList />

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
                  <Text
                    size="small"
                    className="font-semibold text-accent-strong"
                  >
                    {s.title}
                  </Text>
                  <Heading as="h3" size="h3" className="mt-2">
                    {s.plain}
                  </Heading>
                </div>
                <Pictogram
                  name={s.pictogram}
                  className="size-14 shrink-0 sm:size-20"
                />
              </div>
              <ul className="mt-6 divide-y divide-line border-t border-line">
                {s.offerings.map((o) => (
                  <li key={o.name} className="py-4">
                    <span className="block font-semibold text-fg">
                      {o.name}
                    </span>
                    <span className="mt-1 block text-small text-fg-muted">
                      {o.detail}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <Button href={`/services#${s.id}`} variant="link">
                  {s.id === "network"
                    ? "More about networks"
                    : "More about SMS and payments"}
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
                <Text
                  size="small"
                  className="mt-1 font-semibold text-accent-strong"
                >
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

      <ProjectSteps />

      <LicensingColumns />

      <ClosingCall />
    </>
  );
}
