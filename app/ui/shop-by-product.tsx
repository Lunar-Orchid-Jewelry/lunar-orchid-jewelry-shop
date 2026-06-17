import { Product } from "../product/data";
import ProductTile from "./product-tile";

export type ShopByProductProps = {
  products: Record<string, Product>;
};

export default function ShopByProduct({ products }: ShopByProductProps) {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-2xl sm:text-3xl font-josefin text-dark">Shop by Product</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {Object.values(products).map((product, i) => (
            <ProductTile key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
