const testimonials = [
    { name: "John Doe", review: "Excellent work, exceeded expectations!" },
    { name: "Jane Smith", review: "Reliable and professional engineering team." }
  ];
  
  const Testimonials = () => {
    return (
      <div className="py-20 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Client Testimonials</h1>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="w-80 bg-white shadow-md p-6 rounded-lg">
              <p className="text-gray-600">"{t.review}"</p>
              <h3 className="text-xl font-semibold mt-4">{t.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  