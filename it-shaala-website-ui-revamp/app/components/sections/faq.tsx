'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '@/app/data/faq';


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleFAQClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-purple-50"></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our courses and programs
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => handleFAQClick(index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 