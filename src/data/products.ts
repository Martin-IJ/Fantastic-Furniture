import { collection, doc, getDoc, getDocs, query, where, limit, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  category: string;
  tags: string[];
  images: string[];
  description: string;
  createdAt?: string;
}

const COLLECTION_NAME = "products";

export async function getProducts(): Promise<Product[]> {
  let firestoreProducts: Product[] = [];
  try {
    const snapshot = await getDocs(collection(db, COLLECTION_NAME));
    firestoreProducts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
  } catch (err) {
    console.error("Firestore fetch failed, falling back to mock only:", err);
  }
  
  // Combine: Firestore first, then Mock
  return [...firestoreProducts, ...mockProducts];
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Product;
    }
  } catch (err) {
    console.error("Firestore getById failed:", err);
  }

  // Fallback to mock data
  return mockProducts.find(p => p.id === id) || null;
}

export async function getRelatedProducts(category: string, currentId: string): Promise<Product[]> {
  const q = query(
    collection(db, COLLECTION_NAME), 
    where("category", "==", category),
    limit(4)
  );
  
  const snapshot = await getDocs(q);
  const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Product));
  
  // Filter out the current product and return up to 3 related items
  return products.filter(p => p.id !== currentId).slice(0, 3);
}

// Write Operations
export async function addProduct(product: Omit<Product, "id">): Promise<string> {
  const docRef = await addDoc(collection(db, COLLECTION_NAME), product);
  return docRef.id;
}

export async function updateProduct(id: string, data: Partial<Product>): Promise<void> {
  const docRef = doc(db, COLLECTION_NAME, id);
  await updateDoc(docRef, data);
}

export async function deleteProduct(id: string): Promise<void> {
  const docRef = doc(db, COLLECTION_NAME, id);
  await deleteDoc(docRef);
}

// Keeping the mock data array exported for optional future database seeding scripts
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Magna Kama Syui",
    price: 349.99,
    rating: 4.9,
    category: "Storage",
    tags: ["New Arrival", "Exclusive"],
    images: ["/wooden_desk.png"],
    description: "Experience high-end minimalist modern detailing with everyday design masters pieces. Perfect for storing away your daily essentials elegantly.",
    createdAt: "2024-01-01T10:00:00Z"
  },
  {
    id: "2",
    name: "Modern Loft Sofa Set",
    price: 1299.99,
    rating: 4.8,
    category: "Sofas",
    tags: ["Popular", "Eco-friendly"],
    images: ["/images/IMG_3141.jpg", "/hero_green_chair.png"],
    description: "Built with quality designed for longevity and styled to impress. Enjoy premium comfort that completely transforms your living space.",
    createdAt: "2024-01-02T10:00:00Z"
  },
  {
    id: "3",
    name: "Modern Study Table",
    price: 499.00,
    rating: 4.9,
    category: "Tables",
    tags: ["Minimalist", "Popular"],
    images: ["/wooden_desk.png"],
    description: "Sleek and functional study table with clean lines, built to maximize your productivity while maintaining absolute aesthetic dominance.",
    createdAt: "2024-01-03T10:00:00Z"
  },
  {
    id: "4",
    name: "Aesthetic Oak Table",
    price: 890.00,
    rating: 4.7,
    category: "Tables",
    tags: ["Premium", "Wood"],
    images: ["/images/sitting room chair.PNG", "/chair.png"],
    description: "Beautifully smooth aesthetic oak table crafted for large dining rooms and gathering spots. Minimalist wood finish.",
    createdAt: "2024-01-04T10:00:00Z"
  },
  {
    id: "5",
    name: "Nature Green Sofa",
    price: 1049.99,
    rating: 4.9,
    category: "Sofas",
    tags: ["Hot Price", "Popular"],
    images: ["/hero_green_chair.png"],
    description: "Infuse nature into your interior with our signature green velvet sofa. Extra plush with resilient internal springs.",
    createdAt: "2024-01-05T10:00:00Z"
  },
  {
    id: "6",
    name: "Elegant Minimal Chair",
    price: 249.99,
    rating: 4.6,
    category: "Chairs",
    tags: ["Limited Edition"],
    images: ["/chair.png"],
    description: "A simple yet breathtaking minimal chair. Strong metallic frame with a supple fabric seat that perfectly hugs the body.",
    createdAt: "2024-01-06T10:00:00Z"
  },
  {
    id: "7",
    name: "Architectural Wood Slats",
    price: 199.99,
    rating: 5.0,
    category: "Decor",
    tags: ["Exclusive"],
    images: ["/wooden_slats.png"],
    description: "Acoustic wooden slatted panels perfect for living room backgrounds. Real wood veneer on recycled acoustic felt.",
    createdAt: "2024-01-07T10:00:00Z"
  }
];
