"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { collections } from "@/data/collections";
import ProductGrid from "./ProductGrid";

export default function ShopClient({
  products,
  initialCategory,
}: {
  products: Product[];
  initialCategory?: string;
}) {
  const [active, setActive] = useState<string>(initialCategory ?? "all");

  const filtered =
    active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition ${
            active === "all"
              ? "border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-cream)]"
              : "border-[var(--color-line)] text-[var(--color-charcoal-soft)] hover:border-[var(--color-charcoal)]"
          }`}
        >
          All
        </button>
        {collections.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-wide transition ${
              active === c.id
                ? "border-[var(--color-charcoal)] bg-[var(--color-charcoal)] text-[var(--color-cream)]"
                : "border-[var(--color-line)] text-[var(--color-charcoal-soft)] hover:border-[var(--color-charcoal)]"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <ProductGrid products={filtered} />
    </div>
  );
}
