import { motion } from 'framer-motion';
import CourseCard from '../ui/course-card';
import { courses } from '@/app/data/courses';


export default function Courses() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our industry-leading courses and kickstart your tech career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 