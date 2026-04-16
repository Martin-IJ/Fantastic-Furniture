export default function ContactPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="animate-fade-in-up">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6 block">Connect</span>
          <h1 className="text-4xl md:text-[56px] leading-[1.1] font-medium tracking-tight text-neutral-900 mb-10">
            Get in touch with our design team.
          </h1>
          <p className="text-neutral-500 font-medium text-[17px] mb-12 max-w-md">
            Whether you have a question about our collection or need help with an order, we&apos;re here to help.
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Visit our Studio</h4>
              <p className="text-neutral-900 font-medium">123 Minimalist Way, Design District<br />Craft City, CC 90210</p>
            </div>
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">Digital Enquiries</h4>
              <p className="text-neutral-900 font-medium">hello@fantasticfurniture.com<br />+1 (555) 000-1234</p>
            </div>
          </div>
        </div>

        <div className="bg-neutral-50 rounded-[40px] p-8 md:p-12 border border-neutral-100 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 ml-1">Name</label>
                <input type="text" className="w-full bg-white border border-neutral-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-neutral-200 transition-all" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 ml-1">Email</label>
                <input type="email" className="w-full bg-white border border-neutral-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-neutral-200 transition-all" placeholder="jane@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 ml-1">Message</label>
              <textarea rows={5} className="w-full bg-white border border-neutral-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-2 focus:ring-neutral-200 transition-all resize-none" placeholder="I'm interested in..." />
            </div>
            <button type="submit" className="w-full bg-neutral-900 text-white rounded-2xl py-5 font-bold text-sm hover:bg-neutral-800 transition-all active:scale-[0.98] shadow-lg shadow-neutral-900/10">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
