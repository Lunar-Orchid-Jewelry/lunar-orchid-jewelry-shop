import Image from "next/image"

/* ─── ShopByProduct ─── */

export type ShopByProductProps = {
  productItems: ShopByProductItem[];
};

export type ShopByProductItem = {
  img: string;
  link: string;
  label: string;
};

export default function ShopByProduct({ productItems: products }: ShopByProductProps) {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-2xl sm:text-3xl font-josefin text-dark">Shop by Product</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((cat, i) => (
            <div key={i} className="category-card bg-white overflow-hidden rounded-sm shadow-card cursor-pointer">
              <a href={cat.link}>
                <div className="overflow-hidden">
                  <Image
                    src={cat.img}
                    alt={cat.label}
                    height={40}
                    width={40}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
                <div className="p-4">
                  <span className="text-white text-lg sm:text-xl font-josefin hover:text-primary transition-colors block">
                    {cat.label}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
