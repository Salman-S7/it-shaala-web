'use client';

import { PlayCircle, Youtube, Clock, ThumbsUp, Eye, ArrowRight } from 'lucide-react';
import { videos } from '@/app/data/free-resources';

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