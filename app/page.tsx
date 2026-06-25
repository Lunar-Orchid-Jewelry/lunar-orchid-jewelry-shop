import Image from "next/image";
import Navbar from "./ui/navbar";
import Collection from "./ui/collection";
import {
  braceletProducts,
  nymphProducts,
  necklacePreview,
  goddessProducts,
  ringProducts,
  warriorProducts,
  queenProducts,
} from "./product/data";
import Footer, { footerProducts } from "./ui/footer";
import { basePath } from "./utils";

export default function Home() {
  return (
    <>
      <div className="bg-primary pt-20 font-josefin text-white">
        <Navbar />
        {/* === HERO / HEADER === */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-12">
              {/* Logo Image */}
              <div className="w-[30%] lg:w-[35%] flex justify-center">
                <Image
                  src={basePath("images/lunar-orchid-logo.png")}
                  alt="Lunar Orchid Jewelry Logo"
                  height={400}
                  width={400}
                  className="max-w-full h-auto object-contain lg:max-w-md"
                />
              </div>

              {/* Title & CTA */}
              <div className="w-full lg:w-[65%] text-center lg:text-left">
                <h1 className="font-cinzel text-center text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6">
                  Lunar Orchid Jewelry
                </h1>

                <h3 className="font-bad-script text-xl text-center sm:text-2xl text-gray-100 mb-4 leading-relaxed">
                  <p>Earthly Inspired</p>
                  <p>Hand Made</p>
                  <p>Uniquely Imperfect</p>
                </h3>

                <h4 className="font-bad-script text-base text-center sm:text-lg text-gray-100 mb-8 leading-relaxed">
                  <p>Float among the mystical and the magical</p>
                </h4>
                {/*
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="#"
                    className="inline-block bg-secondary text-white px-5 py-3 font-josefin text-base hover:bg-accent transition-colors rounded-sm"
                  >
                    Shop by Product
                  </a>
                  <a
                    href="#"
                    className="inline-block bg-secondary text-white px-5 py-3 font-josefin text-base hover:bg-accent transition-colors rounded-sm"
                  >
                    Shop by Collection
                  </a>
                </div>
               */}
              </div>
            </div>
          </div>
        </section>
        <div className="overflow-hidden object-cover w-full ">
          <Image
            src={basePath("images/lunar-orchid-banner.jpg")}
            alt="Lunar Orchid Jewelry Banner"
            height={40}
            width={40}
            className="w-full object-cover"
          />
        </div>
        {/* === NECKLACES === */}
        <Collection
          title="Necklaces"
          button={{
            text: "More Necklaces",
            link: basePath("catalog/necklaces"),
          }}
          products={necklacePreview}
        />
        <Divider />
        {/* === BRACELETS === */}
        <Collection
          title="Bracelets"
          button={{
            text: "More Bracelets",
            link: basePath("catalog/bracelets"),
          }}
          products={braceletProducts}
        />
        <Divider />
        {/* === RINGS === */}
        <Collection
          title="Rings"
          button={{ text: "More Rings", link: basePath("catalog/rings") }}
          products={ringProducts}
        />
        <Divider />
        {/* === GODDESS COLLECTION=== */}
        <Collection title="Goddess Collection" products={goddessProducts} />
        <Divider />
        {/* === NYMPH COLLECTION === */}
        <Collection title="Nymph Collection" products={nymphProducts} />
        <Divider />
        {/* === WARRIOR COLLECTION === */}
        <Collection title="Warrior Collection" products={warriorProducts} />
        <Divider />
        {/* === QUEEN COLLECTION === */}
        <Collection title="Queen Collection" products={queenProducts} />
        <Divider />
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
  return <div className="mx-auto w-[60%] border-b border-secondary"></div>;
}
