import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-orange-600 dark:text-orange-400">✈️</span>
              <span>tripsiIndia</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Discover the incredible beauty and rich cultural heritage of India with our curated travel experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#destinations"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  Destinations
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="mb-4 text-gray-900 dark:text-white">Popular Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/place/taj-mahal"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  Taj Mahal
                </Link>
              </li>
              <li>
                <Link
                  to="/place/jaipur"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  Jaipur
                </Link>
              </li>
              <li>
                <Link
                  to="/place/goa"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  Goa
                </Link>
              </li>
              <li>
                <Link
                  to="/place/kerala-backwaters"
                  className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                >
                  Kerala Backwaters
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-gray-900 dark:text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Travel Street, Mumbai, India
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">info@tripsiindia.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 tripsiIndia. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
