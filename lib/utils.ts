import { Product } from "@/data/products";

export const openWhatsApp = (product: Product) => {
  const message = `Hi, I want to order this product: ${product.title} (ID: ${product.id})`;
  window.open(
    `https://wa.me/923313551888?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
