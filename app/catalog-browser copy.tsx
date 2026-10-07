"use client";
import { useMemo, useState } from "react";
import { Product, ProductData } from "../product/data";
import ProductTile from "./product-tile";

type CatalogBrowserProps = {
  title: string;
  products: Record<string, ProductData>;
};

type MatchMode = "any" | "all";

/**
 * Filter products by the selected tags.
 * - "any": product matches if it has AT LEAST ONE selected tag.
 * - "all": product matches if it has EVERY selected tag.
 * When no tags are selected, all products are returned.
 */
function filterProducts(
  products: Record<string, Product>,
  selected: Set<string>,
  mode: MatchMode,
): Record<string, Product> {
  if (selected.size === 0) return products;

  const entries = Object.entries(products).filter(([, product]) => {
    const productTags = new Set(product.tags);
    if (mode === "all") {
      // every selected tag must be on the product
      for (const tag of selected) {
        if (!productTags.has(tag)) return false;
      }
      return true;
    }
    // "any" — at least one selected tag on the product
    for (const tag of selected) {
      if (productTags.has(tag)) return true;
    }
    return false;
  });

  return Object.fromEntries(entries);
}

export default function CatalogBrowser({ title, products }: CatalogBrowserProps) {
  // Reconstruct Product class instances on the client from the plain
  // ProductData objects we received from the Server Component.
  const productInstances = useMemo(() => {
    const out: Record<string, Product> = {};
    for (const [key, data] of Object.entries(products)) {
      out[key] = new Product(data);
    }
    return out;
  }, [products]);

  // Derive the tag list from the products shown on THIS page.
  const allTags = useMemo(() => {
    const set = new Set<string>();
    for (const product of Object.values(productInstances)) {
      for (const tag of product.tags) set.add(tag);
    }
    return Array.from(set).sort();
  }, [productInstances]);

  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [mode, setMode] = useState<MatchMode>("any");

  const toggleTag = (tag: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };

  const visible = useMemo(
    () => filterProducts(productInstances, selected, mode),
    [productInstances, selected, mode],
  );

  {/*// Don't render the filter bar at all if there are no tags to filter by.
  if (allTags.length === 0) {
    return (
      <section className="py-5 max-w-7xl px-2 md:px-8 font-cinzel mx-auto">
        <h1 className="py-20 text-2xl text-center text-white">{title}</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 p-4 transition">
          {Object.entries(productInstances).map(([slug, product]) => (
            <ProductTile key={slug} product={product} />
          ))}
        </div>
      </section>
    );
  }
  */}

  return (
    <>
      <div className="max-w-8xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8">

        {/* === TAG FILTER BAR (under the nav) === */}

      <div className="w-[20%] lg:w-[20%] flex bg-amber-300">
        {/* Match mode toggle
        <button
          onClick={() => setMode("any")}
          className={`px-3 py-1 rounded-full text-sm font-cinzel border ${
            mode === "any"
              ? "bg-primary text-white border-primary"
              : "bg-transparent text-white border-white/40 hover:border-white"
          }`}
        >
          Match any
        </button>
        <button
          onClick={() => setMode("all")}
          className={`px-3 py-1 rounded-full text-sm font-cinzel border ${
            mode === "all"
              ? "bg-primary text-white border-primary"
              : "bg-transparent text-white border-white/40 hover:border-white"
          }`}
        >
          Match all
        </button>

        <span className="mx-2 text-white/30">|</span>
*/}
        {/* Tag chips */}
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-sm text-sm font-josefin  ${
              selected.has(tag)
                ? "bg-secondary text-white border-secondary"
                : "bg-transparent text-white border-white/40 hover:border-white"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* === PRODUCT GRID === */}
      <section className="w-[80%] lg:w-[80%] flex justify-center bg-amber-300 py-5 px-2 md:px-8 font-cinzel mx-auto">
        {/* <h1 className="py-20 text-2xl text-center text-white">{title}</h1>*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 p-4 transition">
          {Object.entries(visible).map(([slug, product]) => (
            <ProductTile key={slug} product={product} />
          ))}
          </div>
        </section>
      </div>
    </>
  );
}
