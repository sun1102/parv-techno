import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-800">Get in Touch</h1>
      <p className="text-gray-600 mt-4 text-center max-w-2xl">
        Have questions about our services? Reach out to us, and our team will be happy to assist you.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Email */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <EnvelopeIcon className="h-10 w-10 text-blue-600" />
          <h3 className="mt-4 text-lg font-semibold">Email Us</h3>
          <p className="text-gray-600 mt-2">contact@yourcompany.com</p>
        </div>

        {/* Phone */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <PhoneIcon className="h-10 w-10 text-green-600" />
          <h3 className="mt-4 text-lg font-semibold">Call Us</h3>
          <p className="text-gray-600 mt-2">+1 (234) 567-890</p>
        </div>

        {/* Location */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
          <MapPinIcon className="h-10 w-10 text-red-600" />
          <h3 className="mt-4 text-lg font-semibold">Visit Us</h3>
          <p className="text-gray-600 mt-2">123 Engineering St, City, Country</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
        <form className="grid gap-4">
          <input type="text" placeholder="Your Name" className="border p-3 rounded-md w-full" />
          <input type="email" placeholder="Your Email" className="border p-3 rounded-md w-full" />
          <textarea placeholder="Your Message" className="border p-3 rounded-md w-full h-32"></textarea>
          <button className="mt-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
