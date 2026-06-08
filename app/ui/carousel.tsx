"use client"
import Image from "next/image"
import { useState } from "react"

type CarouselProps = {
  slides: CarouselSlide[],
}

export type CarouselSlide = {
  img: string,
  alt: string,
}

// Use as <Carousel slides={slidesList} />
export default function Carousel({ slides }: CarouselProps) {
  const [activeSlide, setActiveSlide] = useState(0)

  const goToSlide = (index: number) => {
    setActiveSlide(index)
  }

  const goPrev = () => {
    setActiveSlide((prev: number) => (prev > 0 ? prev - 1 : slides.length - 1))
  }

  const goNext = () => {
    setActiveSlide((prev: number) => (prev < slides.length - 1 ? prev + 1 : 0))
  }

  return (
    <>
      <div className="w-full lg:w-[55%]">
        <div className="relative overflow-hidden rounded-lg">

          {/* Main Image */}
          <Image
            key={activeSlide}
            src={slides[activeSlide].img}
            alt={slides[activeSlide].alt}
            className="w-full h-auto object-cover"
          />

          <div className="absolute top-0 left-0 h-full w-40 flex flex-row hover:bg-white hover:opacity-50 active:opacity-70" onClick={() => goPrev()}>
            {/* TODO left arrow */}
            <div className="self-center mx-auto p-2">
              Prev
            </div>
          </div>

          <div className="absolute top-0 right-0 h-full w-40 flex flex-row hover:bg-white hover:opacity-50 active:opacity-70" onClick={() => goNext()}>
            {/* TODO right arrow */}
            <div className="self-center mx-auto p-2">
              Next
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-2 justify-center flex-wrap mt-3">
          {slides.map((slide, i) => (
            <Image
              key={i}
              src={slide.img}
              alt={slide.alt}
              className={`thumb w-16 h-16 rounded-md hover:scale-105 transition object-cover cursor-pointer border-2 ${i === activeSlide
                ? 'border-primary opacity-100'
                : 'border-transparent opacity-60 hover:opacity-100'
                } transition-all duration-300`}
              onClick={() => goToSlide(i)}
            />
          ))}
        </div>
      </div>
    </>
  )
}
