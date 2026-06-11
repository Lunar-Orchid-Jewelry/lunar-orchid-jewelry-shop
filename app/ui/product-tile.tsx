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
      <div className="rounded-xl transition hover:shadow-lg hover:scale-105">
        <a href={item.productLink} className="block">
          <div className="overflow-hidden rounded-sm">
            <Image
              src={item.coverImage}
              alt={item.coverImageAlt}
              height={40}
              width={40}
              className="aspect-square w-full h-auto object-cover"
            />
          </div>
          <div className="p-2">
            <h4 className="text-white text-base font-josefin text-center">
              {item.title}
            </h4>
            <p className="text-white text-lg font-josefin text-center">
              {item.price}
            </p>
            {!item.description ? <></> : (
              <p className="text-white text-lg font-josefin text-center">
                {item.description}
              </p>
            )}
          </div>
        </a>
      </div>
    </>
  );
};
