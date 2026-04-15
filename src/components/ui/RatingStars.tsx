interface RatingStarsProps {
  rating: number; // e.g., 4.5
  maxStars?: number; // default 5
  showText?: boolean;
  className?: string; // Additional classes for text color/spacing
}

export default function RatingStars({ rating, maxStars = 5, showText = false, className = "" }: RatingStarsProps) {
  return (
    <div className={`flex items-center space-x-1.5 ${className}`}>
      <div className="flex text-yellow-400">
        {[...Array(maxStars)].map((_, i) => {
          const fillPercentage = Math.max(0, Math.min(1, rating - i)) * 100;
          return (
            <div key={i} className="relative">
              {/* background star (empty/gray) */}
              <svg className="w-3.5 h-3.5 text-neutral-300/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              {/* filled star (yellow masked by percentage) */}
              <div 
                className="absolute top-0 left-0 overflow-hidden" 
                style={{ width: `${fillPercentage}%` }}
              >
                 <svg className="w-3.5 h-3.5 text-yellow-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                 </svg>
              </div>
            </div>
          );
        })}
      </div>
      {showText && <span className="text-[11px] font-bold text-neutral-700">{rating.toFixed(1)}</span>}
    </div>
  );
}
