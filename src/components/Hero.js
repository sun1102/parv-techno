import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://media.gettyimages.com/id/1437930506/photo/male-engineer-and-survey-equipment-working-at-construction-site.jpg?s=612x612&w=0&k=20&c=0fMFWgwe7j21DjHCAlj7c1Ie1RqayZ4OMJB7xJSYFaw=')" }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <motion.div
        className="relative z-10 max-w-3xl px-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Building Dreams, Crafting Excellence
        </h1>
        <motion.p
          className="mt-4 text-lg text-white opacity-80"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Your Trusted Partner in Civil Engineering Solutions
        </motion.p>

        {/* Call to Action Button */}
        <motion.button
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Our Services
        </motion.button>
      </motion.div>
    </section>
  );
}
