import { ButtonLink } from "@/components/button";
import { Pictogram } from "@/components/pictogram";

export default function NotFound() {
  return (
    <div className="flex flex-1 bg-kiosk-deep px-3 py-3 sm:px-4 sm:py-4">
      <section className="board mx-auto flex w-full max-w-7xl flex-col justify-center bg-ink px-8 py-20 text-white sm:px-14 sm:py-28 [--pin:color-mix(in_srgb,#facc15_45%,transparent)]">
        <Pictogram name="network" className="size-24 opacity-90" />
        <h1 className="sign shade mt-8 max-w-3xl text-sign-lg text-sign [--shade:#000]">
          Sorry, this page is not on our network.
        </h1>
        <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-200">
          The link may be old or mistyped. Start from the home page or go
          straight to our services.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/" size="lg">Go to the home page</ButtonLink>
          <ButtonLink href="/services" variant="outline-light" size="lg">
            See services
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
