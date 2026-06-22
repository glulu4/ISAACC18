import type { MetadataRoute } from "next";
import { config } from "@/config";

// App Router replacement for next-sitemap. Add new routes here as pages are added.
const routes = ["", "/about", "/leadership"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.baseUrl;
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
