import Image from "next/image";
import { Product, productSet } from "../product/data";

export type FooterProps = {
  products: Record<string, Product>;
};

export const footerProducts = productSet([
  "artemis-cuff",
  "copper-breath",
  "rustic-breeze",
  "copper-rose-ring",
  "copper-spiral-ring",
  "eternal-current",
]);

export default function Footer({ products }: FooterProps) {
  return (
    <>
      <footer className="bg-secondary text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-lg sm:justify-center">
                  <h3
                    className="font-cinzel text-lg leading-relaxed"
                    style={{ fontWeight: "normal" }}
                  >
                    Lunar Orchid Jewelry
                  </h3>
                  <h3
                    className="font-cinzel text-lg leading-relaxed"
                    style={{ fontWeight: "normal" }}
                  >
                    Contact lunarorchidjewelry@gmail.com with any questions.
                  </h3>
                </div>
                <div className="md:w-sm justify-center">
                  <ul className="space-y-2 font-josefin">
                    <li>
                      <a
                        href="index.html#About"
                        className="text-white hover:text-primary transition-colors"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="shop-necklace-pendants.html"
                        className="text-white hover:text-primary transition-colors"
                      >
                        Necklaces
                      </a>
                    </li>
                    <li>
                      <a
                        href="shop-all-bracelets.html"
                        className="text-white hover:text-primary transition-colors"
                      >
                        Bracelets
                      </a>
                    </li>
                    <li>
                      <a
                        href="shop-all-rings.html"
                        className="text-white hover:text-primary transition-colors"
                      >
                        Rings
                      </a>
                    </li>
                    <li>
                      <a
                        href="help-and-policies.html"
                        className="text-white hover:text-primary transition-colors"
                      >
                        FAQ and Policies
                      </a>
                    </li>
                    <li>
                      <a
                        href="index.html#help"
                        className="text-white hover:text-primary transition-colors"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h6 className="font-cinzel text-lg mb-4">
                <a
                  href="gallery.html"
                  className="text-white hover:text-primary transition-colors"
                >
                  Gallery
                </a>
              </h6>
              <div className="grid grid-cols-3 gap-4">
                {Object.values(products).map((product, i) => (
                  <div
                    key={i}
                    className="rounded-lg hover:scale-105 transition"
                  >
                    <a href={product.link()}>
                      <Image
                        className="aspect-square object-cover rounded-lg"
                        src={product.coverImg()}
                        alt="Jewelry Gallery Item"
                        height={400}
                        width={400}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
