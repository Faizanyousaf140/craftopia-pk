import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-32 text-center">
      <h1 className="text-3xl sm:text-4xl">Page Not Found</h1>
      <p className="mt-4 text-[var(--color-charcoal-soft)]">
        The page you&apos;re looking for doesn&apos;t exist, or the piece may
        have moved.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button href="/">Back to Home</Button>
        <Button href="/shop" variant="outline">
          Browse the Shop
        </Button>
      </div>
    </div>
  );
}
