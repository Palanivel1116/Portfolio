import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 px-6 flex flex-col md:flex-row md:items-center md:justify-between">
    
      <h1 className="text-3xl font-bold text-center md:text-left mb-3 md:mb-0">
        Portfolio
      </h1>
      <nav>
        <ul className="flex flex-wrap justify-center font-bold text-lg md:justify-end gap-6 text-lg">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={600}
              className="cursor-pointer hover:text-[#EEBBC3] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={600}
              className="cursor-pointer hover:text-[#EEBBC3] transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={600}
              className="cursor-pointer hover:text-[#EEBBC3] transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={600}
              className="cursor-pointer hover:text-[#EEBBC3] transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
