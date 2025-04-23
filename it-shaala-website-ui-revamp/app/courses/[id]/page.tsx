'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, Users, BookOpen, Star, Trophy, Briefcase, Calendar, Award, Code, Book, Laptop, MessageSquare, FileText, ChevronDown, ChevronUp, Play, Lock, Youtube, Linkedin, Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

const courses = {
  'java-fullstack': {
    id: 'java-fullstack',
    title: 'Java Full Stack Development',
    description: 'Master Java, Spring Boot, React, and MySQL to build enterprise-grade applications',
    duration: '6 months',
    students: '500+',
    modules: '12',
    rating: '4.9',
    icon: '💻',
    color: 'from-blue-600 to-blue-800',
    previewVideo: 'https://www.youtube.com/embed/RL2MsyLsCQM?si=jUHdjvzLVgCmfV-n',
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
    },
    curriculum: [
      {
        title: 'Core Java',
        duration: '4 weeks',
        topics: [
          'Java Fundamentals',
          'Object-Oriented Programming',
          'Collections Framework',
          'Exception Handling',
          'Multithreading'
        ]
      },
      {
        title: 'Advanced Java',
        duration: '4 weeks',
        topics: [
          'JDBC & Database Connectivity',
          'Servlets & JSP',
          'Spring Framework',
          'Spring Boot',
          'Spring Security'
        ]
      },
      {
        title: 'Frontend Development',
        duration: '6 weeks',
        topics: [
          'HTML5 & CSS3',
          'JavaScript & ES6+',
          'React.js Fundamentals',
          'Redux & State Management',
          'Material UI & Styling'
        ]
      },
      {
        title: 'Backend Development',
        duration: '6 weeks',
        topics: [
          'RESTful API Design',
          'Spring Data JPA',
          'Hibernate ORM',
          'Microservices Architecture',
          'API Documentation'
        ]
      },
      {
        title: 'Database & DevOps',
        duration: '4 weeks',
        topics: [
          'MySQL & PostgreSQL',
          'Database Design',
          'Docker & Containers',
          'Kubernetes',
          'CI/CD Pipeline'
        ]
      }
    ],
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'Build a full-featured e-commerce platform with user authentication, product management, and payment integration'
      },
      {
        title: 'Social Media Dashboard',
        description: 'Create a social media analytics dashboard with real-time data visualization and reporting'
      },
      {
        title: 'Task Management System',
        description: 'Develop a collaborative task management system with real-time updates and notifications'
      }
    ],
    instructors: [
      {
        name: 'John Doe',
        role: 'Senior Java Developer',
        experience: '8+ years',
        image: '/instructors/john.jpg',
        bio: 'John has worked with leading tech companies and has mentored hundreds of students in their journey to becoming full-stack developers.'
      },
      {
        name: 'Jane Smith',
        role: 'Full Stack Developer',
        experience: '6+ years',
        image: '/instructors/jane.jpg',
        bio: 'Jane specializes in React and Spring Boot development and has helped numerous students land their dream jobs.'
      }
    ],
    testimonials: [
      {
        name: 'Rahul Sharma',
        role: 'Java Full Stack Developer',
        company: 'Tech Solutions Inc.',
        image: '/testimonials/rahul.jpg',
        content: 'The Java Full Stack course transformed my career. The hands-on projects and expert guidance helped me land my dream job within 2 months of completing the course.'
      },
      {
        name: 'Priya Patel',
        role: 'Software Engineer',
        company: 'Digital Innovations',
        image: '/testimonials/priya.jpg',
        content: 'The course structure was perfect, and the instructors were always available to help. The real-world projects gave me the confidence to tackle any development challenge.'
      }
    ]
  },
  'mern-stack': {
    id: 'mern-stack',
    title: 'MERN Stack Development',
    description: 'Master MongoDB, Express.js, React, and Node.js to build modern web applications',
    duration: '5 months',
    students: '450+',
    modules: '10',
    rating: '4.8',
    icon: '🚀',
    color: 'from-purple-600 to-purple-800',
    previewVideo: 'https://www.youtube.com/embed/example1',
    features: [
      'MongoDB & Mongoose',
      'Express.js & Node.js',
      'React.js & Redux',
      'RESTful APIs',
      'Authentication & Authorization',
      'Real-time Applications',
      'Deployment & DevOps',
      'Testing & Debugging'
    ],
    highlights: [
      'Industry-relevant curriculum',
      'Live project experience',
      'Expert mentorship',
      'Placement assistance',
      'Lifetime access to materials'
    ],
    price: {
      original: '₹40,000',
      discounted: '₹32,000',
      savings: '₹8,000'
    },
    curriculum: [
      {
        title: 'JavaScript Fundamentals',
        duration: '3 weeks',
        topics: [
          'ES6+ Features',
          'Async Programming',
          'DOM Manipulation',
          'Error Handling',
          'Modern JavaScript'
        ]
      },
      {
        title: 'Node.js & Express',
        duration: '4 weeks',
        topics: [
          'Node.js Basics',
          'Express Framework',
          'Middleware',
          'RESTful APIs',
          'Error Handling'
        ]
      },
      {
        title: 'MongoDB & Database',
        duration: '3 weeks',
        topics: [
          'MongoDB Basics',
          'Mongoose ODM',
          'Data Modeling',
          'Aggregation',
          'Indexing'
        ]
      },
      {
        title: 'React.js & Redux',
        duration: '5 weeks',
        topics: [
          'React Fundamentals',
          'Hooks & Context',
          'Redux State Management',
          'React Router',
          'Component Lifecycle'
        ]
      }
    ],
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'Build a full-featured e-commerce platform with real-time updates and payment integration'
      },
      {
        title: 'Social Media App',
        description: 'Create a social media application with real-time chat and notifications'
      },
      {
        title: 'Task Management System',
        description: 'Develop a collaborative task management system with real-time updates'
      }
    ],
    instructors: [
      {
        name: 'Alex Johnson',
        role: 'Senior MERN Developer',
        experience: '7+ years',
        image: '/instructors/alex.jpg',
        bio: 'Alex has worked with leading tech companies and specializes in building scalable MERN applications.'
      }
    ],
    testimonials: [
      {
        name: 'Sarah Williams',
        role: 'Full Stack Developer',
        company: 'Tech Innovations',
        image: '/testimonials/sarah.jpg',
        content: 'The MERN Stack course provided me with all the skills needed to build modern web applications. The hands-on projects were particularly valuable.'
      }
    ]
  },
  'python-fullstack': {
    id: 'python-fullstack',
    title: 'Python Full Stack Development',
    description: 'Master Python, Django, React, and PostgreSQL to build robust web applications',
    duration: '6 months',
    students: '400+',
    modules: '12',
    rating: '4.7',
    icon: '🐍',
    color: 'from-green-600 to-green-800',
    previewVideo: 'https://www.youtube.com/embed/example2',
    features: [
      'Python Programming',
      'Django Framework',
      'React.js & Redux',
      'PostgreSQL',
      'RESTful APIs',
      'Authentication',
      'Testing & Debugging',
      'Deployment'
    ],
    highlights: [
      'Industry-relevant curriculum',
      'Live project experience',
      'Expert mentorship',
      'Placement assistance',
      'Lifetime access to materials'
    ],
    price: {
      original: '₹38,000',
      discounted: '₹30,000',
      savings: '₹8,000'
    },
    curriculum: [
      {
        title: 'Python Fundamentals',
        duration: '4 weeks',
        topics: [
          'Python Basics',
          'OOP in Python',
          'Data Structures',
          'File Handling',
          'Error Handling'
        ]
      },
      {
        title: 'Django Framework',
        duration: '5 weeks',
        topics: [
          'Django Basics',
          'Models & ORM',
          'Views & Templates',
          'Forms & Validation',
          'Admin Interface'
        ]
      },
      {
        title: 'Frontend Development',
        duration: '4 weeks',
        topics: [
          'HTML5 & CSS3',
          'JavaScript',
          'React.js',
          'Redux',
          'Material UI'
        ]
      },
      {
        title: 'Database & APIs',
        duration: '4 weeks',
        topics: [
          'PostgreSQL',
          'Django REST Framework',
          'API Design',
          'Authentication',
          'Testing'
        ]
      }
    ],
    projects: [
      {
        title: 'Blog Platform',
        description: 'Build a full-featured blog platform with user authentication and content management'
      },
      {
        title: 'E-learning System',
        description: 'Create an e-learning platform with course management and student progress tracking'
      },
      {
        title: 'Inventory Management',
        description: 'Develop an inventory management system with real-time updates and reporting'
      }
    ],
    instructors: [
      {
        name: 'Michael Chen',
        role: 'Python Developer',
        experience: '8+ years',
        image: '/instructors/michael.jpg',
        bio: 'Michael is a Python expert with extensive experience in Django and full-stack development.'
      }
    ],
    testimonials: [
      {
        name: 'David Kumar',
        role: 'Python Developer',
        company: 'Digital Solutions',
        image: '/testimonials/david.jpg',
        content: 'The Python Full Stack course gave me a solid foundation in both backend and frontend development. The projects were challenging and practical.'
      }
    ]
  },
  'data-science': {
    id: 'data-science',
    title: 'Data Science & Machine Learning',
    description: 'Master Python, Statistics, Machine Learning, and Data Analysis to become a Data Scientist',
    duration: '8 months',
    students: '350+',
    modules: '15',
    rating: '4.9',
    icon: '📊',
    color: 'from-orange-600 to-orange-800',
    previewVideo: 'https://www.youtube.com/embed/example3',
    features: [
      'Python Programming',
      'Statistics & Probability',
      'Machine Learning',
      'Deep Learning',
      'Data Visualization',
      'Big Data Tools',
      'Natural Language Processing',
      'Model Deployment'
    ],
    highlights: [
      'Industry-relevant curriculum',
      'Real-world projects',
      'Expert mentorship',
      'Placement assistance',
      'Lifetime access to materials'
    ],
    price: {
      original: '₹50,000',
      discounted: '₹40,000',
      savings: '₹10,000'
    },
    curriculum: [
      {
        title: 'Python for Data Science',
        duration: '4 weeks',
        topics: [
          'Python Basics',
          'NumPy & Pandas',
          'Data Cleaning',
          'Data Visualization',
          'Statistical Analysis'
        ]
      },
      {
        title: 'Machine Learning',
        duration: '6 weeks',
        topics: [
          'Supervised Learning',
          'Unsupervised Learning',
          'Model Evaluation',
          'Feature Engineering',
          'Hyperparameter Tuning'
        ]
      },
      {
        title: 'Deep Learning',
        duration: '5 weeks',
        topics: [
          'Neural Networks',
          'TensorFlow & Keras',
          'CNN & RNN',
          'Transfer Learning',
          'Model Deployment'
        ]
      },
      {
        title: 'Advanced Topics',
        duration: '4 weeks',
        topics: [
          'Natural Language Processing',
          'Computer Vision',
          'Time Series Analysis',
          'Big Data Tools',
          'Model Deployment'
        ]
      }
    ],
    projects: [
      {
        title: 'Customer Churn Prediction',
        description: 'Build a machine learning model to predict customer churn and identify key factors'
      },
      {
        title: 'Image Classification',
        description: 'Create a deep learning model for image classification using CNN'
      },
      {
        title: 'Sentiment Analysis',
        description: 'Develop an NLP model for sentiment analysis of customer reviews'
      }
    ],
    instructors: [
      {
        name: 'Dr. Emily Wilson',
        role: 'Data Scientist',
        experience: '10+ years',
        image: '/instructors/emily.jpg',
        bio: 'Dr. Wilson has extensive experience in machine learning and data science, having worked with leading tech companies.'
      }
    ],
    testimonials: [
      {
        name: 'Priya Sharma',
        role: 'Data Scientist',
        company: 'AI Solutions',
        image: '/testimonials/priya.jpg',
        content: 'The Data Science course provided me with a comprehensive understanding of machine learning and data analysis. The hands-on projects were invaluable.'
      }
    ]
  },
  'data-analytics': {
    id: 'data-analytics',
    title: 'Data Analytics & Business Intelligence',
    description: 'Master data analysis, visualization, and business intelligence tools to drive data-driven decisions',
    duration: '4 months',
    students: '300+',
    modules: '8',
    rating: '4.7',
    icon: '📈',
    color: 'from-blue-600 to-blue-800',
    previewVideo: 'https://www.youtube.com/embed/example4',
    features: [
      'SQL & Database',
      'Data Visualization',
      'Business Intelligence',
      'Statistical Analysis',
      'Excel & Power BI',
      'Tableau',
      'Data Storytelling',
      'Dashboard Creation'
    ],
    highlights: [
      'Industry-relevant curriculum',
      'Real-world projects',
      'Expert mentorship',
      'Placement assistance',
      'Lifetime access to materials'
    ],
    price: {
      original: '₹35,000',
      discounted: '₹28,000',
      savings: '₹7,000'
    },
    curriculum: [
      {
        title: 'Data Analysis Fundamentals',
        duration: '3 weeks',
        topics: [
          'Excel Advanced',
          'Statistical Analysis',
          'Data Cleaning',
          'Data Transformation',
          'Basic SQL'
        ]
      },
      {
        title: 'Data Visualization',
        duration: '4 weeks',
        topics: [
          'Tableau Basics',
          'Power BI',
          'Dashboard Design',
          'Interactive Reports',
          'Data Storytelling'
        ]
      },
      {
        title: 'Business Intelligence',
        duration: '4 weeks',
        topics: [
          'Advanced SQL',
          'ETL Processes',
          'Data Warehousing',
          'Business Metrics',
          'KPI Analysis'
        ]
      },
      {
        title: 'Advanced Analytics',
        duration: '3 weeks',
        topics: [
          'Predictive Analytics',
          'Time Series Analysis',
          'Customer Analytics',
          'Market Analysis',
          'Report Automation'
        ]
      }
    ],
    projects: [
      {
        title: 'Sales Analytics Dashboard',
        description: 'Create an interactive dashboard to analyze sales performance and trends'
      },
      {
        title: 'Customer Behavior Analysis',
        description: 'Analyze customer behavior patterns and create actionable insights'
      },
      {
        title: 'Market Research Report',
        description: 'Develop a comprehensive market research report with data visualization'
      }
    ],
    instructors: [
      {
        name: 'Robert Taylor',
        role: 'Business Intelligence Expert',
        experience: '9+ years',
        image: '/instructors/robert.jpg',
        bio: 'Robert specializes in business intelligence and data analytics, helping companies make data-driven decisions.'
      }
    ],
    testimonials: [
      {
        name: 'Anita Patel',
        role: 'Business Analyst',
        company: 'Global Analytics',
        image: '/testimonials/anita.jpg',
        content: 'The Data Analytics course provided me with practical skills in data visualization and business intelligence. The projects were directly applicable to my work.'
      }
    ]
  }
};

export default function CourseDetail() {
  const params = useParams();
  const course = courses[params.id as keyof typeof courses];
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-900">Course not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${course.color}`}></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-4xl mb-4 block">{course.icon}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{course.title}</h1>
            <p className="text-xl text-blue-100 mb-8">{course.description}</p>
            <div className="flex items-center space-x-4 text-white">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-300 mr-1" />
                <span>{course.rating}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-1" />
                <span>{course.students} Students</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-1" />
                <span>{course.duration}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Preview Video */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={course.previewVideo}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Course Overview */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((module, i) => (
                    <div key={i} className="border rounded-xl overflow-hidden">
                      <button
                        onClick={() => setExpandedModule(expandedModule === i ? null : i)}
                        className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <Book className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                            <p className="text-sm text-gray-500 flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {module.duration}
                            </p>
                          </div>
                        </div>
                        {expandedModule === i ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                      </button>
                      {expandedModule === i && (
                        <div className="p-6 border-t bg-gray-50">
                          <ul className="space-y-3">
                            {module.topics.map((topic, j) => (
                              <li key={j} className="flex items-center text-gray-600">
                                <Play className="w-4 h-4 mr-2 text-blue-500" />
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Hands-on Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.projects.map((project, i) => (
                    <div key={i} className="border rounded-xl p-6 hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Student Testimonials</h2>
                <div className="space-y-6">
                  {course.testimonials.map((testimonial, i) => (
                    <div key={i} className="border rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                          {/* Add testimonial image here */}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                          <p className="text-sm text-gray-500">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600">{testimonial.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg sticky top-22 h-fit">
                {/* Buy Now Section */}
                <div className="p-8 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Buy Now</h2>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="text-gray-900 font-semibold">{course.rating}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-3xl font-bold text-gray-900">{course.price.discounted}</span>
                        <span className="text-gray-500 line-through ml-2">{course.price.original}</span>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        Save {course.price.savings}
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5">
                      Enroll Now
                      <ArrowRight className="w-5 h-5" />
                    </button>
                    <div className="text-center text-sm text-gray-500 space-y-2">
                      <p>Lifetime access • 30-day money-back guarantee</p>
                      <p className="flex items-center justify-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{course.students} students enrolled</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* This Course Includes */}
                <div className="p-8 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">This Course Includes</h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium">{course.duration} of content</span>
                        <p className="text-sm text-gray-500">Self-paced learning</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Book className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium">{course.modules} modules</span>
                        <p className="text-sm text-gray-500">Comprehensive curriculum</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Laptop className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium">Hands-on projects</span>
                        <p className="text-sm text-gray-500">Real-world applications</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium">1:1 Mentorship</span>
                        <p className="text-sm text-gray-500">Expert guidance</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium">Certificate</span>
                        <p className="text-sm text-gray-500">Course completion</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <span className="text-gray-900 font-medium">Placement support</span>
                        <p className="text-sm text-gray-500">Career assistance</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trainer */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Trainer</h2>
                  <div className="space-y-6">
                    {course.instructors.map((instructor, i) => (
                      <div key={i} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                          {/* Add instructor image here */}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{instructor.name}</h3>
                          <p className="text-gray-600">{instructor.role}</p>
                          <p className="text-sm text-gray-500 flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {instructor.experience} experience
                          </p>
                          <p className="mt-2 text-sm text-gray-600">{instructor.bio}</p>
                          <div className="mt-3 flex items-center space-x-3">
                            <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                              <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                              <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
                              <Twitter className="w-5 h-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}