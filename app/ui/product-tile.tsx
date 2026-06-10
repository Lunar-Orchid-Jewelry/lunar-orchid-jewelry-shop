import Image from "next/image"

export type ProductTileProps = {
  item: ProductTileItem;
};

export type ProductTileItem = {
  img: string;
  alt: string;
  name: string;
  link: string;
  price: string;
};

export default function ProductTile({ item }: ProductTileProps) {
  return (
    <>
      <div className="rounded-xl hover:shadow-lg ">
        <a
          href={item.link}
          className="block"
        >
          <div className="overflow-hidden hover:scale-98  transition rounded-sm mb-3">
            <Image
              src={item.img}
              alt={item.alt}
              height={40}
              width={40}
              className="aspect-square w-full h-auto object-cover"
            />
          </div>
          <h4 className="text-white text-base font-josefin text-center mb-2">
            {item.name}
          </h4>
          <p className="text-dark text-lg font-josefin text-center">
            {item.price}
          </p>
        </a>
      </div>
    </>
  );
};
