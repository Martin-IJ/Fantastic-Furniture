"use client";

import { useState, useEffect } from "react";
import FilterTabs from "@/components/ui/FilterTabs";
import ProductGrid from "@/components/ui/ProductGrid";
import ProductCard from "@/components/ui/ProductCard";
import { getProducts, Product } from "@/data/products";

const categories = ["All", "Sofas", "Chairs", "Tables", "Storage", "Decor"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please check your Firebase configuration.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (product.tags && product.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8 md:py-16 min-h-screen">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div className="max-w-2xl">
          <h1 className="text-[40px] md:text-[52px] leading-tight font-medium tracking-tight text-neutral-900 mb-4">
            Our Collection
          </h1>
          <p className="text-neutral-500 font-medium text-[15px]">
            Explore our vast catalog of premium minimalist furniture designed to bring joy and comfort to your environment.
          </p>
        </div>
        
        {/* Search */}
        <div className="w-full max-w-sm">
          <div className="bg-neutral-100 rounded-full flex items-center p-2 border border-neutral-200 focus-within:bg-white focus-within:border-neutral-400 transition-colors">
            <svg className="w-5 h-5 ml-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            <input 
              type="text" 
              placeholder="Search products, styles, or tags..." 
              className="bg-transparent border-none text-[13px] font-medium w-full px-3 py-2 outline-none placeholder:text-neutral-400 text-neutral-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <FilterTabs 
        tabs={categories} 
        defaultTab={activeCategory} 
        onTabChange={setActiveCategory}
      />

      {/* Dynamic Grid / States */}
      {loading ? (
        <div className="py-32 flex flex-col items-center justify-center">
          <div className="w-10 h-10 border-4 border-neutral-200 border-t-neutral-900 rounded-full animate-spin mb-4"></div>
          <p className="text-neutral-500 font-medium animate-pulse">Loading collection...</p>
        </div>
      ) : error ? (
        <div className="py-24 text-center bg-red-50/50 rounded-[32px] border border-red-100">
           <h3 className="text-xl font-bold text-red-600 mb-2">Connection Error</h3>
           <p className="text-sm text-red-500 font-medium max-w-md mx-auto">{error}</p>
        </div>
      ) : filteredProducts.length > 0 ? (
        <ProductGrid columns={3}>
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              image={product.images && product.images.length > 0 ? product.images[0] : ""}
              name={product.name}
              price={product.price}
              rating={product.rating}
              className="aspect-[3/4]"
              overlayStyle="bottom-5 inset-x-5" 
            />
          ))}
        </ProductGrid>
      ) : (
        <div className="py-32 flex flex-col items-center justify-center text-center bg-neutral-50 border border-neutral-100 rounded-[32px]">
          <h3 className="text-xl font-bold text-neutral-900 mb-2">No products found</h3>
          <p className="text-sm text-neutral-500 font-medium max-w-sm">We couldn&apos;t find any products matching your search criteria. Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
}
