"use client";
import { useEffect, useState } from "react";
import { getProducts, deleteProduct, Product } from "@/data/products";
import Link from "next/link";

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch(err) {
      console.error("Failed to load products list:", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (confirm("Are you sure you want to completely delete this product?")) {
      await deleteProduct(id);
      setProducts(products.filter(p => p.id !== id));
    }
  }

  return (
    <div className="max-w-7xl">
      <div className="flex justify-between items-center mb-12">
        <div>
           <h1 className="text-3xl lg:text-[40px] font-medium tracking-tight text-neutral-900 mb-2">Inventory Management</h1>
           <p className="text-neutral-500 font-medium text-[15px]">Manage your storefront listings.</p>
        </div>
        <Link href="/admin/products/new" className="px-8 py-3.5 bg-neutral-900 text-white text-[13px] font-bold rounded-full hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/10">
          + Add Product
        </Link>
      </div>

      <div className="bg-white border border-neutral-200 rounded-[32px] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-[#F8F9F8] text-neutral-400 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-8 py-5">Product Asset</th>
                <th className="px-8 py-5">Item Name</th>
                <th className="px-8 py-5">List Price</th>
                <th className="px-8 py-5">Category</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100/60 font-medium text-neutral-900">
              {loading ? (
                <tr><td colSpan={5} className="px-8 py-16 text-center text-neutral-500 animate-pulse">Loading database structure...</td></tr>
              ) : products.length === 0 ? (
                <tr><td colSpan={5} className="px-8 py-16 text-center text-neutral-500">Database is empty. Add a product above.</td></tr>
              ) : (
                products.map(p => (
                  <tr key={p.id} className="hover:bg-neutral-50/50 transition-colors group">
                    <td className="px-8 py-5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.images?.[0] || ""} alt="" className="w-12 h-12 rounded-xl object-cover bg-neutral-100 shadow-sm border border-neutral-100" />
                    </td>
                    <td className="px-8 py-5 font-bold tracking-tight text-[15px]">{p.name}</td>
                    <td className="px-8 py-5 text-neutral-500">${p.price.toFixed(2)}</td>
                    <td className="px-8 py-5">
                       <span className="px-3 py-1 rounded-full border border-neutral-200 text-[10px] font-bold tracking-wider uppercase text-neutral-500 bg-white">
                          {p.category}
                       </span>
                    </td>
                    <td className="px-8 py-5 text-right space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                       <Link href={`/admin/products/edit/${p.id}`} className="text-[12px] font-bold text-neutral-400 hover:text-neutral-900 transition-colors">Edit</Link>
                       <button onClick={() => handleDelete(p.id)} className="text-[12px] font-bold text-red-400 hover:text-red-600 transition-colors">Remove</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
