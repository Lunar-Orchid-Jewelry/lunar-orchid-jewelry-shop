import "./index.css";

function Home() {
  return (
    <>
      <div className="bg-white font-josefin text-white">
        {/* Spacer for fixed nav */}
        <div className="h-16" />

        {/* === HERO / HEADER === */}
        <section className="bg-(--color-primary)">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-12 lg:py-20">
              {/* Logo Image */}
              <div className="w-[30%] lg:w-[35%] flex justify-center lg:justify-end">
                <img
                  src="assets/images/lunar-orchid-logo.png"
                  alt="Lunar Orchid Jewelry Logo"
                  className="max-w-full h-auto object-contain lg:max-w-md"
                />
              </div>

              {/* Title & CTA */}
              <div className="w-full lg:w-[65%] text-center lg:text-left">
                <h1 className="font-family-cinzel text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6">
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
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="#"
                    className="inline-block bg-[color-secondary]} text-white px-8 py-3 font-josefin text-base hover:bg-primary-hover transition-colors rounded-sm"
                  >
                    Shop by Product
                  </a>
                  <a
                    href="#"
                    className="inline-block bg-[#627f98] text-white px-8 py-3 font-josefin text-base hover:bg-primary-hover transition-colors rounded-sm"
                  >
                    Shop by Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === ARTICLE01 - Feature Image === */}
        <section className="bg-(--color-primary) py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="w-full max-w-5xl">
                <img
                  src="assets/images/copper-amethyst-cuff.webp"
                  alt="Copper Amethyst Cuff"
                  className="w-full h-auto object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* === SHOP BY PRODUCT (Dark Section) === */}
        <section className="bg-(--color-primary) py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-cinzel text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
                Shop by Product
              </h1>
            </div>
          </div>
        </section>

        {/* === NECKLACES === */}
        <section className="bg-(--color-primary) py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="category-line py-4 mb-8 text-center">
              <p className="text-2xl font-josefin text-dark">Necklaces</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
              {[
                {
                  img: "assets/images/forest-pearl-icon.webp",
                  name: "Cosmic Oasis",
                  price: "$PRICE",
                },
                {
                  img: "assets/images/sacred-alignment-icon.webp",
                  name: "Cosmic Oasis",
                  price: "$PRICE",
                },
                {
                  img: "assets/images/cosmic-oasis-3.webp",
                  name: "Cosmic Oasis",
                  price: "$PRICE",
                },
                {
                  img: "assets/images/faire-magic-icon.webp",
                  name: "Cosmic Oasis",
                  price: "$PRICE",
                },
                {
                  img: "assets/images/amethyst-whisper-icon.webp",
                  name: "Cosmic Oasis",
                  price: "$PRICE",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-b-md hover:shadow-lg hover:scale-105 transition"
                >
                  <a
                    href="bello-opal-sterling-silver-galaxy-pendant.html"
                    className="block"
                  >
                    <div className="overflow-hidden rounded-sm mb-3">
                      <img
                        src={item.img}
                        alt="Sterling Silver Bello Opal Necklace Pendant"
                        className="w-full h-48 lg:h-64 object-cover"
                      />
                    </div>
                    <h4 className="text-secondary text-base font-josefin text-center mb-1">
                      {item.name}
                    </h4>
                    <p className="text-dark text-lg font-josefin text-center">
                      {item.price}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="gallery.html"
              className="inline-block bg-(--color-secondary) text-white px-6 py-2 font-josefin text-sm hover:bg-primary-hover transition-colors rounded-sm"
            >
              More Necklaces
            </a>
          </div>
        </section>

        {/* === BRACELETS === */}
        <section className="bg-(--color-primary) py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="category-line py-4 mb-8 text-center">
              <p className="text-2xl font-josefin text-dark">Bracelets</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { img: "assets/images/photoroom-20260116.webp" },
                { img: "assets/images/copper-amethyst-cuff-copy.webp" },
                { img: "assets/images/photoroom-20260129.webp" },
                { img: "assets/images/orange-agate-copper-cuff.webp" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-b-md hover:shadow-lg hover:scale-105 transition"
                >
                  <a
                    href="bello-opal-sterling-silver-galaxy-pendant.html"
                    className="block"
                  >
                    <div className="overflow-hidden rounded-sm mb-3">
                      <img
                        src={item.img}
                        alt="Sterling Silver Bello Opal Necklace Pendant"
                        className="w-full h-48 lg:h-64 object-cover"
                      />
                    </div>
                    <h4 className="text-secondary text-base font-josefin text-center mb-1">
                      Cosmic Oasis
                    </h4>
                    <p className="text-dark text-lg font-josefin text-center">
                      $PRICE
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="gallery.html"
              className="inline-block bg-(--color-secondary) text-white px-6 py-2 font-josefin text-sm hover:bg-primary-hover transition-colors rounded-sm"
            >
              More Bracelets
            </a>
          </div>
        </section>

        {/* === RINGS === */}
        <section className="bg-(--color-primary) py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="category-line py-4 mb-8 text-center">
              <p className="text-2xl font-josefin text-dark">Rings</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                { img: "assets/images/copper-rose-ring-16.webp" },
                { img: "assets/images/icon-4.webp" },
                { img: "assets/images/silver-rose-ring-1.webp" },
                { img: "assets/images/photoroom-20260102.webp" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-b-md hover:shadow-lg hover:scale-105 transition"
                >
                  <a
                    href="bello-opal-sterling-silver-galaxy-pendant.html"
                    className="block"
                  >
                    <div className="overflow-hidden rounded-sm mb-3">
                      <img
                        src={item.img}
                        alt="Sterling Silver Bello Opal Necklace Pendant"
                        className="w-full h-48 lg:h-64 object-cover"
                      />
                    </div>
                    <h4 className="text-secondary text-base font-josefin text-center mb-1">
                      Cosmic Oasis
                    </h4>
                    <p className="text-dark text-lg font-josefin text-center">
                      $PRICE
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-8">
            <a
              href="gallery.html"
              className="inline-block bg-(--color-secondary) text-white px-6 py-2 font-josefin text-sm hover:bg-primary-hover transition-colors rounded-sm"
            >
              More Rings
            </a>
          </div>
        </section>

        {/* === SHOP BY COLLECTION (Dark Section) === */}
        <section className="bg-(--color-primary) py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-cinzel text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
                Shop by Collection
              </h1>
            </div>
          </div>
        </section>

        {/* === OCEAN GODDESS === */}
        <section className="bg-(--color-primary) py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="category-line py-4 mb-8 text-center">
              <p className="text-2xl font-josefin text-dark">Ocean Goddess</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                {
                  img: "assets/images/ocean-goddess-1.webp",
                  name: "Eternal Current",
                  desc: "Rose Gold Plated Copper Wrapped Ammonite",
                  price: "$125",
                },
                {
                  img: "assets/images/ocean-goddess-2.webp",
                  name: "Goddess Spiral Ring",
                  desc: "Silver Plated Copper Woven",
                  price: "$78",
                },
                {
                  img: "assets/images/ocean-goddess-3.webp",
                  name: "Goddess Spiral Bracelet",
                  desc: "Sterling Silver Wrapped Bello Opal",
                  price: "$349",
                },
                {
                  img: "assets/images/ocean-goddess-4.webp",
                  name: "Oceanic Roots",
                  desc: "Patina Copper Wrapped Sea Glass",
                  price: "$55",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-b-md hover:shadow-lg hover:scale-105 transition"
                >
                  <a
                    href="rose-gold-ammonite-fossil-pendant.html"
                    className="block"
                  >
                    <div className="overflow-hidden rounded-sm mb-3">
                      <img
                        src={item.img}
                        alt="Ocean Goddess Collection"
                        className="w-full h-48 lg:h-64 object-cover"
                      />
                    </div>
                    <h4 className="text-primary text-base font-josefin text-center mb-1">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-sm font-josefin text-center mb-1">
                      {item.desc}
                    </p>
                    <p className="text-dark text-lg font-josefin text-center">
                      {item.price}
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === FOREST NYMPH === */}
        <section className="bg-(--color-primary) py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="category-line py-4 mb-8 text-center">
              <p className="text-2xl font-josefin text-dark">Forest Nymph</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                {
                  img: "assets/images/forest-nymph-1.webp",
                  name: "Goddess Spiral Ring",
                },
                {
                  img: "assets/images/forest-nymph-2.webp",
                  name: "Patina Copper Agate Spiral Ring",
                },
                {
                  img: "assets/images/forest-nymph-3.webp",
                  name: "Crystal Bead Rings",
                },
                {
                  img: "assets/images/forest-nymph-4.webp",
                  name: "Rose Rings",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-b-md hover:shadow-lg hover:scale-105 transition"
                >
                  <a href="shop-all-rings.html" className="block">
                    <div className="overflow-hidden rounded-sm mb-3">
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-48 lg:h-64 object-cover"
                      />
                    </div>
                    <h4 className="text-base font-josefin text-center mb-1">
                      {item.name}
                    </h4>
                    <p className="text-dark text-lg font-josefin text-center">
                      coming soon
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === DRAGON SLAYER === */}
        <section className="bg-(--color-primary) py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-y border-[#e0e0e0] py-4 mb-8 text-center">
              <p className="text-2xl font-josefin text-dark">Dragon Slayer</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {[
                {
                  img: "assets/images/dragon-slayer-1.webp",
                  name: "Goddess Spiral Ring",
                },
                {
                  img: "assets/images/dragon-slayer-2.webp",
                  name: "Patina Copper Agate Spiral Ring",
                },
                {
                  img: "assets/images/dragon-slayer-3.webp",
                  name: "Rose Rings",
                },
                {
                  img: "assets/images/dragon-slayer-4.webp",
                  name: "Crystal Bead Rings",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-b-md hover:shadow-lg hover:scale-105 transition"
                >
                  <a href="shop-all-rings.html" className="block">
                    <div className="overflow-hidden rounded-sm mb-3">
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-48 lg:h-64 object-cover"
                      />
                    </div>
                    <h4 className="text-base font-josefin text-center mb-1">
                      {item.name}
                    </h4>
                    <p className="text-dark text-lg font-josefin text-center">
                      coming soon
                    </p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === ABOUT THE CREATOR === */}
        <section className="bg-(--color-primary) py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src="assets/images/dsc-8646-768x1152.webp"
                    alt="Robin - Creator of Lunar Orchid Jewelry"
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

        {/* === DONATION SECTION === */}
        <section className="bg-(--color-primary) py-16 lg:py-24">
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
                      <img
                        src="assets/images/img-2319-1138x854.webp"
                        alt="Thank you for donating!"
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
        <section className="bg-(--color-primary) py-16 lg:py-24">
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
        <footer className="bg-(--color-primary) text-white py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="w-full lg:w-1/2">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3
                      className="font-cinzel text-lg leading-relaxed"
                      style={{ fontWeight: "normal" }}
                    >
                      Lunar Orchid <br />
                      Jewelry
                    </h3>
                  </div>
                  <div className="md:w-1/2">
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
                <div className="grid grid-cols-3 gap-2">
                  {[
                    "assets/images/94fce968-b64b-4599-b08a-d90db876f07c-1000x1250.webp",
                    "assets/images/hawk-eye.webp",
                    "assets/images/img-588520copy-899x1154.webp",
                    "assets/images/seaglass20eye20wrap-369x492.webp",
                    "assets/images/img-659120large-369x478.webp",
                    "assets/images/icon-369x492.webp",
                  ].map((img, i) => (
                    <div
                      key={i}
                      className="hover:scale-105 hover:transition-transform"
                    >
                      <a href="gallery.html">
                        <img
                          src={img}
                          alt="Jewelry Gallery Item"
                          className="aspect-square"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* === OUR SERVICES === */}
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-dark mb-6">
                OUR SERVICES
              </h3>
              <h3 className="text-gray-600 font-josefin text-base sm:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h3>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 justify-center">
              {[
                {
                  date: "MAY 4, 2021 / BODY MASSAGE",
                  title: "AROMATIC OILS FOR FACE AND BODY",
                  author: "By Loreen Walsh",
                  img: "assets/images/features13.webp",
                },
                {
                  date: "MAY 4, 2021 / BODY MASSAGE",
                  title: "AROMATIC OILS FOR FACE AND BODY",
                  author: "By Loreen Walsh",
                  img: "assets/images/features14.webp",
                },
                {
                  date: "MAY 4, 2021 / BODY MASSAGE",
                  title: "AROMATIC OILS FOR FACE AND BODY",
                  author: "By Loreen Walsh",
                  img: "assets/images/features15.webp",
                },
              ].map((item, i) => (
                <div key={i} className="w-full lg:w-[33%] text-center">
                  <div className="overflow-hidden rounded-sm">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-48 lg:h-64 object-cover"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-gray-500 font-josefin text-sm mb-1">
                      {item.date}
                    </p>
                    <h5 className="font-josefin text-base sm:text-lg text-dark mb-2">
                      {item.title}
                    </h5>
                    <h5 className="font-josefin text-sm text-gray-500">
                      {item.author}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
