"use client";

import { useEffect } from "react";
import { Product } from "@/data/products";
import { generateWhatsAppLink, getCallLink } from "@/lib/orderHelpers";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export default function OrderModal({ isOpen, onClose, product }: OrderModalProps) {
  // Lock body scroll when modal is officially open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-neutral-900/40 backdrop-blur-sm transition-opacity">
      {/* Click outside to securely close the modal */}
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-[32px] p-8 md:p-12 shadow-2xl w-full max-w-md overflow-hidden transform scale-100 transition-transform">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <h3 className="text-2xl font-bold tracking-tight text-neutral-900 mb-2">Place Your Order</h3>
        <p className="text-sm text-neutral-500 font-medium mb-8 leading-relaxed">
          How would you prefer to connect with us to finalize the purchase of your <span className="text-neutral-900 font-bold">{product.name}</span>?
        </p>

        <div className="flex flex-col space-y-4">
          <a
            href={generateWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-14 bg-[#25D366] text-white rounded-2xl font-bold text-[14px] hover:bg-[#20bd5a] transition-all flex items-center justify-center space-x-3 shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            <span>Order via WhatsApp</span>
          </a>

          <a
            href={getCallLink()}
            className="w-full h-14 bg-neutral-100 text-neutral-900 rounded-2xl font-bold text-[14px] hover:bg-neutral-200 transition-all flex items-center justify-center space-x-3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            <span>Make a Phone Call</span>
          </a>
        </div>
      </div>
    </div>
  );
}
