import Footer, { footerProducts } from "./footer";
import Navbar from "./navbar";
import Header from "./header";
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

        <Header>
        </Header>

        <Navbar>
        </Navbar>

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
