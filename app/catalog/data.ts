import { products, ProductItem } from "../product/data";

export type CatalogItem = {
  title: string;
  products: Record<string, ProductItem>;
};

const catalogItems: Record<string, CatalogItem> = {
  "necklaces": {
    title: "Necklaces",
    products: products,
  },
  "bracelets": { title: "Bracelets", products: {} },
  "rings": { title: "Rings", products: {} },
};

export default catalogItems;

/** Look up a product by its slug. Returns undefined if not found. */
export function getCatalogBySlug(slug: string): CatalogItem | undefined {
  return catalogItems[slug];
}
