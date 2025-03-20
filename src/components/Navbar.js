import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold text-blue-600">CivilEngCo</h1>
      <ul className="flex gap-6">
        {["Home", "About", "Services", "Projects", "Testimonials", "Contact"].map((item) => (
          <li key={item}>
            <Link to={`/${item.toLowerCase()}`} className="hover:text-blue-500">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
