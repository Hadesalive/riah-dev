import Link from "next/link";
import type { ComponentProps } from "react";

const base = "flex flex-col rounded-md p-6 sm:p-8";
const looks = {
  // White panel on a light band
  surface: "tone-light bg-surface ring-1 ring-line",
  // Glass panel on a dark band
  glass: "bg-white/[0.04] ring-1 ring-white/10",
};
const lift =
  "transition-[translate,box-shadow] duration-(--duration-fast) ease-(--ease-out) hover:-translate-y-1 hover:shadow-md";

export function Card({
  look = "surface",
  className = "",
  ...props
}: ComponentProps<"div"> & { look?: keyof typeof looks }) {
  return <div {...props} className={`${base} ${looks[look]} ${className}`} />;
}

/** A whole card that is one link. */
export function CardLink({
  look = "surface",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { look?: keyof typeof looks }) {
  return <Link {...props} className={`group ${base} ${looks[look]} ${lift} ${className}`} />;
}
