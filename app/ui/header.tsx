"use client";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "../utils";

export default function Header() {
  return (
    <>
{/* === HERO / HEADER === */ }
<section>
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-8">
      {/* Logo Image */}

      <div className="w-[20%] lg:w-[25%] flex justify-center">
        <Image
          src={basePath("images/lunar-orchid-logo.png")}
          alt="Lunar Orchid Jewelry Logo"
          height={200}
          width={200}
          className="max-w-full h-auto object-contain lg:max-w-md"
        />

      </div>

      {/* Title & CTA */}
      <div className="w-full lg:w-[65%] text-center lg:text-left">
        <h1 className="font-beau-rivage text-center text-5xl sm:text-6xl lg:text-6xl xl:text-7xl text-white mb-6">
          Lunar Orchid Jewelry
        </h1>

        <h3 className="font-bad-script text-xl text-center sm:text-2xl text-gray-400 mb-4 leading-relaxed">
          <p>Earthly Inspired · Uniquely Imperfect</p>

        </h3>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
