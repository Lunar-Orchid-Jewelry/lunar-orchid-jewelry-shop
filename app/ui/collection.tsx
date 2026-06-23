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
}

export default function Collection(props: CollectionProps) {
  return (
    <>
      <section className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-10">
          <div className="category-line p-4 mb-8 text-center">
            <p className="text-4xl font-bad-script text-white">{props.title}</p>
          </div>
          {/*<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">*/}
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {Object.entries(props.products).map(([key, item]) => (
              <div key={key} className="h-full w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-2rem)]">
                <ProductTile key={key} product={item} />
              </div>
            ))}
          </div>
        </div>

        {!props.button ? (
          <></>
        ) : (
          <div className="text-center mt-8">
            <a
              href={props.button.link}
              className="inline-block bg-secondary text-white px-6 py-2 font-josefin text-xl hover:bg-primary-hover transition-colors rounded-sm"
            >
              {props.button.text}
            </a>
          </div>
        )}
      </section>
    </>
  );
};
