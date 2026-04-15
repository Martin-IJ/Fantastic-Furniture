"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/products");
    } catch (err: any) {
      setError("Invalid email or password access.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4 relative">
      <Link href="/" className="absolute top-8 left-8 text-[12px] font-bold text-neutral-500 hover:text-neutral-900 transition-colors flex items-center space-x-1.5">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
         <span>Back to Home</span>
      </Link>
      <div className="bg-white p-10 rounded-[32px] shadow-sm border border-neutral-100 max-w-sm w-full relative overflow-hidden">
        <h1 className="text-2xl font-bold text-neutral-900 mb-2">Admin Dashboard</h1>
        <p className="text-sm text-neutral-500 mb-8 font-medium">Log into the secure developer interface.</p>
        
        {error && <div className="mb-6 p-3.5 bg-red-50/50 border border-red-100 text-red-600 rounded-xl text-[12px] font-bold text-center">{error}</div>}
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
             <label className="block text-[11px] font-bold text-neutral-900 mb-2.5 uppercase tracking-wider">Email</label>
             <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-[13px] outline-none focus:bg-white focus:ring-2 focus:ring-neutral-200 transition-colors" />
          </div>
          <div>
             <label className="block text-[11px] font-bold text-neutral-900 mb-2.5 uppercase tracking-wider">Access Token</label>
             <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-[13px] outline-none focus:bg-white focus:ring-2 focus:ring-neutral-200 transition-colors" />
          </div>
          <button disabled={loading} type="submit" className="w-full h-14 bg-neutral-900 text-white font-bold rounded-xl text-[13px] hover:bg-neutral-800 transition-colors mt-4 disabled:opacity-50">
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
