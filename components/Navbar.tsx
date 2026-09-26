"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import SocialLink from "@/components/ui/SocialLink";
import { buildWhatsAppLink, generalInquiryMessage } from "@/lib/whatsapp";

const NAV_LINKS = [
  { href: "/shop", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/custom-orders", label: "Custom Orders" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-cream)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-serif-display text-2xl tracking-tight transition-opacity hover:opacity-80"
        >
          Craftopia<span className="text-[var(--color-terracotta)]">.</span>pk
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`link-underline text-sm tracking-wide transition ${
                isActive(link.href)
                  ? "font-semibold text-[var(--color-charcoal)]"
                  : "font-medium text-[var(--color-charcoal-soft)] hover:text-[var(--color-charcoal)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <SocialLink
            platform="instagram"
            variant="icon"
            iconClassName="h-5 w-5"
            className="text-[var(--color-charcoal-soft)] transition hover:text-[var(--color-terracotta)]"
          />
          <SocialLink
            platform="facebook"
            variant="icon"
            iconClassName="h-4 w-4"
            className="text-[var(--color-charcoal-soft)] transition hover:text-[var(--color-terracotta)]"
          />
          <a
            href={buildWhatsAppLink(generalInquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[var(--color-charcoal)] px-4 py-2 text-sm font-medium text-[var(--color-cream)] transition hover:bg-[var(--color-terracotta)]"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          className="text-[var(--color-charcoal)] md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[var(--color-line)] md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`rounded-lg px-2 py-3 text-base font-medium hover:bg-[var(--color-cream-soft)] ${
                    isActive(link.href)
                      ? "text-[var(--color-charcoal)]"
                      : "text-[var(--color-charcoal-soft)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={buildWhatsAppLink(generalInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[var(--color-charcoal)] px-4 py-3 text-sm font-medium text-[var(--color-cream)]"
              >
                <MessageCircle size={16} />
                Order on WhatsApp
              </a>
              <SocialLink
                platform="instagram"
                variant="text"
                label="Follow on Instagram"
                className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-[var(--color-charcoal-soft)]"
              />
              <SocialLink
                platform="facebook"
                variant="text"
                label="Follow on Facebook"
                iconClassName="h-3.5 w-3.5"
                className="flex items-center justify-center gap-2 pb-1 text-sm font-medium text-[var(--color-charcoal-soft)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
