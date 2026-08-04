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

/* === ONE OF A KIND NECKLACE PENDANTS === */
/* === ONE OF A KIND NECKLACE PENDANTS === */
/* === ONE OF A KIND NECKLACE PENDANTS === */
/* === ONE OF A KIND NECKLACE PENDANTS === */
/* === ONE OF A KIND NECKLACE PENDANTS === */
export const products: Record<string, Product> = {
  "amethyst-whisper": new Product({
    slug: "copper-wrapped-amethyst-necklace-pendant",
    title: "Amethyst Whisper",
    description: "Copper Wrapped Amethyst Pendant",
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
  "ancient-orthoceras": new Product({
    slug: "copper-wrapped-orthoceras-fossil-necklace-pendant",
    title: "Ancient Orthoceras",
    description: "Copper Wrapped Orthoceras Fossil Pendant",
    paragraphs: [],
    coverImage: "images/ancient-orthoceras-0.jpg",
    coverImageAlt: "Ancient Orthoceras Pendant",
    price: "$68",
    // sale: "$38",
    purchaseLink: "https://buy.stripe.com/14A9AVaTR76yalt9n57Re0B",
    materials: "Copper Wire, Orthoceras Fossil",
    productImages: [
      { img: "images/ancient-orthoceras-0.jpg", alt: "Ancient Orthoceras Pendant" },
      { img: "images/ancient-orthoceras-1.jpg", alt: "Ancient Orthoceras Pendant" },
      { img: "images/ancient-orthoceras-2.jpg", alt: "Ancient Orthoceras Pendant" },
      { img: "images/ancient-orthoceras-3.jpg", alt: "Ancient Orthoceras Pendant" },
      { img: "images/ancient-orthoceras-4.jpg", alt: "Ancient Orthoceras Pendant" },
      { img: "images/ancient-orthoceras-5.jpg", alt: "Ancient Orthoceras Pendant" },
      { img: "images/ancient-orthoceras-6.jpg", alt: "Ancient Orthoceras Pendant" },
      { img: "images/ancient-orthoceras-7.jpg", alt: "Ancient Orthoceras Pendant" },
    ],
  }),

  "clementine-glow": new Product({
    slug: "silver-wrapped-citrine-necklace-pendant",
    title: "Clementine Glow",
    description: "Silver Plated Copper Wrapped Citrine Stone",
    paragraphs: [],
    coverImage: "images/clementine-glow-0.jpg",
    coverImageAlt: "Clementine Glow Pendant",
    price: "$36",
    purchaseLink: "https://buy.stripe.com/8x27sNgebaiK1OX1UD7Re0A",
    materials: "Silver Plated Copper Wire, Citrine Quartz Stone",
    productImages: [
      { img: "images/clementine-glow-0.jpg", alt: "Clementine Glow Pendant" },
      { img: "images/clementine-glow-1.jpg", alt: "Clementine Glow Pendant" },
      { img: "images/clementine-glow-2.jpg", alt: "Clementine Glow Pendant" },
      { img: "images/clementine-glow-3.jpg", alt: "Clementine Glow Pendant" },
      { img: "images/clementine-glow-4.jpg", alt: "Clementine Glow Pendant" },
      { img: "images/clementine-glow-5.jpg", alt: "Clementine Glow Pendant" },
    ],
  }),
  "copper-breath": new Product({
    slug: "copper-wrapped-jasper-heart-necklace-pendant",
    title: "Copper Breath",
    description: "Copper Wrapped Jasper",
    paragraphs: [],
    coverImage: "images/copper-breath-0.jpg",
    coverImageAlt: "Copper Breath Pendant",
    price: "$78",
    purchaseLink: "https://buy.stripe.com/5kQ00l9PN3Um1OX0Qz7Re0j",
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
    description: "Copper Wrapped Dragon's Eye",
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
  "druid-moon": new Product({
  	slug: "copper-wrapped-onyx-crescent-moon-necklace-pendant",
  	title: "Druid Moon",
  	description: "Copper Wrapped Onyx Crescent Moon Stone",
  	paragraphs: [],
  	coverImage: "images/druid-moon-0.jpg",
  	coverImageAlt: "Druid Moon Pendant",
  	price: "$46",
  	purchaseLink: "",
  	materials: "Silver Plated Copper Wire, Agate Stone",
  	productImages: [
  		{ img: "images/druid-moon-0.jpg", alt: "Druid Moon Pendant" },
  		{ img: "images/druid-moon-1.jpg", alt: "Druid Moon Pendant" },
  		{ img: "images/druid-moon-2.jpg", alt: "Druid Moon Pendant" },
  		{ img: "images/druid-moon-3.jpg", alt: "Druid Moon Pendant" },
  		{ img: "images/druid-moon-4.jpg", alt: "Druid Moon Pendant" },
      { img: "images/druid-moon-5.jpg", alt: "Druid Moon Pendant" },
  		{ img: "images/druid-moon-6.jpg", alt: "Druid Moon Pendant" },
  		{ img: "images/druid-moon-7.jpg", alt: "Druid Moon Pendant" },

  	],
  }),
  "eternal-current": new Product({
    slug: "rose-gold-ammonite-fossil-necklace-pendant",
    title: "Eternal Current",
    description: "Rose Gold Plated Copper Wrapped Ammonite",
    paragraphs: [],
    coverImage: "images/eternal-current-0.jpg",
    coverImageAlt: "Eternal Current Pendant",
    price: "Sold Out",
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
  "everglow": new Product({
  	slug: "rose-gold-wrapped-flourite-necklace-pendant",
  	title: "Everglow",
  	description: "Rose Gold Plated Copper Wrapped Flourite Stone",
  	paragraphs: [],
  	coverImage: "images/everglow-0.jpg",
  	coverImageAlt: "Everglow Pendant",
  	price: "$64",
  	purchaseLink: "",
  	materials: "Rose Gold Plated Copper Wire, Flourite Stone",
  	productImages: [
  		{ img: "images/everglow-0.jpg", alt: "Everglow Pendant" },
  		{ img: "images/everglow-1.jpg", alt: "Everglow Pendant" },
  		{ img: "images/everglow-2.jpg", alt: "Everglow Pendant" },
  		{ img: "images/everglow-3.jpg", alt: "Everglow Pendant" },
  		{ img: "images/everglow-4.jpg", alt: "Everglow Pendant" },
      { img: "images/everglow-5.jpg", alt: "Everglow Pendant" },
      { img: "images/everglow-6.jpg", alt: "Everglow Pendant" },
      { img: "images/everglow-7.jpg", alt: "Everglow Pendant" },
      { img: "images/everglow-8.jpg", alt: "Everglow Pendant" },
      { img: "images/everglow-9.jpg", alt: "Everglow Pendant" },
      { img: "images/everglow-10.jpg", alt: "Everglow Pendant" },
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
    description: "Copper Wrapped Purple Glass",
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
    purchaseLink: "https://buy.stripe.com/4gM14pd1Z2Qialt7eX7Re0y",
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
  "prismatic-tide": new Product({
    slug: "silver-rainbow-seaglass-necklace-pendant",
    title: "Prismatic Tide",
    description: "Silver Plated Copper Wrapped Chesapeake Seaglass",
    paragraphs: [],
    coverImage: "images/prismatic-tide-0.jpg",
    coverImageAlt: "Prismatic Tide Pendant",
    price: "$90",
    purchaseLink: "https://buy.stripe.com/14A7sNbXV9eGbpx2YH7Re07",
    materials: "Silver Plated Copper Wire, Rainbow Preciosa Crystal Beads, Chesapeake Bay Seaglass",
    productImages: [
      { img: "images/prismatic-tide-0.jpg", alt: "Prismatic Tide Pendant" },
    ],
  }),
  "progressive-wisdom": new Product({
	slug: "silver-rainbow-owl-charm-necklace-pendant",
	title: "Progressive Wisdom",
	description: "Silver Plated Copper Wrapped Agate Stone",
	paragraphs: [],
	coverImage: "images/progressive-wisdom-0.jpg",
	coverImageAlt: "Progressive Wisdom Pendant",
	price: "$58",
	purchaseLink: "https://buy.stripe.com/bJebJ3gebbmObpx0Qz7Re0z",
	materials: "Owl Charm, Preciosa Crystals, Silver Plated Copper Wire",
	productImages: [
		{ img: "images/progressive-wisdom-0.jpg", alt: "Progressive Wisdom Pendant" },
		{ img: "images/progressive-wisdom-1.jpg", alt: "Progressive Wisdom Pendant" },
		{ img: "images/progressive-wisdom-2.jpg", alt: "Progressive Wisdom Pendant" },
		{ img: "images/progressive-wisdom-3.jpg", alt: "Progressive Wisdom Pendant" },
		{ img: "images/progressive-wisdom-4.jpg", alt: "Progressive Wisdom Pendant" },
		{ img: "images/progressive-wisdom-5.jpg", alt: "Progressive Wisdom Pendant" },
	],
  }),
  "rustic-breeze": new Product({
    slug: "copper-wrapped-raw-edge-agate-necklace-pendant",
    title: "Rustic Breeze",
    description: "Copper Wrapped Raw Edge Agate Stone",
    paragraphs: [],
    coverImage: "images/rustic-breeze-0.jpg",
    coverImageAlt: "Rustic Breeze",
    price: "$75",
    purchaseLink: "https://buy.stripe.com/aFa14pfa73Um0KT8j17Re0x",
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
    slug: "copper-wrapped-chakra-necklace-pendant",
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
  "radiance": new Product({
    slug: "silver-wrapped-titanium-black-kyanite-necklace-pendant",
    title: "Radiance",
    description: "Silver Plated Copper Wrapped Titanium Coated Black Kyanite Stone",
    paragraphs: [],
    coverImage: "images/radiance-0.jpg",
    coverImageAlt: "Radiance Pendant",
    price: "$58",
    purchaseLink: "",
    materials: "Silver Plated Copper Wire, Titanium Coated Black Kyanite Stone, Preciosa Crystals",
    productImages: [
      { img: "images/radiance-0.jpg", alt: "Radiance Pendant" },
      { img: "images/radiance-1.jpg", alt: "Radiance Pendant" },
      { img: "images/radiance-2.jpg", alt: "Radiance Pendant" },
      { img: "images/radiance-3.jpg", alt: "Radiance Pendant" },
      { img: "images/radiance-4.jpg", alt: "Radiance Pendant" },
      { img: "images/radiance-5.jpg", alt: "Radiance Pendant" },
    ],
  }),

    "reflection": new Product({
      slug: "silver-wrapped-blue-agate-necklace-pendant",
      title: "Reflection",
      description: "Silver Plated Copper Wrapped Agate Stone",
      paragraphs: [],
      coverImage: "images/reflection-0.jpg",
      coverImageAlt: "Reflection Pendant",
      price: "$64",
      purchaseLink: "https://buy.stripe.com/cNi4gBe63ez0gJR42L7Re0t",
      materials: "Silver Plated Copper Wire, Agate Stone",
      productImages: [
        { img: "images/reflection-0.jpg", alt: "Reflection Pendant" },
        { img: "images/reflection-1.jpg", alt: "Reflection Pendant" },
        { img: "images/reflection-2.jpg", alt: "Reflection Pendant" },
        { img: "images/reflection-3.jpg", alt: "Reflection Pendant" },
        { img: "images/reflection-4.jpg", alt: "Reflection Pendant" },
        { img: "images/reflection-5.jpg", alt: "Reflection Pendant" },
      ],
    }),
    "yin-yang": new Product({
      slug: "silver-copper-wrapped-blue-white-agate-necklace-pendant-set",
      title: "Yin Yang",
      description: "Silver Plated Copper/ Copper Wrapped Agate Stones",
      paragraphs: [],
      coverImage: "images/yin-yang-0.jpg",
      coverImageAlt: "Yin Yang Pendant",
      price: "$64",
      purchaseLink: "",
      materials: "Silver Plated Copper Wire, Coper Wire, White and Blue Agate Stones",
      productImages: [
        { img: "images/yin-yang-0.jpg", alt: "Yin Yang Pendant" },
        { img: "images/yin-yang-1.jpg", alt: "Yin Yang Pendant" },
        { img: "images/yin-yang-2.jpg", alt: "Yin Yang Pendant" },
        { img: "images/yin-yang-3.jpg", alt: "Yin Yang Pendant" },
        { img: "images/yin-yang-4.jpg", alt: "Yin Yang Pendant" },
        { img: "images/yin-yang-5.jpg", alt: "Yin Yang Pendant" },
      ],
  }),

  /* === BRACELETS === */
  /* === BRACELETS === */
  /* === BRACELETS === */
  /* === BRACELETS === */
  /* === BRACELETS === */
  "apollo-cuff": new Product({
    slug: "copper-orange-agate-cuff",
    title: "Apollo Cuff",
    description: "Copper Wrapped Orange Agate Cuff Bracelet",
    paragraphs: [],
    coverImage: "images/apollo-cuff-0.jpg",
    coverImageAlt: "Copper Orange Agate Apollo Cuff",
    price: "$54",
    purchaseLink: "https://buy.stripe.com/aFa9AV1jh0Ia65dbvd7Re0u",
    materials: "Copper Wire, Orange Agate Stone",
    productImages: [
      { img: "images/apollo-cuff-0.jpg", alt: "Copper Orange Agate Cuff" },
      { img: "images/apollo-cuff-1.jpg", alt: "Copper Orange Agate Cuff" },
      { img: "images/apollo-cuff-2.jpg", alt: "Copper Orange Agate Cuff" },
      { img: "images/apollo-cuff-3.jpg", alt: "Copper Orange Agate Cuff" },
      { img: "images/apollo-cuff-4.jpg", alt: "Copper Orange Agate Cuff" },
      { img: "images/apollo-cuff-5.jpg", alt: "Copper Orange Agate Cuff" },
      { img: "images/apollo-cuff-6.jpg", alt: "Copper Orange Agate Cuff" },
      { img: "images/apollo-cuff-7.jpg", alt: "Copper Orange Agate Cuff" },
      { img: "images/apollo-cuff-8.jpg", alt: "Copper Orange Agate Cuff" },
    ],
  }),

  "rainbow-pride-cuff": new Product({
    slug: "rainbow-beaded-silver-cuff-bracelet",
    title: "Shimmer Cuff",
    description: "Silver Rainbow Cuff",
    paragraphs: ["This item is made to order and exact crystal color may vary slightly depending on inventory."],
    coverImage: "images/rainbow-pride-cuff-0.jpg",
    coverImageAlt: "Rainbow Pride Cuff",
    price: "$34",
    purchaseLink: "https://buy.stripe.com/9B6dRbaTR4Yq3X5dDl7Re0w",
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
  }),

  "goddess-cuff": new Product({
    slug: "silver-wire-woven-cuff-bracelet",
    title: "Goddess Cuff",
    description: "Silver Wire Wrapped Cuff",
    paragraphs: ["This item is made to order. Please allow 2-4 days for processing in addition to shipping. Click 'Buy Now' and choose your cuff length under shipping information(don't ask me why it's there... I don't know)!"],
    coverImage: "images/goddess-cuff-0.jpg",
    coverImageAlt: "Silver Goddess Cuff",
    price: "$45",
    purchaseLink: "https://buy.stripe.com/4gMbJ33rp1MedxFbvd7Re0v",
    materials: "Silver Plated Copper Wire",
    productImages: [
      { img: "images/goddess-cuff-0.jpg", alt: "Silver Goddess Cuff" },
      { img: "images/goddess-cuff-1.jpg", alt: "Silver Goddess Cuff" },
      { img: "images/goddess-cuff-2.jpg", alt: "Silver Goddess Cuff" },
      { img: "images/goddess-cuff-3.jpg", alt: "Silver Goddess Cuff" },
      { img: "images/goddess-cuff-4.jpg", alt: "Silver Goddess Cuff" },
      { img: "images/goddess-cuff-5.jpg", alt: "Silver Goddess Cuff" },
    ],
  }),

  /* === RINGS === */
  /* === RINGS === */
  /* === RINGS === */
  /* === RINGS === */
  /* === RINGS === */
  "copper-spiral-ring": new Product({
    slug: "copper-spiral-ring",
    title: "Copper Spiral Ring",
    description: "",
    paragraphs: ["As each ring is made to order, no two rings are exactly the same. Please allow 2-4 days for processing in addition to shipping. Click 'Buy Now' and select your ring size under shipping information(don't ask me why it's there... I don't know)!"],
    coverImage: "images/copper-spiral-ring-0.jpg",
    coverImageAlt: "Copper Spiral Ring",
    price: "$18",
    purchaseLink: "",
    materials: "Copper Wire",
    productImages: [{ img: "images/copper-spiral-ring-0.jpg", alt: "Copper Spiral Ring" }],
  }),
  "copper-spiral-woven-ring": new Product({
    slug: "copper-spiral-woven-ring",
    title: "Copper Spiral",
    description: "",
    paragraphs: ["As each ring is made to order, no two rings are exactly the same. Please allow 2-4 days for processing in addition to shipping. Click 'Buy Now' and select your ring size under shipping information(don't ask me why it's there... I don't know)!"],
    coverImage: "images/copper-spiral-woven-ring-0.jpg",
    coverImageAlt: "Copper Spiral Woven Ring",
    price: "$28",
    purchaseLink: "https://buy.stripe.com/14A5kFbXV2Qi0KT6aT7Re0s",
    materials: "Copper Wire",
    productImages: [{ img: "images/copper-spiral-woven-ring-0.jpg", alt: "Copper Spiral Woven Ring" },
      { img: "images/copper-spiral-woven-ring-1.jpg", alt: "Copper Spiral Woven Ring" },
      { img: "images/copper-spiral-woven-ring-2.jpg", alt: "Copper Spiral Woven Ring" },
      { img: "images/copper-spiral-woven-ring-3.jpg", alt: "Copper Spiral Woven Ring" },
      { img: "images/copper-spiral-woven-ring-4.jpg", alt: "Copper Spiral Woven Ring" },
      { img: "images/copper-spiral-woven-ring-5.jpg", alt: "Copper Spiral Woven Ring" },
      { img: "images/copper-spiral-woven-ring-6.jpg", alt: "Copper Spiral Woven Ring" },

    ],
  }),
  "copper-spiral-flat-ring": new Product({
    slug: "flat-hammered-copper-spiral-ring",
    title: "Aztec Heart",
    description: "Hammered Copper Spiral Ring",
    paragraphs: ["As each ring is made to order, no two rings are exactly the same. Please allow 2-4 days for processing in addition to shipping. Click 'Buy Now' and select your ring size under shipping information(don't ask me why it's there... I don't know)!"],
    coverImage: "images/flat-copper-spiral-ring-0.jpg",
    coverImageAlt: "Hammered Copper Spiral Ring",
    price: "$22",
    purchaseLink: "https://buy.stripe.com/7sYcN79PN0IagJRczh7Re0p",
    materials: "Hammered Copper Wire",
    productImages: [{ img: "images/flat-copper-spiral-ring-0.jpg", alt: "Hammered Spiral Ring" },
      { img: "images/flat-copper-spiral-ring-1.jpg", alt: "Hammered Spiral Ring" },
      { img: "images/flat-copper-spiral-ring-2.jpg", alt: "Hammered Spiral Ring" },
      { img: "images/flat-copper-spiral-ring-3.jpg", alt: "Hammered Spiral Ring" },
      { img: "images/flat-copper-spiral-ring-4.jpg", alt: "Hammered Spiral Ring" },
      { img: "images/flat-copper-spiral-ring-5.jpg", alt: "Hammered Spiral Ring" },
      { img: "images/flat-copper-spiral-ring-6.jpg", alt: "Hammered Spiral Ring" },],
  }),
  "copper-rose-ring": new Product({
    slug: "copper-rose-ring",
    title: "Copper Rose",
    description: "",
    paragraphs: ["As each ring is made to order, no two rings are exactly the same. Please allow 2-4 days for processing in addition to shipping. Click 'Buy Now' and select your ring size under shipping information(don't ask me why it's there... I don't know)!"],
    coverImage: "images/copper-rose-ring-0.jpg",
    coverImageAlt: "Copper Rose Ring",
    price: "$18",
    purchaseLink: "https://buy.stripe.com/28E3cx1jhfD42T11UD7Re0o",
    materials: "Copper Wire",
    productImages: [
      { img: "images/copper-rose-ring-0.jpg", alt: "Copper Rose Ring" },
    ],
  }),
  "silver-spiral-woven-ring": new Product({
    slug: "silver-spiral-woven-ring",
    title: "Silver Spiral",
    description: "",
    paragraphs: ["As each ring is made to order, no two rings are exactly the same. Please allow 2-4 days for processing in addition to shipping. Click 'Buy Now' and select your ring size under shipping information(don't ask me why it's there... I don't know)!"],
    coverImage: "images/silver-spiral-woven-ring-0.jpg",
    coverImageAlt: "Silver Spiral Woven Ring",
    price: "$28",
    purchaseLink: "https://buy.stripe.com/6oUcN75zxez0ctBgPx7Re0q",
    materials: "Silver Plated Copper Wire",
    productImages: [{ img: "images/silver-spiral-woven-ring-0.jpg", alt: "Silver Spiral Woven Ring" },
      { img: "images/silver-spiral-woven-ring-1.jpg", alt: "Silver Spiral Woven Ring" },
    ],
  }),
  "silver-rose-ring": new Product({
    slug: "silver-plated-copper-rose-ring",
    title: "Silver Rose",
    description: "",
    paragraphs: ["As each ring is made to order, no two rings are exactly the same. Please allow 2-4 days for processing in addition to shipping. Click 'Buy Now' and select your ring size under shipping information(don't ask me why it's there... I don't know)!"],
    coverImage: "images/silver-rose-ring-0.jpg",
    coverImageAlt: "Silver Rose Ring",
    price: "$18",
    purchaseLink: "https://buy.stripe.com/dRm00le63ez01OX0Qz7Re0r",
    materials: "Silver Plated Copper Wire",
    productImages: [
      { img: "images/silver-rose-ring-0.jpg", alt: "Silver Rose Ring" },
      { img: "images/silver-rose-ring-1.jpg", alt: "Silver Rose Ring" },
    ],
  }),

  /* === INDUSTRIAL CHAINS === */
  "rainbow-industrial-chain": new Product({
    slug: "rainbow-industrial-bar-chain-accessory",
    title: "Rainbow Industrial Chain",
    description: "Silver Rainbow Industrial Bar Accessory",
    paragraphs: [],
    coverImage: "images/rainbow-industrial-chain-0.jpg",
    coverImageAlt: "Rainbow Industrial Chain",
    price: "$18",
    purchaseLink: "https://buy.stripe.com/6oU5kF7HFfD479h0Qz7Re0l",
    materials: "Stainless Steel Wire, Preciosa Crystal Beads",
    productImages: [
      { img: "images/rainbow-industrial-chain-0.jpg", alt: "Rainbow Industrial Chain" },
      { img: "images/rainbow-industrial-chain-1.jpg", alt: "Rainbow Industrial Chain" },
      { img: "images/rainbow-industrial-chain-2.jpg", alt: "Rainbow Industrial Chain" },
      { img: "images/rainbow-industrial-chain-3.jpg", alt: "Rainbow Industrial Chain" },
      { img: "images/rainbow-industrial-chain-4.jpg", alt: "Rainbow Industrial Chain" },
      { img: "images/rainbow-industrial-chain-5.jpg", alt: "Rainbow Industrial Chain" },
      { img: "images/rainbow-industrial-chain-6.jpg", alt: "Rainbow Industrial Chain" },
    ],
  }),
  "trans-industrial-chain": new Product({
    slug: "trans-flag-industrial-bar-chain-accessory",
    title: "Trans Industrial Chain",
    description: "Silver Blue Pink Industrial Bar Accessory",
    paragraphs: [],
    coverImage: "images/trans-industrial-chain-0.jpg",
    coverImageAlt: "Trans Industrial Chain",
    price: "$18",
    purchaseLink: "https://buy.stripe.com/14A14p1jhcqS5190Qz7Re0m",
    materials: "",
    productImages: [
      { img: "images/trans-industrial-chain-0.jpg", alt: "Trans Industrial Chain" },
      { img: "images/trans-industrial-chain-1.jpg", alt: "Trans Industrial Chain" },
    ],
  }),
  "lesbian-industrial-chain": new Product({
    slug: "lesbian-flag-industrial-bar-chain-accessory",
    title: "Lesbian Flag Industrial Chain",
    description: "Silver Orange Pink Industrial Bar Accessory",
    paragraphs: [],
    coverImage: "images/lesbian-industrial-chain-0.jpg",
    coverImageAlt: "Lesbian Industrial Chain",
    price: "$18",
    purchaseLink: "",
    materials: "",
    productImages: [
      { img: "images/lesbian-industrial-chain-0.jpg", alt: "Lesbian Industrial Chain" },
      { img: "images/lesbian-industrial-chain-1.jpg", alt: "Lesbian Industrial Chain" },
    ],
  }),
  "bisexual-industrial-chain": new Product({
    slug: "bisexual-flag-industrial-bar-chain-accessory",
    title: "Bisexual Flag Industrial Chain",
    description: "Silver Pink Purple Blue Industrial Bar Accessory",
    paragraphs: [],
    coverImage: "images/bisexual-industrial-chain-0.jpg",
    coverImageAlt: "Bisexual Industrial Chain",
    price: "$18",
    purchaseLink: "",
    materials: "",
    productImages: [
      { img: "images/bisexual-industrial-chain-0.jpg", alt: "Bisexual Industrial Chain" },
      { img: "images/bisexual-industrial-chain-1.jpg", alt: "Bisexual Industrial Chain" },
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

  "reflection",
  "cosmic-oasis",
  "prismatic-tide",
  "rustic-breeze",
]);

export const ringPreview = productSet([
  "copper-spiral-flat-ring",
  "copper-spiral-woven-ring",
  "copper-rose-ring",
  "silver-spiral-woven-ring",

]);

export const allProducts = productSet([
  "amethyst-whisper",
  "ancient-orthoceras",
  "clementine-glow",
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
  "prismatic-tide",
  "reflection",
  "apollo-cuff",
  "goddess-cuff",
  "rainbow-pride-cuff",
  "copper-rose-ring",
  "copper-spiral-flat-ring",
  "copper-spiral-woven-ring",
  "silver-spiral-woven-ring",
  "silver-rose-ring",
  "rainbow-industrial-chain",
  "trans-industrial-chain"
]);

export const necklaceProducts = productSet([
  "amethyst-whisper",
  "ancient-orthoceras",
  "clementine-glow",
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
  "prismatic-tide",
  "progressive-wisdom",
  "reflection",

]);

export const braceletProducts = productSet([
  "rainbow-pride-cuff",
  "goddess-cuff",
  "apollo-cuff",
]);

export const ringProducts = productSet([
  "copper-spiral-flat-ring",
  "copper-spiral-woven-ring",
  "copper-rose-ring",
  "silver-spiral-woven-ring",
  "silver-rose-ring",
]);

export const earringProducts = productSet([]);

export const industrialChainProducts = productSet([
  "rainbow-industrial-chain",
  "trans-industrial-chain",
]);

export const goddessProducts = productSet([
  "oceanic-roots",
  "eternal-current",
  "goddess-cuff",
  "silver-spiral-woven-ring",
]);

export const nymphProducts = productSet([
  "forest-pearl",
  "copper-breath",
  "copper-spiral-woven-ring",
  "faire-magic",
]);

export const warriorProducts = productSet([
  "dragon-blood",
  "midas-touch",
  "flat-copper-spiral-ring",
]);

export const prideProducts = productSet([
  "prismatic-tide",
  "rainbow-pride-cuff",
  "progressive-wisdom",
  "rainbow-industrial-chain",
]);

/** Look up a product by its slug. Returns undefined if not found. */
export function getProductBySlug(slug: string): Product | undefined {
  return productsBySlug[slug];
}



const intro1 = `
I'm the creative behind Lunar Orchid Jewelry!
`.trim();
