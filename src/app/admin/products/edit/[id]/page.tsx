import ProductForm from "@/components/admin/ProductForm";
import Link from "next/link";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <div className="max-w-3xl">
      <div className="mb-6">
        <Link href="/admin/products" className="text-[12px] font-bold text-neutral-400 hover:text-neutral-900 transition-colors flex items-center space-x-1.5">
           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
           <span>Back to Inventory</span>
        </Link>
      </div>
      <ProductForm productId={id} />
    </div>
  );
}
