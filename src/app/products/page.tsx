"use client";

import { useState, useEffect } from "react";
import FilterTabs from "@/components/ui/FilterTabs";
import ProductGrid from "@/components/ui/ProductGrid";
import ProductCard from "@/components/ui/ProductCard";
import { ProductGridSkeleton } from "@/components/ui/Skeletons";
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
        // getProducts now internally merges firestore and mock data
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Critical error in load:", err);
        // Even if the main fetch fails, getProducts is designed to fallback to mock
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
        <ProductGridSkeleton count={6} columns={3} />
      ) : filteredProducts.length > 0 ? (
        <ProductGrid columns={3}>
          {filteredProducts.map((product, i) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 40}ms`, animationFillMode: "both" }}
            >
              <ProductCard 
                id={product.id}
                image={product.images?.[0] || ""}
                name={product.name}
                price={product.price}
                rating={product.rating}
                className="aspect-[3/4]"
                overlayStyle="bottom-5 inset-x-5" 
              />
            </div>
          ))}
        </ProductGrid>
      ) : (
        <div className="py-32 flex flex-col items-center justify-center text-center bg-neutral-50 border border-neutral-100 rounded-[32px]">
          <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
            <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <h3 className="text-xl font-bold text-neutral-900 mb-2">No products found</h3>
          <p className="text-sm text-neutral-500 font-medium max-w-sm">Try adjusting your filters or search query.</p>
        </div>
      )}
    </div>
  );
}
