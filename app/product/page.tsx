import Carousel, { CarouselSlide } from '../ui/carousel'
import Footer from '../ui/footer'
import Image from 'next/image'

type ShopByProductProps = {
  products: Product[],
}

type Product = {
  img: string,
  link: string,
  label: string,
}

const productList = [
  { img: '/assets/images/forest-nymph-4.webp', link: 'shop-all-rings.html', label: 'Shop Rings' },
  { img: '/assets/images/dragon-slayer-3.webp', link: 'shop-all-bracelets.html', label: 'Shop Bracelets' },
  { img: '/assets/images/forest-pearl-icon.webp', link: 'shop-necklace-pendants.html', label: 'Shop Necklaces' },
]

// Use as <ShopByProduct products={productList} />
const ShopByProduct = ({ products }: ShopByProductProps) => {
  return (
    <>
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-2xl sm:text-3xl font-josefin text-dark">Shop by Product</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((cat, i) => (
              <div key={i} className="category-card bg-white overflow-hidden rounded-sm shadow-card cursor-pointer">
                <a href={cat.link}>
                  <div className="overflow-hidden">
                    <Image
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
    </>
  )
}

export type ProductProps = {
  item: ProductItem,
}

export type ProductItem = {
  path: string,
  title: string,
  paragraphs: string[],
  materials?: string,
  price: string,
  carouselSlides: CarouselSlide[],
}

const Product = ({ item }: ProductProps) => {
  return (
    <>
      <div key={item.path} className="bg-primary pt-20">

        {/* === PRODUCT SECTION === */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

              {/* Left: Image Carousel */}
              <Carousel slides={item.carouselSlides} />

              {/* Right: Product Details */}
              <div className="w-full lg:w-[45%]">
                <div className="text-left">

                  {/* Title */}
                  <h1 className="font-family-cinzel text-2xl sm:text-3xl lg:text-4xl text-white mb-4 leading-tight">
                    <strong>{item.title}</strong>
                  </h1>

                  {/* Paragraphs */}
                  <div className="flex flex-col gap-4 text-base sm:text-lg mb-6 text-gray-300 leading-relaxed">
                    {
                      item.paragraphs.map((paragraph, i) => {
                        return (
                          <p key={i}>{paragraph}</p>
                        )
                      })
                    }

                    {/* Materials */}
                    {
                      item.materials ? (
                        <p className="text-base text-gray-300">
                          <strong>Materials:</strong> {item.materials}
                        </p>
                      ) : null
                    }
                  </div>

                  {/* Price */}
                  <p className="text-2xl sm:text-3xl text-gray-300 font-josefin font-semibold mb-6">Price: {item.price}</p>

                  {/* Buy button */}
                  <div className="mb-4">
                    <a
                      href="https://buy.stripe.com/6oU6oJfa7aiKctBbvd7Re0a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-secondary text-white px-8 py-3 font-josefin text-base hover:bg-accent hover:scale-105 opacity-100 active:opacity-70 transition rounded-sm"
                    >
                      Buy Now!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >

        {/* === SHOP BY PRODUCT === */}
        <ShopByProduct products={productList} />

        {/* === FOOTER === */}
        <Footer />
      </div>
    </>
  )
}

export default Product
