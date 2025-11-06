"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
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
              Get in Touch
            </h1>
            <p className="font-inter text-xl text-gray-600">
              We'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-secondary rounded-full p-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-primary mb-1">
                    Phone
                  </h3>
                  <p className="text-gray-600">03313551888</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary rounded-full p-3">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-primary mb-1">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/923313551888"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:underline"
                  >
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary rounded-full p-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-primary mb-1">
                    Email
                  </h3>
                  <p className="text-gray-600">hmgarmentspakistan@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary rounded-full p-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-primary mb-1">
                    Location
                  </h3>
                  <p className="text-gray-600">Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair text-3xl font-bold text-primary mb-6">
              Send us a Message
            </h2>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-inter font-medium text-primary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-secondary font-inter"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-inter font-medium text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-secondary font-inter"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-inter font-medium text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:border-secondary font-inter resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <a
                href="mailto:hmgarmentspakistan@gmail.com"
                className="inline-block w-full text-center bg-primary text-white py-4 px-6 rounded-2xl font-inter font-medium hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                Send Message
              </a>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
