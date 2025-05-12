"use client";

import Link from "next/link";
import LazyVideo from "../ui/lazy-video";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white overflow-hidden pt-20">

      <div className="absolute inset-0 w-full h-full block lg:hidden">
        <LazyVideo
          src="https://itshaala.com/wp-content/uploads/2025/03/Sequence-01_1-1.mp4"
          className="w-full h-full object-cover"
          poster="/hero-img.webp"
        />
        <div className="absolute inset-0 bg-white/5"></div>
      </div>


      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orb */}
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] md:-bottom-40 md:-right-40 rounded-full bg-gradient-to-br from-sky-500 via-indigo-400 to-violet-600 opacity-20 blur-[100px]" />

        {/* Secondary gradient orbs */}
        <div className="absolute top-1/4 -left-10 w-[200px] h-[200px] md:w-[400px] md:h-[400px] md:-left-20 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-300 opacity-15 blur-[80px]" />
        <div className="absolute -top-20 -right-20 w-[250px] h-[250px] md:w-[500px] md:h-[500px] md:-top-40 md:-right-40 rounded-full bg-gradient-to-bl from-indigo-400 to-purple-500 opacity-15 blur-[90px]" />

        {/* Accent elements */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-blue-400 opacity-70 blur-sm" />
        <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-indigo-400 opacity-70 blur-sm" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-violet-400 opacity-70 blur-sm" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Transform Your Career with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                IT Shaala
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Learn from industry experts and master in-demand tech skills. Join
              our comprehensive coding classes and kickstart your tech career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                Explore Courses
              </Link>
              <Link
                href="tel:+918862064497"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl border-2 border-blue-600 hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Talk to an Expert
                {/* +91 88620 64497 */}
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-center gap-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-1">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <span>150+</span>
                </div>
                <div className="text-sm text-gray-600">Students Placed</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-center gap-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-1">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span>90%</span>
                </div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-center gap-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-1">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>50+</span>
                </div>
                <div className="text-sm text-gray-600">Partner Companies</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[450px] xl:h-[500px]">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-3xl blur-2xl -z-10"></div> */}
              <div className="absolute inset-0 w-full h-full">
                <LazyVideo
                  src="https://itshaala.com/wp-content/uploads/2025/03/Sequence-01_1-1.mp4"
                  className="w-full h-full object-cover rounded-3xl"
                  poster="/hero-img.webp"
                />
                <div className="absolute inset-0 bg-white/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
