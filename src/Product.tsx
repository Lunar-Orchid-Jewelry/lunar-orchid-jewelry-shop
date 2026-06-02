import { useState } from 'react'
import "./index.css"

const slides = [
  { img: 'assets/images/cosmic-oasis-1.webp', alt: 'Cosmic Oasis - View 1' },
  { img: 'assets/images/untitled-artwork-8.webp', alt: 'Cosmic Oasis - View 2' },
  { img: 'assets/images/cosmic-oasis-7.webp', alt: 'Cosmic Oasis - View 3' },
  { img: 'assets/images/cosmic-oasis.webp', alt: 'Cosmic Oasis - View 4' },
  { img: 'assets/images/cosmic-oasis-10.webp', alt: 'Cosmic Oasis - View 5' },
  { img: 'assets/images/cosmic-oasis-4.webp', alt: 'Cosmic Oasis - View 6' },
  { img: 'assets/images/cosmic-oasis-18-copy.webp', alt: 'Cosmic Oasis - View 7' },
]

function Product() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const goToSlide = (index: number) => {
    setActiveSlide(index)
  }

  const goPrev = () => {
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1))
  }

  const goNext = () => {
    setActiveSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0))
  }

  return (
    <>
      <div className="h-16" />

      {/* === PRODUCT SECTION === */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left: Image Carousel */}
            <div className="w-full lg:w-[55%]">
              <div className="relative">
                <div className="carousel slide relative overflow-hidden rounded-sm">
                  {/* Main Image */}
                  <img
                    key={activeSlide}
                    src={slides[activeSlide].img}
                    alt={slides[activeSlide].alt}
                    className="w-full h-auto object-cover"
                  />

                  {/* Carousel Arrows */}
                  <button onClick={goPrev} className="carousel-arrow carousel-arrow-prev" aria-label="Previous">
                    <i className="fas fa-chevron-left" />
                  </button>
                  <button onClick={goNext} className="carousel-arrow carousel-arrow-next" aria-label="Next">
                    <i className="fas fa-chevron-right" />
                  </button>
                </div>

                {/* Thumbnail Strip */}
                <div className="flex gap-2 justify-center flex-wrap mt-3">
                  {slides.map((slide, i) => (
                    <img
                      key={i}
                      src={slide.img}
                      alt={slide.alt}
                      className={`thumb w-16 h-16 object-cover cursor-pointer border-2 ${i === activeSlide
                        ? 'border-primary opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-100'
                        } transition-all duration-300`}
                      onClick={() => goToSlide(i)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="w-full lg:w-[45%]">
              <div className="text-left">
                <h1 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-dark mb-4 leading-tight">
                  <strong>Cosmic Oasis · Sterling Silver Wire Wrapped Bello Opal Necklace Pendant</strong>
                </h1>

                <div className="product-desc text-base sm:text-lg mb-6 text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    This vibrant Bello Opal was shaped and polished by hand, and wrapped meticulously in a
                    Sterling Silver wire casing. Capturing a sliver of the galaxy, each angle of light captures a unique
                    highlight color in the "fire", or play of color, of the opal. From deep purples and pinks, to bright
                    orange yellows, to a stark neon green, this stone is bursting with character.
                  </p>
                  <p className="mb-4">
                    Bello Opals are synthetic, lab-grown stones known for the radiant vibrancy of their fire,
                    often in vertical columnar patterns. Not to be confused with Imitation Opal (which are commonly made of
                    glass or plastic and lack the opal silica structure), Bello Opals are chemically parallel to natural
                    opals.
                  </p>
                  <p className="mb-4">
                    Opals are associated with spontaneity and creativity, although it's argued that man-made
                    opals may not hold the same astrological significance as natural opals.
                  </p>
                  <p className="text-base text-gray-700">
                    <strong>Materials:</strong> Bello Opal, Sterling Silver Wire, Caffeine
                  </p>
                </div>

                <p className="text-2xl sm:text-3xl text-dark font-josefin font-semibold mb-6">Price: $349</p>

                <div className="mb-4">
                  <a
                    href="https://buy.stripe.com/6oU6oJfa7aiKctBbvd7Re0a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-secondary text-white px-8 py-3 font-josefin text-base hover:bg-secondary-hover transition-colors rounded-sm"
                  >
                    Buy Now with Stripe!
                  </a>
                </div>

                <p className="text-base">
                  <a
                    href="help-and-policies.html#shopping-cart"
                    className="text-primary hover:text-primary-hover transition-colors"
                  >
                    Why don't I have a cart?
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === SHOP BY PRODUCT === */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-2xl sm:text-3xl font-josefin text-dark">Shop by Product</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { img: 'assets/images/forest-nymph-4.webp', link: 'shop-all-rings.html', label: 'Shop Rings' },
              { img: 'assets/images/dragon-slayer-3.webp', link: 'shop-all-bracelets.html', label: 'Shop Bracelets' },
              { img: 'assets/images/forest-pearl-icon.webp', link: 'shop-necklace-pendants.html', label: 'Shop Necklaces' },
            ].map((cat, i) => (
              <div key={i} className="category-card bg-white overflow-hidden rounded-sm shadow-card cursor-pointer">
                <a href={cat.link}>
                  <div className="overflow-hidden">
                    <img
                      src={cat.img}
                      alt={cat.label}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <a
                      href={cat.link}
                      className="text-white text-lg sm:text-xl font-josefin hover:text-primary transition-colors block"
                    >
                      {cat.label}
                    </a>
                  </div>
                </a>
              </div>
            ))
            }
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-dark text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="font-cinzel text-lg leading-relaxed" style={{ fontWeight: 'normal' }}>
                    Lunar Orchid <br />Jewelry
                  </h3>
                </div>
                <div className="md:w-1/2">
                  <ul className="space-y-2 font-josefin">
                    <li><a href="index.html#About" className="text-white hover:text-primary transition-colors">About</a></li>
                    <li><a href="shop-necklace-pendants.html" className="text-white hover:text-primary transition-colors">Necklaces</a></li>
                    <li><a href="shop-all-bracelets.html" className="text-white hover:text-primary transition-colors">Bracelets</a></li>
                    <li><a href="shop-all-rings.html" className="text-white hover:text-primary transition-colors">Rings</a></li>
                    <li><a href="help-and-policies.html" className="text-white hover:text-primary transition-colors">FAQ and Policies</a></li>
                    <li><a href="index.html#help" className="text-white hover:text-primary transition-colors">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h6 className="font-cinzel text-lg mb-4">
                <a href="gallery.html" className="text-white hover:text-primary transition-colors">Gallery</a>
              </h6>
              <div className="grid grid-cols-6 gap-2">
                {[
                  'assets/images/94fce968-b64b-4599-b08a-d90db876f07c-1000x1250.webp',
                  'assets/images/hawk-eye.webp',
                  'assets/images/img-588520copy-899x1154.webp',
                  'assets/images/seaglass20eye20wrap-369x492.webp',
                  'assets/images/img-659120large-369x478.webp',
                  'assets/images/icon-369x492.webp',
                ].map((img, i) => (
                  <div key={i} className="hover:scale-105 transition">
                    <a href="gallery.html">
                      <img src={img} alt="Jewelry Gallery Item" className="aspect-square object-cover" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Product
