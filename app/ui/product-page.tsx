import Carousel from "./carousel";
import Footer from "./footer";
import { productSet, type ProductItem } from "../product/data";
import Navbar from "./navbar";
import ShopByProduct from "./shop-by-product";

type ProductPageProps = {
  product: ProductItem;
};

const shopByProductItems = productSet([
  "forest-nymph",
  "dragon-slayer",
  "forest-pearl",
])

export default function ProductPageContent({ product }: ProductPageProps) {
  return (
    <>
      <div className="bg-primary pt-20">
        <Navbar />

        {/* === PRODUCT SECTION === */}
        <section className="py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              {/* Left: Image Carousel */}
              <Carousel slides={product.productImages} />

              {/* Right: Product Details */}
              <div className="w-full lg:w-[45%]">
                <div className="text-left">
                  {/* Title */}
                  <h1 className="font-family-cinzel text-2xl sm:text-3xl lg:text-4xl text-white mb-4 leading-tight">
                    <strong>{product.title}</strong>
                  </h1>

                  {/* Paragraphs */}
                  <div className="flex flex-col gap-4 text-base sm:text-lg mb-6 text-gray-300 leading-relaxed">
                    {product.paragraphs.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}

                    {/* Materials */}
                    {product.materials && (
                      <p className="text-base text-gray-300">
                        <strong>Materials:</strong> {product.materials}
                      </p>
                    )}
                  </div>

                  {/* Price */}
                  <p className="text-2xl sm:text-3xl text-gray-300 font-josefin font-semibold mb-6">
                    Price: {product.price}
                  </p>

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
        </section>

        {/* === SHOP BY PRODUCT === */}
        <ShopByProduct products={shopByProductItems} />

        {/* === FOOTER === */}
        <Footer />
      </div>
    </>
  );
};
