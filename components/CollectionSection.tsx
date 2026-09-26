import Image from "next/image";
import Link from "next/link";
import { collections } from "@/data/collections";
import { getProductsByCategory } from "@/data/products";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function CollectionSection() {
  // Only tease collections that actually have products behind them today —
  // an empty collection stays defined in data/collections.ts (nothing is
  // deleted) and simply reappears here automatically once it has stock.
  const availableCollections = collections.filter(
    (c) => getProductsByCategory(c.id).length > 0
  );

  return (
    <section className="border-y border-[var(--color-line)] bg-[var(--color-cream-soft)]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          title="Shop by Collection"
          description="Every category, worked in the same slow, hand-stitched way."
        />

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {availableCollections.map((c, i) => (
            <Reveal
              key={c.id}
              y={20}
              duration={0.5}
              delay={(i % 3) * 0.08}
              margin="-40px"
            >
              <Link
                href={`/shop?category=${c.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-sm shadow-card"
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(max-width: 768px) 45vw, 30vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="font-serif-display text-lg text-white sm:text-xl">
                    {c.name}
                  </p>
                  <p className="mt-1 hidden text-xs text-white/80 sm:block">
                    {c.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
