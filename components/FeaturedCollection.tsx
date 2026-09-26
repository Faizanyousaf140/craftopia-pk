import { getFeaturedProducts } from "@/data/products";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "./ProductCard";

export default function FeaturedCollection() {
  const featured = getFeaturedProducts().slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading
        title="Made by Hand"
        description="Pieces created slowly, thoughtfully, and with a little bit of soul."
      />

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
