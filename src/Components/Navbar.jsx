import { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4  px-10">
      <div className="flex items-center space-x-2">
        {/* Logo */}
        <Link to="/">
        <img
          src="logo.png"
          alt="KDSure Logo"
          className="h-12"
        />
        </Link>
        {/* <span className="font-bold text-xl text-gray-700">KDSure</span>
        <span className="text-sm text-gray-600">Infratech Pvt. Ltd.</span> */}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex  space-x-8 text-[#666666]">
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'text-black font-bold text-lg' : 'hover:text-black text-lg '}
        >
          Home
        </NavLink>
        <NavLink
          to="/properties"
          className={({ isActive }) => isActive ? 'text-black font-bold text-lg' : 'hover:text-black text-lg'}
        >
          Properties
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? 'text-black font-bold text-lg' : 'hover:text-black text-lg'}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? 'text-black font-bold text-lg' : 'hover:text-black text-lg'}
        >
          Contact us
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) => isActive ? 'text-black font-bold text-lg' : 'text-gray-500 ho text-lgver:text-black'}
            >
              Home
            </NavLink>
            <NavLink
              to="/properties"
              onClick={toggleMenu}
              className={({ isActive }) => isActive ? 'text-black font-bold text-lg' : 'text-gray-500 ho text-lgver:text-black'}
            >
              Properties
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) => isActive ? 'text-black font-bold text-lg' : 'text-gray-500 ho text-lgver:text-black'}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) => isActive ? 'text-black font-bold text-lg' : 'text-gray-500 ho text-lgver:text-black'}
            >
              Contact us
            </NavLink>
          </div>
        </div>
      )}

      {/* Call-to-Action Button */}
      <button className="hidden md:flex bg-[#c17818] text-white px-4 py-2 rounded-full items-center font-semibold text-md">
        Start Exploring
        <span className="ml-2 w-8 h-8 bg-white rounded-full "></span>
      </button>
    </nav>
  );
};

export default Navbar;