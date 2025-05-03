"use client"
import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';
import Link from "next/link";


export default function AboutHero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-block bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                This is our story.
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Next Generation of Coders
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our mission is to create opportunities for aspiring developers and bridge the gap between education and industry demands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/courses"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Explore Courses <ArrowRight className="w-5 h-5" />
                </Link>
                {/* <button
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl border border-gray-200"
                >
                  View Placements <ChevronRight className="w-5 h-5" />
                </button> */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

  );
}
