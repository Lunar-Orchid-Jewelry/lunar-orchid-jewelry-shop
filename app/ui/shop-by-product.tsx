import { Product } from "../product/data";
import ShopByProductTile from "./shop-by-product-tile";

export type ShopByProductProps = {
  products: Record<string, Product>;
};

export default function ShopByProduct({ products }: ShopByProductProps) {
  return (
    <section className="bg-secondary py-12 lg:py-16">
      <div className="lg:max-w-4xl md:max-w-xl sm:max-w-xs xs:max-w-xs mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-2xl sm:text-3xl font-josefin text-white">
            You May Also Like
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Object.values(products).map((product, i) => (
            <ShopByProductTile key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
