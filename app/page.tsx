import { basePath } from "./utils";
import Image from "next/image";
import Announcement from "./ui/announcement";
import Header from "./ui/header";
import Navbar from "./ui/navbar";
import Collection from "./ui/collection";
import Highlight from "./ui/highlight";
import CatalogBrowser from "./ui/catalog-browser";
import {
  necklacePreview,
  braceletProducts,
  ringPreview,
  industrialChainProducts,
  prideProducts,
} from "./product/data";
import Footer, { footerProducts } from "./ui/footer";


export default function Home() {
  return (
    <>
      <div className="bg-primary pt-0 font-josefin text-primary">

      <Announcement></Announcement>
      <Header></Header>
      <Navbar></Navbar>



        {/* === NECKLACES === */}
        <Collection
          title="Necklaces"
          button={{
            text: "More Necklaces",
            link: basePath("catalog/necklaces"),
          }}
          products={necklacePreview}
        />


        {/* ARTISAN JEWELRY */}
        <section>
          <div className="max-w-5xl bg-secondary mx-auto m-8 p-8">
            <div className="flex flex-col md:flex-row items-center p-2 gap-2">
              {/* Title & CTA */}
              <div className="w-full md:w-[55%] text-center px-8 items-center text-white">
                <h1 className="p-6 font-bad-script text-center justify-center text-2xl lg:text-3xl  mb-6">
                  Artisan Wire Wrapped Labradorite Necklace Pendants                </h1>
                <h3 className="font-bad-script text-xl text-center mb-4">
                  <p>All jewelry is handmade</p>
                </h3>
              </div>

              {/* Image */}
              <div className=" w-full md:w-[45%] flex justify-center">
                <Image
                  src={basePath("images/artisan-collage.jpg")}
                  alt="Lunar Orchid Jewelry Logo"
                  height={500}
                  width={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>



        {/* === BRACELETS === */}
        <Collection
          title="Bracelets"
          button={{
            text: "More Bracelets",
            link: basePath("catalog/bracelets"),
          }}
          products={braceletProducts}
        />

        {/* ARTISAN JEWELRY */}
        <section>
          <div className="max-w-6xl bg-accent rounded-sm mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8">
              {/* Title & CTA */}
              <div className="w-full lg:w-[65%] text-center lg:text-left">
                <h1 className="font-bad-script text-center text-md sm:text-4xl lg:text-5xl xl:text-5xl text-black mb-6">
                  Why Buy Handmade?
                </h1>

                  <p>Earthly Inspired · Uniquely Imperfect</p>
              </div>

              {/* Logo Image */}
              <div className="w-[30%] lg:w-[35%] flex justify-center">
                <Image
                  src={basePath("images/labradorite-collection.jpg")}
                  alt="Lunar Orchid Jewelry Logo"
                  height={300}
                  width={300}
                  className="max-w-full h-auto object-contain lg:max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* === RINGS === */}
        <Collection
          title="Rings"
          button={{ text: "More Rings", link: basePath("catalog/rings") }}
          products={ringPreview}
        />

        {/* === INDUSTRIAL CHAINS === */}
        <Collection
          title="Industrial Chains"
          button={{ text: "More Chains", link: basePath("catalog/earrings") }}
          products={industrialChainProducts}
        />

        <Highlight
          title="Pride Collection"
          products={prideProducts}
        />

        <Divider />

        {/* === EARRINGS ===
        <Collection
          title="Earrings"
          button={{ text: "More Earrings", link: basePath("catalog/earrings") }}
          products={earringProducts}
        />*/}
        {/* === COLLECTIONS ===
        <Divider />*/}
        {/* === GODDESS COLLECTION===
        <Collection title="Goddess Collection" products={goddessProducts} />
        <Divider />**/}
        {/* === NYMPH COLLECTION ===
        <Collection title="Nymph Collection" products={nymphProducts} />
        <Divider />*/}
        {/* === WARRIOR COLLECTION ===
        <Collection title="Warrior Collection" products={warriorProducts} />
        <Divider />*/}
        {/* === QUEEN COLLECTION ===
        <Collection title="Queen Collection" products={queenProducts} />
        <Divider />*/}


        {/* === ABOUT THE CREATOR === */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-full hover:scale-105 hover:shadow-2xl hover:rotate-180 transition">
                  <Image
                    src={basePath("images/about-portrait.jpg")}
                    alt="Robin - Creator of Lunar Orchid Jewelry"
                    height={40}
                    width={40}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-4 font-josefin">
                  <strong>About the Creator</strong>
                </p>
                <h2 className="font-cinzel text-white text-2xl sm:text-3xl lg:text-4xl mb-6">
                  Hi! My name is Robin!
                </h2>
                <div className="text-gray-300 font-josefin leading-relaxed">
                  <p className="mb-4">{intro1}</p>
                  <p className="mb-4">{intro2}</p>
                  <p>{intro3}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === FOOTER === */}
        <Footer products={footerProducts} />{" "}
      </div>
    </>
  );
}

const intro1 = `
I'm the creative behind Lunar Orchid Jewelry!
`.trim();

const intro2 = `
I developed a love of making jewelry in my childhood. My
great-grandmother was an artist, jeweler, and collector of
stones, shells, and trinkets of the earth. She taught me the
basic skills of jewelry crafting, which I continued to
foster after she passed.
`.trim();

const intro3 = `
When I'm not making jewelry, I'm probably doing something
ridiculous and you shouldnt ask too many questions.
`.trim();

function Divider() {
  return <div className="mx-auto w-[80%] border-b border-secondary"></div>;
}
