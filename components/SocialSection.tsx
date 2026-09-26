import { MessageCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/BrandIcons";
import { INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/config";
import { buildWhatsAppLink, generalInquiryMessage } from "@/lib/whatsapp";
import Reveal from "@/components/ui/Reveal";

export default function SocialSection() {
  return (
    <section className="border-t border-[var(--color-line)] bg-[var(--color-charcoal)] text-[var(--color-cream)]">
      <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:py-24">
        <Reveal y={16} duration={0.6}>
          <h2 className="text-3xl sm:text-4xl">See What We&apos;re Making</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[var(--color-cream)]/70">
            Follow along for new pieces, works in progress, and the odd
            behind-the-scenes moment.
          </p>
        </Reveal>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[var(--color-cream)]/30 px-6 py-3 text-sm font-medium transition hover:bg-[var(--color-cream)] hover:text-[var(--color-charcoal)]"
          >
            <InstagramIcon className="h-4 w-4" /> Follow on Instagram
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[var(--color-cream)]/30 px-6 py-3 text-sm font-medium transition hover:bg-[var(--color-cream)] hover:text-[var(--color-charcoal)]"
          >
            <FacebookIcon className="h-4 w-4" /> Visit Facebook
          </a>
          <a
            href={buildWhatsAppLink(generalInquiryMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[var(--color-terracotta)] px-6 py-3 text-sm font-medium transition hover:opacity-90"
          >
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
