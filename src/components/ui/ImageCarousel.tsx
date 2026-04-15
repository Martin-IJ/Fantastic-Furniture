"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt?: string;
  className?: string; // used for standardizing height via tailwind container
}

export default function ImageCarousel({ images, alt = "Carousel image", className = "h-[500px]" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // If no images prop passed, avoid rendering entirely
  if (!images || images.length === 0) return null;

  return (
    <div className={`relative w-full overflow-hidden rounded-[32px] ${className} group bg-neutral-100`}>
      <Image 
        src={images[currentIndex]} 
        alt={`${alt} slide ${currentIndex + 1}`} 
        fill 
        className="object-cover transition-opacity duration-500 ease-in-out" 
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <div className="absolute inset-y-0 left-0 flex items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <button 
                onClick={prev} 
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-colors shadow-lg"
                aria-label="Previous image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
             </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <button 
                onClick={next} 
                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-colors shadow-lg"
                aria-label="Next image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
             </button>
          </div>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-6 inset-x-0 flex justify-center space-x-2 z-10">
          {images.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? "bg-white w-6" : "bg-white/50 w-2 hover:bg-white/80"
              }`}
               aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
