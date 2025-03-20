import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Luxury Apartment Complex",
    before: "https://source.unsplash.com/400x300/?construction",
    after: "https://source.unsplash.com/400x300/?modern-building",
    stats: "Completed in 8 months | 30% Cost Savings",
    testimonial: {
      text: "The transformation was beyond our expectations! Professional and timely execution.",
      name: "David Johnson",
      company: "Skyline Developments",
    },
  },
  {
    title: "Commercial Office Space",
    before: "https://source.unsplash.com/400x300/?old-building",
    after: "https://source.unsplash.com/400x300/?office",
    stats: "Eco-friendly materials | 40% Energy Efficiency Boost",
    testimonial: {
      text: "An outstanding team! The project was delivered with top-notch quality.",
      name: "Sarah Parker",
      company: "Innovate Corp",
    },
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="p-10 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-6">Our Portfolio</h2>
      <p className="text-lg text-gray-600 mb-8">Before & After Transformations</p>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-6"
        >
          <h3 className="text-xl font-semibold mb-4">{projects[selected].title}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">Before</p>
              <img src={projects[selected].before} alt="Before" className="rounded-lg shadow-md" />
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-2">After</p>
              <img src={projects[selected].after} alt="After" className="rounded-lg shadow-md" />
            </div>
          </div>
          <p className="mt-4 font-semibold">{projects[selected].stats}</p>
          <blockquote className="mt-4 italic text-gray-700">"{projects[selected].testimonial.text}"</blockquote>
          <p className="mt-2 font-semibold">- {projects[selected].testimonial.name}, {projects[selected].testimonial.company}</p>
        </motion.div>

        <div className="mt-6 flex justify-center space-x-4">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`h-3 w-3 rounded-full transition-all ${selected === idx ? "bg-blue-500" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}