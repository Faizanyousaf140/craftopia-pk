import type { Metadata } from "next";
import Image from "next/image";
import { VALUE_PROPS } from "@/data/values";
import { STUDIO_PHOTOS } from "@/data/studioPhotos";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Craftopia.pk, a handmade embroidery and décor studio built on slow, intentional craftsmanship.",
  alternates: { canonical: "/about" },
};

const bannerPhoto = STUDIO_PHOTOS.find((p) => p.src === "/embroidered eye.jpeg")!;

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-20">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-3xl sm:text-4xl">About Craftopia.pk</h1>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-charcoal-soft)]">
            Craftopia began with a simple idea: beautiful things don&apos;t
            have to be mass-produced.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--color-charcoal-soft)]">
            Every piece here, cushions, hoops, wall art, bags and clutches,
            is worked by hand, one stitch at a time. That means each item
            takes real time to make, and no two are ever perfectly identical.
            We think that&apos;s the point of handmade work, not a flaw in it.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--color-charcoal-soft)]">
            The studio focuses on embroidery and hand-crafted décor, with a
            growing range of custom pieces made around a name, a memory, or an
            idea you bring to us.
          </p>
        </div>

        <div className="relative aspect-square overflow-hidden">
          <Image
            src="/images/about/logo.png"
            alt="Craftopia.pk branding, painting and embroidery studio"
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 40vw"
            className="object-contain p-2"
          />
        </div>
      </div>

      <div className="mt-20 border-t border-[var(--color-line)] pt-14">
        <h2 className="text-2xl sm:text-3xl">What Guides the Work</h2>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((v) => (
            <div key={v.title}>
              <v.icon size={24} strokeWidth={1.5} className="text-[var(--color-terracotta)]" />
              <p className="mt-4 font-serif-display text-lg">{v.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-charcoal-soft)]">
                {v.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 border-t border-[var(--color-line)] pt-14">
        <h2 className="text-2xl sm:text-3xl">Behind the Stitches</h2>
        <div className="media-frame relative mt-8 aspect-[21/9]">
          <Image
            src={bannerPhoto.src}
            alt={bannerPhoto.name}
            fill
            sizes="90vw"
            className="object-contain"
          />
        </div>
        <p className="mt-4 text-sm text-[var(--color-charcoal-soft)]">
          Every piece starts as thread, fabric and a lot of patience, worked
          by hand until it&apos;s ready to leave the studio.
        </p>
      </div>
    </div>
  );
}
