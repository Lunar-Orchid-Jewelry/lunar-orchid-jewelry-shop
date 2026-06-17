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
  public materials?: string;
  public productImages: ProductImage[];

  constructor(
    slug: string,
    title: string,
    description: string,
    paragraphs: string[],
    coverImage: string,
    coverImageAlt: string,
    price: string,
    materials?: string,
    productImages: ProductImage[],
  ) {
    this.slug = slug;
    this.slug = slug;
    this.title = title;
    this.description = description;
    this.paragraphs = paragraphs;
    this.coverImage = coverImage;
    this.coverImageAlt = coverImageAlt;
    this.price = price;
    this.materials = materials;
    this.productImages = productImages;
  }

  public link() {
    return `/product/${this.slug}`;
  }
}

// prettier-ignore
export const products: Record<string, ProductItem> = {
  "amethyst-whisper": new ProductItem(
    "copper-wrapped-amethyst-necklace-pendant",
    "Amethyst Whisper",
    "Copper Wire Wrapped Amethyst Pendant",
    ["paragraph"],
    "/images/amethyst-whisper-0.jpg",
    "Amethyst Whisper Pendant",
    "$68",
    "Copper Wire, Tear Drop Amethyst Stone",
    [
      { img: "/images/amethyst-whisper-0.jpg", alt: "Amethyst Whisper Pendant" },
      { img: "/images/amethyst-whisper-1.jpg", alt: "Amethyst Whisper Pendant" },
      { img: "/images/amethyst-whisper-2.jpg", alt: "Amethyst Whisper Pendant" },
      { img: "/images/amethyst-whisper-3.jpg", alt: "Amethyst Whisper Pendant" },
      { img: "/images/amethyst-whisper-4.jpg", alt: "Amethyst Whisper Pendant" },
      { img: "/images/amethyst-whisper-5.jpg", alt: "Amethyst Whisper Pendant" },
      { img: "/images/amethyst-whisper-6.jpg", alt: "Amethyst Whisper Pendant" },
      { img: "/images/amethyst-whisper-7.jpg", alt: "Amethyst Whisper Pendant" },
    ],
  ),
  "copper-breath": new ProductItem(
    "copper-wrapped-jasper-heart-necklace-pendant",
    "Copper Breath",
    "Copper Wire Wrapped Jasper",
    ["paragraph"],
    "/images/copper-breath-0.jpg",
    "Copper Breath Pendant",
    "$78",
    "Copper",
    [
      { img: "/images/copper-breath-0.jpg", alt: "Copper Breath Pendant" },
      { img: "/images/copper-breath-1.jpg", alt: "Copper Breath Pendant" },
      { img: "/images/copper-breath-2.jpg", alt: "Copper Breath Pendant" },
      { img: "/images/copper-breath-3.jpg", alt: "Copper Breath Pendant" },
      { img: "/images/copper-breath-4.jpg", alt: "Copper Breath Pendant" },
      { img: "/images/copper-breath-5.jpg", alt: "Copper Breath Pendant" },
      { img: "/images/copper-breath-6.jpg", alt: "Copper Breath Pendant" },
      { img: "/images/copper-breath-7.jpg", alt: "Copper Breath Pendant" },
    ],
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
    "$349",
    "Sterling Silver, Bello Opal",
    [
      { img: "/images/cosmic-oasis-0.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "/images/cosmic-oasis-1.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "/images/cosmic-oasis-2.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "/images/cosmic-oasis-3.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "/images/cosmic-oasis-4.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "/images/cosmic-oasis-5.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "/images/cosmic-oasis-6.jpg", alt: "Cosmic Oasis Pendant" },
      { img: "/images/cosmic-oasis-7.jpg", alt: "Cosmic Oasis Pendant" },
    ],
  ),

  "dragon-blood": new ProductItem(
    "copper-patina-red-tigers-eye-necklace-pendant",
    "Dragon Blood",
    "Copper Wire Wrapped Dragon's Eye",
    ["paragraph"],
    "/images/dragon-blood-0.jpg",
    "Dragon Blood Pendant",
    "$72",
    "Copper Wire, Red Tiger's Eye(Dragon's Eye) Stone",
    [
      { img: "/images/dragon-blood-0.jpg", alt: "Dragon Blood Pendant" },
      { img: "/images/dragon-blood-1.jpg", alt: "Dragon Blood Pendant" },
      { img: "/images/dragon-blood-2.jpg", alt: "Dragon Blood Pendant" },
      { img: "/images/dragon-blood-3.jpg", alt: "Dragon Blood Pendant" },
      { img: "/images/dragon-blood-4.jpg", alt: "Dragon Blood Pendant" },
      { img: "/images/dragon-blood-5.jpg", alt: "Dragon Blood Pendant" },
      { img: "/images/dragon-blood-6.jpg", alt: "Dragon Blood Pendant" },
      { img: "/images/dragon-blood-7.jpg", alt: "Dragon Blood Pendant" },
    ],
  ),
  "eternal-current": new ProductItem(
    "rose-gold-ammonite-fossil-necklace-pendant",
    "Eternal Current",
    "Rose Gold Plated Copper Wrapped Ammonite",
    ["paragraph"],
    "/images/eternal-current-0.jpg",
    "Eternal Current Pendant",
    "$125",
    "Rose Gold Plated Copper, Ammonite Fossil",
    [
      { img: "/images/eternal-current-0", alt: "Eternal Current Pendant" },
      { img: "/images/eternal-current-1", alt: "Eternal Current Pendant" },
      { img: "/images/eternal-current-2", alt: "Eternal Current Pendant" },
      { img: "/images/eternal-current-3", alt: "Eternal Current Pendant" },
      { img: "/images/eternal-current-4", alt: "Eternal Current Pendant" },
      { img: "/images/eternal-current-5", alt: "Eternal Current Pendant" },
      { img: "/images/eternal-current-6", alt: "Eternal Current Pendant" },
      { img: "/images/eternal-current-7", alt: "Eternal Current Pendant" },
    ],
  ),
  "faire-magic": new ProductItem(
    "copper-patina-wrapped-frosted-sea-glass-necklace-pendant",
    "Faire Magic",
    "Patina Copper Wrapped Sea Glass",
    ["paragraph"],
    "/images/faire-magic-0.jpg",
    "Faire Magic Pendant",
    "$55",
    "Patina Copper Wire, Frosted Sea Glass",
    [
      { img: "/images/faire-magic-0.jpg", alt: "Faire Magic Pendant" },
      { img: "/images/faire-magic-1.jpg", alt: "Faire Magic Pendant" },
      { img: "/images/faire-magic-2.jpg", alt: "Faire Magic Pendant" },
      { img: "/images/faire-magic-3.jpg", alt: "Faire Magic Pendant" },
      { img: "/images/faire-magic-4.jpg", alt: "Faire Magic Pendant" },
      { img: "/images/faire-magic-5.jpg", alt: "Faire Magic Pendant" },
      { img: "/images/faire-magic-6.jpg", alt: "Faire Magic Pendant" },
      { img: "/images/faire-magic-7.jpg", alt: "Faire Magic Pendant" },
    ],
  ),
  "forest-pearl": new ProductItem(
    "copper-wrapped-purple-glass-necklace-pendant",
    "Forest Pearl",
    "Copper Wire Wrapped Purple Glass",
    ["paragraph"],
    "/images/forest-pearl-0.jpg",
    "Forest Pearl Pendant",
    "$65",
    "Copper Wire, Purple Glass",
    [
      { img: "/images/forest-pearl-0.jpg", alt: "Forest Pearl Pendant" },
      { img: "/images/forest-pearl-1.jpg", alt: "Forest Pearl Pendant" },
      { img: "/images/forest-pearl-2.jpg", alt: "Forest Pearl Pendant" },
      { img: "/images/forest-pearl-3.jpg", alt: "Forest Pearl Pendant" },
      { img: "/images/forest-pearl-4.jpg", alt: "Forest Pearl Pendant" },
      { img: "/images/forest-pearl-5.jpg", alt: "Forest Pearl Pendant" },
      { img: "/images/forest-pearl-6.jpg", alt: "Forest Pearl Pendant" },
      { img: "/images/forest-pearl-7.jpg", alt: "Forest Pearl Pendant" },
    ],
  ),
  "golden-roots": new ProductItem(
    "tree-of-life-gold-wrapped-heart-tigers-eye-necklace-pendant",
    "Golden Roots",
    "Gold Plated Copper Wrapped Tiger's Eye",
    ["paragraph"],
    "/images/golden-roots-0.jpg",
    "Golden Roots Pendant",
    "$82",
    "Gold Plated Copper Wire, Heart Tiger's Eye Stone",
    [
      { img: "/images/golden-roots-0", alt: "Golden Roots Pendant" },
      { img: "/images/golden-roots-1", alt: "Golden Roots Pendant" },
      { img: "/images/golden-roots-2", alt: "Golden Roots Pendant" },
      { img: "/images/golden-roots-3", alt: "Golden Roots Pendant" },
      { img: "/images/golden-roots-4", alt: "Golden Roots Pendant" },
      { img: "/images/golden-roots-5", alt: "Golden Roots Pendant" },
      { img: "/images/golden-roots-6", alt: "Golden Roots Pendant" },
      { img: "/images/golden-roots-7", alt: "Golden Roots Pendant" },
    ],
  ),
  "midas-touch": new ProductItem(
    "gold-wrapped-tigers-eye-necklace-pendant",
    "Midas Touch",
    "Gold Plated Copper Wrapped Tiger's Eye",
    ["paragraph"],
    "/images/midas-touch-0",
    "Midas Touch Pendant",
    "$75",
    "Gold Plated Copper Wire, Tiger's Eye Stone",
    [
      { img: "/images/midas-touch-0", alt: "Midas Touch Pendant" },
      { img: "/images/midas-touch-1", alt: "Midas Touch Pendant" },
      { img: "/images/midas-touch-2", alt: "Midas Touch Pendant" },
      { img: "/images/midas-touch-3", alt: "Midas Touch Pendant" },
      { img: "/images/midas-touch-4", alt: "Midas Touch Pendant" },
      { img: "/images/midas-touch-5", alt: "Midas Touch Pendant" },
      { img: "/images/midas-touch-6", alt: "Midas Touch Pendant" },
      { img: "/images/midas-touch-7", alt: "Midas Touch Pendant" },
    ],
  ),
  "oceanic-roots": new ProductItem(
    "rose-gold-tree-of-life-blue-agate-necklace-pendant",
    "Oceanic Roots",
    "Rose Gold Plated Copper Wrapped Blue Agate",
    ["paragraph"],
    "/images/oceanic-roots-0",
    "Oceanic Roots Pendant",
    "$80",
    "Rose Gold Plated Copper Wire, Blue Agate Stone",
    [
      { img: "/images/oceanic-roots-0", alt: "Oceanic Roots Pendant" },
      { img: "/images/oceanic-roots-1", alt: "Oceanic Roots Pendant" },
      { img: "/images/oceanic-roots-2", alt: "Oceanic Roots Pendant" },
      { img: "/images/oceanic-roots-3", alt: "Oceanic Roots Pendant" },
      { img: "/images/oceanic-roots-4", alt: "Oceanic Roots Pendant" },
      { img: "/images/oceanic-roots-5", alt: "Oceanic Roots Pendant" },
      { img: "/images/oceanic-roots-6", alt: "Oceanic Roots Pendant" },
      { img: "/images/oceanic-roots-7", alt: "Oceanic Roots Pendant" },
    ],
  ),
  "rustic-breeze": new ProductItem(
    "rustic-breeze",
    "Rustic Breeze",
    "description",
    ["paragraph"],
    "/images/rustic-breeze-0.jpg",
    "Rustic Breeze",
    "$PRICE",
    "Copper Wire, Raw Edged Agate Stone",
    [
      { img: "/images/rustic-breeze-0.jpg", alt: "Rustic Breeze Pendant" },
      { img: "/images/rustic-breeze-1.jpg", alt: "Rustic Breeze Pendant" },
      { img: "/images/rustic-breeze-2.jpg", alt: "Rustic Breeze Pendant" },
      { img: "/images/rustic-breeze-3.jpg", alt: "Rustic Breeze Pendant" },
      { img: "/images/rustic-breeze-4.jpg", alt: "Rustic Breeze Pendant" },
      { img: "/images/rustic-breeze-5.jpg", alt: "Rustic Breeze Pendant" },
      { img: "/images/rustic-breeze-6.jpg", alt: "Rustic Breeze Pendant" },
      { img: "/images/rustic-breeze-7.jpg", alt: "Rustic Breeze Pendant" },
    ],
  ),
  "sacred-alignment": new ProductItem(
    "sacred-alignment",
    "Sacred Alignment",
    "Copper Wire Wrapped Chakra Stone",
    ["paragraph"],
    "/images/sacred-alignment-0.jpg",
    "Sacred Alignment Pendant",
    "$60",
    "Copper Wire, Chakra Stone",
    [
      { img: "/images/sacred-alignment-0", alt: "Sacred Alignment Pendant" },
      { img: "/images/sacred-alignment-1", alt: "Sacred Alignment Pendant" },
      { img: "/images/sacred-alignment-2", alt: "Sacred Alignment Pendant" },
      { img: "/images/sacred-alignment-3", alt: "Sacred Alignment Pendant" },
      { img: "/images/sacred-alignment-4", alt: "Sacred Alignment Pendant" },
      { img: "/images/sacred-alignment-5", alt: "Sacred Alignment Pendant" },
      { img: "/images/sacred-alignment-6", alt: "Sacred Alignment Pendant" },
      { img: "/images/sacred-alignment-7", alt: "Sacred Alignment Pendant" },
    ],
  ),
  "copper-rose-ring": new ProductItem(
    "copper-rose-ring",
    "Copper Rose Ring",
    "description",
    ["paragraph"],
    "/images/copper-rose-ring.jpg",
    "Copper Rose Ring",
    "$PRICE",
    "Copper Wire",
    [
      { img: "/images/copper-rose-ring-0.jpg", alt: "Copper Rose Ring" },
      { img: "/images/copper-rose-ring-0.jpg", alt: "Copper Rose Ring" },
      { img: "/images/copper-rose-ring-0.jpg", alt: "Copper Rose Ring" },
      { img: "/images/copper-rose-ring-0.jpg", alt: "Copper Rose Ring" },
      { img: "/images/copper-rose-ring-0.jpg", alt: "Copper Rose Ring" },
    ],
  ),
  "artemis-cuff": new ProductItem(
    "copper-amethyst-cuff",
    "Artemis Cuff",
    "description",
    ["paragraph"],
    "/images/artemis-cuff.jpg",
    "Artemis Cuff",
    "$PRICE",
    "Copper, Amethyst",
    [
      { img: "/images/copper-amethyst-cuff-0.jpg", alt: "Copper Amethyst Cuff" },
      { img: "/images/copper-amethyst-cuff-1.jpg", alt: "Copper Amethyst Cuff" },
      { img: "/images/copper-amethyst-cuff-2.jpg", alt: "Copper Amethyst Cuff" },
      { img: "/images/copper-amethyst-cuff-3.jpg", alt: "Copper Amethyst Cuff" },
    ],
  ),

  "copper-spiral-ring": new ProductItem(
    "copper-spiral-ring",
    "Copper Spiral Ring",
    "description",
    ["paragraph"],
    "/images/copper-spiral-ring.jpg",
    "Copper Spiral Ring",
    "$PRICE",
    "Copper",
    [{ img: "/images/copper-spiral-ring-0.jpg", alt: "Copper Spiral Ring" }],
  ),

  "new-item": new ProductItem(
    "new-item",
    "New Item",
    "description",
    ["paragraph"],
    "/images/cover-image-0.jpg",
    "New Item Alt",
    "$PRICE",
    "material",
    [
      { img: "/images/image-0", alt: "image alt 0" },
      { img: "/images/image-1", alt: "image alt 1" },
    ],
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
