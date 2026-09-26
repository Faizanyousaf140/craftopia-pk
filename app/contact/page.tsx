import type { Metadata } from "next";
import { MessageCircle, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/BrandIcons";
import { INSTAGRAM_URL, FACEBOOK_URL, CONTACT_EMAIL } from "@/lib/config";
import { buildWhatsAppLink, generalInquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Craftopia.pk via WhatsApp, Instagram, Facebook or email.",
  alternates: { canonical: "/contact" },
};

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    detail: "Fastest way to reach us for orders, pricing and questions.",
    href: buildWhatsAppLink(generalInquiryMessage()),
    cta: "Chat on WhatsApp",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    detail: "See new pieces first and DM us directly.",
    href: INSTAGRAM_URL,
    cta: "Message on Instagram",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    detail: "Follow along and reach us through Messenger.",
    href: FACEBOOK_URL,
    cta: "Message on Facebook",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
      <h1 className="text-3xl sm:text-4xl">Get in Touch</h1>
      <p className="mt-4 max-w-xl text-[var(--color-charcoal-soft)]">
        No complicated checkout. Just reach out on whichever channel is
        easiest for you, and we&apos;ll take it from there.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {CHANNELS.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-sm border border-[var(--color-line)] p-6 transition hover:border-[var(--color-charcoal)] hover:shadow-card"
          >
            <c.icon className="h-[22px] w-[22px] text-[var(--color-terracotta)]" />
            <p className="mt-4 font-serif-display text-lg">{c.label}</p>
            <p className="mt-1.5 flex-1 text-sm text-[var(--color-charcoal-soft)]">{c.detail}</p>
            <span className="link-underline mt-4 inline-block w-fit text-xs font-medium uppercase tracking-wide">
              {c.cta} →
            </span>
          </a>
        ))}
      </div>

      <div className="mt-10 flex items-center gap-2 text-sm text-[var(--color-charcoal-soft)]">
        <Mail size={15} />
        <a href={`mailto:${CONTACT_EMAIL}`} className="link-underline">
          {CONTACT_EMAIL}
        </a>
      </div>

      <div id="shipping-returns" className="mt-16 scroll-mt-24 border-t border-[var(--color-line)] pt-14">
        <h2 className="text-2xl sm:text-3xl">Shipping & Returns</h2>

        <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2">
          <div>
            <h3 className="font-serif-display text-lg">Shipping</h3>
            <p className="mt-3 leading-relaxed text-[var(--color-charcoal-soft)]">
              We ship within Pakistan. Delivery typically takes 5–7 business days, depending on your location. Shipping costs will be calculated at checkout based on your location.
            </p>
            <p className="mt-3 text-sm text-[var(--color-charcoal-soft)]">
              <strong>Note:</strong> Each piece is made to order or handpicked from our studio, so orders may take 5–10 days to prepare before shipping.
            </p>
          </div>

          <div>
            <h3 className="font-serif-display text-lg">Returns & Exchanges</h3>
            <p className="mt-3 leading-relaxed text-[var(--color-charcoal-soft)]">
              We stand behind every piece. If there&apos;s a defect in materials or craftsmanship, we&apos;ll make it right within 14 days of delivery. For custom orders, we work closely with you during the design phase to ensure you&apos;re happy with the final result before it ships.
            </p>
            <p className="mt-3 text-sm text-[var(--color-charcoal-soft)]">
              Have questions? Reach out via WhatsApp. We&apos;re here to help.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
