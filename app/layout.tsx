import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MotionProvider from "@/components/MotionProvider";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  SITE_TAGLINE,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  TIKTOK_URL,
  ETSY_URL,
  CONTACT_EMAIL,
} from "@/lib/config";

// NOTE: Typography uses a curated system font stack (see app/globals.css)
// instead of next/font/google. This avoids a build-time dependency on
// fetching fonts.googleapis.com, which keeps builds fast and reliable in
// restricted network environments (CI, sandboxes, offline dev). To use a
// specific webfont instead, add it via next/font/local with self-hosted
// font files, or next/font/google if your build environment has open
// internet access.

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Handmade Art & Embroidery`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "handmade embroidery Pakistan",
    "embroidered cushions",
    "custom embroidery",
    "handmade gifts Pakistan",
    "Craftopia.pk",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/about/logo.png",
    apple: "/images/about/logo.png",
  },
  openGraph: {
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    // Uses the site's existing flagship hero photo (already shipped as the
    // priority LCP image on the homepage) rather than the old placeholder
    // hero-main.svg, which most link-preview crawlers (incl. WhatsApp)
    // don't reliably render.
    images: ["/images/hero/longerleft.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ["/images/hero/longerleft.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    logo: `${SITE_URL}/images/about/logo.png`,
    sameAs: [INSTAGRAM_URL, FACEBOOK_URL, TIKTOK_URL, ETSY_URL],
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT_EMAIL,
      contactType: "customer service",
    },
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[var(--color-cream)] text-[var(--color-charcoal)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--color-charcoal)] focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-[var(--color-cream)]"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
      </body>
    </html>
  );
}
