export type Collection = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
};

export const collections: Collection[] = [
  {
    id: "home-decor",
    name: "Home Décor",
    slug: "home-decor",
    description: "Pieces that bring warmth and character to a room.",
    image: "/home.jpg",
  },
  {
    id: "embroidery-art",
    name: "Embroidery Art",
    slug: "embroidery-art",
    description: "Hooped and framed thread work, made stitch by stitch.",
    image: "/van-gogh.jpg",
  },
  {
    id: "bags-clutches",
    name: "Bags & Clutches",
    slug: "bags-clutches",
    description: "Hand-embroidered totes and clutches for everyday and occasion.",
    image: "/black-stars.jpeg",
  },
  {
    id: "cushions",
    name: "Cushions",
    slug: "cushions",
    description: "Embroidered cushion covers to soften and style any space.",
    image: "/2tone_daisy.jpeg",
  },
  {
    id: "paintings",
    name: "Paintings",
    slug: "paintings",
    description: "Painted and illustrated pieces to bring character to your walls.",
    image: "/FEATURE-PAINTINGS.jpeg",
  },
  {
    id: "custom-creations",
    name: "Custom Creations & Gifts",
    slug: "custom-creations",
    description: "Your idea, names, or memory, turned into a handmade piece.",
    image: "/custom-creations-cover.jpeg",
  },
];
