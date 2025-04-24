import { Code2, Users2, Target, Rocket } from 'lucide-react';

const values = [
  {
    icon: Code2,
    title: "Practical Learning",
    description: "Learn by doing with real-world projects and industry-standard practices"
  },
  {
    icon: Users2,
    title: "Community First",
    description: "Join a thriving community of learners, mentors, and industry professionals"
  },
  {
    icon: Target,
    title: "Industry Focused",
    description: "Curriculum designed around current market needs and emerging technologies"
  },
  {
    icon: Rocket,
    title: "Career Growth",
    description: "Dedicated placement support and career guidance throughout your journey"
  }
];

export default function Values() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-600">
            The principles that guide us in empowering the next generation of developers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-block p-4 bg-blue-50 rounded-lg mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
