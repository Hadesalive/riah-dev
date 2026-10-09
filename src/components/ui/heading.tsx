import type { ComponentProps, ElementType } from "react";

const sizes = {
  display: "text-display",
  h1: "text-h1",
  h2: "text-h2",
  h3: "text-h3",
  h4: "text-h4",
};

export function Heading({
  as: Tag = "h2",
  size = "h2",
  className = "",
  ...props
}: ComponentProps<"h2"> & { as?: ElementType; size?: keyof typeof sizes }) {
  return <Tag {...props} className={`font-heading text-(--fg) ${sizes[size]} ${className}`} />;
}

/** Small uppercase label that sits above a heading. */
export function Eyebrow({ className = "", ...props }: ComponentProps<"p">) {
  return (
    <p
      {...props}
      className={`font-heading text-eyebrow text-(--fg-muted) uppercase ${className}`}
    />
  );
}
