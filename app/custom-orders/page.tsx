import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, customOrderMessage } from "@/lib/whatsapp";
import { CUSTOM_ORDER_STEPS } from "@/data/customOrderSteps";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Custom Orders",
  description:
    "Start a custom handmade order with Craftopia.pk. Personalized embroidery, décor and gifts made around your idea.",
  alternates: { canonical: "/custom-orders" },
};

const IDEAS = [
  "A couple or family portrait in embroidery",
  "A name or nikkah-style piece in Urdu or English calligraphy",
  "A custom color palette to match your room",
  "A personalized gift for a wedding, birth, or anniversary",
];

export default function CustomOrdersPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 lg:py-20">
      <h1 className="text-3xl sm:text-4xl">Made Just For You</h1>
      <p className="mt-4 max-w-xl text-[var(--color-charcoal-soft)]">
        Have something special in mind? Tell us what you&apos;re imagining and
        we&apos;ll help turn it into a handmade piece.
      </p>

      <Button
        href={buildWhatsAppLink(customOrderMessage())}
        external
        icon={<MessageCircle size={16} />}
        className="mt-8"
      >
        Start a Custom Order
      </Button>

      <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
        {CUSTOM_ORDER_STEPS.map((step, i) => (
          <div key={step.title} className="flex gap-5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)] font-serif-display text-sm text-[var(--color-gold)]">
              {i + 1}
            </span>
            <div>
              <p className="font-medium">{step.title}</p>
              <p className="mt-1 text-sm text-[var(--color-charcoal-soft)]">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-sm border border-[var(--color-line)] bg-[var(--color-cream-soft)] p-8">
        <h2 className="text-xl">Ideas to Get You Started</h2>
        <ul className="mt-4 space-y-2.5">
          {IDEAS.map((idea) => (
            <li key={idea} className="flex items-start gap-2 text-sm text-[var(--color-charcoal-soft)]">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-terracotta)]" />
              {idea}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
