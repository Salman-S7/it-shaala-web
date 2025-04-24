import Image from 'next/image';

const teamMembers = [
  {
    name: "Sandeep Bhingale",
    role: "Founder & Lead Instructor",
    image: "/sandeep-bhingale.png", // You'll need to add these images to your public folder
    bio: "Tech enthusiast with 10+ years of industry experience in full-stack development"
  },
  {
    name: "Priya Sharma",
    role: "Senior Instructor",
    image: "/team/instructor-1.jpg",
    bio: "Specialized in frontend development with expertise in React and UI/UX"
  },
  {
    name: "Rahul Desai",
    role: "Technical Mentor",
    image: "/team/instructor-2.jpg",
    bio: "Backend specialist with deep knowledge in Node.js and cloud architecture"
  },
  {
    name: "Anita Patel",
    role: "Career Coach",
    image: "/team/instructor-3.jpg",
    bio: "Helping students transition into successful tech careers"
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600">
            Passionate educators and industry experts dedicated to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-blue-600 mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
