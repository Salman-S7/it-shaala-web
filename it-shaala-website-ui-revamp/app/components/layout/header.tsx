"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnrollmentForm from '../modals/enrollment-form';
import { courseLinks } from '@/app/data/header';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const coursesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (coursesRef.current && !coursesRef.current.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://itshaala.com/wp-content/uploads/2024/06/512x512-logo-size-tagline-05-05-e1724735912757.png"
              alt="IT Shaala Logo"
              width={150}
              height={40}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Courses Dropdown */}
            <div className="relative" ref={coursesRef}>
              <button
                onClick={toggleCourses}
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1 font-medium"
              >
                <span>Courses</span>
                <motion.svg
                  animate={{ rotate: isCoursesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {isCoursesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-8 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100"
                  >
                    {courseLinks.map((course) => (
                      <Link
                        key={course.href}
                        href={course.href}
                        className="block px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        onClick={() => setIsCoursesOpen(false)}
                      >
                        {course.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/placements" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Placements
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About Us
              </Link>
              <Link href="/hire-from-us" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Hire From Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact Us
              </Link>
              <button
                onClick={() => setShowEnrollForm(true)}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md"
              >
                Enroll Now
              </button>
              <EnrollmentForm 
                isOpen={showEnrollForm} 
                onClose={() => setShowEnrollForm(false)} 
              />
            </div>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            aria-label="Toggle mobile menu"
          >
            <motion.svg
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden"
            >
              <nav className="py-4 space-y-2">
                {/* Mobile Courses Dropdown */}
                <div ref={coursesRef}>
                  <button
                    onClick={toggleCourses}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                  >
                    <span>Courses</span>
                    <motion.svg
                      animate={{ rotate: isCoursesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <AnimatePresence>
                    {isCoursesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.15 }}
                        className="mt-2 space-y-2"
                      >
                        {courseLinks.map((course) => (
                          <Link
                            key={course.href}
                            href={course.href}
                            className="block px-4 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsCoursesOpen(false);
                            }}
                          >
                            {course.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="space-y-2">
                  <Link 
                    href="/placements" 
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Placements
                  </Link>
                  <Link 
                    href="/about" 
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/hire-from-us" 
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Hire From Us
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                  <div className="px-4 pt-2">
                    <button
                      className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-md"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setShowEnrollForm(true);
                      }}
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;