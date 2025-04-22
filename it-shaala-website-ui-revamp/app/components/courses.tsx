import { 
  Code, 
  Database, 
  Rocket, 
  Clock, 
  Users, 
  BookOpen, 
  ArrowRight, 
  CheckCircle2,
  FileCode,
  Server,
  Globe,
  Layers,
  Cpu,
  Box
} from 'lucide-react';

const courses = [
  {
    title: "Java Full Stack",
    description: "Master Java Full Stack development with our comprehensive course covering Spring Boot, React, and modern development practices.",
    duration: "6 months",
    students: "500+",
    modules: "12",
    icon: Code,
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:from-blue-600 hover:to-blue-700",
    price: "₹45,000",
    discount: "₹35,000",
    techStack: [
      { icon: FileCode, name: "Java" },
      { icon: Server, name: "Spring Boot" },
      { icon: Globe, name: "React" },
      { icon: Database, name: "MySQL" },
      { icon: Layers, name: "HTML/CSS/JS" }
    ],
    features: [
      "Spring Boot & Hibernate",
      "React & Redux",
      "RESTful APIs",
      "Database Design",
      "Deployment & CI/CD",
      "Live Projects",
      "Placement Support",
      "Lifetime Access"
    ],
    highlights: [
      "Industry Expert Instructors",
      "Hands-on Projects",
      "1:1 Mentorship",
      "Interview Preparation"
    ]
  },
  {
    title: "MERN Stack",
    description: "Become a MERN Stack expert with hands-on training in MongoDB, Express.js, React, and Node.js.",
    duration: "5 months",
    students: "450+",
    modules: "10",
    icon: Database,
    color: "from-green-500 to-green-600",
    hoverColor: "hover:from-green-600 hover:to-green-700",
    price: "₹40,000",
    discount: "₹30,000",
    techStack: [
      { icon: Database, name: "MongoDB" },
      { icon: Server, name: "Express.js" },
      { icon: Globe, name: "React" },
      { icon: Cpu, name: "Node.js" },
      { icon: Layers, name: "HTML/CSS/JS" }
    ],
    features: [
      "MongoDB & Mongoose",
      "Express.js & Node.js",
      "React & Redux",
      "Authentication & Authorization",
      "Real-time Applications",
      "Live Projects",
      "Placement Support",
      "Lifetime Access"
    ],
    highlights: [
      "Industry Expert Instructors",
      "Hands-on Projects",
      "1:1 Mentorship",
      "Interview Preparation"
    ]
  },
  {
    title: "Python Full Stack",
    description: "Learn Python Full Stack development with Django, React, and modern web development techniques.",
    duration: "6 months",
    students: "400+",
    modules: "11",
    icon: Rocket,
    color: "from-purple-500 to-purple-600",
    hoverColor: "hover:from-purple-600 hover:to-purple-700",
    price: "₹42,000",
    discount: "₹32,000",
    techStack: [
      { icon: FileCode, name: "Python" },
      { icon: Box, name: "Django" },
      { icon: Globe, name: "React" },
      { icon: Database, name: "PostgreSQL" },
      { icon: Layers, name: "HTML/CSS/JS" }
    ],
    features: [
      "Django & Django REST",
      "React & Redux",
      "PostgreSQL",
      "Web Security",
      "API Development",
      "Live Projects",
      "Placement Support",
      "Lifetime Access"
    ],
    highlights: [
      "Industry Expert Instructors",
      "Hands-on Projects",
      "1:1 Mentorship",
      "Interview Preparation"
    ]
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
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1"
            >
              {/* Course header with gradient */}
              <div className={`h-48 bg-gradient-to-br ${course.color} p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${course.hoverColor}`}>
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-all duration-300"></div>
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center space-x-2">
                    {course.techStack.map((tech, techIndex) => (
                      <div 
                        key={techIndex}
                        className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300"
                        title={tech.name}
                      >
                        <tech.icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 group-hover:bg-white/30 transition-all duration-300">
                    <Clock className="w-4 h-4 text-white" />
                    <span className="text-white text-sm">{course.duration}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white relative z-10 group-hover:translate-x-1 transition-transform duration-300">{course.title}</h3>
              </div>

              {/* Course content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{course.description}</p>
                
                {/* Price section */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{course.discount}</span>
                    <span className="text-gray-400 line-through">{course.price}</span>
                    <span className="text-green-500 text-sm font-medium">Limited Time Offer</span>
                  </div>
                </div>
                
                {/* Course stats */}
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2 group-hover:text-blue-600 transition-colors duration-300">
                    <Users className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <span className="text-gray-600">{course.students} Students</span>
                  </div>
                  <div className="flex items-center space-x-2 group-hover:text-blue-600 transition-colors duration-300">
                    <BookOpen className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                    <span className="text-gray-600">{course.modules} Modules</span>
                  </div>
                </div>

                {/* Course highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">Course Highlights</h4>
                  <div className="space-y-2">
                    {course.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300">
                        <CheckCircle2 className="w-4 h-4 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-gray-600 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Course features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">What You'll Learn</h4>
                  <div className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 group-hover:translate-x-1 transition-transform duration-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${course.color} group-hover:scale-110 transition-transform duration-300`}></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button className={`w-full py-3 rounded-xl bg-gradient-to-r ${course.color} text-white font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer group-hover:shadow-lg ${course.hoverColor}`}>
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  <button className="w-full py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer group-hover:border-blue-200 group-hover:text-blue-600">
                    <span>Explore Course</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 