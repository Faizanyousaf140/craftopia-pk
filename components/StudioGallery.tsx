import Image from "next/image";
import { STUDIO_PHOTOS } from "@/data/studioPhotos";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function StudioGallery() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <SectionHeading
        title="From Our Studio"
        description="A glimpse into the threads, textures and details behind Craftopia."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {STUDIO_PHOTOS.map((item, i) => (
          <Reveal
            key={item.src}
            as="div"
            scale={0.96}
            duration={0.5}
            delay={(i % 4) * 0.07}
            margin="-40px"
            className="media-frame aspect-[4/5]"
          >
            <Image
              src={item.src}
              alt={item.name}
              fill
              sizes="(max-width: 768px) 45vw, 22vw"
              className="object-contain transition-transform duration-700 hover:scale-[1.02]"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
