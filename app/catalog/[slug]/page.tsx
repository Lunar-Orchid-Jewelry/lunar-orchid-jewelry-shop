import { Metadata } from "next";
import { notFound } from "next/navigation";
import catalogItems, { getCatalogBySlug } from "../data";
import CatalogPageContent from "@/app/ui/catalog-page";

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Tell Next.js which product slugs to pre-render at build time.
 * Each returned { slug } becomes a static HTML page at /products/<slug>.
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.keys(catalogItems).map((slug) => ({ slug }))
}

/**
 * Generate per-page metadata for SEO (title, description, etc.).
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const catalog = getCatalogBySlug(slug);

  if (!catalog) {
    return { title: "Catalog not found" };
  }

  return {
    title: `${catalog.title} - Lunar Orchid Jewelry`,
  };
}

/**
 * The product page template, rendered once per product at build time.
 */
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const catalog = getCatalogBySlug(slug);

  if (!catalog) {
    notFound();
  }

  return <CatalogPageContent item={catalog} />;
}
