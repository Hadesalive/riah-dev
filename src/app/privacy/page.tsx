import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProsePage } from "@/components/prose-page";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "How RIAH SL Limited handles the personal information you send through riah.dev.",
  path: "/privacy",
});;

// Plain-language starting point. Have it reviewed before launch.
export default function PrivacyPage() {
  return (
    <ProsePage title="Privacy policy" updated="7 October 2026">
      <p>
        This policy explains what {site.legalName} collects through riah.dev and
        what we do with it.
      </p>
      <h2>What we collect</h2>
      <p>
        When you use the contact form we receive your name, organisation, email
        address, phone number if you give it, the service you chose and your
        message. We do not use advertising trackers on this site.
      </p>
      <h2>How we use it</h2>
      <ul>
        <li>To reply to your inquiry and prepare a proposal.</li>
        <li>To keep a record of our correspondence with clients.</li>
      </ul>
      <p>We do not sell your information or share it for marketing.</p>
      <h2>Who processes it</h2>
      <p>
        Form submissions are delivered to our inbox by Web3Forms. Our email is
        hosted by our email provider. Both process the data only to deliver it
        to us.
      </p>
      <h2>How long we keep it</h2>
      <p>
        We keep inquiries for as long as needed to respond and for our business
        records, then delete them.
      </p>
      <h2>Your choices</h2>
      <p>
        To see, correct or delete what we hold about you, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </ProsePage>
  );
}
