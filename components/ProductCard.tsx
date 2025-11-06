"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { openWhatsApp } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-accent mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <h3 className="font-inter font-semibold text-lg text-primary mb-1">
        {product.title}
      </h3>
      <p className="font-inter text-secondary font-medium mb-3">
        {product.price}
      </p>
      <button
        onClick={() => openWhatsApp(product)}
        className="w-full bg-primary text-white py-3 px-6 rounded-2xl font-inter font-medium hover:bg-secondary hover:text-primary transition-all duration-300"
      >
        Order Now
      </button>
    </motion.div>
  );
}
