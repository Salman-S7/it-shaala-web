'use client';

import { Briefcase, Trophy, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="text-center p-6">
    {icon}
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const features = [
  {
    icon: <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: "Industry Experts",
    description: "Learn from professionals with years of industry experience"
  },
  {
    icon: <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: "Project-Based Learning",
    description: "Work on real-world projects to build your portfolio"
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
    title: "Career Support",
    description: "Get dedicated placement assistance and career guidance"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose IT Shaala?</h2>
          <p className="text-gray-600">We provide the best learning experience with industry experts</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 