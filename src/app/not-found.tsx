import { HeroBackdrop } from "@/components/hero-backdrop";
import { Pictogram } from "@/components/pictogram";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Text } from "@/components/ui/text";

export default function NotFound() {
  return (
    <section className="tone-dark -mt-header flex flex-1 bg-night-deep p-2 lg:p-3">
      <div className="relative isolate flex w-full items-center overflow-hidden rounded-lg bg-night pt-[calc(var(--spacing-header)+3rem)] pb-section lg:min-h-[70svh]">
        <HeroBackdrop quiet />
        <Container>
          <Pictogram name="network" className="size-20" />
          <h1 className="mt-8 max-w-3xl font-heading text-h1 text-fg-inverse">
            Sorry, this page is not on our network.
          </h1>
          <Text size="lead" className="mt-6 max-w-measure">
            The link may be old or mistyped. Start from the home page or go
            straight to our services.
          </Text>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/" variant="signal" size="lg">
              Go to the home page
            </Button>
            <Button href="/services" variant="outline" size="lg">
              See services
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
