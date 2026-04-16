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
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
           {/* Our Team */}
           <div className="bg-white rounded-[24px] p-6 shadow-sm border border-neutral-100 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[13px] font-bold text-neutral-900">Our Team</span>
                <button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors text-neutral-900">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
              <p className="text-[13px] text-neutral-500 mb-8 font-medium leading-relaxed">Meet with our <span className="font-bold text-neutral-900">creative mind & curation dream</span> furniture.</p>
              <div className="flex -space-x-2.5 relative z-0 mt-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop" className="w-9 h-9 rounded-full border-[2.5px] border-white relative z-30 object-cover" alt="" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop" className="w-9 h-9 rounded-full border-[2.5px] border-white relative z-20 object-cover" alt="" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop" className="w-9 h-9 rounded-full border-[2.5px] border-white relative z-10 object-cover" alt="" />
              </div>
           </div>
           
           {/* Get News */}
           <div className="bg-white rounded-[24px] p-6 shadow-sm border border-neutral-100 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[13px] font-bold text-neutral-900">Get News</span>
                <button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors text-neutral-900">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
              <p className="text-[13px] text-neutral-500 mb-8 font-medium leading-relaxed"><span className="font-bold text-neutral-900">Discover</span> the latest modern & minimalist design.</p>
              <div className="mt-auto">
                <span className="text-[11px] font-bold text-neutral-900 block mb-2.5">Newsletter</span>
                <div className="bg-[#F8F9F8] rounded-full flex items-center p-1.5 border border-neutral-200/60">
                  <input type="email" placeholder="Email address" className="bg-transparent border-none text-[13px] font-medium w-full px-3 outline-none placeholder:text-neutral-400" />
                </div>
                <button className="w-full mt-2.5 h-10 bg-neutral-900 text-white text-[12px] font-bold rounded-full hover:bg-neutral-800 transition-colors shadow-sm">
                  Subscribe
                </button>
              </div>
           </div>

           {/* Chat/Support */}
           <div className="bg-white rounded-[24px] p-6 shadow-sm border border-neutral-100 flex flex-col justify-between">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[13px] font-bold text-neutral-900">Chat/Support</span>
                <button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-colors text-neutral-900">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
              <div className="space-y-5 mt-auto">
                <div>
                  <span className="text-[11px] font-bold text-neutral-900 block mb-1">Contact With Us</span>
                  <p className="text-[13px] font-medium text-neutral-500">+1 000 000 0000</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-neutral-900 block mb-1">Send a Message</span>
                  <p className="text-[13px] font-medium text-neutral-500 line-clamp-1">support@fantasticfurniture.com</p>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-neutral-900 block mb-2">Follow Us</span>
                  <div className="flex space-x-2">
                     <button className="h-8 px-4 border border-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-50 transition-colors text-neutral-500 font-medium text-[11px] space-x-1.5">
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm3.98-10.98a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                       <span>Instagram</span>
                     </button>
                     <button className="h-8 px-4 border border-neutral-200 rounded-full flex items-center justify-center hover:bg-neutral-50 transition-colors text-neutral-500 font-medium text-[11px] space-x-1.5">
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.39 4.48A13.932 13.932 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/></svg>
                       <span>Facebook</span>
                     </button>
                  </div>
                </div>
              </div>
           </div>
         </div>
      </div>
    </section>
  );
}
