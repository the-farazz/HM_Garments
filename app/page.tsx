"use client";

import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import { Truck, Shield, Star, Facebook, Instagram, Music2 } from "lucide-react";

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);

  const socials = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/profile.php?id=61578399812875",
      icon: <Facebook className="w-10 h-10" />,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/hmgarmentspakistan/",
      icon: <Instagram className="w-10 h-10" />,
      color:
        "bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600",
    },
    {
      name: "TikTok",
      link: "https://www.tiktok.com/@hm.garments87",
      icon: <Music2 className="w-10 h-10" />,
      color: "bg-black hover:bg-gray-900",
    },
  ];

  return (
    <div>
      <HeroSection />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Products
          </h2>
          <p className="font-inter text-gray-600">
            Discover our Winter collection
          </p>
        </motion.div>
        <ProductGrid products={featuredProducts} />
      </section>

      <section className="bg-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-2">
                Your Style, Our Priority
              </h3>
              <p className="font-inter text-gray-600">
                Quick and reliable delivery to your doorstep
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-2">
                Quality Assured
              </h3>
              <p className="font-inter text-gray-600">
                Delivering the best fashion experience every time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-full mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-primary mb-2">
                Customer Favorite
              </h3>
              <p className="font-inter text-gray-600">
                Loved by thousands of satisfied customers
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
            Follow Us
          </h2>
          <p className="font-inter text-gray-600">On our Social Media</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`aspect-square flex flex-col items-center justify-center rounded-2xl text-white ${social.color} transition-transform transform hover:scale-105`}
            >
              {social.icon}
              <span className="mt-3 font-semibold text-lg">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
