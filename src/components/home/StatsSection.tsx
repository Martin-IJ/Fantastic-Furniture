export default function StatsSection() {
  return (
    <section className="py-6 border-b border-neutral-100 pb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
           <h2 className="text-[40px] md:text-[52px] leading-tight font-medium tracking-tight text-neutral-900 mb-4">
            Add Comfort To Your Living
          </h2>
          <p className="text-neutral-500 font-medium text-[15px]">
            Design your space for comfort. It is our inspiration and your everyday joy.
          </p>
        </div>
        <div className="max-w-md text-[13px] text-neutral-500 leading-[1.8] md:text-right">
          <span className="font-bold text-neutral-900">Everyone has an innate desire</span> to shape and arrange their surroundings in a way that brings comfort, <span className="font-bold text-neutral-900">beauty, and a sense of belonging.</span> That timeless need is what inspires <span className="font-bold text-neutral-900">every piece we create.</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-neutral-200/60">
        <div className="flex flex-col items-start px-4">
          <span className="text-[64px] font-medium text-neutral-900 tracking-tighter leading-none mb-4">900+</span>
          <span className="text-[13px] font-semibold text-neutral-500 leading-tight">Products that we<br/>have created</span>
        </div>
        <div className="flex flex-col items-start px-8">
          <span className="text-[64px] font-medium text-neutral-900 tracking-tighter leading-none mb-4">21K+</span>
          <span className="text-[13px] font-semibold text-neutral-500 leading-tight">Happy & loyal<br/>customers</span>
        </div>
        <div className="flex flex-col items-start px-8">
          <span className="text-[64px] font-medium text-neutral-900 tracking-tighter leading-none mb-4">95%</span>
          <span className="text-[13px] font-semibold text-neutral-500 leading-tight">Customers purchase<br/>& return again</span>
        </div>
        <div className="flex flex-col items-start px-8">
          <span className="text-[64px] font-medium text-neutral-900 tracking-tighter leading-none mb-4">400+</span>
          <span className="text-[13px] font-semibold text-neutral-500 leading-tight">Unique Design<br/>we crafted</span>
        </div>
      </div>
    </section>
  );
}
