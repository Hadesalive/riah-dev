"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { serviceOptions, site } from "@/lib/site";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status =
  | { state: "idle" }
  | { state: "sending" }
  | { state: "sent" }
  | { state: "error"; message: string };

const field =
  "mt-2 block min-h-12 w-full rounded-sm bg-surface px-4 py-3 text-body font-normal text-fg ring-1 ring-line placeholder:text-fg-subtle focus:shadow-none focus:outline-3 focus:outline-offset-0 focus:outline-accent/30 focus:ring-accent";
const label = "text-small font-semibold text-fg";

/** Reads ?topic= so links like "Discuss a sponsorship" preselect the service. */
export function TopicAwareContactForm() {
  const params = useSearchParams();
  const topic =
    params.get("topic") === "sponsorship" ? "Sponsorship or partnership" : "";
  return <ContactForm key={topic} initialTopic={topic} />;
}

export function ContactForm({ initialTopic = "" }: { initialTopic?: string }) {
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!ACCESS_KEY) {
      setStatus({
        state: "error",
        message: `The form isn't connected yet. Email us at ${site.email} instead.`,
      });
      return;
    }

    setStatus({ state: "sending" });
    const data = new FormData(form);
    data.append("access_key", ACCESS_KEY);
    data.append("subject", `Website inquiry: ${data.get("service")}`);
    data.append("from_name", "riah.dev contact form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { success: boolean; message?: string };
      if (!json.success) throw new Error(json.message);
      form.reset();
      setStatus({ state: "sent" });
    } catch {
      setStatus({
        state: "error",
        message: `Your message wasn't sent. Check your connection and try again, or email ${site.email}.`,
      });
    }
  }

  if (status.state === "sent") {
    return (
      <div role="status" className="py-6">
        <span className="flex size-14 items-center justify-center rounded-full bg-surface-alt" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="size-8 text-accent-strong"><path d="M5 12.5 L10 17.5 L19 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <h2 className="mt-6 font-heading text-h3 text-fg">Message sent</h2>
        <p className="mt-2 text-fg-muted">
          We&apos;ll reply to the email address you gave us. If it&apos;s
          urgent, write to {site.supportEmail}.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-6 font-semibold text-accent-strong underline decoration-1 underline-offset-4 hover:decoration-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 sm:grid-cols-2">
      {/* Honeypot for bots */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />

      <label className={label}>
        Full name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className={label}>
        Organisation
        <input
          name="organisation"
          autoComplete="organization"
          placeholder="Ministry, business or NGO"
          className={field}
        />
      </label>
      <label className={label}>
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className={label}>
        Phone <span className="font-normal text-fg-muted">(optional)</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className={`${label} sm:col-span-2`}>
        What do you need help with?
        <select name="service" required defaultValue={initialTopic} className={field}>
          <option value="" disabled>
            Choose a service
          </option>
          {serviceOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <label className={`${label} sm:col-span-2`}>
        Project scope
        <textarea
          name="message"
          required
          rows={6}
          placeholder="What you run today, what's going wrong, and any deadline."
          className={field}
        />
      </label>

      <div className="flex flex-wrap items-center gap-5 sm:col-span-2">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className="inline-flex min-h-13 items-center rounded-sm bg-signal px-6 text-body font-semibold text-fg transition-colors duration-(--duration-fast) hover:bg-signal-hover disabled:opacity-60"
        >
          {status.state === "sending" ? "Sending…" : "Send message"}
        </button>
        {status.state === "error" && (
          <p role="alert" className="max-w-md rounded-sm bg-red-50 px-4 py-3 text-small font-semibold text-red-800 ring-1 ring-red-200">
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
