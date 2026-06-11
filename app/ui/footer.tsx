import Image from "next/image"

const galleryItems = [
  { img: "assets/images/94fce968-b64b-4599-b08a-d90db876f07c-1000x1250.webp" },
  { img: "assets/images/hawk-eye.webp" },
  { img: "assets/images/img-588520copy-899x1154.webp" },
  { img: "assets/images/seaglass20eye20wrap-369x492.webp" },
  { img: "assets/images/img-659120large-369x478.webp" },
  { img: "assets/images/icon-369x492.webp" },
]

export default function Footer() {
  return (
    <>
      <footer className="bg-secondary text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="font-cinzel text-lg leading-relaxed" style={{ fontWeight: 'normal' }}>
                    Lunar Orchid <br />Jewelry
                  </h3>
                </div>
                <div className="md:w-1/2">
                  <ul className="space-y-2 font-josefin">
                    <li><a href="index.html#About" className="text-white hover:text-primary transition-colors">About</a></li>
                    <li><a href="shop-necklace-pendants.html" className="text-white hover:text-primary transition-colors">Necklaces</a></li>
                    <li><a href="shop-all-bracelets.html" className="text-white hover:text-primary transition-colors">Bracelets</a></li>
                    <li><a href="shop-all-rings.html" className="text-white hover:text-primary transition-colors">Rings</a></li>
                    <li><a href="help-and-policies.html" className="text-white hover:text-primary transition-colors">FAQ and Policies</a></li>
                    <li><a href="index.html#help" className="text-white hover:text-primary transition-colors">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h6 className="font-cinzel text-lg mb-4">
                <a href="gallery.html" className="text-white hover:text-primary transition-colors">Gallery</a>
              </h6>
              <div className="grid grid-cols-6 gap-2">
                {galleryItems.map((item, i) => (
                  <div key={i} className="hover:scale-105 transition">
                    <a href="gallery.html">
                      <Image
                        className="aspect-square object-cover"
                        src={item.img}
                        alt="Jewelry Gallery Item"
                        height={40}
                        width={40}
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
  )
}
