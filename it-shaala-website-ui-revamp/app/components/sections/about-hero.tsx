"use client"
import { ArrowRight } from "lucide-react";
import { motion } from 'framer-motion';
import Link from "next/link";
import LazyVideo from "../ui/lazy-video";


export default function AboutHero() {
  return (
    <section className="min-h-screen relative py-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <LazyVideo
            src="https://itshaala.com/wp-content/uploads/2025/03/Sequence-01_1-1.mp4"
            className="w-full h-full object-cover"
            poster="/about-hero.webp"
          />
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-white/10"></div>
        </div>
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
              <p className="text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
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
