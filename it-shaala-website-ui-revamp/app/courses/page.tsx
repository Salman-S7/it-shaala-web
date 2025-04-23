'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, Users, BookOpen, Star, Trophy, Briefcase, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import FAQ from '../components/sections/faq';
import WhyChooseUs from '../components/sections/why-choose-us';
import Features from '../components/sections/features';
import CTA from '../components/sections/cta';
import CourseCard from '../components/ui/course-card';

const courses = [
  {
    id: 'java-fullstack',
    title: 'Java Full Stack Development',
    description: 'Master Java, Spring Boot, React, and MySQL to build enterprise-grade applications',
    duration: '6 months',
    students: '500+',
    modules: '12',
    rating: '4.9',
    icon: '💻',
    color: 'from-blue-600 to-blue-800',
    features: [
      'Core Java & Advanced Java',
      'Spring Boot & Spring MVC',
      'React.js & Redux',
      'MySQL & Hibernate',
      'RESTful APIs',
      'Microservices Architecture',
      'Docker & Kubernetes',
      'AWS Deployment'
    ],
    highlights: [
      'Industry-relevant curriculum',
      'Live project experience',
      'Expert mentorship',
      'Placement assistance',
      'Lifetime access to materials'
    ],
    price: {
      original: '₹45,000',
      discounted: '₹35,000',
      savings: '₹10,000'
    }
  },
  {
    id: 'mern-stack',
    title: 'MERN Stack Development',
    description: 'Become a full-stack developer with MongoDB, Express, React, and Node.js',
    duration: '6 months',
    students: '400+',
    modules: '10',
    rating: '4.8',
    icon: '🚀',
    color: 'from-purple-600 to-purple-800',
    features: [
      'MongoDB & Mongoose',
      'Express.js & Node.js',
      'React.js & Redux',
      'RESTful APIs',
      'Authentication & Authorization',
      'WebSocket & Real-time Apps',
      'AWS Deployment',
      'CI/CD Pipeline'
    ],
    highlights: [
      'Hands-on projects',
      'Industry mentors',
      'Job placement support',
      'Interview preparation',
      'Community access'
    ],
    price: {
      original: '₹40,000',
      discounted: '₹32,000',
      savings: '₹8,000'
    }
  },
  {
    id: 'python-fullstack',
    title: 'Python Full Stack Development',
    description: 'Learn Python, Django, React, and PostgreSQL to build scalable web applications',
    duration: '4 months',
    students: '300+',
    modules: '8',
    rating: '4.7',
    icon: '🐍',
    color: 'from-green-600 to-green-800',
    features: [
      'Python & Django',
      'React.js & Redux',
      'PostgreSQL & ORM',
      'RESTful APIs',
      'Authentication & Authorization',
      'WebSocket & Real-time Apps',
      'AWS Deployment',
      'Testing & Debugging'
    ],
    highlights: [
      'Project-based learning',
      'Expert guidance',
      'Career support',
      'Portfolio building',
      'Networking opportunities'
    ],
    price: {
      original: '₹35,000',
      discounted: '₹28,000',
      savings: '₹7,000'
    }
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Master data analysis, visualization, and business intelligence tools',
    duration: '4 months',
    students: '350+',
    modules: '8',
    rating: '4.8',
    icon: '📊',
    color: 'from-indigo-600 to-indigo-800',
    features: [
      'SQL & Database Management',
      'Python for Data Analysis',
      'Tableau & Power BI',
      'Excel & Advanced Analytics',
      'Data Visualization',
      'Statistical Analysis',
      'Business Intelligence',
      'Data Storytelling'
    ],
    highlights: [
      'Industry-standard tools',
      'Real-world case studies',
      'Hands-on projects',
      'Expert mentorship',
      'Career guidance'
    ],
    price: {
      original: '₹38,000',
      discounted: '₹30,000',
      savings: '₹8,000'
    }
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Become a data scientist with Python, Machine Learning, and AI',
    duration: '6 months',
    students: '400+',
    modules: '10',
    rating: '4.9',
    icon: '🧠',
    color: 'from-purple-600 to-purple-800',
    features: [
      'Python Programming',
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Big Data Technologies',
      'Model Deployment',
      'AI Applications'
    ],
    highlights: [
      'Advanced ML algorithms',
      'Real-world AI projects',
      'Industry experts',
      'Portfolio building',
      'Job placement support'
    ],
    price: {
      original: '₹45,000',
      discounted: '₹38,000',
      savings: '₹7,000'
    }
  }
];

export default function Courses() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Java Full Stack Developer',
      company: 'Tech Solutions Inc.',
      image: '/testimonials/rahul.jpg',
      content: 'The Java Full Stack course transformed my career. The hands-on projects and expert guidance helped me land my dream job within 2 months of completing the course.'
    },
    {
      name: 'Priya Patel',
      role: 'Data Scientist',
      company: 'AI Innovations',
      image: '/testimonials/priya.jpg',
      content: 'The Data Science program was comprehensive and practical. The instructors were industry experts who provided valuable insights and real-world experience.'
    },
    {
      name: 'Amit Kumar',
      role: 'MERN Stack Developer',
      company: 'Digital Solutions',
      image: '/testimonials/amit.jpg',
      content: 'The MERN Stack course gave me the confidence to build full-stack applications. The project-based learning approach was extremely effective.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-54 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-purple-50"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Career with Our <span className="text-blue-600">Tech Courses</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Master in-demand technologies and build a successful career in software development
            </p>
          </motion.div>
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

      <CTA />
    </div>
  );
} 