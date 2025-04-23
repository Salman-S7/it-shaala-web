import { features } from "@/app/data/features";


export default function Features() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle background elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-blue-600">IT Shaala</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide a comprehensive learning experience that prepares you for real-world challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden border border-gray-100"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Feature icon with gradient background */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                <feature.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative gradient line */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.color} group-hover:w-full transition-all duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 