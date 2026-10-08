import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ClosingCall } from "@/components/closing-call";
import { Pictogram, type PictogramName } from "@/components/pictogram";
import { SignBand } from "@/components/sign-band";

export const metadata: Metadata = pageMetadata({
  title: "IT for health programmes, banks, ministries & hotels",
  description:
    "DHIS2, RapidPro SMS, Monime payments, secure networks, servers, Wi-Fi and Waka TV for health programmes, banks, ministries and hotels in Sierra Leone.",
  path: "/industries",
});

type Sector = {
  id: string;
  name: string;
  pictogram: PictogramName;
  lead: string;
  work: { name: string; detail: string }[];
  services: { href: string; label: string }[];
  /** band paint, lettering, rules and body text for this sector */
  band: string;
  title: string;
  rule: string;
  term: string;
  body: string;
  chip: string;
};

// Four sectors, equal weight, each on its own paint
const sectors: Sector[] = [
  {
    id: "health",
    name: "Health programmes",
    pictogram: "health",
    lead: "Health data only helps if it reaches the people who act on it. We build the systems that collect it in the field, move it over weak connections and put it in front of decision-makers.",
    work: [
      { name: "DHIS2 configuration", detail: "Organisation units, data sets, tracker programmes and dashboards set up to match how your programme reports." },
      { name: "Field data collection", detail: "Tablets provisioned and locked down through Zoho MDM or ManageEngine, so health workers only see the apps they need." },
      { name: "Campaign and alert messaging", detail: "RapidPro flows for appointment reminders, campaign alerts and SMS surveys, connected to DHIS2." },
      { name: "Hosting and resilience", detail: "Hardened Linux servers, PostgreSQL backups and multi-WAN uplinks that keep reporting online." },
    ],
    services: [
      { href: "/services#dhis2", label: "Health data" },
      { href: "/services#messaging", label: "SMS & payments" },
      { href: "/services#linux", label: "Servers" },
    ],
    band: "bg-money",
    term: "text-ink",
    title: "text-ink [--shade:var(--color-wall)]",
    rule: "border-ink/25",
    body: "text-ink",
    chip: "bg-ink text-white hover:bg-white hover:text-ink",
  },
  {
    id: "fintech",
    name: "Banks & fintech",
    pictogram: "money",
    lead: "Mobile money is how most people in the region pay and get paid. We connect your product to it and make every transaction traceable.",
    work: [
      { name: "Monime integration", detail: "Collections, checkout and disbursements across mobile money channels through one Monime integration." },
      { name: "Verification and receipts", detail: "Payment events confirmed in real time and receipts sent by SMS through RapidPro." },
      { name: "Grant and stipend payouts", detail: "Bulk payouts to beneficiaries with SMS notification and a full audit trail." },
      { name: "Secure infrastructure", detail: "Firewalled branch and data-room networks, code security review and tested deployments." },
    ],
    services: [
      { href: "/services#messaging", label: "SMS & payments" },
      { href: "/services#testing", label: "Testing & deployment" },
      { href: "/services#network", label: "Networks" },
    ],
    band: "bg-sign",
    term: "text-ink",
    title: "text-ink [--shade:var(--color-sign-deep)]",
    rule: "border-ink/25",
    body: "text-ink",
    chip: "bg-ink text-white hover:bg-white hover:text-ink",
  },
  {
    id: "government",
    name: "Ministries & agencies",
    pictogram: "ministry",
    lead: "Public services stop when the network or the server does. We audit what you have, secure the perimeter and keep the servers behind your services running.",
    work: [
      { name: "Network audits", detail: "Architecture reviews, Layer 2/3 diagnostics, IP conflict resolution and bandwidth optimisation across buildings and sites." },
      { name: "Perimeter security", detail: "Next-generation firewalls with intrusion prevention, plus annual licence renewals so protection never lapses." },
      { name: "Hardened servers", detail: "Ubuntu and Debian servers provisioned, hardened and administered, with high-availability PostgreSQL." },
      { name: "Managed devices", detail: "Laptops and tablets enrolled in Zoho MDM, with control over which apps they run." },
    ],
    services: [
      { href: "/services#network", label: "Networks" },
      { href: "/services#linux", label: "Servers" },
      { href: "/licensing", label: "Licensing" },
    ],
    band: "bg-kiosk",
    term: "text-white",
    title: "text-sign",
    rule: "border-white/25",
    body: "text-blue-50",
    chip: "bg-white text-ink hover:bg-sign",
  },
  {
    id: "hospitality",
    name: "Hotels & venues",
    pictogram: "tv",
    lead: "Guests notice the Wi-Fi and the TV before anything else. We cover the whole property and keep it connected when the fibre goes down.",
    work: [
      { name: "Property-wide Wi-Fi", detail: "Ubiquiti UniFi access points planned room by room, with separate networks for guests and staff." },
      { name: "Waka TV in rooms and lounges", detail: "Subscriptions, hospitality setup and IPTV hardware integration." },
      { name: "Internet that fails over", detail: "Starlink and fibre combined, so the connection switches over automatically when one line drops." },
      { name: "Firewall and guest security", detail: "Next-generation firewalls that keep guest traffic away from your own systems." },
    ],
    services: [
      { href: "/services#network", label: "Networks" },
      { href: "/licensing", label: "Waka TV" },
    ],
    band: "bg-ink",
    term: "text-white",
    title: "text-sign [--shade:#000]",
    rule: "border-white/20",
    body: "text-slate-300",
    chip: "bg-white text-ink hover:bg-sign",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <SignBand title="Who we work for" pictogram="ministry">
        <p>
          Health programmes, banks and fintechs, ministries and hotels. Find
          your sector to see what we would build for you.
        </p>
      </SignBand>

      <nav aria-label="Sectors on this page" className="sticky top-18 z-30 bg-ink">
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-2 sm:px-4 lg:px-6">
          {sectors.map((s) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="flex items-center gap-2.5 px-3 py-3 font-semibold whitespace-nowrap text-white hover:text-sign">
                <Pictogram name={s.pictogram} className="size-7" />
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {sectors.map((s) => (
        <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className={`scroll-mt-32 ${s.band}`}>
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-8 lg:py-24">
            <div>
              <Pictogram name={s.pictogram} className="size-24 drop-shadow-[0_8px_10px_rgba(15,23,42,0.25)] sm:size-32" />
              <h2 id={`${s.id}-title`} className={`sign shade mt-6 text-sign-md ${s.title}`}>
                {s.name}
              </h2>
              <p className={`mt-5 max-w-md text-lg leading-relaxed font-medium ${s.body}`}>{s.lead}</p>
              <p className={`mt-8 font-bold ${s.body}`}>Services involved</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.services.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className={`inline-block rounded-full px-4 py-1.5 text-sm font-bold ${s.chip}`}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid gap-x-10 sm:grid-cols-2 lg:mt-2">
              {s.work.map((w) => (
                <div key={w.name} className={`border-t-4 py-5 ${s.rule}`}>
                  <dt className={`text-xl font-bold ${s.term}`}>
                    {w.name}
                  </dt>
                  <dd className={`mt-1.5 leading-relaxed ${s.body}`}>{w.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ))}

      <div className="pt-3 sm:pt-4" />
      <ClosingCall />
    </>
  );
}
