"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { addProduct, updateProduct, getProductById } from "@/data/products";
import { storage } from "@/lib/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function ProductForm({ productId }: { productId?: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(!!productId);
  
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    rating: "5",
    category: "Sofas",
    tags: "",
    existingImages: [] as string[],
  });

  // Image Upload States
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  useEffect(() => {
    if (productId) {
      getProductById(productId).then(product => {
        if (product) {
          setFormData({
            name: product.name,
            description: product.description,
            price: product.price.toString(),
            rating: product.rating.toString(),
            category: product.category,
            tags: product.tags.join(", "),
            existingImages: product.images || []
          });
        }
        setFetching(false);
      });
    }
  }, [productId]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImageFiles(prev => [...prev, ...files]);
      
      const newPreviews = files.map(file => URL.createObjectURL(file));
      setPreviews(prev => [...prev, ...newPreviews]);
    }
  };

  const removeNewImage = (index: number) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
    setPreviews(prev => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index]);
      updated.splice(index, 1);
      return updated;
    });
  };

  const removeExistingImage = (index: number) => {
    setFormData(prev => ({
       ...prev,
       existingImages: prev.existingImages.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setUploadProgress(0);
    
    try {
      let finalUrls = [...formData.existingImages];

      if (imageFiles.length > 0) {
        // Upload images concurrently and resolve URLs
        const uploads = imageFiles.map((file, i) => {
          return new Promise<string>((resolve, reject) => {
             const storageRef = ref(storage, `products/${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '')}`);
             const uploadTask = uploadBytesResumable(storageRef, file);
             
             uploadTask.on(
               "state_changed",
               (snapshot) => {
                  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  setUploadProgress(Math.round(progress)); 
               },
               (err) => reject(err),
               async () => {
                 const url = await getDownloadURL(uploadTask.snapshot.ref);
                 resolve(url);
               }
             );
          });
        });
        
        const newUrls = await Promise.all(uploads);
        finalUrls = [...finalUrls, ...newUrls];
      }

      setUploadProgress(null);

      const data = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        rating: parseFloat(formData.rating),
        category: formData.category,
        tags: formData.tags.split(",").map(t => t.trim()).filter(Boolean),
        images: finalUrls
      };

      if (productId) {
        await updateProduct(productId, data);
      } else {
        await addProduct(data);
      }
      router.push("/admin/products");
    } catch (err) {
      console.error(err);
      alert("Failed to strictly upload media or save product structure.");
      setLoading(false);
      setUploadProgress(null);
    }
  };

  if (fetching) return <div className="text-neutral-500 animate-pulse font-medium">Extracting product data...</div>;

  return (
    <div className="max-w-3xl bg-white p-12 rounded-[32px] border border-neutral-200 shadow-sm">
      <h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-10">{productId ? "Edit Product Form" : "Create New Inventory"}</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-2">
            <label className="block text-[11px] font-bold text-neutral-900 mb-2.5 uppercase tracking-wider">Product Name</label>
            <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-[13px] outline-none focus:bg-white focus:ring-2 focus:ring-neutral-200 transition-colors" />
          </div>
          
          <div className="col-span-2">
            <label className="block text-[11px] font-bold text-neutral-900 mb-2.5 uppercase tracking-wider">Descriptive Content</label>
            <textarea required rows={5} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-[13px] outline-none focus:bg-white focus:ring-2 focus:ring-neutral-200 transition-colors"></textarea>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-neutral-900 mb-2.5 uppercase tracking-wider">Tag Price (USD)</label>
            <input required type="number" step="0.01" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-[13px] outline-none focus:bg-white focus:ring-2 focus:ring-neutral-200 transition-colors" />
          </div>
          <div>
            <label className="block text-[11px] font-bold text-neutral-900 mb-2.5 uppercase tracking-wider">Star Rating (0-5)</label>
            <input required type="number" step="0.1" value={formData.rating} onChange={e => setFormData({...formData, rating: e.target.value})} className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-[13px] outline-none focus:bg-white focus:ring-2 focus:ring-neutral-200 transition-colors" />
          </div>
          
          <div className="col-span-2">
            <label className="block text-[11px] font-bold text-neutral-900 mb-2.5 uppercase tracking-wider">Assignment Category</label>
            <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-[13px] outline-none focus:bg-white focus:ring-2 focus:ring-neutral-200 transition-colors">
               <option>Sofas</option>
               <option>Chairs</option>
               <option>Tables</option>
               <option>Storage</option>
               <option>Decor</option>
            </select>
          </div>

          <div className="col-span-2">
             <label className="block text-[11px] font-bold text-neutral-900 mb-2.5 uppercase tracking-wider">Tags (comma separated strings)</label>
             <input type="text" value={formData.tags} onChange={e => setFormData({...formData, tags: e.target.value})} placeholder="Popular, Exclusive, Minimalist" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-[13px] outline-none focus:bg-white focus:ring-2 focus:ring-neutral-200 transition-colors" />
          </div>
          
          {/* Image Upload Zone */}
          <div className="col-span-2 pt-2">
             <label className="block text-[11px] font-bold text-neutral-900 mb-3 uppercase tracking-wider">Product Media Showcase</label>
             
             {/* Built-in File Uploader */}
             <div className="flex items-center justify-center w-full mb-6">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-neutral-300 rounded-2xl cursor-pointer bg-neutral-50 hover:bg-neutral-100 transition-colors">
                   <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                      <p className="mb-2 text-sm text-neutral-500 font-medium"><span className="font-bold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-neutral-400">PNG, JPG or WebP (Multiple allowed)</p>
                   </div>
                   <input type="file" className="hidden" multiple accept="image/*" onChange={handleFileSelect} disabled={loading} />
                </label>
             </div>

             {/* Existing/Preview Images Engine */}
             {(formData.existingImages.length > 0 || previews.length > 0) && (
               <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                 {/* Existing from Database */}
                 {formData.existingImages.map((imgUrl, i) => (
                   <div key={`existing-${i}`} className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100 border border-neutral-200 group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={imgUrl} alt={`Existing ${i}`} className="w-full h-full object-cover" />
                      <button type="button" onClick={() => removeExistingImage(i)} className="absolute top-1.5 right-1.5 bg-white/90 backdrop-blur-sm text-neutral-900 hover:text-red-600 rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm">
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                   </div>
                 ))}
                 
                 {/* New Ones Selected */}
                 {previews.map((previewUrl, i) => (
                   <div key={`new-${i}`} className="relative aspect-square rounded-xl overflow-hidden bg-neutral-100 border-2 border-neutral-900 group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={previewUrl} alt={`New upload preview ${i}`} className="w-full h-full object-cover" />
                      <button type="button" onClick={() => removeNewImage(i)} className="absolute top-1.5 right-1.5 bg-neutral-900/90 backdrop-blur-sm text-white hover:text-red-400 rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-sm">
                         <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                      </button>
                      
                      {uploadProgress !== null && (
                         <div className="absolute inset-x-0 bottom-0 h-1.5 bg-neutral-200">
                            <div className="h-full bg-neutral-900 transition-all duration-300" style={{ width: `${uploadProgress}%` }}></div>
                         </div>
                      )}
                   </div>
                 ))}
               </div>
             )}
          </div>

        </div>
        
        {/* Upload Progress Tracker */}
        {uploadProgress !== null && (
           <div className="w-full bg-neutral-100 rounded-full h-2.5 overflow-hidden">
             <div className="bg-neutral-900 h-2.5 rounded-full transition-all duration-300 ease-out" style={{ width: `${uploadProgress}%` }}></div>
           </div>
        )}

        <div className="pt-8 flex justify-end space-x-3 border-t border-neutral-100 mt-8">
           <button type="button" onClick={() => router.back()} disabled={loading} className="px-6 py-3.5 rounded-full font-bold text-[13px] text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors disabled:opacity-50">Cancel</button>
           <button disabled={loading} type="submit" className="px-10 py-3.5 rounded-full font-bold text-[13px] text-white bg-neutral-900 hover:bg-neutral-800 transition-colors disabled:opacity-50 shadow-lg shadow-neutral-900/10">
              {loading ? (uploadProgress !== null ? `Uploading (${uploadProgress}%)` : "Processing...") : "Upload"}
           </button>
        </div>
      </form>
    </div>
  );
}
