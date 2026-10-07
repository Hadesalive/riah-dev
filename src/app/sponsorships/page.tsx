import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { Pictogram, type PictogramName } from "@/components/pictogram";
import { SignBand } from "@/components/sign-band";

export const metadata: Metadata = {
  title: "Global exchange & sponsorships",
  description:
    "RIAH SL takes part in international ICT forums, health information system convenings and developer summits, and welcomes sponsorship and grant partners.",
};

const value: { name: string; pictogram: PictogramName; body: string }[] = [
  {
    name: "Knowledge transfer",
    pictogram: "globe",
    body: "What we learn at international forums goes into our public and private projects in the region.",
  },
  {
    name: "Regional case studies",
    pictogram: "network",
    body: "We present our own work on low-bandwidth networks, RapidPro SMS and Monime payments at international events.",
  },
  {
    name: "Sponsor visibility",
    pictogram: "tv",
    body: "Sponsors are credited across our digital channels, technical publications and event panels.",
  },
];

export default function SponsorshipsPage() {
  return (
    <>
      <SignBand title="Global exchange & sponsorships" pictogram="globe">
        <p>
          We take part in international ICT forums, health information system
          convenings, developer summits and technical working groups.
        </p>
      </SignBand>

      <div className="mx-auto grid w-full max-w-7xl gap-4 px-3 py-4 sm:px-4 lg:grid-cols-[7fr_5fr]">
        <section className="board bg-ink p-8 text-white sm:p-12 [--pin:color-mix(in_srgb,#fff_30%,transparent)]">
          <h2 className="sign text-sign-md text-white">How sponsors help</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
            Development partners, technology vendors and grant-making
            institutions help our team attend these events.
          </p>
        </section>
        <section className="board bg-sign p-8 text-ink sm:p-12 [--pin:color-mix(in_srgb,#0f172a_30%,transparent)]">
          <h2 className="sign text-2xl">Our main funding need</h2>
          <p className="mt-4 text-lg leading-relaxed font-medium">
            Travel, accommodation and registration. Covering these is usually
            what decides whether our team can attend.
          </p>
        </section>
      </div>

      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="sign shade text-sign-lg [--shade:var(--color-money)]">What partners get</h2>
          <ButtonLink href="/contact?topic=sponsorship" size="lg">
            Discuss a sponsorship
          </ButtonLink>
        </div>
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {value.map((v) => (
            <li
              key={v.name}
              className="board bg-white p-8 [--pin:color-mix(in_srgb,var(--color-kiosk)_25%,transparent)]"
            >
              <Pictogram name={v.pictogram} className="size-16" />
              <h3 className="mt-5 text-xl font-bold">{v.name}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{v.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
