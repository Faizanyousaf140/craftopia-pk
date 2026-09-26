import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/BrandIcons";
import { products, getProductBySlug } from "@/data/products";
import { SITE_URL, INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/config";
import { buildWhatsAppLink, productInquiryMessage } from "@/lib/whatsapp";
import ProductGallery from "@/components/ProductGallery";
import ProductGrid from "@/components/ProductGrid";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/shop/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.images.map((i) => `${SITE_URL}${i}`),
    brand: { "@type": "Brand", name: "Craftopia.pk" },
    ...(product.price
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "PKR",
            price: product.price,
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Shop", item: `${SITE_URL}/shop` },
      {
        "@type": "ListItem",
        position: 2,
        name: product.name,
        item: `${SITE_URL}/shop/${product.slug}`,
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <nav className="mb-8 text-xs text-[var(--color-charcoal-soft)]">
        <Link href="/shop" className="link-underline">Shop</Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <ProductGallery images={product.images} name={product.name} />

        <div>
          <h1 className="text-3xl sm:text-4xl">{product.name}</h1>
          <p className="mt-2 text-[var(--color-charcoal-soft)]">{product.tagline}</p>

          <p className="mt-4 text-lg font-medium">
            {product.price
              ? `PKR ${product.price.toLocaleString()}${product.priceLabel ? ` ${product.priceLabel}` : ""}`
              : "Price on request. Ask via WhatsApp"}
          </p>

          <p className="mt-6 leading-relaxed text-[var(--color-charcoal-soft)]">
            {product.description}
          </p>

          <dl className="mt-8 space-y-3 border-t border-[var(--color-line)] pt-6 text-sm">
            {product.materials && (
              <div className="flex gap-3">
                <dt className="w-36 shrink-0 text-[var(--color-charcoal-soft)]">Materials</dt>
                <dd>{product.materials.join(", ")}</dd>
              </div>
            )}
            {product.dimensions && (
              <div className="flex gap-3">
                <dt className="w-36 shrink-0 text-[var(--color-charcoal-soft)]">Dimensions</dt>
                <dd>{product.dimensions}</dd>
              </div>
            )}
            {product.customizable !== undefined && (
              <div className="flex gap-3">
                <dt className="w-36 shrink-0 text-[var(--color-charcoal-soft)]">Customizable</dt>
                <dd>{product.customizable ? "Yes. Colors, shapes, sizes, and other details can be adjusted" : "No"}</dd>
              </div>
            )}
            {product.prepTime && (
              <div className="flex gap-3">
                <dt className="w-36 shrink-0 text-[var(--color-charcoal-soft)]">Prep Time</dt>
                <dd>{product.prepTime}</dd>
              </div>
            )}
            {product.care && (
              <div className="flex gap-3">
                <dt className="w-36 shrink-0 text-[var(--color-charcoal-soft)]">Care</dt>
                <dd>{product.care}</dd>
              </div>
            )}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={buildWhatsAppLink(productInquiryMessage(product.name))}
              external
              icon={<MessageCircle size={16} />}
              className="flex-1"
            >
              Order on WhatsApp
            </Button>
            <Button
              href={INSTAGRAM_URL}
              external
              variant="outline"
              icon={<InstagramIcon className="h-4 w-4" />}
              className="flex-1"
            >
              Ask on Instagram
            </Button>
            <Button
              href={FACEBOOK_URL}
              external
              variant="outline"
              icon={<FacebookIcon className="h-4 w-4" />}
              className="flex-1"
            >
              Message on Facebook
            </Button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-24">
          <h2 className="mb-10 text-2xl sm:text-3xl">You Might Also Like</h2>
          <ProductGrid products={related} />
        </div>
      )}
    </div>
  );
}
