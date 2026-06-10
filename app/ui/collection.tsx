import { ProductItem } from "../product/data";
import ProductTile from "./product-tile";

type CollectionProps = {
  title: string;
  button?: string;
  products: ProductItem[];
};

export default function Collection(props: CollectionProps) {
  return (
    <>
      <section className="bg-primary py-8 lg:py-16">
        <div className="max-w-7xl mx-auto px-10">
          <div className="category-line p-4 mb-8 text-center">
            <p className="text-4xl font-bad-script text-white">{props.title}</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {props.products.map((item, ix) => (
              <ProductTile key={ix} item={item} />
            ))}
          </div>
        </div>

        {!props.button ? (
          <></>
        ) : (
          <div className="text-center mt-8">
            <a
              href="gallery.html"
              className="inline-block bg-secondary text-white px-6 py-2 font-josefin text-sm hover:bg-primary-hover transition-colors rounded-sm"
            >
              {props.button}
            </a>
          </div>
        )}
      </section>
    </>
  );
};
