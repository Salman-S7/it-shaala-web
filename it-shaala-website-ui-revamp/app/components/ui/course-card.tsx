"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  BookOpen,
  Star,
  Trophy,
} from "lucide-react";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  students: string;
  modules: string;
  rating: string;
  icon: string;
  color: string;
  features: string[];
  highlights: string[];
  price: {
    original: string;
    discounted: string;
    savings: string;
  };
}

interface CourseCardProps {
  course: Course;
  index?: number;
  className?: string;
}

export default function CourseCard({
  course,
  index = 0,
  className = "",
}: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {/* Course Header */}
      <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
        <div className="flex items-center justify-between">
          <span className="text-4xl">{course.icon}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-5 h-5 text-yellow-300" />
            <span className="font-semibold">{course.rating}</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-4">{course.title}</h2>
        <p className="text-blue-100 mt-2">{course.description}</p>
      </div>

      {/* Course Stats */}
      <div className="p-6 grid grid-cols-3 gap-4 border-b">
        <div className="text-center">
          <Clock className="w-6 h-6 text-gray-500 mx-auto" />
          <p className="text-sm text-gray-600 mt-1">{course.duration}</p>
        </div>
        <div className="text-center">
          <Users className="w-6 h-6 text-gray-500 mx-auto" />
          <p className="text-sm text-gray-600 mt-1">
            {course.students} Students
          </p>
        </div>
        <div className="text-center">
          <BookOpen className="w-6 h-6 text-gray-500 mx-auto" />
          <p className="text-sm text-gray-600 mt-1">{course.modules} Modules</p>
        </div>
      </div>

      {/* Course Features */}
      {/* <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          What You&apos;ll Learn
        </h3>
        <ul className="space-y-3">
          {course.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Course Highlights */}
      {/* <div className="p-6 bg-gray-50">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Course Highlights
        </h3>
        <ul className="space-y-3">
          {course.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start">
              <Trophy className="w-5 h-5 text-yellow-500 mt-1 mr-2 flex-shrink-0" />
              <span className="text-gray-600">{highlight}</span>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Pricing and CTA */}
      <div className="p-6 border-t">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              {course.price.discounted}
            </span>
            <span className="text-gray-500 line-through ml-2">
              {course.price.original}
            </span>
          </div>
          <span className="text-green-600 font-semibold">
            Save {course.price.savings}
          </span>
        </div>
        <div className="space-y-3">
          <Link
            href={`/courses/${course.id}`}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
          >
            Explore Course
            <ArrowRight className="w-5 h-5" />
          </Link>
          <button className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
            Enroll Now
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
