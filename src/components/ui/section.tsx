import type { ComponentProps } from "react";
import { Container } from "./container";

const tones = {
  surface: "tone-light bg-surface",
  alt: "tone-light tone-alt bg-surface-alt",
  night: "tone-dark bg-night",
  deep: "tone-dark tone-deep bg-night-deep",
};
const sizes = {
  md: "py-section lg:py-section-lg",
  sm: "py-section-sm lg:py-section-sm-lg",
};

/** A full-bleed band. Its tone sets the colours every child reads. */
export function Section({
  tone = "surface",
  size = "md",
  width,
  className = "",
  children,
  ...props
}: ComponentProps<"section"> & {
  tone?: keyof typeof tones;
  size?: keyof typeof sizes;
  width?: "page" | "narrow";
}) {
  return (
    <section {...props} className={`${tones[tone]} ${sizes[size]} ${className}`}>
      <Container width={width}>{children}</Container>
    </section>
  );
}
