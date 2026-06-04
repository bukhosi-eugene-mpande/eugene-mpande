"use client";

import { useState } from "react";
import { basePath } from "../utils/basePath";

interface CarouselSlide {
  imageSrc: string;
  imageAlt: string;
  caption: string;
}

interface CarouselProps {
  slides: CarouselSlide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="hg-90-vh w-full relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${basePath}${slides[current].imageSrc}`}
          alt={slides[current].imageAlt}
          className="w-full hg-90-vh object-cover"
        />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <h1>
            <span className="bg-white text-gray-900 font-poor-story font-bold px-4 py-2 rounded-xl text-2xl md:text-4xl">
              {slides[current].caption}
            </span>
          </h1>
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800 shadow"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center text-gray-800 shadow"
        aria-label="Next"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${i === current ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
