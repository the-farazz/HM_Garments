import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  Music2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">
              HM Garments
            </h3>
            <p className="text-gray-300 font-inter">Wear Better, Feel Better</p>
          </div>

          <div>
            <h4 className="font-inter font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter text-gray-300">
              <li>
                <a href="/" className="hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/shop"
                  className="hover:text-secondary transition-colors"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-secondary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-secondary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-inter font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300 font-inter">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>03313551888</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hmgarmentspakistan@gmail.com</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=61578399812875"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://www.instagram.com/hmgarmentspakistan/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.tiktok.com/@hm.garments87"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
                aria-label="TikTok"
              >
                <Music2 className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 font-inter space-y-2">
          <p>&copy; 2024 HM Garments. All rights reserved.</p><br/>
          <p>
            Made with <span className="text-red-500">❤</span> by{" "}
            <a
              href="https://farazalamportfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-medium hover:text-secondary transition-colors"
            >
              Faraz Alam
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
