"use client";

import { useAuth, AuthProvider } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";

  useEffect(() => {
    if (!loading && !user && !isLoginPage) {
      router.push("/admin/login");
    }
  }, [user, loading, router, isLoginPage]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-neutral-50"><div className="w-10 h-10 border-4 border-neutral-200 border-t-neutral-900 rounded-full animate-spin"></div></div>;
  }

  if (!user && !isLoginPage) return null;

  if (isLoginPage) return <>{children}</>;

  return (
    <div className="min-h-screen flex bg-neutral-50">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900 text-white flex flex-col fixed inset-y-0 left-0 z-50">
        <div className="p-8 font-medium text-2xl tracking-tighter border-b border-neutral-800">Admin Panel</div>
        <nav className="flex-1 p-6 space-y-2">
          <Link href="/admin/products" className={`block px-5 py-3.5 rounded-2xl text-[13px] font-bold transition-all ${pathname.includes('/admin/products') ? 'bg-white text-neutral-900 shadow-md' : 'text-neutral-400 hover:text-white hover:bg-neutral-800'}`}>
             Inventory
          </Link>
        </nav>
        <div className="p-6 border-t border-neutral-800">
           <button onClick={logout} className="w-full text-left px-5 py-3.5 text-neutral-400 hover:text-white rounded-2xl text-[13px] font-bold hover:bg-neutral-800 transition-all flex items-center space-x-2">
			   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
               <span>Log Out</span>
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-12 lg:p-16">
         {children}
      </main>
    </div>
  );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
       <AdminLayoutInner>{children}</AdminLayoutInner>
    </AuthProvider>
  );
}
