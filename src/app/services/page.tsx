import type { Metadata } from "next";
import { ButtonLink } from "@/components/button";
import { ClosingCall } from "@/components/closing-call";
import { Pictogram } from "@/components/pictogram";
import { SignBand } from "@/components/sign-band";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Network consultancy, RapidPro SMS and Monime payment integration, application testing and deployment, Linux and PostgreSQL administration, and DHIS2 implementation.",
};

const engineering = services.filter((s) => s.offerings.length > 0);

// Each service owns a full band of its own paint
const paint: Record<
  string,
  { band: string; title: string; shade: string; top: string; rule: string; name: string; body: string; tag: string }
> = {
  network: { band: "bg-wall", title: "text-ink", shade: "[--shade:var(--color-kiosk)]", top: "border-ink", rule: "border-ink/20", name: "text-ink", body: "text-ink-soft", tag: "text-kiosk-ink" },
  messaging: { band: "bg-money", title: "text-ink", shade: "[--shade:var(--color-wall)]", top: "border-ink", rule: "border-ink/25", name: "text-ink", body: "text-ink", tag: "text-ink" },
  testing: { band: "bg-sign", title: "text-ink", shade: "[--shade:var(--color-sign-deep)]", top: "border-ink", rule: "border-ink/25", name: "text-ink", body: "text-ink", tag: "text-ink" },
  linux: { band: "bg-ink", title: "text-sign", shade: "[--shade:#000]", top: "border-sign", rule: "border-white/20", name: "text-white", body: "text-slate-300", tag: "text-white" },
  dhis2: { band: "bg-kiosk", title: "text-sign", shade: "", top: "border-sign", rule: "border-white/25", name: "text-white", body: "text-blue-50", tag: "text-white" },
};

export default function ServicesPage() {
  return (
    <>
      <SignBand title="Services" pictogram="servers">
        <p>
          Five kinds of engineering work, done by one team. Most projects use
          two or three of them together.
        </p>
      </SignBand>

      <nav aria-label="Services on this page" className="sticky top-18 z-30 bg-ink">
        <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-2 sm:px-4 lg:px-6">
          {engineering.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                className="flex items-center gap-2.5 px-3 py-3 font-semibold whitespace-nowrap text-white hover:text-sign"
              >
                <Pictogram name={s.pictogram} className="size-7" />
                {s.short}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {engineering.map((s) => {
        const p = paint[s.id];
        return (
          <section key={s.id} id={s.id} aria-labelledby={`${s.id}-title`} className={`scroll-mt-32 ${p.band}`}>
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-8 lg:py-24">
              <div>
                <Pictogram name={s.pictogram} className="size-24 drop-shadow-[0_8px_10px_rgba(15,23,42,0.25)] sm:size-32" />
                <h2 id={`${s.id}-title`} className={`sign shade mt-6 text-sign-md ${p.title} ${p.shade}`}>
                  {s.plain}
                </h2>
                <p className={`mt-3 text-lg font-bold ${p.tag}`}>{s.title}</p>
                <p className={`mt-4 max-w-md text-lg leading-relaxed ${p.body}`}>{s.summary}</p>
              </div>
              <dl className={`border-t-4 lg:mt-2 ${p.top}`}>
                {s.offerings.map((o) => (
                  <div key={o.name} className={`border-b-2 border-dashed py-6 ${p.rule}`}>
                    <dt className={`text-xl font-bold ${p.name}`}>
                      {o.name}
                    </dt>
                    <dd className={`mt-1.5 max-w-2xl text-lg leading-relaxed ${p.body}`}>{o.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        );
      })}

      <section className="px-3 pt-3 sm:px-4 sm:pt-4">
        <div className="board mx-auto grid max-w-7xl items-center gap-8 bg-sign p-7 text-ink sm:p-12 lg:grid-cols-[auto_1fr_auto] [--pin:color-mix(in_srgb,#0f172a_30%,transparent)]">
          <Pictogram name="key" className="size-20" />
          <div>
            <h2 className="sign text-sign-sm sm:text-3xl">Buying the software and hardware too?</h2>
            <p className="mt-2 text-lg">
              We supply and install Zoho products, next-generation firewall
              licences and Waka TV.
            </p>
          </div>
          <ButtonLink href="/licensing" variant="ink" className="justify-self-start">
            See licensing
          </ButtonLink>
        </div>
      </section>

      <ClosingCall />
    </>
  );
}
