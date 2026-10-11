import Link from "next/link";
import { licensing, sectors, services, steps } from "@/lib/site";
import { Pictogram } from "./pictogram";
import { Button } from "./ui/button";
import { Heading } from "./ui/heading";
import { Section } from "./ui/section";
import { SectionHead } from "./ui/section-head";
import { Text } from "./ui/text";

/*
  Content sections shared between pages. Each one has its own shape (list,
  timeline, columns, cards) so a page reads as a sequence, not a stack of
  identical grids.
*/

/** The five stages as one connected timeline on an inset night panel. */
export function ProjectSteps() {
  return (
    <Section aria-labelledby="steps-title">
      <div className="tone-dark relative isolate overflow-hidden rounded-lg bg-night px-6 py-section-sm sm:px-10 lg:px-16 lg:py-section">
        {/* A soft light from the top right gives the panel depth */}
        <div
          aria-hidden="true"
          className="absolute -top-1/2 -right-1/4 -z-10 size-[48rem] rounded-full bg-accent/20 blur-3xl"
        />
        <SectionHead
          id="steps-title"
          align="split"
          title="How a project runs"
          action={
            <Button href="/contact" variant="solid">
              Request a consultation
            </Button>
          }
        />
        <ol className="mt-14 grid gap-y-10 lg:grid-cols-5 lg:gap-x-8">
          {steps.map((step, i) => (
            <li
              key={step.name}
              className="relative grid grid-cols-[3rem_1fr] gap-x-5 lg:block"
            >
              {/* Connector to the next step: down on mobile, across on desktop */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-14 -bottom-8 left-6 w-px bg-linear-to-b from-signal/70 to-white/15 lg:top-6 lg:right-[-2rem] lg:bottom-auto lg:left-16 lg:h-px lg:w-auto lg:bg-linear-to-r"
                />
              )}
              <span
                className={`relative flex size-12 items-center justify-center rounded-full font-heading text-small font-semibold tabular-nums ${
                  i === 0
                    ? "bg-signal text-fg"
                    : "bg-night text-fg-inverse ring-1 ring-white/20"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="lg:mt-6">
                <Heading as="h3" size="h4" className="pt-2.5 lg:pt-0">
                  {step.name}
                </Heading>
                <Text size="small" className="mt-2 max-w-xs">
                  {step.detail}
                </Text>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}

/** Sectors as a split list: the head stays put while the rows scroll past. */
export function SectorList({ tone = "surface" }: { tone?: "surface" | "alt" }) {
  return (
    <Section tone={tone} aria-labelledby="sectors-title">
      <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHead
            id="sectors-title"
            title="Who we work for"
            lead="Most of our clients work with unreliable power and patchy connections, so that is what we design for."
            action={
              <Button href="/industries" variant="outline">
                See industries
              </Button>
            }
          />
        </div>
        <ul className="divide-y divide-line border-y border-line">
          {sectors.map((s) => (
            <li key={s.id}>
              <Link
                href={`/industries#${s.id}`}
                className="group grid grid-cols-[auto_1fr] gap-x-5 py-7 sm:gap-x-8"
              >
                <Pictogram name={s.pictogram} className="size-14 sm:size-16" />
                <div>
                  <Heading
                    as="h3"
                    size="h3"
                    className="underline decoration-transparent decoration-1 underline-offset-[6px] transition-colors duration-(--duration-fast) group-hover:decoration-accent"
                  >
                    {s.name}
                  </Heading>
                  <Text className="mt-2">{s.need}</Text>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Services they use">
                    {s.uses.map((u) => (
                      <li
                        key={u}
                        className={`rounded-xs px-2.5 py-1 text-caption text-fg ${
                          tone === "alt" ? "bg-surface" : "bg-surface-alt"
                        }`}
                      >
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/**
 * Every service as one ruled index: name on the left, what it covers on the
 * right, a row each. Any number of rows sits cleanly, so `except` can drop the
 * ones a page already covers without leaving a stray card.
 */
export function ServiceCards({
  except = [],
  tone = "alt",
}: {
  except?: string[];
  tone?: "surface" | "alt";
}) {
  const list = services.filter((s) => !except.includes(s.id));
  return (
    <Section tone={tone} aria-labelledby="service-cards-title">
      <SectionHead
        id="service-cards-title"
        align="split"
        title="From the cable to the code"
        lead="We handle the network, the servers, the integrations and the licences ourselves, so you have one team to call when something stops working."
        action={<Button href="/services">See all services</Button>}
      />
      <ul className="mt-12 divide-y divide-line border-y border-line">
        {list.map((s) => (
          <li key={s.id}>
            <Link
              href={s.id === "licensing" ? "/licensing" : `/services#${s.id}`}
              className="group grid grid-cols-[auto_1fr] items-start gap-x-5 gap-y-3 py-7 sm:gap-x-8 lg:grid-cols-[auto_5fr_6fr] lg:items-center lg:gap-x-12"
            >
              <Pictogram name={s.pictogram} className="size-12 lg:size-14" />
              <div>
                <Heading
                  as="h3"
                  size="h3"
                  className="underline decoration-transparent decoration-1 underline-offset-[6px] transition-colors duration-(--duration-fast) group-hover:decoration-accent"
                >
                  {s.plain}
                </Heading>
                <Text size="small" className="mt-1 font-semibold text-accent-strong">
                  {s.title}
                </Text>
              </div>
              <Text className="col-start-2 lg:col-start-3">{s.summary}</Text>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/** The three products as ruled columns, like a price list without prices. */
export function LicensingColumns({ tone = "surface" }: { tone?: "surface" | "alt" }) {
  return (
    <Section tone={tone} aria-labelledby="licensing-title">
      <SectionHead
        id="licensing-title"
        align="split"
        title="We also supply the software"
        lead="We install and renew every licence we sell."
        action={<Button href="/licensing">See licensing</Button>}
      />
      <ul className="mt-12 grid border-y border-line md:grid-cols-3 md:divide-x md:divide-line">
        {licensing.map((l, i) => (
          <li
            key={l.product}
            className={`py-8 md:px-8 md:first:pl-0 md:last:pr-0 ${i ? "border-t border-line md:border-t-0" : ""}`}
          >
            <Pictogram name={l.pictogram} className="size-12" />
            <Heading as="h3" size="h3" className="mt-5">
              {l.short}
            </Heading>
            <Text as="span" size="caption" tone="subtle" className="mt-1 block uppercase tracking-wide">
              Supplied and installed
            </Text>
            <Text className="mt-3">{l.fit}</Text>
          </li>
        ))}
      </ul>
    </Section>
  );
}
