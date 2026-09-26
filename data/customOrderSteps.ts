export type CustomOrderStep = {
  title: string;
  detail: string;
};

/**
 * Shared source of truth for the homepage custom-order teaser and the
 * standalone /custom-orders page, which used to independently duplicate
 * this same 4-step process with slightly different wording.
 */
export const CUSTOM_ORDER_STEPS: CustomOrderStep[] = [
  {
    title: "Share your idea",
    detail:
      "Send a photo, a name, a color palette, or just describe what you're picturing.",
  },
  {
    title: "Discuss design & details",
    detail:
      "We'll talk through size, materials, colors and realistic timeline together.",
  },
  {
    title: "We craft your piece",
    detail:
      "Every stitch is worked by hand. Custom pieces take longer than ready-made ones.",
  },
  {
    title: "Receive your handmade creation",
    detail: "Packed carefully and sent to you, ready to give or keep.",
  },
];
