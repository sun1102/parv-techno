import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  { 
    name: "John Doe", 
    text: "Great service and professional engineers!", 
    company: "ABC Constructions", 
    image: "https://source.unsplash.com/200x200/?man,portrait"
  },
  { 
    name: "Jane Smith", 
    text: "Highly recommend their work!", 
    company: "XYZ Developers", 
    image: "https://source.unsplash.com/200x200/?woman,portrait"
  },
  { 
    name: "Robert Brown", 
    text: "Reliable and timely project delivery.", 
    company: "BuildPro Ltd.", 
    image: "https://source.unsplash.com/200x200/?businessman,portrait"
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="p-10 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>

      <div className="relative w-full max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-gray-800 p-6 shadow-xl rounded-lg relative flex flex-col items-center"
          >
            <img 
              src={testimonials[currentIndex].image} 
              alt={testimonials[currentIndex].name} 
              className="w-20 h-20 rounded-full mb-4 border-4 border-blue-500 shadow-md"
            />
            <p className="italic text-lg">"{testimonials[currentIndex].text}"</p>
            <h3 className="mt-4 text-xl font-semibold">{testimonials[currentIndex].name}</h3>
            <p className="text-gray-500 text-sm">{testimonials[currentIndex].company}</p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button 
          onClick={prevTestimonial} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-500 p-2 rounded-full shadow-lg hover:bg-blue-100"
        >
          ❮
        </button>

        <button 
          onClick={nextTestimonial} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-500 p-2 rounded-full shadow-lg hover:bg-blue-100"
        >
          ❯
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="mt-4 flex justify-center space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`h-3 w-3 rounded-full transition-all ${
              currentIndex === idx ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
}
