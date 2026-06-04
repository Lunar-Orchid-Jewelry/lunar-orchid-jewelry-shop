import type { ProductItem } from "./Product"

export const cosmicOasis: ProductItem = {
  path: "cosmic-oasis",
  title: "Cosmic Oasis · Sterling Silver Wire Wrapped Bello Opal Necklace Pendant",
  paragraphs: [
    `This vibrant Bello Opal was shaped and polished by hand, and wrapped meticulously in a
    Sterling Silver wire casing.Capturing a sliver of the galaxy, each angle of light captures a unique
    highlight color in the "fire", or play of color, of the opal.From deep purples and pinks, to bright
    orange yellows, to a stark neon green, this stone is bursting with character.`,

    `Bello Opals are synthetic, lab-grown stones known for the radiant vibrancy of their fire,
    often in vertical columnar patterns. Not to be confused with Imitation Opal (which are commonly made of
    glass or plastic and lack the opal silica structure), Bello Opals are chemically parallel to natural
    opals.`,

    `Opals are associated with spontaneity and creativity, although it's argued that man-made
    opals may not hold the same astrological significance as natural opals.`
  ],
  materials: `Bello Opal, Sterling Silver Wire, Caffeine`,
  price: "$349",
  carouselSlides: [
    { img: '/assets/images/cosmic-oasis-1.webp', alt: 'Cosmic Oasis - View 1' },
    { img: '/assets/images/untitled-artwork-8.webp', alt: 'Cosmic Oasis - View 2' },
    { img: '/assets/images/cosmic-oasis-7.webp', alt: 'Cosmic Oasis - View 3' },
    { img: '/assets/images/cosmic-oasis.webp', alt: 'Cosmic Oasis - View 4' },
    { img: '/assets/images/cosmic-oasis-10.webp', alt: 'Cosmic Oasis - View 5' },
    { img: '/assets/images/cosmic-oasis-4.webp', alt: 'Cosmic Oasis - View 6' },
    { img: '/assets/images/cosmic-oasis-18-copy.webp', alt: 'Cosmic Oasis - View 7' },
  ],
}

export const productPages = [
  {
    path: "cosmic-oasis",
    item: cosmicOasis,
  }
]
