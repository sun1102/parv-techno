export default function Statsbanner() {
    return (
      <section className="py-16 bg-blue-700 text-white text-center">
        <h2 className="text-4xl font-bold">Our Achievements</h2>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="p-6">
            <h3 className="text-5xl font-bold">50+</h3>
            <p className="text-lg">Projects Completed</p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold">20+</h3>
            <p className="text-lg">Cities Covered</p>
          </div>
          <div className="p-6">
            <h3 className="text-5xl font-bold">5+</h3>
            <p className="text-lg">States in India</p>
          </div>
        </div>
      </section>
    );
  }
  