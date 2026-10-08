import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ClosingCall } from "@/components/closing-call";
import { Pictogram } from "@/components/pictogram";
import { SignBand } from "@/components/sign-band";
import { licensing } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Zoho, firewall licences & Waka TV in Sierra Leone",
  description:
    "Zoho CRM, Desk, Workplace and MDM, next-generation firewall licences and Waka TV enterprise IPTV, supplied, installed and renewed in Sierra Leone by RIAH SL.",
  path: "/licensing",
});

const paint = [
  "bg-sign text-ink [--pin:color-mix(in_srgb,#0f172a_30%,transparent)]",
  "bg-ink text-white [--pin:color-mix(in_srgb,#facc15_45%,transparent)]",
  "bg-money text-ink [--pin:color-mix(in_srgb,#0f172a_30%,transparent)]",
];

export default function LicensingPage() {
  return (
    <>
      <SignBand title="Software & licences" pictogram="key">
        <p>
          We supply the licences and set up the products, so the people who
          sell them to you are the people who install and renew them.
        </p>
      </SignBand>

      <div className="mx-auto grid w-full max-w-7xl gap-4 px-3 py-4 sm:px-4 lg:grid-cols-3">
        {licensing.map((row, i) => (
          <article
            key={row.product}
            className={`board flex flex-col p-8 sm:p-10 ${paint[i]}`}
          >
            <Pictogram name={row.pictogram} className="size-24 drop-shadow-[0_8px_10px_rgba(15,23,42,0.3)]" />
            <h2 className="sign mt-6 text-3xl leading-tight">{row.product}</h2>
            <h3 className="mt-6 font-bold">What we do</h3>
            <p className="mt-1 text-lg leading-relaxed">{row.services}</p>
            <h3 className="mt-6 font-bold">Suited to</h3>
            <p className="mt-1 text-lg leading-relaxed">{row.fit}</p>
          </article>
        ))}
      </div>

      <p className="mx-auto w-full max-w-7xl px-4 pt-4 pb-10 text-lg font-medium text-ink-soft sm:px-6 lg:px-8">
        Ask for a quote that combines licences with installation and support.
      </p>

      <ClosingCall />
    </>
  );
}
