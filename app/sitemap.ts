import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { SITE_URL } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  // No `lastModified` is set here: none of these routes have a real tracked
  // update date, and reporting `new Date()` on every build/request would
  // falsely claim every page changed "right now" to crawlers.
  const staticRoutes = ["", "/shop", "/about", "/custom-orders", "/contact"].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
    })
  );

  const productRoutes = products.map((p) => ({
    url: `${SITE_URL}/shop/${p.slug}`,
  }));

  return [...staticRoutes, ...productRoutes];
}
