import type { CarouselSlide } from "../ui/carousel";

export type ProductItem = {
  title: string;
  description: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  productLink: string;
  price: string;
  materials?: string;
  carouselSlides: CarouselSlide[];
};

export const products: Record<string, ProductItem> = {
  "cosmic-oasis": {
    title: "Cosmic Oasis",
    description: "",
    paragraphs: [
      "A stunning celestial-inspired pendant featuring a bello opal set in sterling silver. Each piece captures the ethereal beauty of a cosmic oasis, with colors that shift and dance in the light.",
    ],
    image: "/images/cosmic-oasis.webp",
    imageAlt: "",
    productLink: "/product/cosmic-oasis",
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
  "amethyst-whisper": {
    title: "Amethyst Whisper",
    description: "",
    paragraphs: [
      "An elegant amethyst pendant that whispers of ancient forests and mystical realms. The deep purple hues are complemented by intricate copper wire wrapping.",
    ],
    image: "",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "Copper, Amethyst",
    carouselSlides: [
      { img: "/images/amethyst-whisper-slide-1-674x506.webp", alt: "Amethyst Whisper Pendant" },
      { img: "/images/amethyst-whisper-slide-2-598x449.webp", alt: "Amethyst Whisper detail" },
      { img: "/images/amethyst-whisper-slide-2-302x227.webp", alt: "Amethyst Whisper close-up" },
    ],
  },
  "ancient-copper": {
    title: "Ancient Copper Ring",
    description: "",
    paragraphs: [
      "A hand-forged copper ring with an antique finish, evoking the spirit of ancient artisans. Each ring is uniquely textured and patinated.",
    ],
    image: "",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "Copper",
    carouselSlides: [
      { img: "/images/ancient-copper-icon.webp", alt: "Ancient Copper Ring" },
    ],
  },
  "copper-amethyst-cuff": {
    title: "Copper Amethyst Cuff",
    description: "",
    paragraphs: [
      "A bold copper cuff bracelet set with a raw amethyst crystal. The organic design complements the natural beauty of the stone.",
    ],
    image: "",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "Copper, Amethyst",
    carouselSlides: [
      { img: "/images/copper-amethyst-cuff.webp", alt: "Copper Amethyst Cuff" },
      { img: "/images/copper-amethyst-cuff-copy.webp", alt: "Copper Amethyst Cuff alternate view" },
      { img: "/images/copper-amethyst-cuff-4.webp", alt: "Copper Amethyst Cuff detail" },
    ],
  },
  "copper-breath": {
    title: "Copper Breath Pendant",
    description: "",
    paragraphs: [
      "A delicate copper pendant that captures the essence of breath and movement. The oxidized finish creates a beautiful depth of color.",
    ],
    image: "",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "Copper",
    carouselSlides: [
      { img: "/images/copper-breath.webp", alt: "Copper Breath Pendant" },
      { img: "/images/copper-breath-slide-1.webp", alt: "Copper Breath Pendant side view" },
      { img: "/images/copper-breath-slide-1-3-copy.webp", alt: "Copper Breath Pendant detail" },
    ],
  },
  "copper-breeze": {
    title: "Copper Breeze Earrings",
    description: "",
    paragraphs: [
      "Lightweight copper earrings that move like a breeze. Hand-hammered texture catches the light beautifully.",
    ],
    image: "",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "Copper, Sterling Silver Ear Wires",
    carouselSlides: [
      { img: "/images/copper-breeze-icon.webp", alt: "Copper Breeze Earrings" },
    ],
  },
  "copper-rose-ring": {
    title: "Copper Rose Ring",
    description: "",
    paragraphs: [
      "A romantic copper ring featuring a hand-sculpted rose. Each petal is carefully formed and finished with a subtle patina.",
    ],
    image: "",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "Copper",
    carouselSlides: [
      { img: "/images/copper-rose-ring.webp", alt: "Copper Rose Ring" },
      { img: "/images/copper-rose-ring-16.webp", alt: "Copper Rose Ring detail" },
    ],
  },
  "copper-spiral-ring": {
    title: "Copper Spiral Ring",
    description: "",
    paragraphs: [
      "A captivating spiral design in copper, symbolizing growth and evolution. The open band adjusts to fit most finger sizes.",
    ],
    image: "",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "Copper",
    carouselSlides: [
      { img: "/images/copper-spiral-ring.webp", alt: "Copper Spiral Ring" },
      { img: "/images/copper-spiral-ring-1.webp", alt: "Copper Spiral Ring side view" },
    ],
  },
  "dragon-slayer": {
    title: "Dragon Slayer Pendant",
    description: "",
    paragraphs: [
      "A bold pendant inspired by dragon scale armor. The textured copper surface and deep patina give it an ancient, powerful feel.",
    ],
    image: "",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "Copper",
    carouselSlides: [
      { img: "/images/dragon-slayer-1.webp", alt: "Dragon Slayer Pendant" },
      { img: "/images/dragon-slayer-2.webp", alt: "Dragon Slayer Pendant detail" },
      { img: "/images/dragon-slayer-3.webp", alt: "Dragon Slayer Pendant worn" },
    ],
  },
  "forest-pearl": {
    title: "Forest Pearl Necklace",
    description: "",
    paragraphs: [
      "A sterling silver necklace featuring a freshwater pearl with an organic, forest-inspired setting. Perfect for nature lovers.",
    ],
    image: "",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "Sterling Silver, Freshwater Pearl",
    carouselSlides: [
      { img: "/images/forest-pearl-icon.webp", alt: "Forest Pearl Necklace" },
      { img: "/images/forest-nymph-4.webp", alt: "Forest Pearl Necklace worn" },
    ],
  },
  "necklace-1": {
    title: "Cosmic Oasis",
    description: "",
    paragraphs: [],
    image: "/images/forest-pearl-icon.webp",
    imageAlt: "Sterling Silver Bello Opal Necklace Pendant",
    productLink: "product/cosmic-oasis",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "necklace-2": {
    title: "Cosmic Oasis",
    description: "",
    paragraphs: [],
    image: "/images/sacred-alignment-icon.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "necklace-3": {
    title: "Cosmic Oasis",
    description: "",
    paragraphs: [],
    image: "/images/cosmic-oasis-3.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "necklace-4": {
    title: "Cosmic Oasis",
    description: "",
    paragraphs: [],
    image: "/images/faire-magic-icon.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "bracelet-1": {
    title: "Bracelet1",
    description: "",
    paragraphs: [],
    image: "/images/photoroom-20260116.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "bracelet-2": {
    title: "Bracelet2",
    description: "",
    paragraphs: [],
    image: "/images/copper-amethyst-cuff-copy.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "bracelet-3": {
    title: "Bracelet3",
    description: "",
    paragraphs: [],
    image: "/images/photoroom-20260129.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "bracelet-4": {
    title: "Bracelet4",
    description: "",
    paragraphs: [],
    image: "/images/orange-agate-copper-cuff.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "ring-1": {
    title: "Ring1",
    description: "",
    paragraphs: [],
    image: "/images/photoroom-20260116.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "ring-2": {
    title: "Ring2",
    description: "",
    paragraphs: [],
    image: "/images/copper-amethyst-cuff-copy.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "ring-3": {
    title: "Ring3",
    description: "",
    paragraphs: [],
    image: "/images/photoroom-20260129.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "ring-4": {
    title: "Ring4",
    description: "",
    paragraphs: [],
    image: "/images/orange-agate-copper-cuff.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "oceangoddess-1": {
    title: "OG1",
    description: "",
    paragraphs: [],
    image: "/images/photoroom-20260116.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "oceangoddess-2": {
    title: "OG2",
    description: "",
    paragraphs: [],
    image: "/images/copper-amethyst-cuff-copy.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "oceangoddess-3": {
    title: "Ring3",
    description: "",
    paragraphs: [],
    image: "/images/photoroom-20260129.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "oceangoddess-4": {
    title: "OG4",
    description: "",
    paragraphs: [],
    image: "/images/orange-agate-copper-cuff.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "forestnymph-1": {
    title: "FN1",
    description: "",
    paragraphs: [],
    image: "/images/photoroom-20260116.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "forestnymph-2": {
    title: "FN2",
    description: "",
    paragraphs: [],
    image: "/images/copper-amethyst-cuff-copy.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "forestnymph-3": {
    title: "FN3",
    description: "",
    paragraphs: [],
    image: "/images/photoroom-20260129.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "forestnymph-4": {
    title: "FN4",
    description: "",
    paragraphs: [],
    image: "/images/orange-agate-copper-cuff.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "vikingqueen-1": {
    title: "VQ1",
    description: "",
    paragraphs: [],
    image: "/images/photoroom-20260116.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "vikingqueen-2": {
    title: "VQ2",
    description: "",
    paragraphs: [],
    image: "/images/copper-amethyst-cuff-copy.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "vikingqueen-3": {
    title: "VQ3",
    description: "",
    paragraphs: [],
    image: "/images/photoroom-20260129.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
  "vikingqueen-4": {
    title: "VQ4",
    description: "",
    paragraphs: [],
    image: "/images/orange-agate-copper-cuff.webp",
    imageAlt: "",
    productLink: "",
    price: "$PRICE",
    materials: "",
    carouselSlides: [],
  },
};

const productSet = (keys: Iterable<string>) => {
  const set = new Set(keys);
  return Object.fromEntries(
    Object.entries(products)
      .filter(([key, _]) => set.has(key)))
}

export default products;

export const necklaceProducts = productSet([
  "cosmic-oasis",
  "amethyst-whisper",
  "ancient-copper",
])

export const braceletProducts = productSet([
  "bracelet-1",
  "bracelet-2",
  "bracelet-3",
  "bracelet-4",
])

export const ringProducts = productSet([
  "ring-1",
  "ring-2",
  "ring-3",
  "ring-4",
])

export const oceanGoddessProducts = productSet([
  "oceangoddess-1",
  "oceangoddess-2",
  "oceangoddess-3",
  "oceangoddess-4",
])

export const forestNymphProducts = productSet([
  "forestnymph-1",
  "forestnymph-2",
  "forestnymph-3",
  "forestnymph-4",
])

export const vikingQueenProducts = productSet([
  "vikingqueen-1",
  "vikingqueen-2",
  "vikingqueen-3",
  "vikingqueen-4",
])

/** Look up a product by its slug. Returns undefined if not found. */
export function getProductBySlug(slug: string): ProductItem | undefined {
  return products[slug];
}
