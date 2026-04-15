import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full pt-6 pb-2 px-6 md:px-12 max-w-[1600px] mx-auto">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold tracking-tighter text-neutral-900 group">
            Fantastic Furniture
          </Link>
        </div>

        {/* Center Nav Pill */}
        <div className="hidden md:flex items-center bg-[#F3F4F3] rounded-full p-1.5 space-x-1 border border-neutral-200/60 shadow-sm">
          <Link href="/" className="px-6 py-2.5 bg-white text-sm font-semibold text-neutral-900 rounded-full shadow-sm border border-neutral-100">
            Home
          </Link>
          <Link href="/products" className="px-6 py-2.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors rounded-full hover:bg-neutral-200/50">
            Products
          </Link>
          <Link href="/about" className="px-6 py-2.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors rounded-full hover:bg-neutral-200/50">
            About Us
          </Link>
          <Link href="/contact" className="px-6 py-2.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors rounded-full hover:bg-neutral-200/50">
            Contact
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-5">
          <button className="text-neutral-600 hover:text-neutral-900 transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button className="text-neutral-600 hover:text-neutral-900 transition-colors relative">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span className="absolute -top-1.5 -right-1.5 bg-neutral-900 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
          <div className="flex items-center space-x-3 pl-2">
            <div className="h-10 w-10 rounded-full bg-neutral-200 overflow-hidden border border-neutral-200">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="User Avatar" className="h-full w-full object-cover" />
            </div>
            <div className="hidden lg:block text-left text-xs leading-tight">
              <div className="text-neutral-500 font-medium">Hello,</div>
              <div className="font-bold text-neutral-900">Alex Maxler</div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
