import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm, TopicAwareContactForm } from "@/components/contact-form";
import { Pictogram } from "@/components/pictogram";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a technical consultation with RIAH SL for network consultancy, RapidPro SMS and Monime integration, app testing, DHIS2 or software licensing.",
};

export default function ContactPage() {
  return (
    <div className="flex-1 bg-kiosk-deep px-3 py-3 sm:px-4 sm:py-4">
      <div className="mx-auto grid max-w-7xl gap-3 sm:gap-4 lg:grid-cols-[5fr_7fr]">
        <section className="board bg-kiosk p-8 text-white sm:p-12 [--pin:color-mix(in_srgb,#fff_50%,transparent)]">
          <Pictogram name="sms" className="size-24" />
          <h1 className="sign shade brush-in mt-6 text-sign-md text-sign">
            Request a technical consultation
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed">
            Tell us what you run today and what you need. The more detail you
            give, the more useful our first reply will be.
          </p>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="font-bold text-blue-100">New projects</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="text-2xl font-bold text-white underline decoration-sign decoration-2 underline-offset-4 hover:text-sign">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-bold text-blue-100">Existing clients</dt>
              <dd>
                <a href={`mailto:${site.supportEmail}`} className="text-2xl font-bold text-white underline decoration-sign decoration-2 underline-offset-4 hover:text-sign">
                  {site.supportEmail}
                </a>
              </dd>
            </div>
          </dl>
        </section>

        <section
          aria-label="Consultation request form"
          className="board bg-white p-7 text-ink sm:p-12 [--pin:color-mix(in_srgb,var(--color-kiosk)_25%,transparent)]"
        >
          <Suspense fallback={<ContactForm />}>
            <TopicAwareContactForm />
          </Suspense>
        </section>
      </div>
    </div>
  );
}
