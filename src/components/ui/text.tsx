import type { ComponentProps, ElementType } from "react";

const sizes = {
  lead: "text-lead",
  body: "text-body",
  small: "text-small",
  caption: "text-caption",
};
const tones = {
  default: "text-(--fg)",
  muted: "text-(--fg-muted)",
  subtle: "text-(--fg-subtle)",
};

export function Text({
  as: Tag = "p",
  size = "body",
  tone = "muted",
  className = "",
  ...props
}: ComponentProps<"p"> & {
  as?: ElementType;
  size?: keyof typeof sizes;
  tone?: keyof typeof tones;
}) {
  return <Tag {...props} className={`${sizes[size]} ${tones[tone]} ${className}`} />;
}
