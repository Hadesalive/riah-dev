import { Pictogram } from "./pictogram";
import { Button } from "./ui/button";
import { Section } from "./ui/section";
import { SectionHead } from "./ui/section-head";

export function ClosingCall() {
  return (
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
  );
}
