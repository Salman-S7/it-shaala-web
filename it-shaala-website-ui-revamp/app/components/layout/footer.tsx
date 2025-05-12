"use client";

import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-purple-50"></div>

      {/* Decorative gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">IT Shaala</h3>
            <p className="text-gray-600">
              Empowering the next generation of tech professionals with
              industry-relevant skills and knowledge.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/itshaala_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@itshaala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-red-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/itshaala/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/placements#success-stories"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Popular Courses
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/courses/java-fullstack"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Java Full Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/mern-stack"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  MERN Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/python-fullstack"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Python Full Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/data-science"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link
                  href="/courses/data-analytics"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                 Data Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                <span className="text-gray-600">
                  211, Kakade Bizz Icon, 2nd Floor, Block A, Cts no 2687 b,
                  <br />
                  Bhamburda, Shivajinagar, Pune, Maharashtra 411005
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <a
                  href="tel:+918862064497"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  +91 88620 64497
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <a
                  href="mailto:info@itshaala.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  info@itshaala.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} IT Shaala. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/refund-policy"
                className="text-gray-500 hover:text-blue-600 text-sm transition-colors"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
