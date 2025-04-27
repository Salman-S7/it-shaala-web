"use client";

import { Star, Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import { testimonials } from "@/app/data/testimonials";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const contentWidth = content.offsetWidth;
    let position = 0;
    let animationFrame: number;

    const animate = () => {
      position -= 1;
      if (position <= -contentWidth / 2) {
        position = 0;
      }
      content.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-purple-50"></div>

      {/* Decorative gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Student <span className="text-blue-600">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our students who transformed their careers through our
            courses
          </p>
        </div>

        <div ref={containerRef} className="relative overflow-hidden">
          <div ref={contentRef} className="flex space-x-6">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-[350px] group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1 p-6"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-lg font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <Quote className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 italic line-clamp-3">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-medium text-blue-600">
                    <span>🎯</span>
                    <span>{testimonial.achievement}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless scrolling */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-[350px] group bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1 p-6"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-lg font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                        <Quote className="w-2.5 h-2.5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </p>
                    <div className="flex items-center mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 italic line-clamp-3">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs font-medium text-blue-600">
                    <span>🎯</span>
                    <span>{testimonial.achievement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-600">Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">₹10L+</div>
            <div className="text-gray-600">Average Salary</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
