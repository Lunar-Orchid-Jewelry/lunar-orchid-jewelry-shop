import Image from "next/image";
import { basePath } from "../utils";
import Navbar from "../ui/navbar";



export default function Home() {
  return (
    <>


      <div className="bg-white pt-0 font-josefin text-primary">

        {/* === HERO / HEADER === */}
        <section>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8">
              {/* Logo Image */}

              <div className="w-[20%] lg:w-[25%] flex justify-right">
                <Image
                  src={basePath("images/lunar-orchid-logo.png")}
                  alt="Lunar Orchid Jewelry Logo"
                  height={100}
                  width={100}
                  className="max-w-full h-auto object-contain lg:max-w-md"
                />

              </div>



              {/* Title & CTA */}
              <div className="w-full text-center lg:text-left">
                <h1 className="font-beau-rivage text-center text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-black mb-6">
                  Lunar Orchid Jewelry
                </h1>
              </div>
            </div>
          </div>
        </section>

<Navbar></Navbar>


      {/* Flex Grid x4 */}
        <section className="max-w-7xl bg-accent mx-auto my-20">
          <div className="grid grid-cols-4 items-center gap-8 p-8">

        <div>
              <Image className="bg-amber-600 h-auto w-full rounded-lg object-cover object-center"
                src={basePath("images/cosmic-oasis-0.jpg")}
                alt="gallery-photo"
                height={300}
                width={300}
              />
            </div>
            <div>
              <Image className="bg-amber-600 h-auto w-full rounded-lg object-cover object-center"
                src={basePath("images/cosmic-oasis-0.jpg")}
                alt="gallery-photo"
                height={300}
                width={300}
              />
            </div>
            <div>
              <Image className="bg-amber-600 h-auto w-full rounded-lg object-cover object-center"
                src={basePath("images/lunar-orchid-logo.png")}
                alt="gallery-photo"
                height={300}
                width={300}
              />
            </div>
            <div>
              <Image className="bg-amber-600 h-auto w-full rounded-lg object-cover object-center"
                src={basePath("images/lunar-orchid-logo.png")}
                alt="gallery-photo"
                height={300}
                width={300}
              />
            </div>
        </div>
        </section>



        {/* Masonry Grid x4 */}
        <section className="max-w-5xl bg-emerald-200 mx-auto my-40">
          <div className="grid grid-cols-4">
            <div className="grid gap-4">
              <div>
                <Image className="bg-amber-600 w-full rounded-lg object-cover"
                  src={basePath("images/lunar-orchid-logo.png")}
                  alt="gallery-photo"
                  height={300}
                  width={300}
                />
              </div>
              <div>
                <Image className="bg-amber-600 w-full rounded-lg object-cover"
                  src={basePath("images/cosmic-oasis-0.jpg")}
                  alt="gallery-photo"
                  height={300}
                  width={300}
                />
              </div>
              <div className="bg-amber-200 m-0 p-0 w-full h-auto">
              <Image className="bg-amber-600 w-full rounded-lg object-cover"
                src={basePath("images/cosmic-oasis-0.jpg")}
                alt="gallery-photo"
                height={200}
                width={300}
              />
            </div>
            <div>
              <Image className="bg-amber-600 w-full rounded-lg object-cover"
                src={basePath("images/lunar-orchid-logo.png")}
                alt="gallery-photo"
                height={300}
                width={300}
              />
            </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image className="bg-amber-600 w-full rounded-lg object-cover"
                  src={basePath("images/lunar-orchid-logo.png")}
                  alt="gallery-photo"
                  height={300}
                  width={300}
                />
              </div>
              <div>
                <Image className="bg-amber-600 w-full rounded-lg object-cover"
                  src={basePath("images/cosmic-oasis-0.jpg")}
                  alt="gallery-photo"
                  height={300}
                  width={300}
                />
              </div>
              <div className="bg-amber-200 m-0 p-0 w-full h-auto">
              <Image className="bg-amber-600 w-full rounded-lg object-cover"
                src={basePath("images/cosmic-oasis-0.jpg")}
                alt="gallery-photo"
                height={200}
                width={300}
              />
            </div>
            <div>
              <Image className="bg-amber-600 w-full rounded-lg object-cover"
                src={basePath("images/cosmic-oasis-0.jpg")}
                alt="gallery-photo"
                height={300}
                width={300}
              />
            </div>
            </div>
        </div>
    </section>


        {/* ARTISAN JEWELRY */}
        <section>
          <div className="max-w-8xl bg-accent mx-4 px-4 rounded-xl">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8">
              {/* Title & CTA */}
              <div className=" w-full lg:w-[65%] text-center lg:text-left">
                <h1 className="font-bad-script text-center text-4xl lg:text-5xl xl:text-5xl text-black mb-6">
                  Artisan Wire Wrapped Jewelry Using Natural Gemstones
                </h1>
                <h3 className="font-bad-script text-xl text-center sm:text-2xl text-gray-400 mb-4 leading-relaxed">
                  <p>Earthly Inspired · Uniquely Imperfect</p>
                </h3>
              </div>

              {/* Logo Image */}
              <div className="w-[30%] lg:w-[35%] flex justify-center">
                <Image
                  src={basePath("images/lunar-orchid-logo.png")}
                  alt="Lunar Orchid Jewelry Logo"
                  height={300}
                  width={300}
                  className="max-w-full h-auto object-contain lg:max-w-md"
                />
              </div>
            </div>
          </div>
        </section>



        {/* ARTISAN JEWELRY */}
        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8">
              {/* Title & CTA */}
              <div className="w-full lg:w-[65%] text-center lg:text-left">
                <h1 className="font-bad-script text-center text-md sm:text-4xl lg:text-5xl xl:text-5xl text-black mb-6">
                  Why Buy Handmade?
                </h1>
                <h3 className="font-bad-script text-xl text-center sm:text-2xl text-gray-400 mb-4 leading-relaxed"> </h3>
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
