import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = ["", "/services", "/industries", "/licensing", "/about", "/sponsorships", "/contact", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${site.url}${p}` }));
}
