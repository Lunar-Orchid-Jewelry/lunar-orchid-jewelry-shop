import Footer from "./footer";
import Navbar from "./navbar";
import ShopByProduct, { ShopByProductItem } from "./shop-by-product";
import { CatalogItem } from "../catalog/data";

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
      <Navbar />

      {/* TODO Catalog page */}

      {/* === SHOP BY PRODUCT === */}
      <ShopByProduct productItems={shopByProductItems} />

      {/* === FOOTER === */}
      <Footer />
    </>
  );
};

export { CatalogPage as ProductPageContent, ShopByProduct };
export type { ShopByProductItem as Product };
