'use client';

import { motion } from 'framer-motion';
import { Users, Briefcase, Award, CheckCircle2, Building2, ArrowRight } from 'lucide-react';
import CTA from '../components/sections/cta';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: 'Pre-screened Talent',
    description: 'Access to a pool of pre-vetted candidates who have completed intensive training in latest technologies.'
  },
  {
    icon: <Briefcase className="w-12 h-12 text-blue-600" />,
    title: 'Industry-Ready Skills',
    description: 'Our students are trained in real-world projects and industry-standard practices.'
  },
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: 'Cost-Effective Hiring',
    description: 'Reduce recruitment costs and time with our streamlined hiring process.'
  },
  {
    icon: <Building2 className="w-12 h-12 text-blue-600" />,
    title: 'Customized Solutions',
    description: 'We can tailor our training programs to meet your specific requirements.'
  }
];

const hiringProcess = [
  {
    step: '01',
    title: 'Connect With Us',
    description: 'Share your requirements and schedule a consultation with our placement team.'
  },
  {
    step: '02',
    title: 'Review Candidates',
    description: 'Get access to our talent pool and review pre-screened candidate profiles.'
  },
  {
    step: '03',
    title: 'Interview Process',
    description: 'Conduct technical interviews and assessments with shortlisted candidates.'
  },
  {
    step: '04',
    title: 'Make Offers',
    description: 'Select the best candidates and extend job offers through our placement cell.'
  }
];

export default function HireFromUs() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-20">
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
                Hire from us.
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hire Top Tech Talent from IT Shaala
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Access a pool of skilled developers trained in the latest technologies and ready to contribute to your organization&apos;s success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
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


      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Hire From <span className="text-blue-600">IT Shaala</span></h2>
            <p className="text-xl text-gray-600">
              Partner with us to access top tech talent and streamline your recruitment process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  What Makes Our Candidates <span className="text-blue-600">Stand Out</span>
                </h2>
                <div className="space-y-6">
                  {[
                    'Intensive training in full-stack development',
                    'Real-world project experience',
                    'Strong problem-solving skills',
                    'Experience with modern tech stacks',
                    'Soft skills and communication training',
                    'Proven track record of placements'
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <p className="text-lg text-gray-700">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="lg:order-first">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="relative h-[400px] w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform rotate-3 rounded-3xl opacity-10" />
                  <Image
                    src="/students-coding.webp"
                    alt="Students coding"
                    fill
                    className="relative rounded-3xl shadow-2xl object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Hiring <span className="text-blue-600">Process</span></h2>
            <p className="text-xl text-gray-600">
              Our streamlined process makes it easy to find and hire the right talent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {hiringProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all group">
                  <div className="text-5xl font-bold text-blue-600/10 mb-6 group-hover:text-blue-600/20 transition-colors">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < hiringProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-600/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      {/* <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our <span className="text-blue-600">Partners</span></h2>
            <p className="text-xl text-gray-600">
              Companies that trust IT Shaala for their tech hiring needs
            </p>
          </div>
          <HiringPartnersMarquee hiringPartners={[]} />
        </div>
      </section> */}

      

      {/* CTA */}
      <CTA
        title="Ready to Hire Top Tech Talent?"
        description="Connect with our placement team and start hiring skilled developers today."
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
    </main>
  );
}
