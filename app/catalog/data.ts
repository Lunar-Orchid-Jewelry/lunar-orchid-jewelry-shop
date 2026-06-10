export type CatalogItem = {
  slug: string;
  title: string;
};

const catalogItems: CatalogItem[] = [
  { slug: "necklaces", title: "Necklaces" },
];

export default catalogItems;

/** Look up a product by its slug. Returns undefined if not found. */
export function getCatalogBySlug(slug: string): CatalogItem | undefined {
  return catalogItems.find((p) => p.slug === slug);
}
