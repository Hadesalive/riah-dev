import type { ReactNode } from "react";
import { Eyebrow, Heading } from "./heading";
import { Text } from "./text";

/** Eyebrow, title, lead, one action: the head every section opens with. */
export function SectionHead({
  eyebrow,
  title,
  lead,
  action,
  align = "start",
  id,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  action?: ReactNode;
  align?: "center" | "start" | "split";
  id?: string;
  className?: string;
}) {
  if (align === "split") {
    return (
      <div className={`grid gap-4 lg:grid-cols-2 lg:items-end lg:gap-12 ${className}`}>
        <div>
          {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
          <Heading id={id}>{title}</Heading>
        </div>
        <div>
          {lead && <Text size="lead">{lead}</Text>}
          {action && <div className="mt-6">{action}</div>}
        </div>
      </div>
    );
  }
  const centred = align === "center";
  return (
    <div className={`${centred ? "mx-auto text-center" : ""} max-w-narrow ${className}`}>
      {eyebrow && <Eyebrow className="mb-4">{eyebrow}</Eyebrow>}
      <Heading id={id}>{title}</Heading>
      {lead && (
        <Text size="lead" className={`mt-4 max-w-measure ${centred ? "mx-auto" : ""}`}>
          {lead}
        </Text>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
