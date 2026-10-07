import type { ReactNode } from "react";
import { Pictogram, type PictogramName } from "./pictogram";

/** The painted signboard that opens every inner page. */
export function SignBand({
  title,
  pictogram,
  children,
}: {
  title: string;
  pictogram?: PictogramName;
  children?: ReactNode;
}) {
  return (
    <section className="bg-kiosk-deep px-3 pt-3 pb-3 sm:px-4 sm:pt-4">
      <div className="board mx-auto max-w-7xl bg-kiosk text-white [--pin:color-mix(in_srgb,#fff_55%,transparent)]">
        <div className="grid items-end gap-8 px-6 py-14 sm:px-12 sm:py-20 lg:grid-cols-[1fr_auto]">
          <div>
            <h1 className="sign shade brush-in max-w-4xl text-sign-lg text-sign">{title}</h1>
            {children && (
              <div className="mt-6 max-w-2xl text-lg leading-relaxed text-white sm:text-xl">
                {children}
              </div>
            )}
          </div>
          {pictogram && (
            <Pictogram
              name={pictogram}
              className="hidden size-36 drop-shadow-[0_10px_14px_rgba(15,23,42,0.35)] lg:block"
            />
          )}
        </div>
      </div>
    </section>
  );
}
