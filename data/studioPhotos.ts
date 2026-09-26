export type StudioPhoto = {
  src: string;
  name: string;
};

/**
 * Real photos of finished Craftopia pieces, used by the homepage
 * "From Our Studio" gallery. Also referenced (by src) from the About page's
 * photo collage so both sections draw from one list instead of the About
 * page retyping raw paths a second time. Nothing here is deleted, moved,
 * or renamed — this is the exact same 9-photo set that already existed.
 */
export const STUDIO_PHOTOS: StudioPhoto[] = [
  { src: "/good-luck-frame.jpeg", name: "Good Luck Frame" },
  { src: "/engagement-hoop.jpeg", name: "Engagement Hoop" },
  { src: "/embroidered good luck.jpeg", name: "Embroidered Good Luck" },
  { src: "/congratulations.jpeg", name: "Congratulations" },
  { src: "/slogan.jpeg", name: "Slogan" },
  { src: "/embroidered eye.jpeg", name: "Embroidered Eye" },
  { src: "/family-frame.jpeg", name: "Family Frame" },
  { src: "/memory-conversion.png", name: "Picture Conversion into Memories" },
  { src: "/couple-hoop.jpeg", name: "Couple Hoop" },
];
