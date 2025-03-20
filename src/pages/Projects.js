import Portfolio from "../components/Portfolio";

const projects = [
    { name: "Highway Bridge", location: "California, USA" },
    { name: "Water Treatment Plant", location: "Texas, USA" }
  ];
  
  const Projects = () => {
    return (
      <div className="py-20 bg-white text-center">
        <h1 className="text-4xl font-bold text-gray-800">Ongoing Projects</h1>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <div key={project.name} className="w-80 bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="text-gray-600 mt-2">{project.location}</p>
            </div>
          ))}
        </div>
        <Portfolio />
      </div>
    );
  };
  
  export default Projects;
  