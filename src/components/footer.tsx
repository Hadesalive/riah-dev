import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/lib/site";

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-slate-300">
      {/* The kiosk's paint tins, one stripe each */}
      <div className="grid h-2 grid-cols-3" aria-hidden="true">
        <span className="bg-kiosk" />
        <span className="bg-sign" />
        <span className="bg-money" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
            <p className="font-bold text-white">Write to us</p>
            <a
              href={`mailto:${site.email}`}
              className="sign shade mt-3 inline-block text-[clamp(2rem,7vw,4rem)] break-all text-sign [--shade:#000] hover:text-white"
            >
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-semibold text-white hover:text-sign">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-5 border-t border-dashed border-white/20 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/brand/riah-logo-mono-white.svg"
              alt="RIAH SL Limited"
              width={206}
              height={44}
              className="h-7 w-auto"
            />
            <p className="text-slate-400">© {site.legalName}, Sierra Leone</p>
          </div>
          <ul className="flex gap-5">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-slate-400 hover:text-sign">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
