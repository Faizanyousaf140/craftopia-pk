import type { Product } from "@/data/products";
import Reveal from "@/components/ui/Reveal";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-sm text-[var(--color-charcoal-soft)]">
        More pieces from this collection are coming soon.
      </p>
    );
  }

  return (
    <Reveal
      y={16}
      duration={0.5}
      margin="-40px"
      className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Reveal>
  );
}
