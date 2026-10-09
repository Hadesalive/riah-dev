import Image from "next/image";
import Link from "next/link";
import { nav, services, site } from "@/lib/site";
import { Container } from "./ui/container";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

const columns = [
  {
    title: "Services",
    links: services.map((s) => ({
      href: s.id === "licensing" ? "/licensing" : `/services#${s.id}`,
      label: s.short,
    })),
  },
  { title: "Company", links: nav.map((n) => ({ href: n.href, label: n.label })) },
  {
    title: "Get in touch",
    links: [
      { href: `mailto:${site.email}`, label: site.email },
      { href: `mailto:${site.supportEmail}`, label: site.supportEmail },
      { href: "/contact", label: "Request a consultation" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="tone-dark mt-auto border-t border-(--hairline) bg-night-deep">
      <Container>
        <div className="grid gap-12 py-section lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div>
            <Text size="small">Write to us</Text>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block font-heading text-h1 break-all text-(--fg) transition-colors duration-(--duration-fast) hover:text-(--link)"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <Heading as="h2" size="h4" className="text-(--fg-muted)">
                  {col.title}
                </Heading>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link
                        href={l.href}
                        className="break-words text-(--fg) underline decoration-(--hairline) decoration-1 underline-offset-4 transition-colors duration-(--duration-fast) hover:decoration-(--link)"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </Container>

      <div className="border-t border-(--hairline)">
        <Container className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/brand/riah-logo-mono-white.svg"
              alt="RIAH SL Limited"
              width={206}
              height={44}
              className="h-7 w-auto"
            />
            <Text size="small">© {site.legalName}, Sierra Leone</Text>
          </div>
          <ul className="flex gap-5">
            {legal.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-small text-(--fg-muted) transition-colors hover:text-(--fg)"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
