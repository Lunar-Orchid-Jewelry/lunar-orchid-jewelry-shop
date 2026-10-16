import Image from "next/image";
import { Product, productSet } from "../product/data";
import Link from "next/link";
import { basePath } from "../utils";

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
                <div className=" w-full lg:w-[30%] p-4">
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
                <div className="w-full lg:w-[35%] flex flex-row p-2">
                    {/* === Product Column === */}
                  <div className="w-full items-center">
                  <ul className="space-y-2 py-4 w-full font-josefin">
                    <li>
                      <Link
                        href="/catalog/necklaces"
                        className="px-2 py-2 rounded-sm text-white hover:bg-highlight transition-colors "
                      >
                        Necklaces
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/catalog/bracelets"
                        className="px-2 py-2 rounded-sm text-white hover:bg-highlight transition-colors"
                      >
                        Bracelets
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/catalog/rings"
                        className="px-2 py-2 rounded-sm text-white hover:bg-highlight transition-colors"
                      >
                        Rings
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/catalog/industrial-chains"
                        className="px-2 py-2 rounded-sm text-white hover:bg-highlight transition-colors"
                      >
                        Industrial Chains
                      </Link>
                    </li>
                  </ul>
                </div>

              {/* === FAQ Column === */}
                <div className="py-4 w-full items-center">
                  <ul className="space-y-2 font-josefin">
                    <li>
                      <Link
                        href="/policies/"
                        className="px-2 py-2 rounded-sm text-white hover:bg-highlight transition-colors"
                      >
                        About                        </Link>
                    </li>
                    <li>
                      <Link
                        href="/policies/"
                        className="px-2 py-2 rounded-sm text-white hover:bg-highlight transition-colors"
                      >
                      Shipping & Policies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

                  {/* === Gallery === */}
                  <div className="w-full lg:w-[45%] mx-auto">
                    <h6 className=" font-cinzel text-lg mb-4 text-center">
                      <a
                        href="gallery.html"
                        className="text-white text-lg"
                      >
                        Gallery
                      </a>
                    </h6>
                    <div className="grid grid-cols-3 gap-4 mx-auto">
                      <a href="/gallery/">
                        <Image
                          className="object-cover items-center rounded-lg w-full h-30"
                          src={basePath("images/gallery-collage-0.jpg")}
                          alt="Jewelry Gallery Item"
                          height={400}
                          width={400}
                        />
                </a>
                <a href="/gallery/">
                  <Image
                  className="object-cover items-center rounded-lg w-full h-30"
                    src={basePath("images/gallery-ring-0-prev.jpg")}
                    alt="Jewelry Gallery Item"
                    height={400}
                    width={400}
                  />
                </a>
                <a href="/gallery/">
                  <Image
                  className="object-cover items-center rounded-lg w-full h-30"
                    src={basePath("images/gallery-booth.jpg")}
                    alt="Jewelry Gallery Item"
                    height={400}
                    width={400}
                  />
                </a>
                <a href="/gallery/">
                  <Image
                  className="object-cover items-center rounded-lg w-full h-30"
                    src={basePath("images/gallery-lunar-moon.jpg")}
                    alt="Jewelry Gallery Item"
                    height={400}
                    width={400}
                  />
                </a>
                <a href="/gallery/">
                  <Image
                  className="object-cover items-center rounded-lg w-full h-30"
                    src={basePath("images/gallery-process-0-prev.jpg")}
                    alt="Jewelry Gallery Item"
                    height={400}
                    width={400}
                  />
                </a>
                <a href="/gallery/">
                  <Image
                  className="object-cover items-center rounded-lg w-full h-30"
                    src={basePath("images/gallery-aztec.jpg")}
                    alt="Jewelry Gallery Item"
                    height={400}
                    width={400}
                  />
                </a>
                    </div>
                  </div>
                </div>
        </div>
      </footer>
    </>
  );
}
