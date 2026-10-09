import type { PictogramName } from "./pictogram";
import { Pictogram } from "./pictogram";

/** Sticky in-page jump links that sit under the header. */
export function SubNav({
  label,
  items,
}: {
  label: string;
  items: { id: string; label: string; pictogram: PictogramName }[];
}) {
  return (
    <nav
      aria-label={label}
      className="tone-light sticky top-header z-30 border-b border-line bg-surface/90 backdrop-blur-md"
    >
      <ul className="mx-auto flex max-w-page gap-1 overflow-x-auto px-gutter py-2 sm:px-gutter-sm lg:px-gutter-lg">
        {items.map((s) => (
          <li key={s.id} className="shrink-0">
            <a
              href={`#${s.id}`}
              className="flex items-center gap-2.5 rounded-full px-3 py-1.5 text-small font-semibold whitespace-nowrap text-fg-muted transition-colors duration-(--duration-fast) hover:bg-surface-alt hover:text-fg"
            >
              <Pictogram name={s.pictogram} className="size-6" />
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
