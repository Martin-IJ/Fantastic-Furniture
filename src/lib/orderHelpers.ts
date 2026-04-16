import { Product } from "@/data/products";

// Default placeholder testing number
const SELLER_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_SELLER_PHONE || "1234567890";

export function generateWhatsAppLink(product: Product): string {
  const text = `Hi! I would like to place an order for the following product:

*${product.name}*
Price: $${product.price.toFixed(2)}
Description: ${product.description}

Image: ${product.images?.[0] || 'No image'}

Can you confirm availability?`;

  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${SELLER_WHATSAPP_NUMBER}?text=${encodedText}`;
}

export function getCallLink(): string {
  return `tel:+${SELLER_WHATSAPP_NUMBER}`;
}
