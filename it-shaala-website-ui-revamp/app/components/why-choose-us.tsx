'use client';

import { Briefcase, Trophy, Users } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose IT Shaala?</h2>
          <p className="text-gray-600">We provide the best learning experience with industry experts</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Experts</h3>
            <p className="text-gray-600">Learn from professionals with years of industry experience</p>
          </div>
          <div className="text-center p-6">
            <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Project-Based Learning</h3>
            <p className="text-gray-600">Work on real-world projects to build your portfolio</p>
          </div>
          <div className="text-center p-6">
            <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Support</h3>
            <p className="text-gray-600">Get dedicated placement assistance and career guidance</p>
          </div>
        </div>
      </div>
    </section>
  );
} 