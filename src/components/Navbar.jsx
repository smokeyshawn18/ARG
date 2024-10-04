import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/arg.png"; // Use Argentina-themed logo here

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <nav className="bg-gradient-to-r from-[#74acdf] to-[#ffffff] p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-full border-2 border-white"
          />
          <span className="text-[#004b87] font-extrabold text-3xl uppercase tracking-wider"></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {[
            { path: "/", label: "Home" },
            { path: "/Team", label: "Team" },
            { path: "/Schedule", label: "Schedule" },
            { path: "/Results", label: "Result" },
            { path: "/History", label: "History" },
            { path: "/National", label: "National" },
          ].map(({ path, label }, index) => (
            <NavLink
              key={index}
              to={path}
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-[#004b87] rounded-md px-6 py-3 font-bold shadow-lg text-lg"
                  : "text-[#004b87] hover:text-white hover:bg-[#004b87] px-6 py-3 rounded-md font-bold text-lg transition-colors duration-300 ease-in-out"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#004b87] focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white shadow-md rounded-md">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {[
              { path: "/", label: "Home" },
              { path: "/Team", label: "Team" },
              { path: "/Schedule", label: "Schedule" },
              { path: "/History", label: "History" },
              { path: "/Results", label: "Results" },
              { path: "/National", label: "National" },
            ].map(({ path, label }, index) => (
              <NavLink
                key={index}
                to={path}
                onClick={handleNavLinkClick}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#004b87] bg-[#74acdf] rounded-md px-6 py-3 font-bold text-lg"
                    : "text-[#004b87] hover:bg-[#74acdf] hover:text-white rounded-md px-6 py-3 font-bold text-lg transition-colors"
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
