export default function AboutPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-32">
      <div className="max-w-3xl animate-fade-in-up">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6 block">Our Story</span>
        <h1 className="text-4xl md:text-[56px] leading-[1.1] font-medium tracking-tight text-neutral-900 mb-10">
          Crafting minimalist spaces for modern living.
        </h1>
        <div className="space-y-6 text-neutral-500 font-medium text-[17px] leading-relaxed">
          <p>
            Fantastic Furniture was founded on a simple principle: beauty should be functional, and minimalism shouldn&apos;t be cold. We believe that the objects you surround yourself with should bring a sense of calm and clarity to your daily life.
          </p>
          <p>
            Our design philosophy centers on clean lines, premium natural materials, and meticulous craftsmanship. Every piece in our collection is curated to ensure it stands the test of time, both in durability and style.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 pt-24 border-t border-neutral-100 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
        <div>
          <h3 className="text-xl font-bold text-neutral-900 mb-4">Quality First</h3>
          <p className="text-neutral-500 text-sm leading-relaxed">We source only the finest sustainable woods and fabrics to ensure each product is a long-term investment.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900 mb-4">Ethical Design</h3>
          <p className="text-neutral-500 text-sm leading-relaxed">Our production partners are held to the highest standards of fair labor and environmental responsibility.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-neutral-900 mb-4">Direct to You</h3>
          <p className="text-neutral-500 text-sm leading-relaxed">By cutting out the middleman, we provide premium designer furniture at honest, accessible prices.</p>
        </div>
      </div>
    </div>
  );
}
