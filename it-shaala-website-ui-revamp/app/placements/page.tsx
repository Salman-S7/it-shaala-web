'use client';

import { motion } from 'framer-motion';
import {
  Users,
  TrendingUp,
  Star,
  Award,
  CheckCircle2,
  FileText,
  Target,
  Building2,
  GraduationCap,
  Briefcase,
  Code,
  MessageSquare,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import CTA from '../components/sections/cta';
import HiringPartnersMarquee from '../components/sections/hiring-partners';
import SuccessStories from '../components/sections/success-stories';

const placementStats = [
  {
    icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
    title: "Total Students Placed",
    value: "2000+",
    description: "Students successfully placed in top companies"
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-green-600" />,
    title: "Highest Package",
    value: "₹25 LPA",
    description: "Highest annual package offered to our students"
  },
  {
    icon: <Star className="w-12 h-12 text-yellow-600" />,
    title: "Average Package",
    value: "₹8 LPA",
    description: "Average annual package across all placements"
  },
  {
    icon: <Users className="w-12 h-12 text-purple-600" />,
    title: "Hiring Partners",
    value: "150+",
    description: "Companies actively hiring from our institute"
  }
];

const successStories = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    company: "Tech Solutions Inc.",
    image: "/placements/rahul.jpg",
    package: "₹12 LPA",
    testimonial: "The training and placement support at IT Shaala helped me land my dream job. The mock interviews and resume building sessions were particularly helpful."
  },
  {
    name: "Priya Patel",
    role: "Data Scientist",
    company: "AI Innovations",
    image: "/placements/priya.jpg",
    package: "₹15 LPA",
    testimonial: "The practical projects and industry-relevant curriculum prepared me well for technical interviews. The placement team's guidance was invaluable."
  },
  {
    name: "Amit Kumar",
    role: "Full Stack Developer",
    company: "Digital Solutions",
    image: "/placements/amit.jpg",
    package: "₹10 LPA",
    testimonial: "The placement assistance and interview preparation sessions gave me the confidence to crack multiple job offers. Thank you IT Shaala!"
  }
];

export type HiringPartner = {
  name: string;
  logo: string;
};

const hiringPartners: HiringPartner[] = [
  {
    name: "Deloitte",
    logo: "/deloitte.png"

  },
  {
    name: "Infosys",
    logo: "/infosys.png"

  },
  {
    name: "Capgemini",
    logo: "/capgemini.png"

  },
  {
    name: "Accenture",
    logo: "/accenture.png"

  },
  {
    name: "Genpact",
    logo: "/genpact.png"

  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
  }
];


const placementProcess = [
  {
    step: 1,
    title: "Resume Building",
    description: "Professional resume creation with industry experts",
    icon: <FileText className="w-8 h-8 text-blue-600" />
  },
  {
    step: 2,
    title: "Technical Training",
    description: "Industry-relevant technical skills development",
    icon: <Code className="w-8 h-8 text-green-600" />
  },
  {
    step: 3,
    title: "Mock Interviews",
    description: "Practice interviews with industry professionals",
    icon: <MessageSquare className="w-8 h-8 text-purple-600" />
  },
  {
    step: 4,
    title: "Company Connections",
    description: "Direct interaction with hiring managers",
    icon: <Building2 className="w-8 h-8 text-orange-600" />
  },
  {
    step: 5,
    title: "Interview Preparation",
    description: "Comprehensive interview preparation sessions",
    icon: <Award className="w-8 h-8 text-red-600" />
  },
  {
    step: 6,
    title: "Placement Support",
    description: "Continuous support until job offer",
    icon: <CheckCircle2 className="w-8 h-8 text-yellow-600" />
  }
];

export default function Placements() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white mt-20">
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
                Career Success Stories
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Launch Your Tech Career with Confidence
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our community of successful professionals who have transformed their careers through our comprehensive training and placement support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/courses"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Explore Courses <ArrowRight className="w-5 h-5" />
                </Link>
                <button
                  className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl border border-gray-200"
                >
                  View Placements <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {placementStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">{stat.title}</p>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <SuccessStories />

      {/* Hiring Partners */}
      <HiringPartnersMarquee hiringPartners={hiringPartners} />

      {/* Placement Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our <span className='text-blue-600'>Placement Process</span></h2>
            <p className="text-xl text-gray-600">
              A comprehensive approach to ensure your career success
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {placementProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Top Accent Bar */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Step Number */}
                    <div className="text-5xl font-bold text-blue-600/10 mb-4 group-hover:text-blue-600/20 transition-colors duration-300">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>

                    {/* Icon */}
                    <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Connection Line */}
                    {/* {index < placementProcess.length - 1 && (
                      <div className="absolute top-1/2 -right-8 left-full transform -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 hidden md:block w-8" />
                    )} */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA 
        title="Ready to Launch Your Career?"
        description="Join IT Shaala and get placed in top tech companies."
        buttonText="Start Learning"
        buttonLink="/enroll"
      />

    </div>
  );
}