export function ProductCardSkeleton({ className = "aspect-[4/5]" }: { className?: string }) {
  return (
    <div className={`w-full ${className} rounded-[32px] overflow-hidden bg-neutral-100 animate-pulse`}>
      <div className="w-full h-full bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_200%] animate-shimmer" />
      <div className="absolute bottom-6 inset-x-6">
        <div className="bg-white/20 rounded-[20px] p-5 h-24" />
      </div>
    </div>
  );
}

export function ProductGridSkeleton({ count = 6, columns = 3 }: { count?: number; columns?: number }) {
  const colClass = columns === 2 ? "grid-cols-1 sm:grid-cols-2" : columns === 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid ${colClass} gap-5 md:gap-6`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="aspect-[3/4] rounded-[32px] overflow-hidden bg-neutral-100 animate-pulse relative">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200" />
          <div className="absolute bottom-5 inset-x-5">
            <div className="rounded-[20px] bg-neutral-200/80 p-5 space-y-3">
              <div className="h-4 bg-neutral-300 rounded-full w-3/4" />
              <div className="h-3 bg-neutral-300 rounded-full w-1/3" />
              <div className="h-7 bg-neutral-300 rounded-full w-28 mt-2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-20 min-h-screen animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
        <div className="h-[450px] md:h-[700px] rounded-[32px] bg-neutral-200" />
        <div className="flex flex-col py-2 md:py-8 space-y-6">
          <div className="flex gap-2">
            <div className="h-6 w-20 rounded-full bg-neutral-200" />
            <div className="h-6 w-24 rounded-full bg-neutral-200" />
          </div>
          <div className="h-10 bg-neutral-200 rounded-2xl w-4/5" />
          <div className="h-8 bg-neutral-200 rounded-2xl w-1/3" />
          <div className="space-y-2 pt-2">
            <div className="h-4 bg-neutral-200 rounded-full w-full" />
            <div className="h-4 bg-neutral-200 rounded-full w-5/6" />
            <div className="h-4 bg-neutral-200 rounded-full w-4/5" />
          </div>
          <div className="h-14 bg-neutral-200 rounded-full w-64 mt-8" />
        </div>
      </div>
    </div>
  );
}
