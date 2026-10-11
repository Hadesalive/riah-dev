import type { ReactNode } from "react";
import { Heading } from "./heading";
import { Text } from "./text";

/** Title, lead, one action: the head every section opens with. */
export function SectionHead({
  title,
  lead,
  action,
  align = "start",
  id,
  className = "",
}: {
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
        <Heading id={id}>{title}</Heading>
        {/* With no lead, the action sits flush right across from the title */}
        <div className={lead ? "" : "lg:justify-self-end"}>
          {lead && <Text size="lead">{lead}</Text>}
          {action && <div className={lead ? "mt-6" : "mt-2 lg:mt-0"}>{action}</div>}
        </div>
      </div>
    );
  }
  const centred = align === "center";
  return (
    <div className={`${centred ? "mx-auto text-center" : ""} max-w-narrow ${className}`}>
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
