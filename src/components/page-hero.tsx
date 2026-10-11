import type { ReactNode } from "react";
import { HeroBackdrop } from "./hero-backdrop";
import { Pictogram, type PictogramName } from "./pictogram";
import { Container } from "./ui/container";

/** The inset night card that opens every inner page. */
export function PageHero({
  title,
  pictogram,
  children,
}: {
  title: string;
  pictogram?: PictogramName;
  children?: ReactNode;
}) {
  return (
    <section className="tone-dark -mt-header bg-surface p-2 lg:p-3">
      <div className="relative isolate overflow-hidden rounded-lg bg-night pt-[calc(var(--spacing-header)+3rem)] pb-section-sm lg:pt-[calc(var(--spacing-header)+5rem)] lg:pb-section">
        <HeroBackdrop quiet />
        <Container className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h1 className="rise max-w-4xl font-heading text-h1 text-fg-inverse" style={{ ["--i" as string]: 1 }}>
              {title}
            </h1>
            {children && (
              <div
                className="rise mt-6 max-w-measure text-lead text-fg-inverse-muted"
                style={{ ["--i" as string]: 2 }}
              >
                {children}
              </div>
            )}
          </div>
          {pictogram && (
            <div className="rise hidden lg:block" style={{ ["--i" as string]: 3 }}>
              <Pictogram name={pictogram} className="size-32" />
            </div>
          )}
        </Container>
      </div>
    </section>
  );
}
