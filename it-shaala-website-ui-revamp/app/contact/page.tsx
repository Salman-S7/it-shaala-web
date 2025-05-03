"use client";

import ContactForm from "@/app/components/sections/contact-form";
import ContactInfo from "@/app/components/sections/contact-info";
import ContactMap from "@/app/components/sections/contact-map";
import { 
  // Phone,
  // Mail,
  // MapPin, 
  ArrowRight } from "lucide-react";
import CTA from "../components/sections/cta";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-50 mt-20">
      {/* Hero Section */}
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
                Get in touch.
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Have questions? We&apos;d love to hear from you.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                It Shaala is always ready to help you. Get in touch with us if
                you want to learn more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/courses"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Contact us now <ArrowRight className="w-5 h-5" />
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

      {/* Quick Contact Section */}
      {/* <QuickContact /> */}

      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 items-start max-w-7xl mx-auto">
            {/* Contact Form - Takes up 3 columns */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-semibold mb-8">
                Send us a <span className="text-blue-600">Message</span>
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info - Takes up 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8">Our Location</h2>
            <ContactMap />
          </div>
        </div>
      </section>

      <CTA
        title="Have More Questions?"
        description="Our team is here to help you with any queries about our courses and career opportunities."
        buttonText="Chat With Us"
        buttonLink="#contact-form"
      />
    </main>
  );
}

// function QuickContact() {
//   return (
//     <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {/* Phone */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
//             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//               <Phone className="w-6 h-6 text-blue-600" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">Call Us</h3>
//             <p className="text-gray-600 mb-2">Mon-Sat: 9AM to 7PM</p>
//             <a
//               href="tel:+919876543210"
//               className="text-blue-600 hover:text-blue-700 block"
//             >
//               +91 98765 43210
//             </a>
//           </div>

//           {/* Email */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
//             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//               <Mail className="w-6 h-6 text-blue-600" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">Email Us</h3>
//             <p className="text-gray-600 mb-2">
//               We&apos;ll respond within 24 hours
//             </p>
//             <a
//               href="mailto:info@itshaala.com"
//               className="text-blue-600 hover:text-blue-700 block"
//             >
//               info@itshaala.com
//             </a>
//           </div>

//           {/* Location */}
//           <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
//             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//               <MapPin className="w-6 h-6 text-blue-600" />
//             </div>
//             <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
//             <p className="text-gray-600 mb-2">
//               University Road, Shivajinagar, Pune
//             </p>
//             <a
//               href="https://maps.google.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 hover:text-blue-700"
//             >
//               Get Directions
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
