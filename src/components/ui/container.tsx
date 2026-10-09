import type { ComponentProps } from "react";

/** Page-width column with the standard gutters. */
export function Container({
  width = "page",
  className = "",
  ...props
}: ComponentProps<"div"> & { width?: "page" | "narrow" }) {
  const max = width === "narrow" ? "max-w-narrow" : "max-w-page";
  return (
    <div
      {...props}
      className={`mx-auto w-full ${max} px-gutter sm:px-gutter-sm lg:px-gutter-lg ${className}`}
    />
  );
}
