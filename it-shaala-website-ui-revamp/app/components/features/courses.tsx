import { motion } from 'framer-motion';
import CourseCard from '../ui/course-card';

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
  }
];

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