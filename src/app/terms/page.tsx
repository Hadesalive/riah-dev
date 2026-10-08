import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProsePage } from "@/components/prose-page";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Terms of service",
  description:
    "The terms that cover your use of riah.dev, the website of RIAH SL Limited.",
  path: "/terms",
});;

// Plain-language starting point. Have it reviewed before launch.
export default function TermsPage() {
  return (
    <ProsePage title="Terms of service" updated="7 October 2026">
      <p>
        These terms cover your use of riah.dev, the website of {site.legalName}.
      </p>
      <h2>Information on this site</h2>
      <p>
        The content here describes our services in general terms. It is not a
        quote or a contract. The scope, price and terms of any engagement are
        set out in a written agreement with you.
      </p>
      <h2>Third-party products</h2>
      <p>
        Zoho, Monime, RapidPro, DHIS2, Waka TV, Starlink, Ubiquiti and other
        names on this site belong to their owners. Licensed products are also
        subject to their vendors&apos; own terms.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The text, design and logo on this site belong to {site.legalName}.
        Don&apos;t reuse them without our permission.
      </p>
      <h2>Liability</h2>
      <p>
        We work to keep this site accurate and available but don&apos;t
        guarantee it. We are not liable for losses arising from use of the site
        itself.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms go to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </ProsePage>
  );
}
