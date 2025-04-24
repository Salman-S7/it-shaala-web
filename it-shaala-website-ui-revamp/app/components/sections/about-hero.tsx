import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-24 overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'url("/patterns/grid.svg")',
            backgroundSize: '30px 30px',
            backgroundRepeat: 'repeat'
          }}
        />
      </div> */}

      <div className="container mx-auto px-4 mt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Pune's{' '}
              <span className="text-blue-600">Next Generation</span>{' '}
              of Coders
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At IT Shaala, we're passionate about transforming tech education. Our mission is to create
              opportunities for aspiring developers and bridge the gap between education and industry demands.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-blue-600 font-semibold cursor-pointer hover:gap-3 transition-all duration-300">
                Learn More <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image.png"
                alt="IT Shaala Learning Environment"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-bold text-blue-600">500+</p>
                  <p className="text-sm text-gray-600">Graduates</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-600">95%</p>
                  <p className="text-sm text-gray-600">Placement Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
