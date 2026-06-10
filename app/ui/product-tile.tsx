import Image from "next/image"
import { ProductItem } from "../product/data";

export type ProductTileProps = {
  item: ProductItem;
};

// export type ProductTileItem = {
//   img: string;
//   alt: string;
//   name: string;
//   link: string;
//   price: string;
//   description?: string;
// };

export default function ProductTile({ item }: ProductTileProps) {
  return (
    <>
      <div className="rounded-xl hover:shadow-lg ">
        <a href={item.productLink} className="block">
          <div className="overflow-hidden hover:scale-98  transition rounded-sm mb-3">
            <Image
              src={item.image}
              alt={item.imageAlt}
              height={40}
              width={40}
              className="aspect-square w-full h-auto object-cover"
            />
          </div>
          <h4 className="text-white text-base font-josefin text-center mb-2">
            {item.title}
          </h4>
          <p className="text-light text-lg font-josefin text-center">
            {item.price}
          </p>
          {!item.description ? <></> : (
            <p className="text-light text-lg font-josefin text-center">
              {item.description}
            </p>
          )}
        </a>
      </div>
    </>
  );
};
