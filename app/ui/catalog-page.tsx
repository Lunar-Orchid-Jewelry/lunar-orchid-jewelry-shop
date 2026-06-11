import Footer from "./footer";
import Navbar from "./navbar";
import ShopByProduct from "./shop-by-product";
import { CatalogItem } from "../catalog/data";
import ProductTile from "./product-tile";
import { productSet } from "../product/data";

const shopByProductItems = productSet([
  "forest-nymph",
  "dragon-slayer",
  "forest-pearl",
])

export type CatalogPageProps = {
  item: CatalogItem;
};

export default function CatalogPageContent({ item }: CatalogPageProps) {
  return (
    <>
      <div className="size-full bg-primary">
        <Navbar />

        {/* TODO Catalog page */}

        <section className="py-10 font-cinzel container-main mx-auto">

          <h1 className="py-20 text-7xl text-center text-white">{item.title}</h1>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
            {
              Object.entries(item.products).map(([slug, product]) => {
                return (
                  <ProductTile key={slug} product={product} />
                )
              })
            }
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
