import type { ReactNode } from "react";
import { SignBand } from "./sign-band";

/** Long-form text pages such as the privacy policy and terms. */
export function ProsePage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <SignBand title={title}>
        <p>Last updated {updated}</p>
      </SignBand>
      <article className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink-soft [&_a]:font-bold [&_a]:text-kiosk-ink [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-4 [&_h2]:pt-8 [&_h2]:font-[family-name:var(--font-sign)] [&_h2]:text-2xl [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:marker:text-kiosk">
          {children}
        </div>
      </article>
    </>
  );
}
