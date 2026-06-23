import {
  products,
  Product,
  braceletProducts,
  necklaceProducts,
  ringProducts,
} from "../product/data";

export type CatalogItem = {
  title: string;
  products: Record<string, Product>;
};

const catalogItems: Record<string, CatalogItem> = {
  necklaces: {
    title: "Necklaces",
    products: necklaceProducts,
  },
  bracelets: { title: "Bracelets", products: braceletProducts },
  rings: { title: "Rings", products: ringProducts },
};

export default catalogItems;

/** Look up a product by its slug. Returns undefined if not found. */
export function getCatalogBySlug(slug: string): CatalogItem | undefined {
  return catalogItems[slug];
}
