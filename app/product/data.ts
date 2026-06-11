import type { CarouselSlide } from "../ui/carousel";

export class ProductItem {
  public slug: string;
  public title: string;
  public description: string;
  public paragraphs: string[];
  public coverImage: string;
  public coverImageAlt: string;
  public price: string;
  public carouselSlides: CarouselSlide[];
  public materials?: string;

  constructor(
    slug: string,
    title: string,
    description: string,
    paragraphs: string[],
    coverImage: string,
    coverImageAlt: string,
    productLink: string,
    price: string,
    carouselSlides: CarouselSlide[],
    materials?: string,
  ) {
    this.slug = slug;
    this.slug = slug;
    this.title = title;
    this.description = description;
    this.paragraphs = paragraphs;
    this.coverImage = coverImage;
    this.coverImageAlt = coverImageAlt;
    this.price = price;
    this.carouselSlides = carouselSlides;
    this.materials = materials;
  }

  public link() {
    return `/product/${this.slug}`
  }
}

export const products: Record<string, ProductItem> = {
  "cosmic-oasis": new ProductItem(
    "sterling-silver-bello-opal-pendant",
    "Cosmic Oasis",
    "",
    [
      "A stunning celestial-inspired pendant featuring a bello opal set in sterling silver. Each piece captures the ethereal beauty of a cosmic oasis, with colors that shift and dance in the light.",
    ],
    "/images/cosmic-oasis.webp",
    "Cosmic Oasis Pendant",
    "/product/cosmic-oasis",
    "$PRICE",
    [
      { img: "/images/cosmic-oasis.webp", alt: "Cosmic Oasis Pendant" },
      { img: "/images/cosmic-oasis-1.webp", alt: "Cosmic Oasis Pendant side view" },
      { img: "/images/cosmic-oasis-2.webp", alt: "Cosmic Oasis Pendant detail" },
      { img: "/images/cosmic-oasis-3.webp", alt: "Cosmic Oasis Pendant alternate angle" },
      { img: "/images/cosmic-oasis-4.webp", alt: "Cosmic Oasis Pendant close-up" },
      { img: "/images/cosmic-oasis-7.webp", alt: "Cosmic Oasis Pendant worn" },
      { img: "/images/cosmic-oasis-10.webp", alt: "Cosmic Oasis Pendant detail" },
      { img: "/images/cosmic-oasis-18-copy.webp", alt: "Cosmic Oasis Pendant" },
    ],
    "Sterling Silver, Bello Opal",
  ),
  "amethyst-whisper": new ProductItem(
    "amethyst-whisper",
    "Amethyst Whisper",
    "",
    [
      "An elegant amethyst pendant that whispers of ancient forests and mystical realms. The deep purple hues are complemented by intricate copper wire wrapping.",
    ],
    "/images/amethyst-whisper-slide-1-674x506.webp",
    "Amethyst Whisper Pendant",
    "/product/amethyst-whisper",
    "$PRICE",
    [
      { img: "/images/amethyst-whisper-slide-1-674x506.webp", alt: "Amethyst Whisper Pendant" },
      { img: "/images/amethyst-whisper-slide-2-598x449.webp", alt: "Amethyst Whisper detail" },
      { img: "/images/amethyst-whisper-slide-2-302x227.webp", alt: "Amethyst Whisper close-up" },
    ],
    "Copper, Amethyst",
  ),
  "ancient-copper": new ProductItem(
    "ancient-copper",
    "Ancient Copper Ring",
    "",
    [
      "A hand-forged copper ring with an antique finish, evoking the spirit of ancient artisans. Each ring is uniquely textured and patinated.",
    ],
    "/images/ancient-copper-icon.webp",
    "Ancient Copper Ring",
    "/product/ancient-copper",
    "$PRICE",
    [
      { img: "/images/ancient-copper-icon.webp", alt: "Ancient Copper Ring" },
    ],
    "Copper",
  ),
  "copper-amethyst-cuff": new ProductItem(
    "copper-amethyst-cuff",
    "Copper Amethyst Cuff",
    "",
    [
      "A bold copper cuff bracelet set with a raw amethyst crystal. The organic design complements the natural beauty of the stone.",
    ],
    "/images/copper-amethyst-cuff.webp",
    "Copper Amethyst Cuff",
    "/product/copper-amethyst-cuff",
    "$PRICE",
    [
      { img: "/images/copper-amethyst-cuff.webp", alt: "Copper Amethyst Cuff" },
      { img: "/images/copper-amethyst-cuff-copy.webp", alt: "Copper Amethyst Cuff alternate view" },
      { img: "/images/copper-amethyst-cuff-4.webp", alt: "Copper Amethyst Cuff detail" },
    ],
    "Copper, Amethyst",
  ),
  "copper-breath": new ProductItem(
    "copper-breath",
    "Copper Breath Pendant",
    "",
    [
      "A delicate copper pendant that captures the essence of breath and movement. The oxidized finish creates a beautiful depth of color.",
    ],
    "/images/copper-breath.webp",
    "Copper Breath Pendant",
    "/product/copper-breath",
    "$PRICE",
    [
      { img: "/images/copper-breath.webp", alt: "Copper Breath Pendant" },
      { img: "/images/copper-breath-slide-1.webp", alt: "Copper Breath Pendant side view" },
      { img: "/images/copper-breath-slide-1-3-copy.webp", alt: "Copper Breath Pendant detail" },
    ],
    "Copper",
  ),
  "copper-breeze": new ProductItem(
    "copper-breeze",
    "Copper Breeze Earrings",
    "",
    [
      "Lightweight copper earrings that move like a breeze. Hand-hammered texture catches the light beautifully.",
    ],
    "/images/copper-breeze-icon.webp",
    "Copper Breeze Earrings",
    "/product/copper-breeze",
    "$PRICE",
    [
      { img: "/images/copper-breeze-icon.webp", alt: "Copper Breeze Earrings" },
    ],
    "Copper, Sterling Silver Ear Wires",
  ),
  "copper-rose-ring": new ProductItem(
    "copper-rose-ring",
    "Copper Rose Ring",
    "",
    [
      "A romantic copper ring featuring a hand-sculpted rose. Each petal is carefully formed and finished with a subtle patina.",
    ],
    "/images/copper-rose-ring.webp",
    "Copper Rose Ring",
    "/product/copper-rose-ring",
    "$PRICE",
    [
      { img: "/images/copper-rose-ring.webp", alt: "Copper Rose Ring" },
      { img: "/images/copper-rose-ring-16.webp", alt: "Copper Rose Ring detail" },
    ],
    "Copper",
  ),
  "copper-spiral-ring": new ProductItem(
    "copper-spiral-ring",
    "Copper Spiral Ring",
    "",
    [
      "A captivating spiral design in copper, symbolizing growth and evolution. The open band adjusts to fit most finger sizes.",
    ],
    "/images/copper-spiral-ring.webp",
    "Copper Spiral Ring",
    "/product/copper-spiral-ring",
    "$PRICE",
    [
      { img: "/images/copper-spiral-ring.webp", alt: "Copper Spiral Ring" },
      { img: "/images/copper-spiral-ring-1.webp", alt: "Copper Spiral Ring side view" },
    ],
    "Copper",
  ),
  "dragon-slayer": new ProductItem(
    "dragon-slayer",
    "Dragon Slayer Pendant",
    "",
    [
      "A bold pendant inspired by dragon scale armor. The textured copper surface and deep patina give it an ancient, powerful feel.",
    ],
    "/images/dragon-slayer-1.webp",
    "Dragon Slayer Pendant",
    "/product/dragon-slayer",
    "$PRICE",
    [
      { img: "/images/dragon-slayer-1.webp", alt: "Dragon Slayer Pendant" },
      { img: "/images/dragon-slayer-2.webp", alt: "Dragon Slayer Pendant detail" },
      { img: "/images/dragon-slayer-3.webp", alt: "Dragon Slayer Pendant worn" },
    ],
    "Copper",
  ),
  "forest-pearl": new ProductItem(
    "forest-pearl",
    "Forest Pearl Necklace",
    "",
    [
      "A sterling silver necklace featuring a freshwater pearl with an organic, forest-inspired setting. Perfect for nature lovers.",
    ],
    "/images/forest-pearl-icon.webp",
    "Forest Pearl Necklace",
    "/product/forest-pearl",
    "$PRICE",
    [
      { img: "/images/forest-pearl-icon.webp", alt: "Forest Pearl Necklace" },
      { img: "/images/forest-nymph-4.webp", alt: "Forest Pearl Necklace worn" },
    ],
    "Sterling Silver, Freshwater Pearl",
  ),
  "necklace-1": new ProductItem(
    "necklace-1",
    "Cosmic Oasis",
    "",
    [],
    "/images/forest-pearl-icon.webp",
    "Sterling Silver Bello Opal Necklace Pendant",
    "/product/necklace-1",
    "$PRICE",
    [],
    "",
  ),
  "necklace-2": new ProductItem(
    "necklace-2",
    "Cosmic Oasis",
    "",
    [],
    "/images/sacred-alignment-icon.webp",
    "",
    "/product/necklace-2",
    "$PRICE",
    [],
    "",
  ),
  "necklace-3": new ProductItem(
    "necklace-3",
    "Cosmic Oasis",
    "",
    [],
    "/images/cosmic-oasis-3.webp",
    "",
    "/product/necklace-3",
    "$PRICE",
    [],
    "",
  ),
  "necklace-4": new ProductItem(
    "necklace-4",
    "Cosmic Oasis",
    "",
    [],
    "/images/faire-magic-icon.webp",
    "",
    "/product/necklace-4",
    "$PRICE",
    [],
    "",
  ),
  "bracelet-1": new ProductItem(
    "bracelet-1",
    "Bracelet1",
    "",
    [],
    "/images/photoroom-20260116.webp",
    "",
    "/product/bracelet-1",
    "$PRICE",
    [],
    "",
  ),
  "bracelet-2": new ProductItem(
    "bracelet-2",
    "Bracelet2",
    "",
    [],
    "/images/copper-amethyst-cuff-copy.webp",
    "",
    "/product/bracelet-2",
    "$PRICE",
    [],
    "",
  ),
  "bracelet-3": new ProductItem(
    "bracelet-3",
    "Bracelet3",
    "",
    [],
    "/images/photoroom-20260129.webp",
    "",
    "/product/bracelet-3",
    "$PRICE",
    [],
    "",
  ),
  "bracelet-4": new ProductItem(
    "bracelet-4",
    "Bracelet4",
    "",
    [],
    "/images/orange-agate-copper-cuff.webp",
    "",
    "/product/bracelet-4",
    "$PRICE",
    [],
    "",
  ),
  "ring-1": new ProductItem(
    "ring-1",
    "Ring1",
    "",
    [],
    "/images/photoroom-20260116.webp",
    "",
    "/product/ring-1",
    "$PRICE",
    [],
    "",
  ),
  "ring-2": new ProductItem(
    "ring-2",
    "Ring2",
    "",
    [],
    "/images/copper-amethyst-cuff-copy.webp",
    "",
    "/product/ring-2",
    "$PRICE",
    [],
    "",
  ),
  "ring-3": new ProductItem(
    "ring-3",
    "Ring3",
    "",
    [],
    "/images/photoroom-20260129.webp",
    "",
    "/product/ring-3",
    "$PRICE",
    [],
    "",
  ),
  "ring-4": new ProductItem(
    "ring-4",
    "Ring4",
    "",
    [],
    "/images/orange-agate-copper-cuff.webp",
    "",
    "/product/ring-4",
    "$PRICE",
    [],
    "",
  ),
  "oceangoddess-1": new ProductItem(
    "oceangoddess-1",
    "OG1",
    "",
    [],
    "/images/photoroom-20260116.webp",
    "",
    "/product/oceangoddess-1",
    "$PRICE",
    [],
    "",
  ),
  "oceangoddess-2": new ProductItem(
    "oceangoddess-2",
    "OG2",
    "",
    [],
    "/images/copper-amethyst-cuff-copy.webp",
    "",
    "/product/oceangoddess-2",
    "$PRICE",
    [],
    "",
  ),
  "oceangoddess-3": new ProductItem(
    "oceangoddess-3",
    "Ring3",
    "",
    [],
    "/images/photoroom-20260129.webp",
    "",
    "/product/oceangoddess-3",
    "$PRICE",
    [],
    "",
  ),
  "oceangoddess-4": new ProductItem(
    "oceangoddess-4",
    "OG4",
    "",
    [],
    "/images/orange-agate-copper-cuff.webp",
    "",
    "/product/oceangoddess-4",
    "$PRICE",
    [],
    "",
  ),
  "forestnymph-1": new ProductItem(
    "forestnymph-1",
    "FN1",
    "",
    [],
    "/images/photoroom-20260116.webp",
    "",
    "/product/forestnymph-1",
    "$PRICE",
    [],
    "",
  ),
  "forestnymph-2": new ProductItem(
    "forestnymph-2",
    "FN2",
    "",
    [],
    "/images/copper-amethyst-cuff-copy.webp",
    "",
    "/product/forestnymph-2",
    "$PRICE",
    [],
    "",
  ),
  "forestnymph-3": new ProductItem(
    "forestnymph-3",
    "FN3",
    "",
    [],
    "/images/photoroom-20260129.webp",
    "",
    "/product/forestnymph-3",
    "$PRICE",
    [],
    "",
  ),
  "forestnymph-4": new ProductItem(
    "forestnymph-4",
    "FN4",
    "",
    [],
    "/images/orange-agate-copper-cuff.webp",
    "",
    "/product/forestnymph-4",
    "$PRICE",
    [],
    "",
  ),
  "vikingqueen-1": new ProductItem(
    "vikingqueen-1",
    "VQ1",
    "",
    [],
    "/images/photoroom-20260116.webp",
    "",
    "/product/vikingqueen-1",
    "$PRICE",
    [],
    "",
  ),
  "vikingqueen-2": new ProductItem(
    "vikingqueen-2",
    "VQ2",
    "",
    [],
    "/images/copper-amethyst-cuff-copy.webp",
    "",
    "/product/vikingqueen-2",
    "$PRICE",
    [],
    "",
  ),
  "vikingqueen-3": new ProductItem(
    "vikingqueen-3",
    "VQ3",
    "",
    [],
    "/images/photoroom-20260129.webp",
    "",
    "/product/vikingqueen-3",
    "$PRICE",
    [],
    "",
  ),
  "vikingqueen-4": new ProductItem(
    "vikingqueen-4",
    "VQ4",
    "",
    [],
    "/images/orange-agate-copper-cuff.webp",
    "",
    "/product/vikingqueen-4",
    "$PRICE",
    [],
    "",
  ),
};

// Index of the products keyed by their slug, for fast lookup
const productsBySlug = Object.fromEntries(Object.values(products)
  .map((item) => [item.slug, item]));

export const productSet = (keys: Iterable<string>) => {
  const set = new Set(keys);
  return Object.fromEntries(
    Object.entries(products)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  return productsBySlug[slug];
}
