'use client';

import { PlayCircle, Youtube, Clock, ThumbsUp, Eye, ArrowRight } from 'lucide-react';

const videos = [
  {
    title: "Java Full Stack Development - Complete Roadmap 2024",
    description: "Learn the complete roadmap to become a Java Full Stack Developer in 2024, including all the essential technologies and skills you need to master.",
    gradient: "from-blue-500 to-blue-600",
    duration: "15:30",
    views: "2.5K",
    likes: "150",
    url: "https://www.youtube.com/live/N7uyYvLTWf0?si=zMsOTYLxL916G509"
  },
  {
    title: "MERN Stack Development - Complete Course Introduction",
    description: "Get started with MERN Stack development with this comprehensive introduction covering MongoDB, Express, React, and Node.js fundamentals.",
    gradient: "from-green-500 to-green-600",
    duration: "25:45",
    views: "3.2K",
    likes: "180",
    url: "https://youtube.com/watch?v=9Q9Q9Q9Q9Q9"
  },
  {
    title: "Python Full Stack Development - Django vs Flask",
    description: "Understand the key differences between Django and Flask frameworks and learn which one is better for your next Python web development project.",
    gradient: "from-purple-500 to-purple-600",
    duration: "18:20",
    views: "1.8K",
    likes: "120",
    url: "https://youtube.com/watch?v=7Q7Q7Q7Q7Q7"
  },
  {
    title: "How to Become a Full Stack Developer in 2024",
    description: "A comprehensive guide on how to become a Full Stack Developer in 2024, including the latest technologies, learning path, and career opportunities.",
    gradient: "from-indigo-500 to-indigo-600",
    duration: "20:15",
    views: "4.1K",
    likes: "210",
    url: "https://youtube.com/watch?v=6Q6Q6Q6Q6Q6"
  },
  {
    title: "Java vs Python - Which Language to Learn in 2024?",
    description: "Detailed comparison between Java and Python programming languages to help you decide which one to learn in 2024 based on your career goals.",
    gradient: "from-cyan-500 to-cyan-600",
    duration: "22:40",
    views: "3.5K",
    likes: "190",
    url: "https://youtube.com/watch?v=5Q5Q5Q5Q5Q5"
  },
  {
    title: "MERN Stack Project - Building a Todo App",
    description: "Learn MERN Stack development by building a complete Todo application from scratch, including frontend, backend, and database integration.",
    gradient: "from-teal-500 to-teal-600",
    duration: "45:30",
    views: "5.2K",
    likes: "280",
    url: "https://youtube.com/watch?v=4Q4Q4Q4Q4Q4"
  }
];

export default function FreeResources() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50"></div>
      
      {/* Background gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Free <span className="text-blue-600">Learning Resources</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get a taste of our teaching style with these free tutorials from our YouTube channel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1"
            >
              {/* Video thumbnail */}
              <div className="relative h-48">
                <div className={`absolute inset-0 bg-gradient-to-br ${video.gradient}`}>
                  <div className="absolute inset-0 bg-white/10"></div>
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full"></div>
                  <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full"></div>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>

              {/* Video content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {video.description}
                </p>
                
                {/* Video stats */}
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{video.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{video.likes}</span>
                  </div>
                </div>

                {/* Watch button */}
                <a 
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer group-hover:shadow-lg hover:from-blue-600 hover:to-blue-700"
                >
                  <Youtube className="w-5 h-5" />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Channel CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://youtube.com/@itshaala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
          >
            <span className="text-lg font-semibold">View All Videos</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
} 