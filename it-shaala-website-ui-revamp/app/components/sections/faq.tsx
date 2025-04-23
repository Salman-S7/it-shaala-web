'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What makes IT Shaala different from other coding bootcamps?",
    answer: "IT Shaala stands out with its industry-focused curriculum, personalized mentorship, and hands-on project-based learning. Our instructors are industry experts who bring real-world experience to the classroom. We also provide dedicated placement support and career guidance to help you land your dream job."
  },
  {
    question: "Do I need prior coding experience to join the courses?",
    answer: "No prior coding experience is required for our beginner-friendly courses. We start from the fundamentals and gradually build up to advanced concepts. Our structured curriculum and supportive learning environment make it easy for anyone to learn coding, regardless of their background."
  },
  {
    question: "What is the duration of the courses?",
    answer: "Our courses typically range from 3 to 6 months, depending on the program. The Java Full Stack and MERN Stack courses are 6 months long, while the Python Full Stack course is 4 months. Each course includes both theoretical learning and practical project work."
  },
  {
    question: "What kind of projects will I work on during the course?",
    answer: "You'll work on real-world projects that simulate industry scenarios. These include building full-stack applications, implementing RESTful APIs, creating responsive UIs, and working with databases. By the end of the course, you'll have a portfolio of projects to showcase to potential employers."
  },
  {
    question: "What kind of placement support do you provide?",
    answer: "We provide comprehensive placement support including resume building, mock interviews, technical interview preparation, and job placement assistance. Our dedicated placement team works closely with industry partners to help you secure job opportunities. We also offer career guidance sessions and networking opportunities."
  },
  {
    question: "Can I pay the course fee in installments?",
    answer: "Yes, we offer flexible payment options including EMI facilities and installment plans. We understand that investing in education is important, and we strive to make our courses accessible to everyone. Contact our admissions team to discuss the payment options available."
  },
  {
    question: "What is the class schedule like?",
    answer: "We offer flexible learning options to suit your schedule. Classes are typically held in the evenings and weekends, with both online and offline options available. Each week includes live sessions, self-paced learning, and hands-on project work. You'll also have access to recorded sessions for revision."
  },
  {
    question: "What kind of support will I get during the course?",
    answer: "You'll receive 24/7 support through our dedicated Slack community, where you can ask questions and get help from instructors and peers. We also provide one-on-one mentorship sessions, code reviews, and regular doubt-clearing sessions. Our support team is always available to help you with any technical or non-technical queries."
  },
  {
    question: "What happens after I complete the course?",
    answer: "After course completion, you'll receive a certificate and access to our alumni network. Our placement team will help you prepare for interviews and connect with potential employers. You'll also get lifetime access to course materials and updates, along with continued mentorship support."
  },
  {
    question: "What are the prerequisites for joining the courses?",
    answer: "The only prerequisites are a laptop/computer with internet access and a passion for learning. While prior coding experience is not required, basic computer literacy is expected. We'll help you build everything else from scratch, starting with the fundamentals of programming."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleFAQClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our courses and programs
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => handleFAQClick(index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 