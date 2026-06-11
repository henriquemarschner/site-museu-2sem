"use client";

import { useState, useEffect } from "react";

const images = [
  { src: "/img/banners/1.svg", alt: "IMAGEM 1" },
  { src: "/img/banners/2.svg", alt: "IMAGEM 2" },
  { src: "/img/banners/3.svg", alt: "IMAGEM 3" },
  { src: "/img/banners/4.svg", alt: "IMAGEM 4" },
  { src: "/img/banners/5.svg", alt: "IMAGEM 5" },
  { src: "/img/banners/6.svg", alt: "IMAGEM 6" },
];

const TRANSITION_DURATION = 5000;
const TRANSITION_STYLE = "transition-opacity duration-700 ease-in-out";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(goToNext, TRANSITION_DURATION);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden h-80">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          } ${TRANSITION_STYLE}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
