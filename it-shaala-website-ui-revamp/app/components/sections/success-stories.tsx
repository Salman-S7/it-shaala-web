"use client";

import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';

type Story = {
  type: 'youtube';
  id: string;
};

const stories: Story[] = [
  { type: 'youtube', id: 'HnLnaNJjhTo' },
  { type: 'youtube', id: 'zUfAk9b-9Og' },
  { type: 'youtube', id: 'tbWz4TZmD70' },
  { type: 'youtube', id: 'dr-C2XtSxss' },
  { type: 'youtube', id: '5dN4ZfGQvPg' },
  { type: 'youtube', id: 'zUfAk9b-9Og' },
  { type: 'youtube', id: 'tbWz4TZmD70' },
  { type: 'youtube', id: 'dr-C2XtSxss' },
  { type: 'youtube', id: '5dN4ZfGQvPg' },
  { type: 'youtube', id: 'zUfAk9b-9Og' },
];

function VideoCard({ id }: { id: string }) {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden group">
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=${isMuted ? 1 : 0}&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Mute/Unmute Button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transform opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}

export default function SuccessStories() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success <span className='text-blue-600'>Stories</span></h2>
          <p className="text-xl text-gray-600">
            Watch our students share their journey to success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-[1920px] mx-auto">
          {stories.map((story, index) => (
            <motion.div
              key={`${story.type}-${story.id}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VideoCard id={story.id} />
            </motion.div>
          ))}
        </div>

        

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@itshaala/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl border border-gray-200"
          >
            View More Stories
          </a>
        </div>
      </div>
    </section>
  );
}
