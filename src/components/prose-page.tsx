import type { ReactNode } from "react";
import { PageHero } from "./page-hero";
import { Section } from "./ui/section";

/** Long-form text pages such as the privacy policy and terms. */
export function ProsePage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title}>
        <p>Last updated {updated}</p>
      </PageHero>
      <Section width="narrow">
        <article className="max-w-measure space-y-5 text-body text-fg-muted [&_a]:font-semibold [&_a]:text-accent-strong [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-4 [&_a:hover]:decoration-2 [&_h2]:pt-8 [&_h2]:font-heading [&_h2]:text-h3 [&_h2]:text-fg [&_li]:marker:text-accent [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
        </article>
      </Section>
    </>
  );
}
