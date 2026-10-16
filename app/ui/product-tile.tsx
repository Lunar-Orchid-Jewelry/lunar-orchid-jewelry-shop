import Image from "next/image";
import { Product } from "../product/data";

export type ProductTileProps = {
  product: Product;
};

export default function ProductTile({ product }: ProductTileProps) {
  return (
    <>

      <div className="bg-secondary rounded-sm transition hover:shadow-lg hover:scale-105 relative">

        <a href={product.link()} className="block">
          <div>
              <p className={product.sale ? "bg-highlight text-white text-md right-0 font-cinzel font-bold absolute m-3 px-2 py-1 rounded-md visible" : "hidden"}>
                Sale
              </p>
          </div>
          <div className="overflow-hidden rounded-t-sm">
            <Image
              src={product.coverImg()}
              alt={product.coverImageAlt}
              height={40}
              width={40}
              className="aspect-square w-full h-auto object-cover"
            />
          </div>


          <div className="p-2">
            <h4 className="text-white text-3xl font-beau-rivage text-center p-1">
              {product.title}
            </h4>
            {/*
            {!product.description ? (
              <></>
            ) : (
              <p className="text-white text-lg font-josefin text-center p-1 whitespace-pre-line">
                {product.description}
              </p>
            )}
            */}
            <div className="flex justify-center">
              <div className=" text-white text-2xl font-josefin text-center p-1">
                <p className={product.sale ? "line-through text-highlight" : ""}>
                  {product.price}
                </p>
              </div>
              {!product.sale ? (
                <></>
              ) : (
                <div className="text-white text-2xl font-josefin text-center p-1">
                  {product.sale}
                </div>
              )}
            </div>

            {/*
            <p className="text-white text-2xl font-josefin text-center p-1">
              {product.price}
            </p>
*/}
          </div>
        </a>
      </div>
    </>
  );
}
