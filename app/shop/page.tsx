"use client";

import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";
import { motion } from "framer-motion";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-4">
              Our Collection
            </h1>
            <p className="font-inter text-xl text-gray-600">
              Explore our premium garments
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProductGrid products={products} />
      </section>
    </div>
  );
}
