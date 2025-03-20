import { BuildingOfficeIcon, MapIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

const services = [
  {
    title: "Structural Engineering",
    desc: "We specialize in designing durable, efficient, and cost-effective structures. Our expert engineers ensure compliance with safety regulations while optimizing material usage for sustainability and strength.",
    icon: <BuildingOfficeIcon className="w-12 h-12 text-blue-500" />,
    img: "https://source.unsplash.com/400x300/?construction,building"
  },
  {
    title: "Survey Engineering",
    desc: "Our professional survey engineering services provide accurate land and site assessments for construction projects. Using advanced technology, we deliver precise topographic, boundary, and infrastructure surveys.",
    icon: <MapIcon className="w-12 h-12 text-green-500" />,
    img: "https://source.unsplash.com/400x300/?surveying,land"
  },
  {
    title: "Water Plant Construction",
    desc: "We design and build high-quality water treatment plants that ensure clean and safe water supply. From conceptual design to installation, our team handles everything with cutting-edge engineering solutions.",
    icon: <Cog6ToothIcon className="w-12 h-12 text-blue-600" />,
    img: "https://source.unsplash.com/400x300/?water,treatment"
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center bg-[url('https://source.unsplash.com/1600x900/?engineering,construction')] text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-6">
          <h1 className="text-4xl font-bold mb-3">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Delivering engineering excellence with innovative solutions in structural design, surveying, and water treatment construction.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-center">
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Get Started with Our Expertise</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-6">
          Whether you need structural design, land surveys, or water plant construction, we’re here to help. Contact us for a consultation.
        </p>
        <a
          href="/contact"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
