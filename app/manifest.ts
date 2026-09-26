import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | ${SITE_TAGLINE}`,
    short_name: SITE_NAME,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f1e7",
    theme_color: "#2b241d",
    icons: [
      {
        src: "/images/about/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
