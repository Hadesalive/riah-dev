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
  "mt-2 block w-full rounded-md border-2 border-ink/25 bg-wall px-4 py-3 text-base font-normal text-ink placeholder:text-ink-soft/60 focus:border-kiosk focus:bg-white focus:shadow-none focus:outline-3 focus:outline-offset-0 focus:outline-kiosk/30";

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
        <span className="flex size-14 items-center justify-center rounded-full bg-money" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="size-8"><path d="M5 12.5 L10 17.5 L19 7" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
        <h2 className="sign mt-6 text-3xl">Message sent</h2>
        <p className="mt-2 text-ink-soft">
          We&apos;ll reply to the email address you gave us. If it&apos;s
          urgent, write to {site.supportEmail}.
        </p>
        <button
          type="button"
          onClick={() => setStatus({ state: "idle" })}
          className="mt-6 font-bold text-kiosk-ink underline decoration-2 underline-offset-4"
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

      <label className="font-bold">
        Full name
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label className="font-bold">
        Organisation
        <input
          name="organisation"
          autoComplete="organization"
          placeholder="Ministry, business or NGO"
          className={field}
        />
      </label>
      <label className="font-bold">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label className="font-bold">
        Phone <span className="font-normal text-ink-soft">(optional)</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="font-bold sm:col-span-2">
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
      <label className="font-bold sm:col-span-2">
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
          className="inline-flex min-h-14 items-center rounded-md bg-sign px-8 text-lg font-bold text-ink border-2 border-ink transition-colors hover:bg-[#fde047] active:bg-sign-deep disabled:opacity-60"
        >
          {status.state === "sending" ? "Sending…" : "Send message"}
        </button>
        {status.state === "error" && (
          <p role="alert" className="max-w-md rounded-md bg-red-50 px-4 py-3 font-semibold text-red-800">
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
