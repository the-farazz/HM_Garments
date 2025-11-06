"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { products } from "@/data/products";
import { openWhatsApp } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const productId = typeof params.id === 'string' ? params.id : params.id?.[0];
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-playfair text-4xl font-bold text-primary mb-4">
            Product Not Found
          </h1>
          <Link
            href="/shop"
            className="inline-flex items-center space-x-2 text-secondary hover:underline font-inter"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Shop</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/shop"
          className="inline-flex items-center space-x-2 text-secondary hover:underline font-inter mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Shop</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-accent">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              {product.title}
            </h1>
            <p className="font-inter text-3xl text-secondary font-semibold mb-6">
              {product.price}
            </p>
            <p className="font-inter text-lg text-gray-700 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <button
                onClick={() => openWhatsApp(product)}
                className="w-full bg-primary text-white py-4 px-6 rounded-2xl font-inter font-medium hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                Order on WhatsApp
              </button>

              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="font-inter font-semibold text-primary mb-3">
                  Product Details
                </h3>
                <ul className="space-y-2 text-gray-600 font-inter">
                  <li>• Premium quality materials</li>
                  <li>• Comfortable fit</li>
                  <li>• Easy care instructions</li>
                  <li>• Product ID: {product.id}</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="bg-accent py-20 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="font-playfair text-4xl font-bold text-primary mb-4">
                You May Also Like
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
