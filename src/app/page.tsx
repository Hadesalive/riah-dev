import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { ClosingCall } from "@/components/closing-call";
import { Pictogram } from "@/components/pictogram";
import { licensing, menu, sectors, services } from "@/lib/site";

const signWords = ["Networks.", "Servers.", "SMS.", "Payments."];

const steps = [
  { name: "Audit", detail: "We map what you run today and find where it fails." },
  { name: "Design", detail: "Network, servers, integrations and security, planned before anything is bought." },
  { name: "Test", detail: "Code review, load and acceptance testing in your real conditions." },
  { name: "Deploy", detail: "A staged go-live, hardened servers and handover documents." },
  { name: "Support", detail: "Monitoring, licence renewals and someone to call when it breaks." },
];

const sectorPaint: Record<string, string> = {
  health: "bg-money text-ink [--pin:color-mix(in_srgb,#0f172a_35%,transparent)]",
  fintech: "bg-sign text-ink [--pin:color-mix(in_srgb,#0f172a_35%,transparent)]",
  government: "bg-kiosk text-white [--pin:color-mix(in_srgb,#fff_50%,transparent)]",
  hospitality: "bg-ink text-white [--pin:color-mix(in_srgb,#fff_35%,transparent)]",
};

const featured = services.filter((s) => s.id === "network" || s.id === "messaging");
const others = services.filter((s) => s.id !== "network" && s.id !== "messaging");

export default function Home() {
  return (
    <>
      {/* The big sign */}
      <section className="bg-kiosk-deep px-3 pt-3 pb-3 sm:px-4 sm:pt-4">
        <div className="board mx-auto grid max-w-7xl gap-10 bg-kiosk px-6 py-12 text-white sm:px-12 sm:py-16 lg:grid-cols-[7fr_5fr] lg:gap-12 lg:py-20 [--pin:color-mix(in_srgb,#fff_55%,transparent)]">
          <div className="flex flex-col justify-center">
            <h1 className="sign shade text-sign-xl text-sign">
              {signWords.map((w, i) => (
                <span
                  key={w}
                  className="brush-in block"
                  style={{ ["--i" as string]: i }}
                >
                  {w}
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed font-medium sm:text-2xl sm:leading-snug">
              We design, install and run IT systems for ministries, health
              programmes, banks and hotels in Sierra Leone.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact" size="lg">
                Request a consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="outline-light" size="lg">
                See all services
              </ButtonLink>
            </div>
          </div>

          <nav
            aria-labelledby="menu-title"
            className="board self-center bg-ink px-5 pt-7 pb-4 shadow-[0_24px_40px_-18px_rgba(2,6,23,0.7)] sm:px-7 [--pin:color-mix(in_srgb,#facc15_55%,transparent)]"
          >
            <h2 id="menu-title" className="sign px-2 text-3xl text-white">
              What we do
            </h2>
            <ul className="mt-4">
              {menu.map((m) => (
                <li key={m.label} className="border-t border-dashed border-white/20 first:border-t-0">
                  <Link
                    href={m.href}
                    className="group flex items-center gap-4 rounded-md px-2 py-2.5 transition-colors hover:bg-white/8"
                  >
                    <Pictogram name={m.pictogram} className="size-11 shrink-0" />
                    <span className="min-w-0 flex-1">
                      <span className="block font-bold text-white group-hover:text-sign">
                        {m.label}
                      </span>
                      <span className="block text-sm text-slate-300">{m.detail}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Sectors */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <h2 className="sign shade text-sign-lg text-ink [--shade:var(--color-kiosk)]">
            Who we work for
          </h2>
          <p className="mt-5 text-xl leading-relaxed text-ink-soft">
            Most of our clients work with unreliable power and patchy
            connections, so that is what we design for.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {sectors.map((s) => (
            <Link
              key={s.id}
              href={`/industries#${s.id}`}
              className={`board group grid gap-5 p-7 sm:grid-cols-[auto_1fr] sm:gap-6 transition-transform duration-200 hover:-translate-y-1 sm:p-10 ${sectorPaint[s.id]}`}
            >
              <Pictogram
                name={s.pictogram}
                className="size-20 drop-shadow-[0_6px_8px_rgba(15,23,42,0.25)] sm:size-24"
              />
              <div>
                <h3 className="sign text-sign-sm sm:text-3xl">{s.name}</h3>
                <p className="mt-3 text-lg leading-snug font-medium">{s.need}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Services they use">
                  {s.uses.map((u) => (
                    <li
                      key={u}
                      className="rounded-full bg-white px-3 py-1 text-sm font-bold text-ink shadow-[inset_0_-2px_0_rgba(15,23,42,0.15)]"
                    >
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-kiosk-deep">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-6 text-white lg:grid-cols-[1fr_1fr] lg:items-end">
            <h2 className="sign shade text-sign-lg text-sign">
              From the cable to the code
            </h2>
            <p className="max-w-xl text-xl leading-relaxed text-blue-50">
              We handle the network, the servers, the integrations and the
              licences ourselves, so you have one team to call when something
              stops working.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-2">
            {featured.map((s) => (
              <article
                key={s.id}
                className="board flex min-w-0 flex-col bg-wall p-6 text-ink min-[400px]:p-8 sm:p-10 [--pin:color-mix(in_srgb,var(--color-kiosk)_45%,transparent)]"
              >
                <div className="flex items-start justify-between gap-4 sm:gap-6">
                  <div className="min-w-0">
                    <h3 className="sign text-3xl leading-tight sm:text-4xl">{s.plain}</h3>
                    <p className="mt-2 font-bold text-kiosk-ink">{s.title}</p>
                  </div>
                  <Pictogram name={s.pictogram} className="size-14 shrink-0 sm:size-24" />
                </div>
                <ul className="mt-8 space-y-4">
                  {s.offerings.map((o) => (
                    <li key={o.name} className="grid grid-cols-[1.25rem_1fr] gap-3">
                      <span className="mt-1.5 size-3.5 rounded-full border-2 border-ink bg-sign" aria-hidden="true" />
                      <span>
                        <span className="block font-bold">{o.name}</span>
                        <span className="block text-ink-soft">{o.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${s.id}`}
                  className="mt-auto pt-8 font-bold text-kiosk-ink underline decoration-2 underline-offset-4 hover:text-kiosk"
                >
                  {s.id === "network" ? "More about networks" : "More about SMS and payments"}
                </Link>
              </article>
            ))}
          </div>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.id === "licensing" ? "/licensing" : `/services#${s.id}`}
                  className="board group flex h-full flex-col bg-white p-7 text-ink transition-transform duration-200 hover:-translate-y-1 [--pin:color-mix(in_srgb,var(--color-kiosk)_30%,transparent)]"
                >
                  <Pictogram name={s.pictogram} className="size-14" />
                  <h3 className="mt-5 text-xl leading-tight font-bold">{s.plain}</h3>
                  <p className="mt-1 text-sm font-bold text-kiosk-ink">{s.title}</p>
                  <p className="mt-3 text-ink-soft">{s.summary}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How a project runs */}
      <section className="bg-sign">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <h2 className="sign shade text-sign-lg text-ink [--shade:var(--color-sign-deep)]">
            How a project runs
          </h2>
          <ol className="relative mt-14 grid gap-10 lg:grid-cols-5 lg:gap-6">
            <span
              aria-hidden="true"
              className="absolute top-8 bottom-8 left-[30px] w-1 rounded-full bg-ink lg:top-[30px] lg:right-[calc((100%-6rem)/5-30px)] lg:bottom-auto lg:left-[30px] lg:h-1 lg:w-auto"
            />
            {steps.map((step, i) => (
              <li key={step.name} className="relative grid grid-cols-[64px_1fr] gap-5 lg:block">
                <span className="sign relative flex size-16 items-center justify-center rounded-full border-4 border-ink bg-white text-3xl text-ink">
                  {i + 1}
                </span>
                <div className="lg:mt-5">
                  <h3 className="sign text-2xl uppercase">{step.name}</h3>
                  <p className="mt-2 max-w-xs font-medium text-ink/85">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Licensing: painted price list, no prices, just what we supply */}
      <section className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <h2 className="sign shade text-sign-lg text-sign [--shade:#000]">
              We also supply the software
            </h2>
            <p className="mt-5 max-w-md text-xl leading-relaxed text-slate-200">
              We install and renew every licence we sell.
            </p>
            <ButtonLink href="/licensing" className="mt-8">
              See licensing
            </ButtonLink>
          </div>
          <ul className="border-t-4 border-sign">
            {licensing.map((l) => (
              <li key={l.product} className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-b-2 border-dashed border-white/25 py-6">
                <Pictogram name={l.pictogram} className="row-span-2 size-14 sm:size-16" />
                <div className="flex items-baseline gap-3">
                  <h3 className="sign text-2xl lg:whitespace-nowrap">{l.short}</h3>
                  <span className="hidden min-w-6 flex-1 border-b-[3px] border-dotted border-sign/60 sm:block" aria-hidden="true" />
                  <span className="hidden shrink-0 font-bold whitespace-nowrap text-sign sm:block">Supplied and installed</span>
                </div>
                <p className="text-slate-300">{l.fit}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCall />
    </>
  );
}
