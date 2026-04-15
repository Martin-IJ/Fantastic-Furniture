import Image from "next/image";

export default function BannerSection() {
  return (
    <section className="w-full relative rounded-[32px] overflow-hidden h-[500px] md:h-[750px] bg-neutral-100 mt-20">
      <Image 
        src="/images/sitting room chair.PNG" 
        alt="Elegant Minimal Chair" 
        fill 
        sizes="100vw"
        className="object-cover object-center" 
      />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center space-x-4">
         {/* small overlay UI like the image zoom controls */}
         <div className="px-8 py-3.5 rounded-full bg-black/20 backdrop-blur-md text-white flex items-center space-x-8 border border-white/20 shadow-xl">
           <button className="hover:opacity-100 opacity-80 transition-opacity text-white"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
           <button className="hover:opacity-100 opacity-80 transition-opacity text-white"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><path d="M8 11h6"/><path d="M11 8v6"/></svg></button>
           <button className="hover:opacity-100 opacity-80 transition-opacity text-white"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>
         </div>
      </div>
    </section>
  );
}
