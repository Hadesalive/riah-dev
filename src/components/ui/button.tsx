import Link from "next/link";
import type { ComponentProps } from "react";

/*
  CTA hierarchy: signal (the one yellow action on a page), solid (primary
  everywhere else), outline (secondary), link (tertiary). Solid, outline and
  link read their colours from the band's tone.
*/
const variants = {
  signal: "bg-signal text-fg hover:bg-signal-hover",
  solid: "bg-(--solid-bg) text-(--solid-fg) hover:bg-(--solid-hover)",
  outline: "ring-1 ring-inset ring-(--fg)/40 text-(--fg) hover:ring-(--fg) hover:bg-(--fg)/5",
  link: "text-(--link) underline decoration-1 underline-offset-4 hover:decoration-2",
};

export function Button({
  variant = "solid",
  size = "md",
  arrow = variant !== "signal",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: "md" | "lg";
  arrow?: boolean;
}) {
  const box =
    variant === "link"
      ? "text-body"
      : `rounded-sm px-5 ${size === "lg" ? "min-h-13 px-6 text-body" : "min-h-11 text-small"}`;
  return (
    <Link
      {...props}
      className={`group/btn inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-(--duration-fast) ease-(--ease-out) ${box} ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className="size-3.5 transition-transform duration-(--duration-fast) group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
        >
          <path d="M5 11 L11 5 M6 5 H11 V10" stroke="currentColor" strokeWidth="1.75" fill="none" strokeLinecap="round" />
        </svg>
      )}
    </Link>
  );
}
