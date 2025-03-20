import MeetTheTeam from "../components/MeetTheTeam";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function AboutUs() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center bg-contain bg-center bg-[url('https://media.gettyimages.com/id/1413873774/photo/business-team-portrait.jpg?s=612x612&w=0&k=20&c=OHUc90dYEltDCewDAcq1YZy3HSAGT0jB9suKME7Pg1w=')] text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center px-6">
          <h1 className="text-4xl font-bold mb-3">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            We are a passionate team dedicated to building innovative solutions that empower businesses worldwide.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { text: "10+ Years of Experience" },
            { text: "100+ Successful Projects" },
            { text: "98% Client Satisfaction" },
            { text: "Certified Engineers & QA" },
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center">
              <CheckCircleIcon className="w-10 h-10 text-blue-500 mb-3" />
              <p className="text-lg font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Journey (Optional) */}
      <section className="py-16 px-6 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
          <p className="max-w-3xl mx-auto mb-6">
            Since our founding in 2012, we've grown from a small startup into a global company, delivering high-impact solutions for businesses of all sizes.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { year: "2012", milestone: "Founded the company" },
              { year: "2015", milestone: "Launched our first product" },
              { year: "2018", milestone: "Expanded internationally" },
              { year: "2023", milestone: "100+ projects completed" },
            ].map((item, index) => (
              <div key={index} className="bg-white text-black px-6 py-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold">{item.year}</h3>
                <p>{item.milestone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <MeetTheTeam />

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Build Something Amazing Together</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-6">
          Whether you're looking for innovative solutions or expert guidance, our team is ready to help. Get in touch with us today!
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
