import type { Metadata } from "next";
import { ClosingCall } from "@/components/closing-call";
import { Pictogram, type PictogramName } from "@/components/pictogram";
import { SignBand } from "@/components/sign-band";

export const metadata: Metadata = {
  title: "About",
  description:
    "RIAH SL is an ICT services and engineering firm in Sierra Leone specialising in network infrastructure, application deployment, RapidPro and Monime integration, Linux servers and health informatics.",
};

const capabilities: { name: string; pictogram: PictogramName; body: string }[] = [
  {
    name: "Network and application consultancy",
    pictogram: "testing",
    body: "Architecture reviews, application testing and production deployments.",
  },
  {
    name: "Messaging and payment integration",
    pictogram: "sms",
    body: "Automated SMS through RapidPro, connected to mobile money through Monime.",
  },
  {
    name: "Networks and servers",
    pictogram: "network",
    body: "Networks with backup links, and hardened Linux servers that stay up.",
  },
  {
    name: "Public health informatics",
    pictogram: "health",
    body: "DHIS2 set up for each programme, and the data-collection tablets that feed it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SignBand title="Engineers, based in Sierra Leone" pictogram="globe">
        <p>
          RIAH SL Limited works on networks, Linux servers, software testing
          and deployment, RapidPro SMS, Monime payments and DHIS2.
        </p>
      </SignBand>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <h2 className="sign shade text-sign-lg [--shade:var(--color-sign)]">How we work</h2>
          <p className="mt-6 max-w-md text-xl leading-relaxed text-ink-soft">
            We design for limited bandwidth and unreliable power, and we hand
            over systems your own team can run after we leave.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((c) => (
            <li
              key={c.name}
              className="board bg-white p-7 [--pin:color-mix(in_srgb,var(--color-kiosk)_25%,transparent)]"
            >
              <Pictogram name={c.pictogram} className="size-16" />
              <h3 className="mt-5 text-xl leading-snug font-bold">{c.name}</h3>
              <p className="mt-2 text-ink-soft">{c.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <ClosingCall />
    </>
  );
}
