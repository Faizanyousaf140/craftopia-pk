import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, customOrderMessage } from "@/lib/whatsapp";
import { CUSTOM_ORDER_STEPS } from "@/data/customOrderSteps";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function CustomOrderSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal y={16} duration={0.6}>
          <h2 className="text-3xl sm:text-4xl">Made Just For You</h2>
          <p className="mt-4 max-w-md text-[var(--color-charcoal-soft)]">
            Have something special in mind? Tell us what you&apos;re imagining
            and we&apos;ll help turn it into a handmade piece.
          </p>
          <Button
            href={buildWhatsAppLink(customOrderMessage())}
            external
            icon={<MessageCircle size={16} />}
            className="mt-8"
          >
            Start a Custom Order
          </Button>
        </Reveal>

        <div className="space-y-8">
          {CUSTOM_ORDER_STEPS.map((step, i) => (
            <Reveal
              key={step.title}
              x={16}
              duration={0.5}
              delay={i * 0.1}
              margin="-40px"
              className="flex gap-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)] font-serif-display text-sm text-[var(--color-gold)]">
                {i + 1}
              </span>
              <div>
                <p className="font-medium text-[var(--color-charcoal)]">{step.title}</p>
                <p className="mt-1 text-sm text-[var(--color-charcoal-soft)]">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
