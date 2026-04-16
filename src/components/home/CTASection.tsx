import Image from "next/image";

export default function CTASection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-6 pb-2">
      {/* Left Wood Slat Image */}
      <div className="relative rounded-[32px] overflow-hidden min-h-[500px]">
        <Image src="/wooden_slats.png" alt="Wooden Slats Texture" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        <button className="absolute top-8 left-8 h-10 px-6 bg-white shadow-sm rounded-full text-[11px] font-bold text-neutral-900 flex items-center space-x-2">
          <span>Explore Collection</span>
          <div className="w-5 h-5 rounded-full border border-neutral-200 flex items-center justify-center -mr-1.5">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </button>
      </div>

      {/* Right Content Block */}
      <div className="bg-[#F8F9F8] rounded-[32px] p-10 md:p-14 flex flex-col justify-between">
         <div className="text-center md:text-left mb-16 pt-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6 block text-center">Expectation</span>
            <h2 className="text-3xl md:text-[46px] font-medium tracking-tight text-neutral-900 max-w-2xl mx-auto leading-[1.1] mb-6 text-center">
              We craft spaces where minimalist style meets everyday comfort and modern beauty.
            </h2>
            <p className="text-neutral-500 font-medium text-[15px] text-center max-w-sm mx-auto">
              Minimalist living reimagined through sleek design and refined elegance.
            </p>
         </div>
         
         <div className="flex-grow flex items-end">
            <div className="bg-white rounded-[40px] p-4 md:p-5 shadow-sm border border-neutral-100 flex flex-col md:flex-row items-center gap-8 w-full group overflow-hidden relative">
               <div className="relative w-full h-48 md:w-64 md:h-64 rounded-[32px] overflow-hidden flex-shrink-0 animate-fade-in-up">
                 <Image 
                   src="/images/ceo_mdd.jpg" 
                   alt="CEO/MD of Fantastic Furniture" 
                   fill 
                   sizes="(max-width: 768px) 100vw, 256px"
                   className="object-cover transition-transform duration-700 group-hover:scale-110"
                 />
               </div>
               
               <div className="flex-1 text-center md:text-left animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                 <div className="mb-4">
                   <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1">Fatai Abdusalam</h3>
                   <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-neutral-400">CEO/MD of Fantastic Furniture</span>
                 </div>
                 
                 <p className="text-neutral-500 font-medium text-[15px] md:text-[17px] leading-relaxed mb-8 italic">
                   &quot;Our mission is simple: to bring the highest quality minimalist furniture into every home, making modern elegance accessible and sustainable for everyone.&quot;
                 </p>
               </div>

               {/* Subtle background decoration */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-10 blur-3xl opacity-50" />
            </div>
         </div>
      </div>
    </section>
  );
}
