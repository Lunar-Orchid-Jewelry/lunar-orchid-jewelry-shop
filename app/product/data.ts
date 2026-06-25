import { basePath } from "../utils";

export type ProductImage = {
  img: string;
  alt: string;
};

export type ProductData = {
  slug: string;
  title: string;
  description: string;
  paragraphs: string[];
  coverImage: string;
  coverImageAlt: string;
  price: string;
  materials: string;
  productImages: ProductImage[];
  purchaseLink: string;
  sale?: string;
};

export class Product {
  public slug: string;
  public title: string;
  public description: string;
  public paragraphs: string[];
  coverImage: string;
  public coverImageAlt: string;
  public price: string;
  public purchaseLink: string;
  public materials: string;
  productImages: ProductImage[];
  public sale?: string;

  constructor(data: ProductData) {
    this.slug = data.slug;
    this.title = data.title;
    this.description = data.description;
    this.paragraphs = data.paragraphs;
    this.coverImage = data.coverImage;
    this.coverImageAlt = data.coverImageAlt;
    this.price = data.price;
    this.purchaseLink = data.purchaseLink;
    this.materials = data.materials;
    this.productImages = data.productImages;
    this.sale = data.sale;
  }

  public link(): string {
    return basePath(`product/${this.slug}`);
  }

  public coverImg(): string {
    return basePath(this.coverImage);
  }

  public productImgs(): ProductImage[] {
    return this.productImages.map(({ alt, img }) => ({
      alt,
      img: basePath(img),
    }));
  }
}
// prettier-ignore

/* === NECKLACES === */
export const products: Record<string, Product> = {
  "amethyst-whisper": new Product({
    slug: "copper-wrapped-amethyst-necklace-pendant",
    title: "Amethyst Whisper",
    description: "Copper Wire Wrapped Amethyst Pendant",
    paragraphs: [],
    coverImage: "images/amethyst-whisper-0.jpg",
    coverImageAlt: "Amethyst Whisper Pendant",
    price: "$68",
    // sale: "$38",
    purchaseLink: "https://buy.stripe.com/dRmdRb2nl9eG9hp2YH7Re06",
    materials: "Copper Wire, Tear Drop Amethyst Stone",
    productImages: [
      { img: "images/amethyst-whisper-0.jpg", alt: "Amethyst Whisper Pendant" },
      { img: "images/amethyst-whisper-1.jpg", alt: "Amethyst Whisper Pendant" },
      { img: "images/amethyst-whisper-2.jpg", alt: "Amethyst Whisper Pendant" },
      { img: "images/amethyst-whisper-3.jpg", alt: "Amethyst Whisper Pendant" },
      { img: "images/amethyst-whisper-4.jpg", alt: "Amethyst Whisper Pendant" },
      { img: "images/amethyst-whisper-5.jpg", alt: "Amethyst Whisper Pendant" },
      { img: "images/amethyst-whisper-6.jpg", alt: "Amethyst Whisper Pendant" },
      { img: "images/amethyst-whisper-7.jpg", alt: "Amethyst Whisper Pendant" },
    ],
  }),
  "copper-breath": new Product({
    slug: "copper-wrapped-jasper-heart-necklace-pendant",
    title: "Copper Breath",
    description: "Copper Wire Wrapped Jasper",
    paragraphs: [],
    coverImage: "images/copper-breath-0.jpg",
    coverImageAlt: "Copper Breath Pendant",
    price: "$78",
    purchaseLink: "",
    materials: "Copper Wire, Peach Jasper Heart Stone",
    productImages: [
      { img: "images/copper-breath-0.jpg", alt: "Copper Breath Pendant" },
      { img: "images/copper-breath-1.jpg", alt: "Copper Breath Pendant" },
      { img: "images/copper-breath-2.jpg", alt: "Copper Breath Pendant" },
      { img: "images/copper-breath-3.jpg", alt: "Copper Breath Pendant" },
      { img: "images/copper-breath-4.jpg", alt: "Copper Breath Pendant" },
      { img: "images/copper-breath-5.jpg", alt: "Copper Breath Pendant" },
      { img: "images/copper-breath-6.jpg", alt: "Copper Breath Pendant" },
      { img: "images/copper-breath-7.jpg", alt: "Copper Breath Pendant" },
    ],
  }),
  "cosmic-oasis": new Product({
    slug: "sterling-silver-bello-opal-necklace-pendant",
    title: "Cosmic Oasis",
    description: "Sterling Silver Wrapped Bello Opal",
    paragraphs: [
      "A celestial-inspired pendant featuring a bello opal set in sterling silver. This piece features color, or fire, that shimmers and dances in the light.",
    ],
    coverImage: "images/cosmic-oasis-0.jpg",
    coverImageAlt: "Cosmic Oasis Pendant",
    price: "$349",
    purchaseLink: "https://buy.stripe.com/6oU6oJfa7aiKctBbvd7Re0a",
    materials: "Sterling Silver, Bello Opal",
    productImages: [
      { img: "images/cosmic-oasis-0.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "images/cosmic-oasis-1.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "images/cosmic-oasis-2.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "images/cosmic-oasis-3.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "images/cosmic-oasis-4.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "images/cosmic-oasis-5.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "images/cosmic-oasis-6.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "images/cosmic-oasis-7.jpg", alt: "Cosmic Oasis Pendant" },
    ],
  }),
  "dragon-blood": new Product({
    slug: "copper-patina-red-tigers-eye-necklace-pendant",
    title: "Dragon Blood",
    description: "Copper Wire Wrapped Dragon's Eye",
    paragraphs: [],
    coverImage: "images/dragon-blood-0.jpg",
    coverImageAlt: "Dragon Blood Pendant",
    price: "$72",
    purchaseLink: "https://buy.stripe.com/dRm4gB6DBez0gJR2YH7Re0k",
    materials: "Copper Wire, Red Tiger's Eye(Dragon's Eye) Stone",
    productImages: [
      { img: "images/dragon-blood-0.jpg", alt: "Dragon Blood Pendant" },
      { img: "images/dragon-blood-1.jpg", alt: "Dragon Blood Pendant" },
      { img: "images/dragon-blood-2.jpg", alt: "Dragon Blood Pendant" },
      { img: "images/dragon-blood-3.jpg", alt: "Dragon Blood Pendant" },
      { img: "images/dragon-blood-4.jpg", alt: "Dragon Blood Pendant" },
      { img: "images/dragon-blood-5.jpg", alt: "Dragon Blood Pendant" },
      { img: "images/dragon-blood-6.jpg", alt: "Dragon Blood Pendant" },
      { img: "images/dragon-blood-7.jpg", alt: "Dragon Blood Pendant" },
    ],
  }),
  "eternal-current": new Product({
    slug: "rose-gold-ammonite-fossil-necklace-pendant",
    title: "Eternal Current",
    description: "Rose Gold Plated Copper Wrapped Ammonite",
    paragraphs: [],
    coverImage: "images/eternal-current-0.jpg",
    coverImageAlt: "Eternal Current Pendant",
    price: "$125",
    purchaseLink: "https://buy.stripe.com/00w6oJbXV8aCgJR8j17Re0b",
    materials: "Rose Gold Plated Copper, Ammonite Fossil",
    productImages: [
      { img: "images/eternal-current-0.jpg", alt: "Eternal Current Pendant" },
      { img: "images/eternal-current-1.jpg", alt: "Eternal Current Pendant" },
      { img: "images/eternal-current-2.jpg", alt: "Eternal Current Pendant" },
      { img: "images/eternal-current-3.jpg", alt: "Eternal Current Pendant" },
      { img: "images/eternal-current-4.jpg", alt: "Eternal Current Pendant" },
      { img: "images/eternal-current-5.jpg", alt: "Eternal Current Pendant" },
      { img: "images/eternal-current-6.jpg", alt: "Eternal Current Pendant" },
      { img: "images/eternal-current-7.jpg", alt: "Eternal Current Pendant" },
    ],
  }),
  "faire-magic": new Product({
    slug: "copper-patina-wrapped-frosted-sea-glass-necklace-pendant",
    title: "Faire Magic",
    description: "Patina Copper Wrapped Sea Glass",
    paragraphs: [],
    coverImage: "images/faire-magic-0.jpg",
    coverImageAlt: "Faire Magic Pendant",
    price: "$55",
    purchaseLink: "https://buy.stripe.com/eVqfZj7HFduWfFNgPx7Re0g",
    materials: "Patina Copper Wire, Frosted Sea Glass",
    productImages: [
      { img: "images/faire-magic-0.jpg", alt: "Faire Magic Pendant" },
      { img: "images/faire-magic-1.jpg", alt: "Faire Magic Pendant" },
      { img: "images/faire-magic-2.jpg", alt: "Faire Magic Pendant" },
      { img: "images/faire-magic-3.jpg", alt: "Faire Magic Pendant" },
      { img: "images/faire-magic-4.jpg", alt: "Faire Magic Pendant" },
      { img: "images/faire-magic-5.jpg", alt: "Faire Magic Pendant" },
      { img: "images/faire-magic-6.jpg", alt: "Faire Magic Pendant" },
      { img: "images/faire-magic-7.jpg", alt: "Faire Magic Pendant" },
    ],
  }),
  "forest-pearl": new Product({
    slug: "copper-wrapped-purple-glass-necklace-pendant",
    title: "Forest Pearl",
    description: "Copper Wire Wrapped Purple Glass",
    paragraphs: [],
    coverImage: "images/forest-pearl-0.jpg",
    coverImageAlt: "Forest Pearl Pendant",
    price: "$65",
    purchaseLink: "https://buy.stripe.com/14AaEZe632Qibpx56P7Re0i",
    materials: "Copper Wire, Purple Glass Stone, Chain Included",
    productImages: [
      { img: "images/forest-pearl-0.jpg", alt: "Forest Pearl Pendant" },
      { img: "images/forest-pearl-1.jpg", alt: "Forest Pearl Pendant" },
      { img: "images/forest-pearl-2.jpg", alt: "Forest Pearl Pendant" },
      { img: "images/forest-pearl-3.jpg", alt: "Forest Pearl Pendant" },
      { img: "images/forest-pearl-4.jpg", alt: "Forest Pearl Pendant" },
      { img: "images/forest-pearl-5.jpg", alt: "Forest Pearl Pendant" },
      { img: "images/forest-pearl-6.jpg", alt: "Forest Pearl Pendant" },
      { img: "images/forest-pearl-7.jpg", alt: "Forest Pearl Pendant" },
    ],
  }),
  "golden-roots": new Product({
    slug: "tree-of-life-gold-wrapped-heart-tigers-eye-necklace-pendant",
    title: "Golden Roots",
    description: "Gold Plated Copper Wrapped Tiger's Eye",
    paragraphs: [],
    coverImage: "images/golden-roots-0.jpg",
    coverImageAlt: "Golden Roots Pendant",
    price: "$82",
    purchaseLink: "https://buy.stripe.com/6oU00l8LJduWbpx0Qz7Re0h",
    materials: "Gold Plated Copper Wire, Heart Tiger's Eye Stone",
    productImages: [
      { img: "images/golden-roots-0.jpg", alt: "Golden Roots Pendant" },
      { img: "images/golden-roots-1.jpg", alt: "Golden Roots Pendant" },
      { img: "images/golden-roots-2.jpg", alt: "Golden Roots Pendant" },
      { img: "images/golden-roots-3.jpg", alt: "Golden Roots Pendant" },
      { img: "images/golden-roots-4.jpg", alt: "Golden Roots Pendant" },
      { img: "images/golden-roots-5.jpg", alt: "Golden Roots Pendant" },
      { img: "images/golden-roots-6.jpg", alt: "Golden Roots Pendant" },
      { img: "images/golden-roots-7.jpg", alt: "Golden Roots Pendant" },
    ],
  }),
  "midas-touch": new Product({
    slug: "gold-wrapped-tigers-eye-necklace-pendant",
    title: "Midas Touch",
    description: "Gold Plated Copper Wrapped Tiger's Eye",
    paragraphs: [],
    coverImage: "images/midas-touch-0.jpg",
    coverImageAlt: "Midas Touch Pendant",
    price: "$75",
    purchaseLink: "",
    materials: "Gold Plated Copper Wire, Tiger's Eye Stone",
    productImages: [
      { img: "images/midas-touch-0.jpg", alt: "Midas Touch Pendant" },
      { img: "images/midas-touch-1.jpg", alt: "Midas Touch Pendant" },
      { img: "images/midas-touch-2.jpg", alt: "Midas Touch Pendant" },
      { img: "images/midas-touch-3.jpg", alt: "Midas Touch Pendant" },
      { img: "images/midas-touch-4.jpg", alt: "Midas Touch Pendant" },
      { img: "images/midas-touch-5.jpg", alt: "Midas Touch Pendant" },
      { img: "images/midas-touch-6.jpg", alt: "Midas Touch Pendant" },
      { img: "images/midas-touch-7.jpg", alt: "Midas Touch Pendant" },
    ],
  }),
  "oceanic-roots": new Product({
    slug: "rose-gold-tree-of-life-blue-agate-necklace-pendant",
    title: "Oceanic Roots",
    description: "Rose Gold Plated Copper Wrapped Blue Agate",
    paragraphs: [],
    coverImage: "images/oceanic-roots-0.jpg",
    coverImageAlt: "Oceanic Roots Pendant",
    price: "$80",
    purchaseLink: "https://buy.stripe.com/dRm8wRbXVbmO1OXdDl7Re08",
    materials: "Rose Gold Plated Copper Wire, Blue Agate Stone",
    productImages: [
      { img: "images/oceanic-roots-0.jpg", alt: "Oceanic Roots Pendant" },
      { img: "images/oceanic-roots-1.jpg", alt: "Oceanic Roots Pendant" },
      { img: "images/oceanic-roots-2.jpg", alt: "Oceanic Roots Pendant" },
      { img: "images/oceanic-roots-3.jpg", alt: "Oceanic Roots Pendant" },
      { img: "images/oceanic-roots-4.jpg", alt: "Oceanic Roots Pendant" },
      { img: "images/oceanic-roots-5.jpg", alt: "Oceanic Roots Pendant" },
      { img: "images/oceanic-roots-6.jpg", alt: "Oceanic Roots Pendant" },
      { img: "images/oceanic-roots-7.jpg", alt: "Oceanic Roots Pendant" },
    ],
  }),
  "rustic-breeze": new Product({
    slug: "rustic-breeze",
    title: "Rustic Breeze",
    description: "description",
    paragraphs: [],
    coverImage: "images/rustic-breeze-0.jpg",
    coverImageAlt: "Rustic Breeze",
    price: "$PRICE",
    purchaseLink: "",
    materials: "Copper Wire, Raw Edged Agate Stone",
    productImages: [
      { img: "images/rustic-breeze-0.jpg", alt: "Rustic Breeze Pendant" },
      { img: "images/rustic-breeze-1.jpg", alt: "Rustic Breeze Pendant" },
      { img: "images/rustic-breeze-2.jpg", alt: "Rustic Breeze Pendant" },
      { img: "images/rustic-breeze-3.jpg", alt: "Rustic Breeze Pendant" },
      { img: "images/rustic-breeze-4.jpg", alt: "Rustic Breeze Pendant" },
      { img: "images/rustic-breeze-5.jpg", alt: "Rustic Breeze Pendant" },
      { img: "images/rustic-breeze-6.jpg", alt: "Rustic Breeze Pendant" },
      { img: "images/rustic-breeze-7.jpg", alt: "Rustic Breeze Pendant" },
    ],
  }),
  "sacred-alignment": new Product({
    slug: "sacred-alignment",
    title: "Sacred Alignment",
    description: "Copper Wire Wrapped Chakra Stone",
    paragraphs: [],
    coverImage: "images/sacred-alignment-0.jpg",
    coverImageAlt: "Sacred Alignment Pendant",
    price: "$60",
    purchaseLink: "https://buy.stripe.com/5kQ14pd1Z0IactBgPx7Re09",
    materials: "Copper Wire, Chakra Stone",
    productImages: [
      { img: "images/sacred-alignment-0.jpg", alt: "Sacred Alignment Pendant" },
      { img: "images/sacred-alignment-1.jpg", alt: "Sacred Alignment Pendant" },
      { img: "images/sacred-alignment-2.jpg", alt: "Sacred Alignment Pendant" },
      { img: "images/sacred-alignment-3.jpg", alt: "Sacred Alignment Pendant" },
      { img: "images/sacred-alignment-4.jpg", alt: "Sacred Alignment Pendant" },
      { img: "images/sacred-alignment-5.jpg", alt: "Sacred Alignment Pendant" },
      { img: "images/sacred-alignment-6.jpg", alt: "Sacred Alignment Pendant" },
      { img: "images/sacred-alignment-7.jpg", alt: "Sacred Alignment Pendant" },
    ],
  }),




  /* === BRACELETS === */

  "artemis-cuff": new Product({
    slug: "copper-amethyst-cuff",
    title: "Artemis Cuff",
    description: "description",
    paragraphs: [],
    coverImage: "images/artemis-cuff.jpg",
    coverImageAlt: "Artemis Cuff",
    price: "$PRICE",
    purchaseLink: "",
    materials: "Copper, Amethyst",
    productImages: [
      { img: "images/copper-amethyst-cuff-0.jpg", alt: "Copper Amethyst Cuff" },
      { img: "images/copper-amethyst-cuff-1.jpg", alt: "Copper Amethyst Cuff" },
      { img: "images/copper-amethyst-cuff-2.jpg", alt: "Copper Amethyst Cuff" },
      { img: "images/copper-amethyst-cuff-3.jpg", alt: "Copper Amethyst Cuff" },
    ],
  }),

  "rainbow-pride-cuff": new Product({
    slug: "rainbow-beaded-silver-cuff-bracelet",
    title: "Rainbow Pride Cuff",
    description: "Silver Rainbow Cuff",
    paragraphs: [],
    coverImage: "images/rainbow-pride-cuff-0.jpg",
    coverImageAlt: "Rainbow Pride Cuff",
    price: "$20",
    materials: "Silver Plated Copper Wire, Rainbow Assortment of Preciosa Crystal Beads",
    productImages: [
      { img: "images/rainbow-pride-cuff-0.jpg", alt: "Rainbow Pride Cuff" },
      { img: "images/rainbow-pride-cuff-1.jpg", alt: "Rainbow Pride Cuff" },
      { img: "images/rainbow-pride-cuff-2.jpg", alt: "Rainbow Pride Cuff" },
      { img: "images/rainbow-pride-cuff-3.jpg", alt: "Rainbow Pride Cuff" },
      { img: "images/rainbow-pride-cuff-4.jpg", alt: "Rainbow Pride Cuff" },
      { img: "images/rainbow-pride-cuff-5.jpg", alt: "Rainbow Pride Cuff" },
      { img: "images/rainbow-pride-cuff-6.jpg", alt: "Rainbow Pride Cuff" },
    ],
    purchaseLink: "",
  }),

  "goddess-cuff": new Product({
    slug: "silver-wire-woven-cuff-bracelet",
    title: "Silver Goddess Cuff",
    description: "Silver Wire Wrapped Cuff Bracelet",
    paragraphs: [],
    coverImage: "images/goddess-cuff-0.jpg",
    coverImageAlt: "Silver Goddess Cuff",
    price: "$PRICE",
    materials: "material",
    productImages: [
      { img: "images/goddess-cuff-0.jpg", alt: "Silver Goddess Cuff" },
      { img: "images/goddess-cuff-1.jpg", alt: "Silver Goddess Cuff" },
      { img: "images/goddess-cuff-2.jpg", alt: "Silver Goddess Cuff" },
      { img: "images/goddess-cuff-3.jpg", alt: "Silver Goddess Cuff" },
      { img: "images/goddess-cuff-4.jpg", alt: "Silver Goddess Cuff" },
      { img: "images/goddess-cuff-5.jpg", alt: "Silver Goddess Cuff" },
    ],
    purchaseLink: "",
  }),




  /* === RINGS === */
  "copper-spiral-ring": new Product({
    slug: "copper-spiral-ring",
    title: "Copper Spiral Ring",
    description: "description",
    paragraphs: [],
    coverImage: "images/copper-spiral-ring.jpg",
    coverImageAlt: "Copper Spiral Ring",
    price: "$PRICE",
    purchaseLink: "",
    materials: "Copper",
    productImages: [{ img: "images/copper-spiral-ring-0.jpg", alt: "Copper Spiral Ring" }],
  }),
  "flat-copper-spiral-ring": new Product({
    slug: "flat-hammered-copper-spiral-ring",
    title: "Hammered Copper Spiral Ring",
    description: "description",
    paragraphs: ["Each ring is made to order and will have slight variations from product photo."],
    coverImage: "images/flat-copper-spiral-ring.jpg",
    coverImageAlt: "Hammered Copper Spiral Ring",
    price: "$PRICE",
    purchaseLink: "",
    materials: "Copper",
    productImages: [{ img: "images/flat-copper-spiral-ring-0.jpg", alt: "Hammered Spiral Ring" }],
  }),
  "copper-rose-ring": new Product({
    slug: "copper-rose-ring",
    title: "Copper Rose Ring",
    description: "description",
    paragraphs: [],
    coverImage: "images/copper-rose-ring.jpg",
    coverImageAlt: "Copper Rose Ring",
    price: "$PRICE",
    purchaseLink: "",
    materials: "Copper Wire",
    productImages: [
      { img: "images/copper-rose-ring-0.jpg", alt: "Copper Rose Ring" },
      { img: "images/copper-rose-ring-0.jpg", alt: "Copper Rose Ring" },
      { img: "images/copper-rose-ring-0.jpg", alt: "Copper Rose Ring" },
      { img: "images/copper-rose-ring-0.jpg", alt: "Copper Rose Ring" },
      { img: "images/copper-rose-ring-0.jpg", alt: "Copper Rose Ring" },
    ],
  }),




  /* === NEW ITEM === */

  "new-item": new Product({
    slug: "new-item",
    title: "New Item",
    description: "description",
    paragraphs: [],
    coverImage: "images/cover-image-0.jpg",
    coverImageAlt: "New Item Alt",
    price: "$PRICE",
    purchaseLink: "",
    materials: "material",
    productImages: [
      { img: "images/image-0.jpg", alt: "image alt 0" },
      { img: "images/image-1.jpg", alt: "image alt 1" },
    ],
  }),
};

// Index of the products keyed by their slug, for fast lookup
const productsBySlug = Object.fromEntries(
  Object.values(products).map((item) => [item.slug, item]),
);

export const productSet = (keys: Iterable<string>) => {
  const set = new Set(keys);
  return Object.fromEntries(
    Object.entries(products)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([key, _]) => set.has(key)),
  );
};

export default products;

export const necklacePreview = productSet([
  "amethyst-whisper",
  "copper-breath",
  "cosmic-oasis",
  "dragon-blood",
  "eternal-current",
  "golden-roots",
  "faire-magic",
  "forest-pearl",
  // "rustic-breeze",
  // "midas-touch",
  // "oceanic-roots",
  // "sacred-alignment",
]);

export const necklaceCatalog = productSet([
  "amethyst-whisper",
  "copper-breath",
  "cosmic-oasis",
  "dragon-blood",
  "eternal-current",
  "golden-roots",
  "faire-magic",
  "forest-pearl",
  "rustic-breeze",
  "midas-touch",
  "oceanic-roots",
  "sacred-alignment",
]);

export const braceletProducts = productSet([
  "rainbow-pride-cuff",
  "goddess-cuff",
]);

export const ringProducts = productSet(["flat-copper-spiral-ring"]);

export const goddessProducts = productSet([
  "oceanic-roots",
  "eternal-current",
  "goddess-cuff",
]);

export const nymphProducts = productSet([
  "forest-pearl",
  "copper-breath",
  "faire-magic",
]);

export const warriorProducts = productSet(["dragon-blood", "midas-touch"]);

export const queenProducts = productSet(["rainbow-pride-cuff"]);

/** Look up a product by its slug. Returns undefined if not found. */
export function getProductBySlug(slug: string): Product | undefined {
  return productsBySlug[slug];
}
