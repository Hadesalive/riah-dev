import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ClosingCall } from "@/components/closing-call";
import { PageHero } from "@/components/page-hero";
import { Pictogram, type PictogramName } from "@/components/pictogram";
import { SubNav } from "@/components/sub-nav";
import { Eyebrow, Heading } from "@/components/ui/heading";
import { Section } from "@/components/ui/section";
import { Text } from "@/components/ui/text";

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
};

// Four sectors, equal weight
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
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Who we work for" pictogram="ministry">
        <p>
          Health programmes, banks and fintechs, ministries and hotels. Find
          your sector to see what we would build for you.
        </p>
      </PageHero>

      <SubNav
        label="Sectors on this page"
        items={sectors.map((s) => ({ id: s.id, label: s.name, pictogram: s.pictogram }))}
      />

      {sectors.map((s, i) => (
        <Section
          key={s.id}
          id={s.id}
          tone={i % 2 ? "alt" : "surface"}
          aria-labelledby={`${s.id}-title`}
          className="scroll-mt-32"
        >
          <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
            <div>
              <Pictogram name={s.pictogram} className="size-20 sm:size-24" />
              <Heading id={`${s.id}-title`} className="mt-6">
                {s.name}
              </Heading>
              <Text size="lead" className="mt-4 max-w-md">
                {s.lead}
              </Text>
              <Eyebrow className="mt-8">Services involved</Eyebrow>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.services.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className={`inline-block rounded-xs px-3 py-1.5 text-caption text-fg ring-1 ring-line transition-colors duration-(--duration-fast) hover:ring-accent ${
                        i % 2 ? "bg-surface" : "bg-surface-alt"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid gap-x-10 sm:grid-cols-2 lg:mt-2">
              {s.work.map((w) => (
                <div key={w.name} className="border-t border-line py-6">
                  <dt className="font-heading text-h4 text-fg">{w.name}</dt>
                  <dd className="mt-1.5 text-fg-muted">{w.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>
      ))}

      <ClosingCall />
    </>
  );
}
