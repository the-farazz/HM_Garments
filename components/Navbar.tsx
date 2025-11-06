"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-primary" />
            <span className="font-playfair text-2xl font-bold text-primary">
              HM Garments
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-primary hover:text-secondary transition-colors font-inter font-medium"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-primary hover:text-secondary transition-colors font-inter font-medium"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-primary hover:text-secondary transition-colors font-inter font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-primary hover:text-secondary transition-colors font-inter font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-200 shadow-lg"
        >
          <div className="flex flex-col space-y-3 p-4 text-center">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-primary hover:text-secondary font-inter font-medium"
            >
              Home
            </Link>
            <Link
              href="/shop"
              onClick={() => setIsOpen(false)}
              className="text-primary hover:text-secondary font-inter font-medium"
            >
              Shop
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-primary hover:text-secondary font-inter font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-primary hover:text-secondary font-inter font-medium"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
