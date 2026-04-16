import Image from "next/image";
import FilterTabs from "../ui/FilterTabs";

const COLLECTION_CATEGORIES = [
  "All Collection",
  "Cozy Corner Armchairs",
  "Soft-Neutral Sofas",
  "Coffee Tables",
  "Minimalist Study Table"
];

export default function CuratedCollections() {
  return (
    <section className="py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div className="max-w-2xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4 block">Product Categories</span>
          <h2 className="text-[40px] md:text-[46px] leading-tight font-medium tracking-tight text-neutral-900 mb-3">Curated Collections</h2>
          <p className="text-neutral-500 font-medium text-[15px]">Discover our minimalist masterpiece.</p>
        </div>
        <div className="max-w-[400px] text-[13px] text-neutral-500 leading-[1.8] md:text-right">
          Discover thoughtfully selected pieces that blend timeless design with everyday comfort. Each collection is crafted to <span className="font-bold text-neutral-900">elevate your space with style</span> and substance.
        </div>
      </div>

      {/* Filter Tabs */}
      <FilterTabs tabs={COLLECTION_CATEGORIES} />

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] bg-neutral-100 group w-full">
          <Image src="/wooden_desk.png" alt="Modern Study Table" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
          <div className="absolute inset-x-6 bottom-6">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[20px] p-5 shadow-lg flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium mb-3 shadow-sm drop-shadow-md text-[17px]">Modern Study Table</h3>
                <button className="h-8 px-4 bg-white text-neutral-900 text-[11px] font-bold rounded-full flex items-center space-x-2 hover:bg-neutral-100 transition-colors">
                  <span>View Product</span>
                  <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center -mr-1.5 border border-white">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </button>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                 <span className="text-[11px] font-bold text-white">4.9</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] bg-neutral-100 group w-full mt-0 lg:mt-24">
          <Image src="/chair.png" alt="Aesthetic Oak Table" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
          <div className="absolute inset-x-6 bottom-6">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[20px] p-5 shadow-lg flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium mb-3 shadow-sm drop-shadow-md text-[17px]">Aesthetic Oak Table</h3>
                <button className="h-8 px-4 bg-white text-neutral-900 text-[11px] font-bold rounded-full flex items-center space-x-2 hover:bg-neutral-100 transition-colors">
                  <span>View Product</span>
                   <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center -mr-1.5 border border-white">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </button>
              </div>
              <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                 <span className="text-[11px] font-bold text-white">4.7</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] bg-neutral-100 group w-full mt-0 lg:-mt-12 lg:mb-12 h-auto">
           <Image src="/hero_green_chair.png" alt="Nature Sofa" fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
           <div className="absolute inset-x-6 bottom-6">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[20px] p-5 shadow-lg flex items-center justify-between">
              <div>
                <h3 className="text-white font-medium mb-3 shadow-sm drop-shadow-md text-[17px]">Nature Sofa</h3>
                <button className="h-8 px-4 bg-white text-neutral-900 text-[11px] font-bold rounded-full flex items-center space-x-2 hover:bg-neutral-100 transition-colors">
                  <span>View Product</span>
                  <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center -mr-1.5 border border-white">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </button>
              </div>
               <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                 <span className="text-[11px] font-bold text-white">4.9</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-12 relative z-10">
        <button className="h-[52px] px-10 bg-neutral-900 text-white font-bold text-[13px] rounded-full hover:bg-neutral-800 transition-colors shadow-2xl flex items-center">
          Explore Collection
        </button>
      </div>
    </section>
  );
}
