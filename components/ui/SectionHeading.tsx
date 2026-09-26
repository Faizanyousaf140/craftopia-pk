import Reveal from "./Reveal";

/**
 * Shared section title + intro copy block used by CollectionSection,
 * WhyHandmade, StudioGallery and FeaturedCollection.
 */
export default function SectionHeading({
  title,
  description,
  className = "mb-12 max-w-xl",
}: {
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <Reveal y={16} duration={0.6} className={className}>
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-[var(--color-charcoal-soft)]">{description}</p>
      )}
    </Reveal>
  );
}
