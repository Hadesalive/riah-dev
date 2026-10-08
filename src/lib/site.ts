export const site = {
  name: "RIAH SL",
  legalName: "RIAH SL Limited",
  url: "https://riah.dev",
  email: "info@riah.dev",
  supportEmail: "support@riah.dev",
  // Add LinkedIn and GitHub URLs here once the profiles exist, then link them in the footer.
  description:
    "Network consultancy, Linux servers, RapidPro SMS, Monime payments and DHIS2 for businesses and public institutions in Sierra Leone and West Africa.",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/licensing", label: "Licensing" },
  { href: "/about", label: "About" },
  { href: "/sponsorships", label: "Global exchange" },
  { href: "/contact", label: "Contact" },
] as const;

import type { PictogramName } from "@/components/pictogram";

export type Service = {
  id: string;
  pictogram: PictogramName;
  /** Plain-language name a non-engineer understands */
  plain: string;
  /** Label for tabs and sub-navigation */
  short: string;
  title: string;
  summary: string;
  offerings: { name: string; detail: string }[];
};

export const services: Service[] = [
  {
    id: "network",
    pictogram: "network",
    short: "Networks",
    plain: "Internet and networks that stay up",
    title: "Network consultancy & infrastructure",
    summary:
      "Audits, topology design, multi-WAN with Starlink and fibre, Ubiquiti campus Wi-Fi and firewall security.",
    offerings: [
      {
        name: "Enterprise network consultancy",
        detail:
          "Architecture audits, flat Layer 2/3 diagnostics, IP conflict resolution and bandwidth optimisation.",
      },
      {
        name: "Multi-WAN and campus connectivity",
        detail:
          "Topologies that combine Starlink and fibre, multi-site IPsec and SSL VPNs, and Ubiquiti UniFi campus Wi-Fi.",
      },
      {
        name: "Perimeter security and firewalls",
        detail:
          "Next-generation firewall installation, deep packet inspection, intrusion prevention and annual licence management.",
      },
    ],
  },
  {
    id: "messaging",
    pictogram: "sms",
    short: "SMS & payments",
    plain: "Bulk SMS joined to mobile money",
    title: "RapidPro SMS & Monime payments",
    summary:
      "Automated SMS workflows in RapidPro, joined to Monime for mobile money collection, disbursement and receipts.",
    offerings: [
      {
        name: "RapidPro SMS workflows",
        detail:
          "Automated messaging, mobile surveys, health campaign alerts and customer notifications through local SMS gateways.",
      },
      {
        name: "Monime payment aggregation",
        detail:
          "Monime integration for mobile money collections, grant disbursement and checkout.",
      },
      {
        name: "Messaging and payments together",
        detail:
          "RapidPro triggers paired with Monime transactions, so every payment is verified in real time and confirmed by SMS.",
      },
    ],
  },
  {
    id: "testing",
    pictogram: "testing",
    short: "Testing & deployment",
    plain: "Software checked before it goes live",
    title: "Application review, testing & deployment",
    summary:
      "Code and security review, automated and acceptance testing, and production deployment you can repeat.",
    offerings: [
      {
        name: "Code and architecture review",
        detail:
          "Code audits, performance bottleneck analysis, security vulnerability assessment and database query tuning.",
      },
      {
        name: "Application testing",
        detail:
          "Unit, integration, stress and user acceptance testing before anything reaches production.",
      },
      {
        name: "Deployment and implementation",
        detail:
          "Deployment orchestration, CI/CD pipelines, staging-to-production migration and server hardening.",
      },
    ],
  },
  {
    id: "linux",
    pictogram: "servers",
    short: "Servers",
    plain: "Servers and databases you can rely on",
    title: "Linux & open-source cloud systems",
    summary:
      "Hardened Ubuntu and Debian servers, PostgreSQL with PostGIS, and Cacti monitoring of the whole estate.",
    offerings: [
      {
        name: "Server fleet management",
        detail:
          "Provisioning, security hardening and ongoing administration of Ubuntu, Debian and enterprise Linux servers.",
      },
      {
        name: "Spatial and enterprise databases",
        detail:
          "High-availability PostgreSQL administration, including PostGIS for location data.",
      },
      {
        name: "Continuous monitoring",
        detail:
          "Cacti and Spine collectors that track infrastructure health in real time.",
      },
    ],
  },
  {
    id: "dhis2",
    pictogram: "health",
    short: "Health data",
    plain: "Health data systems that report on time",
    title: "DHIS2 & health technology",
    summary:
      "DHIS2 metadata and tracker design, analytics dashboards, and the tablets and middleware that feed them.",
    offerings: [
      {
        name: "DHIS2 system architecture",
        detail:
          "Organisation unit setup, metadata engineering, aggregate and tracker programme design, and dashboard reporting.",
      },
      {
        name: "Mobile device management",
        detail:
          "Zoho MDM and ManageEngine to provision data-collection tablets and control which apps they run.",
      },
    ],
  },
  {
    id: "licensing",
    pictogram: "key",
    short: "Licensing",
    plain: "Software and licences, supplied and installed",
    title: "Enterprise software licensing",
    summary:
      "We supply, install and renew Zoho products, next-generation firewall licences and Waka TV.",
    offerings: [],
  },
];

export const licensing: {
  product: string;
  /** One-line name for the price list */
  short: string;
  pictogram: PictogramName;
  services: string;
  fit: string;
}[] = [
  {
    product: "Zoho Corporation products",
    short: "Zoho products",
    pictogram: "apps",
    services:
      "Supply, implementation and endpoint setup for Zoho CRM, Zoho Desk, Zoho Workplace and Zoho MDM.",
    fit: "Enterprise productivity, endpoint device management and customer support desks.",
  },
  {
    product: "Next-generation firewalls",
    short: "Next-gen firewalls",
    pictogram: "firewall",
    services:
      "Hardware provisioning, security signature subscriptions and annual perimeter licence renewals.",
    fit: "Government ministries, corporate offices, financial institutions and data centres.",
  },
  {
    product: "Waka TV",
    short: "Waka TV",
    pictogram: "tv",
    services:
      "Subscription retail, hospitality setup and IPTV hardware integration.",
    fit: "Hotels, corporate lounges, recreational venues and private residences.",
  },
];

export const serviceOptions = [
  "Network consultancy & audits",
  "RapidPro SMS & Monime aggregation",
  "App review & deployment testing",
  "Linux & cloud systems",
  "DHIS2 / health tech",
  "Software licensing",
  "Sponsorship or partnership",
  "General inquiry",
];

/** The kiosk menu board: what we do, in the words a buyer would use */
export const menu: { label: string; detail: string; href: string; pictogram: PictogramName }[] = [
  { label: "Internet & networks", detail: "Starlink, fibre, Wi-Fi", href: "/services#network", pictogram: "network" },
  { label: "Firewalls & security", detail: "Next-gen firewalls, VPN", href: "/services#network", pictogram: "firewall" },
  { label: "Servers & databases", detail: "Linux, PostgreSQL", href: "/services#linux", pictogram: "servers" },
  { label: "Bulk SMS", detail: "RapidPro workflows", href: "/services#messaging", pictogram: "sms" },
  { label: "Mobile money", detail: "Monime payments", href: "/services#messaging", pictogram: "money" },
  { label: "Health data", detail: "DHIS2 setup", href: "/services#dhis2", pictogram: "health" },
  { label: "Testing & deployment", detail: "Review, test, go live", href: "/services#testing", pictogram: "testing" },
  { label: "Software licences", detail: "Zoho, firewalls, Waka TV", href: "/licensing", pictogram: "key" },
];

export const sectors: {
  id: string;
  name: string;
  pictogram: PictogramName;
  need: string;
  uses: string[];
}[] = [
  {
    id: "health",
    name: "Health programmes",
    pictogram: "health",
    need: "Field data that reaches DHIS2 on time, and SMS alerts that reach health workers.",
    uses: ["DHIS2", "RapidPro SMS", "Tablet management"],
  },
  {
    id: "fintech",
    name: "Banks & fintech",
    pictogram: "money",
    need: "Mobile money that settles, receipts by SMS, and networks locked down.",
    uses: ["Monime", "Firewalls", "Code review"],
  },
  {
    id: "government",
    name: "Ministries & agencies",
    pictogram: "ministry",
    need: "Networks audited and secured, and servers that keep public services online.",
    uses: ["Network audits", "Firewalls", "Linux servers"],
  },
  {
    id: "hospitality",
    name: "Hotels & venues",
    pictogram: "tv",
    need: "Wi-Fi across the whole property, TV in every room, and internet that fails over.",
    uses: ["Campus Wi-Fi", "Waka TV", "Starlink + fibre"],
  },
];
