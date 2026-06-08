import type { CarouselSlide } from "../ui/carousel";

export type ProductItem = {
  slug: string;
  title: string;
  paragraphs: string[];
  materials?: string;
  price: string;
  carouselSlides: CarouselSlide[];
};

const products: ProductItem[] = [
  {
    slug: "cosmic-oasis",
    title: "Cosmic Oasis",
    paragraphs: [
      "A stunning celestial-inspired pendant featuring a bello opal set in sterling silver. Each piece captures the ethereal beauty of a cosmic oasis, with colors that shift and dance in the light.",
    ],
    materials: "Sterling Silver, Bello Opal",
    price: "$PRICE",
    carouselSlides: [
      { img: "/images/cosmic-oasis.webp", alt: "Cosmic Oasis Pendant" },
      { img: "/images/cosmic-oasis-1.webp", alt: "Cosmic Oasis Pendant side view" },
      { img: "/images/cosmic-oasis-2.webp", alt: "Cosmic Oasis Pendant detail" },
      { img: "/images/cosmic-oasis-3.webp", alt: "Cosmic Oasis Pendant alternate angle" },
      { img: "/images/cosmic-oasis-4.webp", alt: "Cosmic Oasis Pendant close-up" },
      { img: "/images/cosmic-oasis-7.webp", alt: "Cosmic Oasis Pendant worn" },
      { img: "/images/cosmic-oasis-10.webp", alt: "Cosmic Oasis Pendant detail" },
      { img: "/images/cosmic-oasis-18-copy.webp", alt: "Cosmic Oasis Pendant" },
    ],
  },
  {
    slug: "amethyst-whisper",
    title: "Amethyst Whisper",
    paragraphs: [
      "An elegant amethyst pendant that whispers of ancient forests and mystical realms. The deep purple hues are complemented by intricate copper wire wrapping.",
    ],
    materials: "Copper, Amethyst",
    price: "$PRICE",
    carouselSlides: [
      { img: "/images/amethyst-whisper-slide-1-674x506.webp", alt: "Amethyst Whisper Pendant" },
      { img: "/images/amethyst-whisper-slide-2-598x449.webp", alt: "Amethyst Whisper detail" },
      { img: "/images/amethyst-whisper-slide-2-302x227.webp", alt: "Amethyst Whisper close-up" },
    ],
  },
  {
    slug: "ancient-copper",
    title: "Ancient Copper Ring",
    paragraphs: [
      "A hand-forged copper ring with an antique finish, evoking the spirit of ancient artisans. Each ring is uniquely textured and patinated.",
    ],
    materials: "Copper",
    price: "$PRICE",
    carouselSlides: [
      { img: "/images/ancient-copper-icon.webp", alt: "Ancient Copper Ring" },
    ],
  },
  {
    slug: "copper-amethyst-cuff",
    title: "Copper Amethyst Cuff",
    paragraphs: [
      "A bold copper cuff bracelet set with a raw amethyst crystal. The organic design complements the natural beauty of the stone.",
    ],
    materials: "Copper, Amethyst",
    price: "$PRICE",
    carouselSlides: [
      { img: "/images/copper-amethyst-cuff.webp", alt: "Copper Amethyst Cuff" },
      { img: "/images/copper-amethyst-cuff-copy.webp", alt: "Copper Amethyst Cuff alternate view" },
      { img: "/images/copper-amethyst-cuff-4.webp", alt: "Copper Amethyst Cuff detail" },
    ],
  },
  {
    slug: "copper-breath",
    title: "Copper Breath Pendant",
    paragraphs: [
      "A delicate copper pendant that captures the essence of breath and movement. The oxidized finish creates a beautiful depth of color.",
    ],
    materials: "Copper",
    price: "$PRICE",
    carouselSlides: [
      { img: "/images/copper-breath.webp", alt: "Copper Breath Pendant" },
      { img: "/images/copper-breath-slide-1.webp", alt: "Copper Breath Pendant side view" },
      { img: "/images/copper-breath-slide-1-3-copy.webp", alt: "Copper Breath Pendant detail" },
    ],
  },
  {
    slug: "copper-breeze",
    title: "Copper Breeze Earrings",
    paragraphs: [
      "Lightweight copper earrings that move like a breeze. Hand-hammered texture catches the light beautifully.",
    ],
    materials: "Copper, Sterling Silver Ear Wires",
    price: "$PRICE",
    carouselSlides: [
      { img: "/images/copper-breeze-icon.webp", alt: "Copper Breeze Earrings" },
    ],
  },
  {
    slug: "copper-rose-ring",
    title: "Copper Rose Ring",
    paragraphs: [
      "A romantic copper ring featuring a hand-sculpted rose. Each petal is carefully formed and finished with a subtle patina.",
    ],
    materials: "Copper",
    price: "$PRICE",
    carouselSlides: [
      { img: "/images/copper-rose-ring.webp", alt: "Copper Rose Ring" },
      { img: "/images/copper-rose-ring-16.webp", alt: "Copper Rose Ring detail" },
    ],
  },
  {
    slug: "copper-spiral-ring",
    title: "Copper Spiral Ring",
    paragraphs: [
      "A captivating spiral design in copper, symbolizing growth and evolution. The open band adjusts to fit most finger sizes.",
    ],
    materials: "Copper",
    price: "$PRICE",
    carouselSlides: [
      { img: "/images/copper-spiral-ring.webp", alt: "Copper Spiral Ring" },
      { img: "/images/copper-spiral-ring-1.webp", alt: "Copper Spiral Ring side view" },
    ],
  },
  {
    slug: "dragon-slayer",
    title: "Dragon Slayer Pendant",
    paragraphs: [
      "A bold pendant inspired by dragon scale armor. The textured copper surface and deep patina give it an ancient, powerful feel.",
    ],
    materials: "Copper",
    price: "$PRICE",
    carouselSlides: [
      { img: "/images/dragon-slayer-1.webp", alt: "Dragon Slayer Pendant" },
      { img: "/images/dragon-slayer-2.webp", alt: "Dragon Slayer Pendant detail" },
      { img: "/images/dragon-slayer-3.webp", alt: "Dragon Slayer Pendant worn" },
    ],
  },
  {
    slug: "forest-pearl",
    title: "Forest Pearl Necklace",
    paragraphs: [
      "A sterling silver necklace featuring a freshwater pearl with an organic, forest-inspired setting. Perfect for nature lovers.",
    ],
    materials: "Sterling Silver, Freshwater Pearl",
    price: "$PRICE",
    carouselSlides: [
      { img: "/images/forest-pearl-icon.webp", alt: "Forest Pearl Necklace" },
      { img: "/images/forest-nymph-4.webp", alt: "Forest Pearl Necklace worn" },
    ],
  },
];

export default products;

/** Look up a product by its slug. Returns undefined if not found. */
export function getProductBySlug(slug: string): ProductItem | undefined {
  return products.find((p) => p.slug === slug);
}
