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
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: "md" | "lg";
}) {
  const box =
    variant === "link"
      ? "text-body"
      : `rounded-sm px-5 ${size === "lg" ? "min-h-13 px-6 text-body" : "min-h-11 text-small"}`;
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center font-semibold transition-colors duration-(--duration-fast) ease-(--ease-out) ${box} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
