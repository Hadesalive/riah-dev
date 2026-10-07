"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";
import { ButtonLink } from "./button";

export function Header() {
  const pathname = usePathname();
  // The menu belongs to the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  return (
    <header className="sticky top-0 z-40 bg-ink text-white shadow-[0_6px_18px_-8px_rgba(15,23,42,0.45)]">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="RIAH SL home">
          <Image
            src="/brand/riah-logo-mono-white.svg"
            alt="RIAH SL Limited"
            width={206}
            height={44}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block px-3 py-2 font-semibold whitespace-nowrap transition-colors hover:text-sign ${
                      active
                        ? "text-sign after:absolute after:inset-x-3 after:-bottom-0.5 after:h-[3px] after:rounded-full after:bg-sign"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block lg:hidden xl:block">
            <ButtonLink href="/contact">Request a consultation</ButtonLink>
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-white hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpenOn(open ? null : pathname)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
              <path
                d={open ? "M6 6 L18 18 M18 6 L6 18" : "M4 7 H20 M4 12 H20 M4 17 H20"}
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        hidden={!open}
        className="border-t border-white/15 bg-ink lg:hidden"
      >
        <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname.startsWith(item.href) ? "page" : undefined}
                className="sign block border-b border-white/15 py-4 text-2xl text-white aria-[current=page]:text-sign"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-5 pb-3 sm:hidden">
            <ButtonLink href="/contact" size="lg" className="w-full">
              Request a consultation
            </ButtonLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
