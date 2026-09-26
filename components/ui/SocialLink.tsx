import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/BrandIcons";
import { INSTAGRAM_URL, FACEBOOK_URL } from "@/lib/config";
import { buildWhatsAppLink, generalInquiryMessage } from "@/lib/whatsapp";

export type SocialPlatform = "instagram" | "facebook" | "whatsapp";

function resolvePlatform(platform: SocialPlatform, message?: string) {
  switch (platform) {
    case "instagram":
      return { href: INSTAGRAM_URL, label: "Instagram", Icon: InstagramIcon };
    case "facebook":
      return { href: FACEBOOK_URL, label: "Facebook", Icon: FacebookIcon };
    case "whatsapp":
      return {
        href: buildWhatsAppLink(message ?? generalInquiryMessage()),
        label: "WhatsApp",
        Icon: MessageCircle,
      };
  }
}

type SocialLinkProps = {
  platform: SocialPlatform;
  message?: string;
  label?: ReactNode;
  variant?: "icon" | "text";
  className?: string;
  iconClassName?: string;
  ariaLabel?: string;
};

/**
 * Single source of truth for the Instagram/Facebook/WhatsApp link pattern
 * that used to be independently re-implemented in Navbar, Footer,
 * SocialSection and Contact.
 */
export default function SocialLink({
  platform,
  message,
  label,
  variant = "text",
  className,
  iconClassName = "h-4 w-4",
  ariaLabel,
}: SocialLinkProps) {
  const { href, label: defaultLabel, Icon } = resolvePlatform(platform, message);

  if (variant === "icon") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel ?? `Craftopia.pk on ${defaultLabel}`}
        className={className}
      >
        <Icon className={iconClassName} />
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <Icon className={iconClassName} />
      {label ?? defaultLabel}
    </a>
  );
}
