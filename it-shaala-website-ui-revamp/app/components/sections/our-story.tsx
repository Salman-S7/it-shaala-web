import { Calendar, Users, Trophy, Target } from "lucide-react";

const timeline = [
  {
    year: "2020",
    icon: Calendar,
    title: "The Beginning",
    description:
      "Started with 5 students in a shared workspace, focusing on practical coding education.",
  },
  {
    year: "2021",
    icon: Users,
    title: "Community Growth",
    description:
      "Expanded to 100+ students and launched our first comprehensive full-stack program.",
  },
  {
    year: "2022",
    icon: Trophy,
    title: "Industry Recognition",
    description:
      "Recognized as Pune&quot;s leading coding institute with 95% placement rate.",
  },
  {
    year: "2023",
    icon: Target,
    title: "Expanding Horizons",
    description:
      "Launched specialized courses in AI/ML and cloud computing. Reached 500+ graduates.",
  },
];

export default function OurStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-lg text-gray-600">
            From a small initiative to Pune&quot;s leading tech learning
            community
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To empower aspiring developers with practical, job-ready skills
                through immersive learning and real-world project experience. We
                bridge the gap between academic knowledge and industry demands,
                creating opportunities for the next generation of tech talent.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: "500+", label: "Graduates" },
                  { number: "95%", label: "Placement Rate" },
                  { number: "50+", label: "Hiring Partners" },
                  { number: "15+", label: "Industry Experts" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl font-bold text-blue-600">
                      {stat.number}
                    </p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
              <div className="absolute inset-0 bg-blue-200 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line - hidden on mobile, centered on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
          {/* Mobile timeline line - left aligned */}
          <div className="md:hidden absolute left-6 top-0 h-full w-0.5 bg-gray-200"></div>

          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative flex items-start mb-12 md:even:flex-row-reverse"
              >
                {/* Content */}
                <div className="pl-16 md:pl-0 md:w-5/12 md:even:pl-8 md:odd:pr-8 md:odd:text-right">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <span className="text-blue-600 font-semibold">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
