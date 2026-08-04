import Footer, { footerProducts } from "./footer";
import Navbar from "./navbar";
import ShopByProduct from "./shop-by-product";
import { CatalogItem } from "../catalog/data";
import ProductTile from "./product-tile";
import { productSet } from "../product/data";
import Image from "next/image";
import { basePath } from "../utils";





const shopByProductItems = productSet(["forest-pearl", "rainbow-pride-cuff"]);

export type CatalogPageProps = {
  item: CatalogItem;
};

export default function CatalogPageContent({ item }: CatalogPageProps) {
  return (
    <>
      <div className="size-full bg-primary">
        <div className="w-full h-20 bg-primary"></div>


        {/* === HERO / HEADER === */}
        <section>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8">
              {/* Logo Image */}
              <div className="w-[20%] lg:w-[35%] flex justify-center">
                <Image
                  src={basePath("images/lunar-orchid-logo.png")}
                  alt="Lunar Orchid Jewelry Logo"
                  height={150}
                  width={150}
                  className="max-w-full h-auto object-contain lg:max-w-md"
                />
              </div>

              {/* Title & CTA */}
              <div className="w-full lg:w-[65%] text-center lg:text-left">
                <h1 className="font-beau-rivage text-center text-5xl sm:text-6xl lg:text-6xl xl:text-7xl text-white mb-6">
                  Lunar Orchid Jewelry
                </h1>
{/*
                <h3 className="font-bad-script text-xl text-center sm:text-2xl text-gray-100 mb-4 leading-relaxed">
                  <p>Earthly Inspired · Uniquely Imperfect</p>

                </h3>
                */}
              </div>
            </div>
          </div>

        </section>



        <Navbar />

        {/* TODO Catalog page */}

        <section className="py-5 max-w-7xl px-2 md:px-8 font-cinzel  mx-auto">
          <h1 className="py-20 text-2xl  text-center text-white">
            {item.title}
          </h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 p-4 transition">
            {Object.entries(item.products).map(([slug, product]) => {
              return <ProductTile key={slug} product={product} />;
            })}
          </div>
        </section>

        {/* === SHOP BY PRODUCT === */}
        <ShopByProduct products={shopByProductItems} />

        {/* === FOOTER === */}
        <Footer products={footerProducts} />
      </div>
    </>
  );
}
