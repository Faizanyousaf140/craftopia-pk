import { Hand, Gem, Heart, Sparkles, type LucideIcon } from "lucide-react";

export type ValueProp = {
  icon: LucideIcon;
  title: string;
  detail: string;
};

/**
 * Shared source of truth for the homepage "Why Handmade?" section and the
 * About page's "What Guides the Work" section, which used to duplicate this
 * same 4-item list independently.
 */
export const VALUE_PROPS: ValueProp[] = [
  {
    icon: Hand,
    title: "Handcrafted",
    detail: "Every piece receives individual attention, start to finish.",
  },
  {
    icon: Gem,
    title: "One of a Kind",
    detail: "Small variations are part of what makes handmade work special.",
  },
  {
    icon: Heart,
    title: "Made with Intention",
    detail: "Designed to bring personality into everyday spaces.",
  },
  {
    icon: Sparkles,
    title: "Custom",
    detail: "Many pieces can be created or adapted around your idea.",
  },
];
