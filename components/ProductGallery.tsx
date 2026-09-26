"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);
  // A few products list the same photo twice instead of a real second
  // angle — dedupe so the thumbnail strip only ever appears when there are
  // genuinely distinct images to switch between.
  const uniqueImages = Array.from(new Set(images));

  return (
    <div>
      <div className="media-frame aspect-[4/5]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={uniqueImages[active]}
              alt={`${name}, view ${active + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {uniqueImages.length > 1 && (
        <div className="mt-3 flex gap-3">
          {uniqueImages.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1}`}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-sm border transition ${
                active === i
                  ? "border-[var(--color-charcoal)]"
                  : "border-[var(--color-line)] opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={img} alt="" fill sizes="80px" className="object-contain bg-[var(--color-cream-soft)]" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
