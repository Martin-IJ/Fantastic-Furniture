import Image from "next/image";
import Link from "next/link";
import RatingStars from "./RatingStars";

interface ProductCardProps {
  id?: string;
  image: string;
  name: string;
  price?: string | number;
  rating?: number;
  className?: string;
  overlayStyle?: string;
}

export default function ProductCard({ 
  id,
  image, 
  name, 
  price, 
  rating, 
  className = "aspect-[4/5]", 
  overlayStyle = "bottom-6 inset-x-6" 
}: ProductCardProps) {
  const content = (
    <div className="relative rounded-[32px] overflow-hidden bg-neutral-100 group w-full h-full">
      {image ? (
        <Image 
          src={image} 
          alt={name} 
          fill 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.05]"
          loading="lazy"
        />
      ) : (
        <div className="absolute inset-0 bg-neutral-200 flex items-center justify-center">
          <svg className="text-neutral-400 w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        </div>
      )}

      {/* Dark gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out" />

      {/* Overlay */}
      <div className={`absolute ${overlayStyle}`}>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[20px] p-5 shadow-lg flex flex-col justify-between 
          opacity-90 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-400 ease-out">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-white font-semibold drop-shadow-md text-[16px] leading-tight mb-1">{name}</h3>
              {price !== undefined && (
                <p className="text-white/90 text-sm font-bold drop-shadow-sm mb-3">
                  ${typeof price === "number" ? price.toFixed(2) : price}
                </p>
              )}
              <button className="h-8 px-4 bg-white text-neutral-900 text-[11px] font-bold rounded-full flex items-center space-x-1.5 
                hover:bg-neutral-100 active:scale-95 transition-all duration-200 mt-1">
                <span>View Product</span>
                <div className="w-4 h-4 rounded-full bg-neutral-100 flex items-center justify-center border border-white/50">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </button>
            </div>
            
            {typeof rating === "number" && (
              <div className="flex flex-col items-end space-y-2 ml-2 flex-shrink-0">
                <div className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="text-amber-300">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-[11px] font-bold text-white">{rating.toFixed(1)}</span>
                </div>
                <div className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-75">
                  <RatingStars rating={rating} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  if (id) {
    return (
      <Link href={`/products/${id}`} className={`block w-full ${className} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded-[32px]`}>
        {content}
      </Link>
    );
  }

  return <div className={`w-full ${className}`}>{content}</div>;
}
