import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Left Card */}
      <div className="bg-[#F3F4F3] rounded-[32px] p-5 md:p-8 flex flex-col justify-between relative overflow-hidden min-h-[500px]">
        {/* <div> */}
          <h1 className="text-3xl md:text-5xl lg:text-[62px] leading-[1.05] font-medium text-center md:text-start tracking-tight text-[#1A1A1A] mb-10">
            Elevate Your Space with Elegant Simplicity Furniture Design
          </h1>

          <div className="flex justify-center md:justify-start flex-wrap gap-3 mb-12">
            <span className="px-6 py-2.5 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-800 bg-white shadow-sm">
              Popular
            </span>
            <span className="px-6 py-2.5 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-500 bg-transparent hover:bg-neutral-200/50 cursor-pointer transition-colors">
              Exclusive
            </span>
            <span className="px-6 py-2.5 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-500 bg-transparent hover:bg-neutral-200/50 cursor-pointer transition-colors">
              Hot Price
            </span>
            <span className="px-6 py-2.5 rounded-full border border-neutral-300 text-xs font-semibold text-neutral-500 bg-transparent hover:bg-neutral-200/50 cursor-pointer transition-colors">
              Limited Edition
            </span>
          </div>
        {/* </div> */}

        {/* Floating Product Card */}
        <div className="bg-white rounded-[24px] p-4 flex items-center space-x-5 shadow-sm w-full md:h-52 relative z-10">
          <div className="w-24 md:w-[50%] h-full rounded-2xl overflow-hidden relative flex-shrink-0 bg-neutral-100">
            <Image
              src="/wooden_desk.png"
              alt="Furniture detail"
              fill
              sizes="(max-width: 768px) 100vw, 150px"
              className="object-cover"
            />
          </div>

          <div>
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 mb-1.5 block">
                New Arrival
              </span>
              <h3 className="text-lg font-semibold text-neutral-900 mb-1.5 leading-tight">
                Magna Kama Syui
              </h3>
              <p className="text-xs text-neutral-500 line-clamp-2 leading-relaxed font-medium pr-2">
                Experience high-end minimalist modern detailing with everyday
                design masters pieces.
              </p>
            </div>
            <button className="flex-shrink-0 w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 mt-auto transition-colors text-neutral-900">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="relative rounded-[32px] overflow-hidden min-h-[600px] h-full group">
        <Image
          src="/images/IMG_3141.jpg"
          alt="Modern Loft Sofa"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
          priority
        />
        {/* Bottom Glass Card */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[24px] p-8 shadow-2xl flex items-end justify-between">
            <div>
              <h2 className="text-[28px] font-medium text-white mb-2 shadow-sm drop-shadow-md">
                Modern Loft Sofa set
              </h2>
              <p className="text-sm text-white/90 max-w-sm drop-shadow-md font-medium leading-relaxed">
                Built with quality designed for longevity and styled to impress.
              </p>
              <div className="mt-6">
                <button className="h-10 px-6 bg-white text-neutral-900 text-xs font-bold rounded-full hover:bg-white/90 transition-colors flex items-center space-x-2">
                  <span>View Product</span>
                  <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center -mr-2">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-[11px] font-bold text-white">4.8</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
