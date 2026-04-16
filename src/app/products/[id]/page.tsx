"use client";

import { useEffect, useState, use } from "react";
import { getProductById, getRelatedProducts, Product } from "@/data/products";
import ImageCarousel from "@/components/ui/ImageCarousel";
import RatingStars from "@/components/ui/RatingStars";
import ProductGrid from "@/components/ui/ProductGrid";
import ProductCard from "@/components/ui/ProductCard";
import OrderModal from "@/components/ui/OrderModal";
import { ProductDetailSkeleton } from "@/components/ui/Skeletons";

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        
        const data = await getProductById(unwrappedParams.id);
        if (!data) {
          setError("Product not found.");
          return;
        }
        
        setProduct(data);
        
        const relatedData = await getRelatedProducts(data.category, data.id);
        setRelatedProducts(relatedData);

      } catch (err) {
        console.error("Error loading product:", err);
        setError("Failed to load product details. Check Firebase connection.");
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, [unwrappedParams.id]);

  if (loading) return <ProductDetailSkeleton />;

  if (error || !product) {
     return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
           <h3 className="text-xl font-bold text-red-600 mb-2">Notice</h3>
           <p className="text-sm text-red-500 font-medium max-w-sm">{error || "Product unavailable"}</p>
        </div>
     );
  }

  return (
    <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-20 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
        {/* Gallery */}
        <div>
           <ImageCarousel images={product.images || []} className="h-[450px] md:h-[700px] shadow-sm" />
        </div>

        {/* Details Wrapper */}
        <div className="flex flex-col py-2 md:py-8">
          <div className="flex flex-wrap gap-2 mb-6">
            {(product.tags || []).map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full border border-neutral-200 text-[11px] font-bold tracking-wider uppercase text-neutral-500 bg-neutral-50 shadow-sm">{tag}</span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center space-x-6 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">${(product.price || 0).toFixed(2)}</h2>
            <div className="h-6 w-px bg-neutral-200"></div>
            <RatingStars rating={product.rating || 0} showText />
          </div>

          <p className="text-[15px] leading-relaxed font-medium text-neutral-500 mb-10 max-w-xl">
            {product.description}
          </p>

          {/* Action Area */}
          <div className="mt-auto space-y-4 max-w-sm pt-8 border-t border-neutral-100">
            <button onClick={() => setIsModalOpen(true)} className="w-full h-14 bg-neutral-900 text-white rounded-full font-bold text-[13px] hover:bg-neutral-800 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-neutral-900/20 hover:shadow-xl hover:shadow-neutral-900/30">
              <span>Place Order</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            <p className="text-center text-[11px] font-medium text-neutral-400">
              Free shipping on all orders perfectly arranged for fast delivery.
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-neutral-100 pt-20">
          <h3 className="text-3xl font-medium tracking-tight text-neutral-900 mb-10">You might also like</h3>
          <ProductGrid columns={3}>
            {relatedProducts.map(rp => (
              <ProductCard 
                key={rp.id}
                id={rp.id}
                image={rp.images?.[0] || ""}
                name={rp.name}
                price={rp.price}
                rating={rp.rating}
                className="aspect-[4/5]"
                overlayStyle="bottom-6 inset-x-6"
              />
            ))}
          </ProductGrid>
        </section>
      )}

      {/* Order Modal Injection */}
      {product && (
        <OrderModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          product={product} 
        />
      )}
    </div>
  );
}
