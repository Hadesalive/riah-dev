import { ButtonLink } from "./button";
import { Pictogram } from "./pictogram";

export function ClosingCall() {
  return (
    <section className="px-3 py-3 sm:px-4 sm:py-4">
      <div className="board mx-auto grid max-w-7xl items-center gap-10 bg-money px-6 py-14 text-ink sm:px-12 sm:py-20 lg:grid-cols-[auto_1fr_auto] [--pin:color-mix(in_srgb,#0f172a_35%,transparent)]">
        <Pictogram name="sms" className="hidden size-28 lg:block" />
        <div>
          <h2 className="sign shade text-sign-md text-ink [--shade:var(--color-wall)]">
            Tell us what needs fixing.
          </h2>
          <p className="mt-4 max-w-xl text-lg font-medium">
            A few lines is enough. We reply with questions or a proposed
            scope.
          </p>
        </div>
        <ButtonLink href="/contact" size="lg" className="justify-self-start">
          Request a consultation
        </ButtonLink>
      </div>
    </section>
  );
}
