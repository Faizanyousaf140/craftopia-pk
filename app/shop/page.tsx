import type { Metadata } from "next";
import { products } from "@/data/products";
import ShopClient from "@/components/ShopClient";

export const metadata: Metadata = {
  title: "Shop All Collections",
  description:
    "Browse handmade embroidery, cushions, wall art, bags and clutches by Craftopia.pk.",
  alternates: { canonical: "/shop" },
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
      <div className="mb-10 max-w-xl">
        <h1 className="text-3xl sm:text-4xl">Shop All Collections</h1>
        <p className="mt-3 text-[var(--color-charcoal-soft)]">
          Every piece is made by hand, so small variations are part of the character, not a flaw.
        </p>
      </div>

      <ShopClient products={products} initialCategory={category} />
    </div>
  );
}
