import Link from "next/link";
import clsx from "clsx";
import type { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "link";
  size?: "sm" | "md";
};

type ButtonProps =
  | (CommonProps & { href: string; external?: false })
  | (CommonProps & { href: string; external: true });

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  solid:
    "rounded-full bg-[var(--color-charcoal)] text-[var(--color-cream)] hover:bg-[var(--color-terracotta)]",
  outline:
    "rounded-full border border-[var(--color-charcoal)] text-[var(--color-charcoal)] hover:bg-[var(--color-charcoal)] hover:text-[var(--color-cream)]",
  link: "link-underline text-[var(--color-charcoal)]",
};

const SIZE_CLASSES: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2.5 text-xs",
  md: "px-7 py-3.5 text-sm",
};

/**
 * Shared CTA pill/link used across Hero, Custom Orders, PDP, and 404 —
 * replaces four independently copy-pasted className strings with one
 * source of truth.
 */
export default function Button({
  href,
  children,
  icon,
  className,
  variant = "solid",
  size = "md",
  external,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 font-medium transition",
    variant !== "link" && VARIANT_CLASSES[variant],
    variant === "link" && VARIANT_CLASSES.link,
    variant !== "link" && SIZE_CLASSES[size],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {icon}
      {children}
    </Link>
  );
}
