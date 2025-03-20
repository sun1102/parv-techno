import { motion } from "framer-motion";
import { 
  BuildingLibraryIcon, 
  GlobeAltIcon, 
  BeakerIcon, 
  MapIcon, 
  WrenchScrewdriverIcon, 
  CubeTransparentIcon 
} from "@heroicons/react/24/outline";

const services = [
  { name: "Civil Engineering", desc: "Infrastructure development, road & bridges.", icon: BuildingLibraryIcon },
  { name: "Survey Engineering", desc: "Land surveying, GIS mapping, and analysis.", icon: MapIcon },
  { name: "Water Treatment", desc: "Industrial & municipal water plant solutions.", icon: BeakerIcon },
  { name: "Urban Planning", desc: "Smart city planning & execution.", icon: GlobeAltIcon },
  { name: "Construction Management", desc: "Site supervision & project handling.", icon: WrenchScrewdriverIcon },
  { name: "Structural Engineering", desc: "Building strong & sustainable structures.", icon: CubeTransparentIcon }
];

export default function ServicesSection() {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg text-center flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <service.icon className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
