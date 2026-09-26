import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--color-line)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pt-20 lg:pb-28">
        <div>
          <p
            className="reveal-up text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-terracotta)]"
          >
            Handmade in Pakistan
          </p>

          <h1
            style={{ animationDelay: "100ms" }}
            className="reveal-up mt-4 text-4xl leading-[1.1] text-[var(--color-charcoal)] sm:text-5xl lg:text-6xl"
          >
            Handmade Art,
            <br />
            Made to Belong.
          </h1>

          <p
            style={{ animationDelay: "220ms" }}
            className="reveal-up mt-6 max-w-md text-base leading-relaxed text-[var(--color-charcoal-soft)]"
          >
            Thoughtfully handcrafted embroidery, décor and keepsakes designed
            to bring warmth and personality to your space.
          </p>

          <div
            style={{ animationDelay: "340ms" }}
            className="reveal-up mt-8 flex flex-wrap items-center gap-4"
          >
            <Button href="/shop">Explore Collection</Button>
            <Link
              href="/custom-orders"
              className="link-underline text-sm font-medium text-[var(--color-charcoal)]"
            >
              Custom Order →
            </Link>
          </div>
        </div>

        <div
          style={{ animationDelay: "150ms" }}
          className="reveal-scale relative mx-auto flex w-full max-w-[620px] items-stretch gap-4 h-[240px] sm:h-[300px] sm:max-w-[680px] lg:h-[360px] lg:max-w-[720px]"
        >
          <div className="media-frame h-full min-w-0 flex-1">
            <Image
              src="/images/hero/longerleft.png"
              alt="Large handcrafted wall art by Craftopia.pk"
              fill
              priority
              sizes="(max-width: 1024px) 45vw, 18vw"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="media-frame h-full aspect-[937/1678] shrink-0">
            <Image
              src="/images/hero/topright.png"
              alt="Handcrafted wood slice ornaments by Craftopia.pk"
              fill
              sizes="(max-width: 1024px) 25vw, 10vw"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div
        style={{ animationDelay: "1000ms" }}
        className="reveal-up hidden justify-center pb-8 lg:flex"
      >
        <div className="motion-safe:animate-bounce">
          <ChevronDown size={20} className="text-[var(--color-charcoal-soft)]" />
        </div>
      </div>
    </section>
  );
}
