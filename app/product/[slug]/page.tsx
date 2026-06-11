import { Metadata } from "next";
import { notFound } from "next/navigation";
import products, { getProductBySlug } from "../data";
import { ProductPageContent } from "../../ui/product-page";

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Tell Next.js which product slugs to pre-render at build time.
 * Each returned { slug } becomes a static HTML page at /product/<slug>.
 */
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return Object.values(products).map((item) => ({ slug: item.slug }))
}

/**
 * Generate per-page metadata for SEO (title, description, etc.).
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.title} - Lunar Orchid Jewelry`,
    description: product.paragraphs[0] ?? `${product.title} handcrafted jewelry by Lunar Orchid Jewelry`,
  };
}

/**
 * The product page template, rendered once per product at build time.
 */
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductPageContent item={product} />;
}
