import Link from "next/link";
import type { ComponentProps } from "react";

// Painted sign buttons: flat paint with the painter's ink keyline.
const styles = {
  sign: "border-2 border-ink bg-sign text-ink hover:bg-[#fde047] active:bg-sign-deep",
  ink: "border-2 border-ink bg-ink text-white hover:bg-ink-soft",
  "outline-light": "border-2 border-white/80 text-white hover:bg-white hover:text-kiosk-ink",
  "outline-dark": "border-2 border-ink text-ink hover:bg-ink hover:text-white",
};

export function ButtonLink({
  variant = "sign",
  size = "md",
  className = "",
  ...props
}: ComponentProps<typeof Link> & {
  variant?: keyof typeof styles;
  size?: "md" | "lg";
}) {
  const sizing =
    size === "lg" ? "min-h-14 px-7 text-lg" : "min-h-11 px-5 text-[0.95rem]";
  return (
    <Link
      {...props}
      className={`inline-flex items-center justify-center rounded-md font-bold transition-colors duration-150 ${sizing} ${styles[variant]} ${className}`}
    />
  );
}
