import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-10 border-t border-neutral-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="text-2xl pt-2 font-bold tracking-tighter text-neutral-900">
          Fantastic Furniture
        </Link>
        <p className="text-sm font-medium text-neutral-500 pt-2">
          &copy; {new Date().getFullYear()} Fantastic Furniture. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
