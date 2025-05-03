"use client";

import FAQ from "../components/sections/faq";
import Features from "../components/sections/features";
import CTA from "../components/sections/cta";
import CourseCard from "../components/ui/course-card";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    id: "java-fullstack",
    title: "Java Full Stack Development",
    description:
      "Master Java, Spring Boot, React, and MySQL to build enterprise-grade applications",
    duration: "6 months",
    students: "500+",
    modules: "12",
    rating: "4.9",
    icon: "💻",
    color: "from-blue-600 to-blue-800",
    features: [
      "Core Java & Advanced Java",
      "Spring Boot & Spring MVC",
      "React.js & Redux",
      "MySQL & Hibernate",
      "RESTful APIs",
      "Microservices Architecture",
      "Docker & Kubernetes",
      "AWS Deployment",
    ],
    highlights: [
      "Industry-relevant curriculum",
      "Live project experience",
      "Expert mentorship",
      "Placement assistance",
      "Lifetime access to materials",
    ],
    price: {
      original: "₹45,000",
      discounted: "₹35,000",
      savings: "₹10,000",
    },
  },
  {
    id: "mern-stack",
    title: "MERN Stack Development",
    description:
      "Become a full-stack developer with MongoDB, Express, React, and Node.js",
    duration: "6 months",
    students: "400+",
    modules: "10",
    rating: "4.8",
    icon: "🚀",
    color: "from-purple-600 to-purple-800",
    features: [
      "MongoDB & Mongoose",
      "Express.js & Node.js",
      "React.js & Redux",
      "RESTful APIs",
      "Authentication & Authorization",
      "WebSocket & Real-time Apps",
      "AWS Deployment",
      "CI/CD Pipeline",
    ],
    highlights: [
      "Hands-on projects",
      "Industry mentors",
      "Job placement support",
      "Interview preparation",
      "Community access",
    ],
    price: {
      original: "₹40,000",
      discounted: "₹32,000",
      savings: "₹8,000",
    },
  },
  {
    id: "python-fullstack",
    title: "Python Full Stack Development",
    description:
      "Learn Python, Django, React, and PostgreSQL to build scalable web applications",
    duration: "4 months",
    students: "300+",
    modules: "8",
    rating: "4.7",
    icon: "🐍",
    color: "from-green-600 to-green-800",
    features: [
      "Python & Django",
      "React.js & Redux",
      "PostgreSQL & ORM",
      "RESTful APIs",
      "Authentication & Authorization",
      "WebSocket & Real-time Apps",
      "AWS Deployment",
      "Testing & Debugging",
    ],
    highlights: [
      "Project-based learning",
      "Expert guidance",
      "Career support",
      "Portfolio building",
      "Networking opportunities",
    ],
    price: {
      original: "₹35,000",
      discounted: "₹28,000",
      savings: "₹7,000",
    },
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description:
      "Master data analysis, visualization, and business intelligence tools",
    duration: "4 months",
    students: "350+",
    modules: "8",
    rating: "4.8",
    icon: "📊",
    color: "from-indigo-600 to-indigo-800",
    features: [
      "SQL & Database Management",
      "Python for Data Analysis",
      "Tableau & Power BI",
      "Excel & Advanced Analytics",
      "Data Visualization",
      "Statistical Analysis",
      "Business Intelligence",
      "Data Storytelling",
    ],
    highlights: [
      "Industry-standard tools",
      "Real-world case studies",
      "Hands-on projects",
      "Expert mentorship",
      "Career guidance",
    ],
    price: {
      original: "₹38,000",
      discounted: "₹30,000",
      savings: "₹8,000",
    },
  },
  {
    id: "data-science",
    title: "Data Science",
    description:
      "Become a data scientist with Python, Machine Learning, and AI",
    duration: "6 months",
    students: "400+",
    modules: "10",
    rating: "4.9",
    icon: "🧠",
    color: "from-purple-600 to-purple-800",
    features: [
      "Python Programming",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Big Data Technologies",
      "Model Deployment",
      "AI Applications",
    ],
    highlights: [
      "Advanced ML algorithms",
      "Real-world AI projects",
      "Industry experts",
      "Portfolio building",
      "Job placement support",
    ],
    price: {
      original: "₹45,000",
      discounted: "₹38,000",
      savings: "₹7,000",
    },
  },
];

function Courses() {
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
                Explore courses.
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Career with Our Tech Courses
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Master in-demand technologies and build a successful career in software development
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


      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

      {/* Use existing WhyChooseUs component */}
      <Features />

      {/* Use existing FAQ component */}
      <FAQ />

      <CTA
        title="Ready to Start Your Tech Journey?"
        description="Join hundreds of successful students who have transformed their careers with IT Shaala"
        buttonText="Enroll Now"
        buttonLink="/enroll"
      />
    </div>
  );
}

export default Courses;
