import Image from "next/image";
import Link from "next/link";
import RatingStars from "./RatingStars";

interface ProductCardProps {
  id?: string;
  image: string;
  name: string;
  price?: string | number;
  rating?: number;
  className?: string; // used for aspect ratios or stagger margins
  overlayStyle?: string; // used for overlay placement (e.g. bottom-6 inset-x-6)
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
    <div className={`relative rounded-[32px] overflow-hidden bg-neutral-100 group w-full h-full`}>
      <Image 
        src={image} 
        alt={name} 
        fill 
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" 
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
      />
      
      {/* Overlay glassmorphism card */}
      <div className={`absolute ${overlayStyle}`}>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[20px] p-5 shadow-lg flex flex-col justify-between hover:bg-white/20 transition-colors duration-300">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-white font-medium mb-1 shadow-sm drop-shadow-md text-[17px]">{name}</h3>
              {price !== undefined && <p className="text-white/90 text-sm font-bold mb-3 drop-shadow-sm">${price}</p>}
              
              <button className="h-8 px-4 bg-white text-neutral-900 text-[11px] font-bold rounded-full flex items-center space-x-2 hover:bg-neutral-100 transition-colors mt-2">
                <span>View Product</span>
                <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center -mr-1.5 border border-white shadow-sm">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              </button>
            </div>
            
            {typeof rating === "number" && (
              <div className="flex flex-col items-end space-y-2">
                <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-[11px] font-bold text-white">{rating.toFixed(1)}</span>
                </div>
                {/* Expand detailed rating stars on hover */}
                <div className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
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
    return <Link href={`/products/${id}`} className={`block w-full ${className}`}>{content}</Link>;
  }

  return <div className={`w-full ${className}`}>{content}</div>;
}
