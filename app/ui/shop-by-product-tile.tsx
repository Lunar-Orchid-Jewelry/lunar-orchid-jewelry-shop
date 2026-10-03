import Image from "next/image";
import { Product } from "../product/data";

export type ShopByProductTileProps = {
  product: Product;
};

export default function ShopByProductTile({ product }: ShopByProductTileProps) {
  return (
    <>
      <div className="bg-secondary rounded-xl transition hover:shadow-lg hover:scale-105">
        <a href={product.link()} className="block">
          <div className="overflow-hidden rounded-t-xl">
            <Image
              src={product.coverImg()}
              alt={product.coverImageAlt}
              height={40}
              width={40}
              className="aspect-square w-full h-auto object-cover"
            />
          </div>
          <div className="p-2">
            <h4 className="text-white text-base font-josefin text-center">
              {product.title}
            </h4>

            {/*{!product.description ? (
              <></>
            ) : (
              <p className="text-white text-lg font-josefin text-center">
                {product.description}
              </p>
            )}*/}
            <p className="text-white text-lg font-josefin text-center">
              {product.price}
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
