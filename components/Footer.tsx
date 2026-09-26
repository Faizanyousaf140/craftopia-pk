import Link from "next/link";
import { Mail } from "lucide-react";
import SocialLink from "@/components/ui/SocialLink";
import { CONTACT_EMAIL, SITE_TAGLINE } from "@/lib/config";

const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/custom-orders", label: "Custom Orders" },
  { href: "/contact", label: "Contact" },
];

const linkClass =
  "flex items-center gap-2 text-sm text-[var(--color-charcoal-soft)] hover:text-[var(--color-terracotta)]";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-cream-soft)]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-serif-display text-2xl">
              Craftopia<span className="text-[var(--color-terracotta)]">.</span>pk
            </p>
            <p className="mt-2 text-sm text-[var(--color-charcoal-soft)]">
              {SITE_TAGLINE}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-charcoal)]">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline text-sm text-[var(--color-charcoal-soft)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-charcoal)]">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <SocialLink platform="instagram" className={linkClass} />
              </li>
              <li>
                <SocialLink platform="facebook" className={linkClass} />
              </li>
              <li>
                <SocialLink platform="whatsapp" className={linkClass} />
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-charcoal)]">
              Get in Touch
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 flex items-center gap-2 text-sm text-[var(--color-charcoal-soft)] hover:text-[var(--color-terracotta)]"
            >
              <Mail size={15} /> {CONTACT_EMAIL}
            </a>
            <Link
              href="/contact#shipping-returns"
              className="link-underline mt-2.5 block text-sm text-[var(--color-charcoal-soft)] hover:text-[var(--color-terracotta)]"
            >
              Shipping &amp; Returns
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-charcoal-soft)]">
          © {new Date().getFullYear()} Craftopia.pk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
