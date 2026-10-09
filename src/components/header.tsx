"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";
import { Button } from "./ui/button";

export function Header() {
  const pathname = usePathname();
  // The menu belongs to the page it was opened on, so navigating closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Every page opens on a night hero: clear over it, frosted once the page moves
  const clear = !scrolled && !open;

  return (
    <header
      className={`tone-dark sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-(--duration-base) ease-(--ease-out) ${
        clear ? "bg-transparent" : "bg-night/85 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-header max-w-page items-center justify-between gap-6 px-gutter sm:px-gutter-sm lg:px-gutter-lg">
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
          <ul className="flex items-center gap-1 rounded-full bg-white/[0.06] p-1 ring-1 ring-white/10">
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-full px-4 py-1.5 text-small font-medium whitespace-nowrap transition-colors duration-(--duration-fast) ${
                      active ? "bg-white/12 text-fg-inverse" : "text-fg-inverse-muted hover:text-fg-inverse"
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
            <Button href="/contact">Request a consultation</Button>
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-sm text-fg-inverse hover:bg-white/10 lg:hidden"
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
        className="border-t border-(--hairline) bg-night lg:hidden"
      >
        <ul className="mx-auto max-w-page px-gutter py-3 sm:px-gutter-sm">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname.startsWith(item.href) ? "page" : undefined}
                className="block border-b border-(--hairline) py-4 font-heading text-h3 text-fg-inverse-muted aria-[current=page]:text-fg-inverse"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-5 pb-3 sm:hidden">
            <Button href="/contact" size="lg" className="w-full">
              Request a consultation
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
