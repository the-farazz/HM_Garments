"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
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
              Our Story
            </h1>
            <p className="font-inter text-xl text-gray-600">
              Crafting quality, delivering comfort
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-gray-700 font-inter text-lg leading-relaxed"
        >
          <p>
            At HM Garments, we believe that what you wear shapes how you feel.
            For years, we've been dedicated to creating clothing that doesn't
            just look good it feels incredible and lasts.
          </p>

          <p>
            Every piece in our collection is thoughtfully designed with premiumHM Garments
            fabrics and expert craftsmanship. From the first stitch to the final
            finish, we pour our passion into creating garments that stand the
            test of time.
          </p>

          <p>
            Our mission is simple: to help you wear better and feel better. We
            source sustainable materials, work with skilled artisans, and never
            compromise on quality. Whether it's a casual tee or a formal blazer,
            each item reflects our commitment to excellence.
          </p>

          <p>
            We're more than just a clothing brand we're a community of people
            who value authenticity, comfort, and timeless style. Thank you for
            being part of our journey.
          </p>

          <div className="pt-8">
            <p className="font-playfair text-2xl font-bold text-primary">
              Wear Better, Feel Better
            </p>
            <p className="text-secondary font-semibold mt-2">
              — The HM Garments Team
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
