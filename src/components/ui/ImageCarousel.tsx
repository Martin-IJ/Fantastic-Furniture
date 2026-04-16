"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt?: string;
  className?: string;
}

export default function ImageCarousel({ images, alt = "Product image", className = "h-[500px]" }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = useCallback((direction: "prev" | "next") => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => 
      direction === "prev"
        ? (prev === 0 ? images.length - 1 : prev - 1)
        : (prev === images.length - 1 ? 0 : prev + 1)
    );
    setTimeout(() => setIsTransitioning(false), 400);
  }, [isTransitioning, images.length]);

  if (!images || images.length === 0) {
    return (
      <div className={`relative w-full overflow-hidden rounded-[32px] ${className} bg-neutral-100 flex items-center justify-center`}>
        <svg className="text-neutral-300 w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden rounded-[32px] ${className} group bg-neutral-100`}>
      <Image 
        key={currentIndex}
        src={images[currentIndex]} 
        alt={`${alt} ${currentIndex + 1}`}
        fill 
        className={`object-cover transition-all duration-500 ease-in-out ${isTransitioning ? "opacity-80 scale-[1.01]" : "opacity-100 scale-100"}`}
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={currentIndex === 0}
        loading={currentIndex === 0 ? "eager" : "lazy"}
      />

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute left-4 bottom-4 top-4 flex flex-col space-y-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {images.map((img, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`relative w-12 h-12 rounded-xl overflow-hidden border-2 transition-all duration-200 flex-shrink-0 shadow-lg ${
                currentIndex === i ? "border-white scale-110" : "border-white/40 hover:border-white/80"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image src={img} alt={`Thumbnail ${i + 1}`} fill className="object-cover" sizes="48px" />
            </button>
          ))}
        </div>
      )}

      {/* Nav arrows */}
      {images.length > 1 && (
        <>
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => navigate("prev")}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 active:scale-90 transition-all duration-200 shadow-lg ml-14"
              aria-label="Previous image"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => navigate("next")}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/40 active:scale-90 transition-all duration-200 shadow-lg"
              aria-label="Next image"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </>
      )}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 inset-x-0 flex justify-center space-x-1.5 z-10">
          {images.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === i ? "bg-white w-5 h-2" : "bg-white/50 w-2 h-2 hover:bg-white/80"
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
