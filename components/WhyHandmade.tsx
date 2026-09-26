import { VALUE_PROPS } from "@/data/values";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function WhyHandmade() {
  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-cream-soft)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading title="Why Handmade?" className="" />

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((p, i) => (
            <Reveal key={p.title} y={20} duration={0.5} delay={i * 0.1} margin="-40px">
              <p.icon size={26} strokeWidth={1.5} className="text-[var(--color-terracotta)]" />
              <p className="mt-4 font-serif-display text-lg">{p.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-charcoal-soft)]">
                {p.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
