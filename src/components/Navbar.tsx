"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

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
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-6 py-2.5 text-sm transition-all duration-300 rounded-full ${
                  isActive
                    ? "bg-white text-neutral-900 font-semibold shadow-sm border border-neutral-100"
                    : "text-neutral-500 font-medium hover:text-neutral-900 hover:bg-neutral-200/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
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
        </div>
      </nav>
    </header>
  );
}
