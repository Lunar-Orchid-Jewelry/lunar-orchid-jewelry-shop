import Image from "next/image";
import { Product, productSet } from "../product/data";
import Link from "next/link";

export type FooterProps = {
  products: Record<string, Product>;
};

export const footerProducts = productSet([
  "cosmic-oasis",
  "rainbow-pride-cuff",
  "rustic-breeze",
  "faire-magic",
  "midas-touch",
  "eternal-current",
]);
// prettier-ignore
export default function Footer({ products }: FooterProps) {
  return (
    <>
      <footer className=" bg-secondary text-white p-6 lg:p-8">
        <div className="max-w-8xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row">

                {/* === LOJ & Contact === */}
                <div className="bg-mauve-300 w-full lg:w-[30%] ">
                  <h3
                    className="font-cinzel text-center text-3xl leading-relaxed"
                    style={{ fontWeight: "normal" }}
                  >
                    Lunar Orchid Jewelry
                  </h3>
                  <h3
                    className="font-josefin text-center text-lg leading-relaxed"
                    style={{ fontWeight: "normal" }}
                  >
                    Contact: lunarorchidjewelry@gmail.com with any questions.
                  </h3>
                </div>

                {/* === Info Columns === */}
                <div className="bg-pink-200 w-full md:w-[30%] flex flex-row items-center p-8">
                    {/* === Product Column === */}
                  <div className="w-full items-center">
                  <ul className="bg-emerald-400 space-y-2 font-josefin">
                    <li>
                      <Link
                        href="/catalog/necklaces"
                        className="px-4 py-2 rounded-sm text-white hover:bg-highlight transition-colors"
                      >
                        Necklaces
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/catalog/bracelets"
                        className="px-4 py-2 rounded-sm text-white hover:bg-highlight transition-colors"
                      >
                        Bracelets
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/catalog/rings"
                        className="px-4 py-2 rounded-sm text-white hover:bg-highlight transition-colors"
                      >
                        Rings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/catalog/industrial-chains"
                        className="px-4 py-2 rounded-sm text-white hover:bg-highlight transition-colors"
                      >
                        Industrial Chains
                      </Link>
                    </li>
                  </ul>
                </div>

              {/* === FAQ Column === */}
                <div className="bg-orange-200 w-full justify-center">
                  <ul className="space-y-2 font-josefin">
                    <li>
                      <Link
                        href="/policies/"
                        className="px-4 py-2 rounded-sm text-white hover:bg-highlight transition-colors"
                      >
                        About                        </Link>
                    </li>
                    <li>
                      <Link
                        href="/policies/"
                        className="px-4 py-2 rounded-sm text-white hover:bg-highlight transition-colors"
                      >
                      Shipping and Policies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

                  {/* === Gallery === */}
                  <div className="bg-blue-300 w-full lg:w-[50%] mx-auto">
                    <h6 className=" font-cinzel text-lg mb-4 text-center">
                      <a
                        href="gallery.html"
                        className="text-white text-lg"
                      >
                        Gallery
                      </a>
                    </h6>
                    <div className="grid grid-cols-3 gap-4 mx-auto">
                      {Object.values(products).map((product, i) => (
                        <div
                          key={i}
                          className="rounded-lg hover:scale-105 transition"
                        >
                          <a href={product.link()}>
                            <Image
                              className="object-cover rounded-lg"
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
