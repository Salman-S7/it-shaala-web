import ContactForm from "@/app/components/sections/contact-form";
import ContactInfo from "@/app/components/sections/contact-info";
import ContactMap from "@/app/components/sections/contact-map";
import { Phone, Mail, MapPin } from "lucide-react";
import CTA from "../components/sections/cta";

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions? We&apos;d love to hear from you. Send us a message
              and we&apos;ll respond as soon as possible.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply opacity-10 animate-blob" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply opacity-10 animate-blob animation-delay-4000" />
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Phone */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Mon-Sat: 9AM to 7PM</p>
              <a
                href="tel:+919876543210"
                className="text-blue-600 hover:text-blue-700 block"
              >
                +91 98765 43210
              </a>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">
                We&apos;ll respond within 24 hours
              </p>
              <a
                href="mailto:info@itshaala.com"
                className="text-blue-600 hover:text-blue-700 block"
              >
                info@itshaala.com
              </a>
            </div>

            {/* Location */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-2">
                University Road, Shivajinagar, Pune
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

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
