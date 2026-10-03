import Footer, { footerProducts } from "./footer";
import Navbar from "./navbar";
import Header from "./header";
import ShopByProduct from "./shop-by-product";
import CatalogBrowser from "./catalog-browser";
import { CatalogItem } from "../catalog/data";
import { Product, ProductData, productSet } from "../product/data";
import Image from "next/image";
import { basePath } from "../utils";

/**
 * Convert Product class instances into plain objects so they can be passed
 * from this Server Component into the CatalogBrowser Client Component.
 * (Next.js cannot serialize class instances across the server/client boundary.)
 */
function serializeProducts(
  products: Record<string, Product>,
): Record<string, ProductData> {
  const out: Record<string, ProductData> = {};
  for (const [key, p] of Object.entries(products)) {
    out[key] = {
      slug: p.slug,
      title: p.title,
      description: p.description,
      paragraphs: p.paragraphs,
      coverImage: p.coverImage,
      coverImageAlt: p.coverImageAlt,
      price: p.price,
      materials: p.materials,
      tags: p.tags,
      productImages: p.productImages,
      purchaseLink: p.purchaseLink,
      sale: p.sale,
    };
  }
  return out;
}





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

        <CatalogBrowser
          title={item.title}
          products={serializeProducts(item.products)}
        />

        {/* === SHOP BY PRODUCT === */}
        <ShopByProduct products={shopByProductItems} />

        {/* === FOOTER === */}
        <Footer products={footerProducts} />
      </div>
    </>
  );
}
