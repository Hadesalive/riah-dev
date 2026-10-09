import { licensing, sectors, services, site, steps } from "@/lib/site";

// llms.txt (llmstxt.org): a plain-markdown map of the site for AI assistants.
// Built from the same data as the pages, so it never drifts; prerendered at build.
export function GET() {
  const url = (path: string) => `${site.url}${path}`;
  const serviceUrl = (id: string) => (id === "licensing" ? url("/licensing") : url(`/services#${id}`));

  const body = `# ${site.legalName}

> ${site.description}

${site.legalName} (also known as ${site.alternateNames.join(", ")}) is an ICT engineering company based in Sierra Leone. Every project runs through the same stages: ${steps.map((s) => s.name).join(", ")}.

Contact: ${site.email} for new projects, ${site.supportEmail} for existing clients.

## Services

${services.map((s) => `- [${s.title}](${serviceUrl(s.id)}): ${s.summary}`).join("\n")}

## Industries

${sectors.map((s) => `- [${s.name}](${url(`/industries#${s.id}`)}): ${s.need}`).join("\n")}

## Software licensing

${licensing.map((l) => `- [${l.product}](${url("/licensing")}): ${l.services}`).join("\n")}

## Company

- [About](${url("/about")}): Who we are and how we work.
- [Global exchange & sponsorships](${url("/sponsorships")}): International forums we take part in, and how sponsors help.
- [Request a consultation](${url("/contact")}): Contact form and email addresses.

## Optional

- [Privacy policy](${url("/privacy")})
- [Terms](${url("/terms")})
- [Sitemap](${url("/sitemap.xml")})
`;

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
