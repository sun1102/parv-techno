import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    image: "https://source.unsplash.com/200x200/?woman,ceo",
    linkedin: "https://linkedin.com/in/alicejohnson",
  },
  {
    name: "Mark Williams",
    role: "CTO",
    image: "https://source.unsplash.com/200x200/?man,developer",
    linkedin: "https://linkedin.com/in/markwilliams",
  },
  {
    name: "Sophie Lee",
    role: "Lead Designer",
    image: "https://source.unsplash.com/200x200/?woman,designer",
    linkedin: "https://linkedin.com/in/sophielee",
  },
  {
    name: "David Brown",
    role: "Project Manager",
    image: "https://source.unsplash.com/200x200/?man,manager",
    linkedin: "https://linkedin.com/in/davidbrown",
  },
];

export default function MeetTheTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMember = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>

      {/* Grid for larger screens */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 mt-2 hover:scale-110 transition-transform"
            >
              LinkedIn
              <ArrowUpRightIcon className="w-5 h-5 text-blue-600" />
            </a>
          </div>
        ))}
      </div>

      {/* Carousel for smaller screens */}
      <div className="relative w-full max-w-xs mx-auto md:hidden mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <img
              src={teamMembers[currentIndex].image}
              alt={teamMembers[currentIndex].name}
              className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md mb-4"
            />
            <h3 className="text-lg font-semibold">{teamMembers[currentIndex].name}</h3>
            <p className="text-gray-600">{teamMembers[currentIndex].role}</p>
            <a
              href={teamMembers[currentIndex].linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-blue-600 mt-2 hover:scale-110 transition-transform"
            >
              LinkedIn
              <ArrowUpRightIcon className="w-5 h-5 text-blue-600" />
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevMember}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-500 p-2 rounded-full shadow-lg hover:bg-blue-100"
        >
          ❮
        </button>
        <button
          onClick={nextMember}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-500 p-2 rounded-full shadow-lg hover:bg-blue-100"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
