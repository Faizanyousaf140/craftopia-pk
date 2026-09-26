import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/data/products";
import { buildWhatsAppLink, productInquiryMessage } from "@/lib/whatsapp";
import Button from "@/components/ui/Button";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col">
      <Link
        href={`/shop/${product.slug}`}
        className="media-frame block aspect-[4/5] ring-1 ring-inset ring-transparent transition group-hover:ring-[var(--color-gold)]"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
          className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </Link>

      <div className="mt-4 flex flex-1 flex-col">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-serif-display text-lg text-[var(--color-charcoal)]">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-[var(--color-charcoal-soft)]">
          {product.tagline}
        </p>

        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-[var(--color-charcoal)]">
            {product.price
              ? `PKR ${product.price.toLocaleString()}${product.priceLabel ? ` ${product.priceLabel}` : ""}`
              : "Price on request"}
          </span>
          <Link
            href={`/shop/${product.slug}`}
            className="link-underline text-xs font-medium uppercase tracking-wide text-[var(--color-charcoal-soft)]"
          >
            View details
          </Link>
        </div>

        <Button
          href={buildWhatsAppLink(productInquiryMessage(product.name))}
          external
          variant="outline"
          size="sm"
          icon={<MessageCircle size={14} />}
          className="mt-4 w-full uppercase tracking-wide"
        >
          Order on WhatsApp
        </Button>
      </div>
    </div>
  );
}
