import Image from "next/image";
import Navbar from "./ui/navbar";
import Collection from "./ui/collection";
import { braceletProducts, forestNymphProducts, necklaceProducts, oceanGoddessProducts, ringProducts, vikingQueenProducts } from "./product/data";
import Footer from "./ui/footer";

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
                  src="/images/lunar-orchid-logo.png"
                  alt="Lunar Orchid Jewelry Logo"
                  height={400}
                  width={400}
                  className="max-w-full h-auto object-contain lg:max-w-md"
                />
              </div>

              {/* Title & CTA */}
              <div className="w-full lg:w-[65%] text-center lg:text-left">
                <h1 className="font-bad-script text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6">
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
              </div>
            </div>
          </div>
        </section>

        {/* === IMAGE - Feature Image === */}
        <section className="py-12 max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="w-full h-auto max-w-5xl">
              <Image
                src="/images/copper-amethyst-cuff.webp"
                alt="Copper Amethyst Cuff"
                height={40}
                width={40}
                className="w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </section>

        {/* === SHOP BY PRODUCT (Dark Section) === */}
        <section className=" pt-16">
          <h1 className="font-cinzel text-white text-xl text-center ">
            Shop by Product
          </h1>
        </section>

        {/* === NECKLACES === */}
        <Collection
          title="Necklaces"
          button="More Necklaces"
          products={necklaceProducts}
        />

        {/* === BRACELETS === */}
        <Collection
          title="Bracelets"
          button="More Bracelets"
          products={braceletProducts}
        />

        {/* === RINGS === */}
        <Collection
          title="Rings"
          button="More Rings"
          products={ringProducts}
        />

        {/* === SHOP BY Collection (Dark Section) === */}
        <section className=" pt-16">
          <div className="flex justify-center">
            <div className="max-w-5xl w-full mx-16 rounded-sm opacity-60 py-4 bg-secondary">
              <h1 className="font-cinzel text-white text-xl text-center">
                Shop by Collection
              </h1>
            </div>
          </div>
        </section>

        {/* === OCEAN GODDESS === */}
        <Collection title="Ocean Goddess" products={oceanGoddessProducts} />

        {/* === FOREST NYMPH === */}
        <Collection title="Forest Nymph" products={forestNymphProducts} />

        {/* === VIKING QUEEN === */}
        <Collection title="Viking Queen" products={vikingQueenProducts} />

        {/* === ABOUT THE CREATOR === */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-sm">
                  <Image
                    src="/images/dsc-8646-768x1152.webp"
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
                  <p className="mb-4">
                    I'm the creative behind Lunar Orchid Jewelry!
                  </p>
                  <p className="mb-4">
                    I developed a love of making jewelry in my childhood. My
                    great-grandmother was an artist, jeweler, and collector of
                    stones, shells, and trinkets of the earth. She taught me the
                    basic skills of jewelry crafting, which I continued to
                    foster after she passed.
                  </p>
                  <p>
                    When I'm not making jewelry, I'm probably doing something
                    ridiculous and you shouldn't ask too many questions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === DONATION SECTION
        <section className="bg-primary py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="border border-dark rounded-sm p-8">
                    <p className="text-lg font-josefin mb-6">
                      <a
                        href="donation.html"
                        className="text-dark hover:text-primary transition-colors font-medium"
                      >
                        Donate HERE!
                      </a>
                    </p>
                    <p className="text-gray-600 font-josefin leading-relaxed">
                      Click to send head scratches to Jack
                      <br />
                      <em>- His Majesty Mr. Snoot -</em>
                      <br />
                      Who single pawedly keeps Lunar Orchid Jewelry running
                      smoothly
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="overflow-hidden rounded-lg">
                    <a href="donation.html">
                      <Image
                        src="/images/img-2319-1138x854.webp"
                        alt="Thank you for donating!"
                        height={40}
                        width={40}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === CONTACT FORM === */}
        <section className="bg-primary py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="font-cinzel text-2xl sm:text-3xl text-dark mb-4">
                  Contact Me!
                </h3>
                <p className="text-gray-600 font-josefin leading-relaxed">
                  Please reach out with any questions!
                  <br />
                  <br />
                  <em>*Site in Construction*</em>
                  <br />
                  If you notice a broken link please let me know!
                </p>
              </div>
              <form
                action="https://mobirise.eu/"
                method="POST"
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="email"
                  data-form-email="true"
                  value="RsFgMPN/DMAPLjBmTFh5r1Kao99mgjskMK0PQycW5kq0M5E+1k1eOJbRQ+2tfLVp4IE2zLqmfzOXjmrlNk2NjRXzsH3wzWPbfqyDEhDKM9Tg6xWbC53V+zNPl1W4OAZc.uuHL9Ohemqev86tiEfkMxT36HukH4Qx7gV3WnOiPGjOxY6SpAMM+C4nGZrt+ZoLorX6WBk0jWXwoqQ+1MK+Rid7xVmwXHNd3q5O43nEqyDBFWfJrxkbVkGu+T8WQcmLC"
                />
                <div
                  className="hidden bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-sm"
                  role="alert"
                >
                  Thanks for reaching out. I'll be in touch soon!
                </div>
                <div
                  className="hidden bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm"
                  role="alert"
                >
                  Oops...! some problem!
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-josefin text-dark mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border focus:shadow transition w-full px-4 py-2 font-josefin text-base"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email-field"
                    className="block text-sm font-josefin text-dark mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email1"
                    id="email-field"
                    className="border focus:shadow transition w-full px-4 py-2 font-josefin text-base"
                    placeholder=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="textarea"
                    className="block text-sm font-josefin text-dark mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    name="textarea"
                    id="textarea"
                    rows={5}
                    className="border focus:shadow transition w-full px-4 py-2 font-josefin text-base"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary text-white px-8 py-3 font-josefin text-base hover:bg-primary-hover transition-colors rounded-sm"
                  >
                    Send Message Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* === FOOTER === */}
        <Footer />

      </div>
    </>
  );
}
