import { Product } from "../product/data";
import ProductTile from "./product-tile";

type CollectionProps = {
  title: string;
  button?: CollectionButton;
  products: Record<string, Product>;
};

type CollectionButton = {
  text: string;
  link: string;
};

export default function Collection(props: CollectionProps) {
  return (
    <>
      <section className="bg-primary max-w-7xl py-4 px-8 justify-center my-2 mx-auto">

          <div className="p-4 mb-8 text-center">
            <p className="text-2xl font-cinzel  text-white">{props.title}</p>
        </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 mx-auto justify-center gap-6 lg:gap-8">
            {Object.entries(props.products).map(([key, item]) => (
              <div
                key={key}
                className="h-auto w-full"
              >
                <ProductTile key={key} product={item} />
              </div>
            ))}
          </div>


        {!props.button ? (
          <></>
        ) : (
          <div className="text-center mt-8">
            <a
              href={props.button.link}
              className="inline-block bg-secondary text-white px-6 py-2 font-josefin text-xl hover:bg-highlight transition-colors rounded-sm"
            >
              {props.button.text}
            </a>
          </div>
        )}
      </section>
    </>
  );
}
