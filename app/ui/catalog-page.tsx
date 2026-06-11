import Footer from "./footer";
import Navbar from "./navbar";
import ShopByProduct, { ShopByProductItem } from "./shop-by-product";
import { CatalogItem } from "../catalog/data";
import ProductTile from "./product-tile";

const shopByProductItems: ShopByProductItem[] = [
  { img: "/assets/images/forest-nymph-4.webp", link: "/products/forest-pearl", label: "Shop Necklaces" },
  { img: "/assets/images/dragon-slayer-3.webp", link: "/products/dragon-slayer", label: "Shop Pendants" },
  { img: "/assets/images/forest-pearl-icon.webp", link: "/products/forest-pearl", label: "Shop Best Sellers" },
];

export type CatalogPageProps = {
  item: CatalogItem;
};

export default function CatalogPage({ item }: CatalogPageProps) {
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
                  <ProductTile key={slug} item={product} />
                )
              })
            }
          </div>

        </section>


        {/* === SHOP BY PRODUCT === */}
        <ShopByProduct productItems={shopByProductItems} />

        {/* === FOOTER === */}
        <Footer />
      </div>
    </>
  );
};

export { CatalogPage as ProductPageContent, ShopByProduct };
export type { ShopByProductItem as Product };
