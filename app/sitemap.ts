import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.url) return [];

  return ["", "/imprint", "/privacy"].map((path) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "yearly",
    priority: path === "" ? 1 : 0.3,
  }));
}
