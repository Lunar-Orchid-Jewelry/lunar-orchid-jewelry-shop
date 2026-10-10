"use client";
import { useMemo, useState } from "react";
import { Product, ProductData, productTags } from "../product/data";
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
  const productInstances = useMemo(() => {
    const out: Record<string, Product> = {};
    for (const [key, data] of Object.entries(products)) {
      out[key] = new Product(data);
    }
    return out;
  }, [products]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleTag = (tag: string) => {
    setSelected((prev) => {
      // Allow selecting only one tag
      if (prev.size === 1 && prev.has(tag)) {
        return new Set();
      } else {
        return new Set([tag]);
      }

      // Allow selecting multiple tags
      // const next = new Set(prev);
      // if (next.has(tag)) {
      //   next.delete(tag);
      // } else {
      //   next.add(tag);
      // }
      // return next;
    });
  };

  const visible = useMemo(
    () => filterProducts(productInstances, selected, "any"),
    [productInstances, selected],
  );

  return (
    <>
      <div className="max-w-8xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-start py-8 ">
        {/* === TAG FILTER BAR DESKTOP=== */}
        <div className="  hidden lg:flex flex-col w-[15%] align-top bg-secondary py-4 items-start">
          <h2 className=" text-xl mx-auto text-white font-bold font-josefin">Filter Products</h2>
          {/* Tag chips */}
          {Object.entries(productTags).map(([tagKey, tag]) => (
            <button
              key={tagKey}
              onClick={() => toggleTag(tagKey)}
              className={`px-4 py-1 mx-6  rounded-sm text-md text-white font-josefin hover:bg-primary ${
                selected.has(tagKey)
                  ? " bg-highlight w-[70%]"
                  : "bg-transparent"
              }`}
            >
              {tag.name}
            </button>
          ))}
        </div>

      {/* Hamburger Button (Mobile) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden flex flex-row justify-center items-center px-4 my-4 mx-auto w-[25%] h-10 text-white border border-gray-400 hover:bg-accent"
        aria-label="Toggle navigation"
      >
        <svg
          className=" w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
                />
            )}
          </svg>
          <h2 className="text-xl mx-4 text-white font-bold font-josefin">Filter Products</h2>
      </button>

        {/* === TAG FILTER BAR MOBILE === */}
      <div
        className={`${menuOpen ? "max-h-96" : "max-h-0"} transition-all duration-300 overflow-hidden lg:hidden bg-secondary`}
      >
        <ul className="py-4 space-y-4 text-center">
          {/* Tag chips */}
          {Object.entries(productTags).map(([tagKey, tag]) => (
            <button
              key={tagKey}
              onClick={() => toggleTag(tagKey)}
              className={`px-4 py-1 rounded-sm text-sm font-josefin  ${
                selected.has(tagKey)
                  ? "bg-secondary text-white border-white"
                  : "bg-transparent text-white border-white/40 hover:border-white"
              }`}
            >
              {tag.name}
            </button>
          ))}
        </ul>
        </div>

      {/* === PRODUCT GRID === */}
      <section className=" w-full lg:w-[80%] flex justify-end mx-auto bg-primary">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8 transition">
          {Object.entries(visible).map(([slug, product]) => (
            <ProductTile key={slug} product={product} />
          ))}
          </div>
        </section>
      </div>
    </>
  );
}
