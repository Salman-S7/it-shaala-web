"use client";

export default function ContactMap() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] relative group border border-gray-100">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent pointer-events-none z-10" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.798471099588!2d73.8362666!3d18.538007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1eba0c5925f%3A0x3576f560cb461b20!2sIT%20Shaala!5e0!3m2!1sen!2sin!4v1746264859808!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="absolute bottom-4 right-4">
        <a
          href="https://maps.google.com/maps?q=IT+Shaala+Pune"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-blue-600 hover:bg-white hover:text-blue-700 transition-all duration-200 transform hover:scale-105 border border-gray-100 group-hover:shadow-lg"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}
