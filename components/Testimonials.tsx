import Reveal from "@/components/ui/Reveal";

type Testimonial = { name: string; quote: string };
const testimonials: Testimonial[] = [
  { name: "zainabkhan812024", quote: "I highly recommend." },
  {
    name: "ayeshaw_zahid",
    quote: "Trusted seller. She is very true, honest and hardworking.",
  },
  { name: "nooreeyhira", quote: "These are so pretty." },
  { name: "saleemsamra", quote: "Wow beautiful." },
  { name: "ejd.imran", quote: "Fresh and elegant designs." },
  { name: "Rana Faizan", quote: "Well done." },
  { name: "bint e hawalcoset_pk", quote: "Beautiful." },
  { name: "mrstheexplorer_", quote: "Woww you made great creativity." },
];

export default function Testimonials() {
  if (testimonials.length === 0) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="rounded-sm border border-dashed border-[var(--color-line)] px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl">What Customers Say</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[var(--color-charcoal-soft)]">
            Reviews are on their way. This section is ready to display real
            customer testimonials as they come in.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl">What Customers Say</h2>
          <p className="mt-3 text-sm text-[var(--color-charcoal-soft)]">
            A few kind words shared by the Craftopia community.
          </p>
        </div>
        <span className="hidden text-xs uppercase tracking-wide text-[var(--color-charcoal-soft)] sm:block">
          From Instagram & Facebook
        </span>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t, i) => (
          <Reveal
            key={`${t.name}-${i}`}
            as="blockquote"
            y={16}
            duration={0.5}
            delay={i * 0.1}
            className="rounded-sm border border-[var(--color-line)] p-6 shadow-card"
          >
            <p className="text-sm leading-relaxed text-[var(--color-charcoal-soft)]">
              &ldquo;{t.quote}&rdquo;
            </p>
            <cite className="mt-4 block text-sm font-medium not-italic">
              {t.name}
            </cite>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
