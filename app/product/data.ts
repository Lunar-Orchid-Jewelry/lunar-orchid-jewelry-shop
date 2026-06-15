export type ProductImage = {
  img: string;
  alt: string;
};

export class ProductItem {
  public slug: string;
  public title: string;
  public description: string;
  public paragraphs: string[];
  public coverImage: string;
  public coverImageAlt: string;
  public price: string;
  public productImages: ProductImage[];
  public materials?: string;

  constructor(
    slug: string,
    title: string,
    description: string,
    paragraphs: string[],
    coverImage: string,
    coverImageAlt: string,
    price: string,
    productImages: ProductImage[],
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
    this.productImages = productImages;
    this.materials = materials;
  }

  public link() {
    return `/product/${this.slug}`;
  }
}

export const products: Record<string, ProductItem> = {
  "amethyst-whisper": new ProductItem(
    "copper-wrapped-amethyst-necklace-pendant",
    "Amethyst Whisper",
    "Copper Wire Wrapped Amethyst Pendant",
    ["paragraph"],
    "/images/amethyst-whisper-1.jpg",
    "Amethyst Whisper Pendant",
    "$68",
    [
      {
        img: "/images/amethyst-whisper-0.jpg",
        alt: "Amethyst Whisper Pendant",
      },
      {
        img: "/images/amethyst-whisper-1.jpg",
        alt: "Amethyst Whisper detail",
      },
      {
        img: "/images/amethyst-whisper-2.jpg",
        alt: "Amethyst Whisper close-up",
      },
    ],
    "Copper Wire, Tear Drop Amethyst Stone",
  ),
  "copper-breath": new ProductItem(
    "copper-wrapped-jasper-heart-necklace-pendant",
    "Copper Breath",
    "Copper Wire Wrapped Jasper",
    ["paragraph"],
    "/images/copper-breath.jpg",
    "Copper Breath Pendant",
    "$78",
    [
      { img: "/images/copper-breath-0.jpg", alt: "Copper Breath Pendant" },
      {
        img: "/images/copper-breath-1.jpg",
        alt: "Copper Breath Pendant side view",
      },
      {
        img: "/images/copper-breath-2.jpg",
        alt: "Copper Breath Pendant detail",
      },
    ],
    "Copper",
  ),

  "cosmic-oasis": new ProductItem(
    "sterling-silver-bello-opal-necklace-pendant",
    "Cosmic Oasis",
    "Sterling Silver Wrapped Bello Opal",
    [
      "A celestial-inspired pendant featuring a bello opal set in sterling silver. This piece features color, or fire, that shimmers and dances in the light.",
    ],
    "/images/cosmic-oasis-0.jpg",
    "Cosmic Oasis Pendant",
    "$PRICE",
    [
      { img: "/images/cosmic-oasis-0.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "/images/cosmic-oasis-1.jpg", alt: "Cosmic Oasis Pendant" },
      {
        img: "/images/cosmic-oasis-2.jpg",
        alt: "Cosmic Oasis Pendant side view",
      },
      {
        img: "/images/cosmic-oasis-3.jpg",
        alt: "Cosmic Oasis Pendant detail",
      },
      {
        img: "/images/cosmic-oasis-4.jpg",
        alt: "Cosmic Oasis Pendant alternate angle",
      },
      {
        img: "/images/cosmic-oasis-5.jpg",
        alt: "Cosmic Oasis Pendant close-up",
      },
      { img: "/images/cosmic-oasis-6.jpg", alt: "Cosmic Oasis Pendant worn" },
      {
        img: "/images/cosmic-oasis-7.jpg",
        alt: "Cosmic Oasis Pendant detail",
      },
      { img: "/images/cosmic-oasis-8.jpg", alt: "Cosmic Oasis Pendant" },
    ],
    "Sterling Silver, Bello Opal",
  ),

  "dragon-blood": new ProductItem(
    "copper-patina-red-tigers-eye-necklace-pendant",
    "Dragon Blood",
    "Copper Wire Wrapped Dragon's Eye",
    ["paragraph"],
    "/images/dragon-blood-0.jpg",
    "Dragon Blood Pendant",
    "$72",
    [
      { img: "/images/dragon-blood-0.jpg", alt: "Copper Breath Pendant" },
      {
        img: "/images/dragon-blood-1.jpg",
        alt: "Copper Breath Pendant side view",
      },
      {
        img: "/images/dragon-blood-2.jpg",
        alt: "Copper Breath Pendant detail",
      },
    ],
    "Copper Wire, Red Tiger's Eye(Dragon's Eye) Stone",
  ),
  "eternal-current": new ProductItem(
    "rose-gold-ammonite-fossil-necklace-pendant",
    "Eternal Current",
    "Rose Gold Plated Copper Wrapped Ammonite",
    ["paragraph"],
    "/images/eternal-current-0.jpg",
    "Eternal Current Pendant",
    "$125",
    [
      { img: "/images/image-0", alt: "image alt 0" },
      { img: "/images/image-1", alt: "image alt 1" },
    ],
    "Rose Gold Plated Copper, Ammonite Fossil",
  ),
  "faire-magic": new ProductItem(
    "copper-patina-wrapped-frosted-sea-glass-necklace-pendant",
    "Faire Magic",
    "Patina Copper Wrapped Sea Glass",
    ["paragraph"],
    "/images/faire-magic-0",
    "Faire Magic Pendant",
    "$55",
    [
      { img: "/images/image-0", alt: "image alt 0" },
      { img: "/images/image-1", alt: "image alt 1" },
    ],
    "Patina Copper Wire, Frosted Sea Glass",
  ),
  "forest-pearl": new ProductItem(
    "copper-wrapped-purple-glass-necklace-pendant",
    "Forest Pearl",
    "Copper Wire Wrapped Purple Glass",
    ["paragraph"],
    "/images/forest-pearl-0.jpg",
    "Forest Pearl Necklace",
    "$65",
    [{ img: "/images/forest-pearl-0.jpg", alt: "Forest Pearl Necklace" }],
    "Copper Wire, Purple Glass",
  ),
  "golden-roots": new ProductItem(
    "tree-of-life-gold-wrapped-heart-tigers-eye-necklace-pendant",
    "Golden Roots",
    "Gold Plated Copper Wrapped Tiger's Eye",
    ["paragraph"],
    "/images/golden-roots-0.jpg",
    "Midas Touch Pendant",
    "$82",
    [
      { img: "/images/image-0", alt: "image alt 0" },
      { img: "/images/image-1", alt: "image alt 1" },
    ],
    "Gold Plated Copper Wire, Heart Tiger's Eye Stone",
  ),
  "midas-touch": new ProductItem(
    "gold-wrapped-tigers-eye-necklace-pendant",
    "Midas Touch",
    "Gold Plated Copper Wrapped Tiger's Eye",
    ["paragraph"],
    "/images/midas-touch-0",
    "Midas Touch Pendant",
    "$75",
    [
      { img: "/images/image-0", alt: "image alt 0" },
      { img: "/images/image-1", alt: "image alt 1" },
    ],
    "Gold Plated Copper Wire, Tiger's Eye Stone",
  ),
  "oceanic-roots": new ProductItem(
    "oceanic-roots",
    "Oceanic Roots",
    "Rose Gold Plated Copper Wrapped Blue Agate",
    ["paragraph"],
    "/images/oceanic-roots-0",
    "Oceanic Roots Pendant",
    "$80",
    [
      { img: "/images/image-0", alt: "image alt 0" },
      { img: "/images/image-1", alt: "image alt 1" },
    ],
    "Rose Gold Plated Copper Wire, Blue Agate Stone",
  ),
  "rustic-breeze": new ProductItem(
    "rustic-breeze",
    "Rustic Breeze",
    "description",
    ["paragraph"],
    "/images/rustic-breeze-0.jpg",
    "Rustic Breeze",
    "$PRICE",
    [{ img: "/images/rustic-breeze-0.jpg", alt: "Rustic Breeze Pendant" }],
    "Copper Wire, Raw Edged Agate Stone",
  ),
  "sacred-alignment": new ProductItem(
    "sacred-alignment",
    "Sacred Alignment",
    "Copper Wire Wrapped Chakra Stone",
    ["paragraph"],
    "/images/sacred-alignment-0.jpg",
    "Sacred Alignment Pendant",
    "$60",
    [
      { img: "/images/image-0", alt: "image alt 0" },
      { img: "/images/image-1", alt: "image alt 1" },
    ],
    "Copper Wire, Chakra Stone",
  ),
  "copper-rose-ring": new ProductItem(
    "copper-rose-ring",
    "Copper Rose Ring",
    "description",
    ["paragraph"],
    "/images/copper-rose-ring.jpg",
    "Copper Rose Ring",
    "$PRICE",
    [{ img: "/images/copper-rose-ring-0.jpg", alt: "Copper Rose Ring" }],
    "Copper",
  ),
  "artemis-cuff": new ProductItem(
    "copper-amethyst-cuff",
    "Artemis Cuff",
    "description",
    ["paragraph"],
    "/images/artemis-cuff.jpg",
    "Artemis Cuff",
    "$PRICE",
    [
      { img: "/images/copper-amethyst-cuff.jpg", alt: "Copper Amethyst Cuff" },
      {
        img: "/images/copper-amethyst-cuff-copy.jpg",
        alt: "Copper Amethyst Cuff alternate view",
      },
      {
        img: "/images/copper-amethyst-cuff-4.jpg",
        alt: "Copper Amethyst Cuff detail",
      },
    ],
    "Copper, Amethyst",
  ),

  "copper-spiral-ring": new ProductItem(
    "copper-spiral-ring",
    "Copper Spiral Ring",
    "description",
    ["paragraph"],
    "/images/copper-spiral-ring.jpg",
    "Copper Spiral Ring",
    "$PRICE",
    [{ img: "/images/copper-spiral-ring-0.jpg", alt: "Copper Spiral Ring" }],
    "Copper",
  ),

  "new-item": new ProductItem(
    "new-item",
    "New Item",
    "description",
    ["paragraph"],
    "/images/cover-image-0.jpg",
    "New Item Alt",
    "$PRICE",
    [
      { img: "/images/image-0", alt: "image alt 0" },
      { img: "/images/image-1", alt: "image alt 1" },
    ],
    "material",
  ),
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

export const necklaceProducts = productSet([
  "amethyst-whisper",
  "copper-breath",
  "cosmic-oasis",
  "dragon-blood",
  "eternal-current",
  "faire-magic",
  "forest-pearl",
  "golden-roots",
  "midas-touch",
  "oceanic-roots",
  "rustic-breeze",
  "sacred-alignment",
]);

export const braceletProducts = productSet(["artemis-cuff"]);

export const ringProducts = productSet([
  "copper-rose-ring",
  "copper-spiral-ring",
]);

export const oceanGoddessProducts = productSet([
  "oceanic-roots",
  "eternal-current",
]);

export const forestNymphProducts = productSet([
  "forest-pearl",
  "copper-rose-ring",
]);

export const vikingQueenProducts = productSet(["dragon-blood", "artemis-cuff"]);

/** Look up a product by its slug. Returns undefined if not found. */
export function getProductBySlug(slug: string): ProductItem | undefined {
  return productsBySlug[slug];
}
