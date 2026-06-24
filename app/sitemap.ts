import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"
import { getAllPostSlugs } from "@/lib/actions"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const routes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ]

  try {
    const posts = await getAllPostSlugs()
    for (const post of posts) {
      routes.push({
        url: `${siteConfig.url}/blog/${post.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      })
    }
  } catch {
    // Sanity may be unavailable at build time; fall back to static routes only.
  }

  return routes
}
