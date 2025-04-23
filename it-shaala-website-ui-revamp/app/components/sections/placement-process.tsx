// we are not using this component in the placements page (for now)


import { motion } from 'framer-motion';
import {
  Building2,
  Award,
  CheckCircle2,
  FileText,
  Code,
  MessageSquare,
} from 'lucide-react';

const placementProcess = [
    {
      step: 1,
      title: "Resume Building",
      description: "Professional resume creation with industry experts",
      icon: <FileText className="w-8 h-8 text-blue-600" />
    },
    {
      step: 2,
      title: "Technical Training",
      description: "Industry-relevant technical skills development",
      icon: <Code className="w-8 h-8 text-green-600" />
    },
    {
      step: 3,
      title: "Mock Interviews",
      description: "Practice interviews with industry professionals",
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />
    },
    {
      step: 4,
      title: "Company Connections",
      description: "Direct interaction with hiring managers",
      icon: <Building2 className="w-8 h-8 text-orange-600" />
    },
    {
      step: 5,
      title: "Interview Preparation",
      description: "Comprehensive interview preparation sessions",
      icon: <Award className="w-8 h-8 text-red-600" />
    },
    {
      step: 6,
      title: "Placement Support",
      description: "Continuous support until job offer",
      icon: <CheckCircle2 className="w-8 h-8 text-yellow-600" />
    }
  ];

export default function PlacementJourney() {
    return (
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Placement Journey</h2>
            <p className="text-lg text-gray-600">
              Follow the roadmap that has helped hundreds of students land their dream tech jobs.
            </p>
          </div>
  
          <div className="relative border-l-4 border-blue-100 ml-4 lg:ml-1">
            {placementProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-10 pb-16"
              >
                {/* Dot */}
                <span className="absolute top-1 left-[-12px] w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10"></span>
  
                <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      {step.icon}
                    </div>
                    <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
  
        {/* Background gradient ring */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 rounded-full opacity-20 blur-3xl"></div>
      </section>
    );
  }
  