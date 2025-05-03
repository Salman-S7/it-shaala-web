import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  CalendarCheck,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

export default function ContactInfo() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 p-8 rounded-2xl shadow-lg border border-gray-100 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-6">
          Contact <span className="text-blue-600">Information</span>
        </h2>

        <div className="space-y-8">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg shadow-sm hover:shadow transition-shadow duration-200">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">
                Office Location
              </h3>
              <p className="text-gray-600">
                211, Kakade Bizz Icon, 2nd Floor, Block A, Cts no 2687 b,
                Bhamburda, Shivajinagar, Pune, Maharashtra 411005
              </p>
              <Link
                href="https://maps.app.goo.gl/JHrts8UjEoGrSMVH8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 mt-2 transition-all duration-200 hover:translate-x-1"
              >
                Get Directions
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg shadow-sm hover:shadow transition-shadow duration-200">
              <Phone className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
              <p className="text-gray-600 mb-1">
                <Link href="tel:+918862064497" className="hover:text-blue-600">
                  +91 88620 64497
                </Link>
              </p>
              {/* <p className="text-gray-600">
                <Link href="tel:+919876543211" className="hover:text-blue-600">
                  +91 98765 43211
                </Link>
              </p> */}
              <Link
                href="https://wa.me/918862064497"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 mt-2 transition-all duration-200 hover:translate-x-1"
              >
                Chat on WhatsApp
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg shadow-sm hover:shadow transition-shadow duration-200">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Email</h3>
              <p className="text-gray-600 mb-1">
                <Link
                  href="mailto:info@itshaala.com"
                  className="hover:text-blue-600"
                >
                  info@itshaala.com
                </Link>
              </p>
              {/* <p className="text-gray-600">
                <Link
                  href="mailto:admissions@itshaala.com"
                  className="hover:text-blue-600"
                >
                  admissions@itshaala.com
                </Link>
              </p> */}
            </div>
          </div>

          {/* Office Hours */}
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg shadow-sm hover:shadow transition-shadow duration-200">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Office Hours</h3>
              <p className="text-gray-600">Monday - Saturday</p>
              <p className="text-gray-600">9:00 AM - 7:00 PM</p>
              <p className="text-gray-600 mt-1">Sunday: Closed</p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {/* Quick Actions */}
            <div className="col-span-2 mb-4 text-center">
              <p className="text-gray-600 mb-4">
                Ready to start your coding journey?
              </p>
            </div>
            <Link
              href="https://calendly.com/itshaala"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] font-medium"
            >
              <CalendarCheck className="w-5 h-5" />
              Book a Call
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-50 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] border border-gray-200 font-medium"
            >
              <BookOpen className="w-5 h-5" />
              View Courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
