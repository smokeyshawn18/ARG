import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#001f3f] text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quick Links Box */}
          <div className="bg-[#003366] rounded-lg shadow-lg p-6">
            <h3 className="font-bold text-xl mb-4 border-b-2 border-white pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "Team",
                "Schedule",
                "Results",
                "History",
                "National",
              ].map((link) => (
                <li key={link}>
                  <NavLink
                    to={`/${link.toLowerCase()}`}
                    className="block text-white hover:text-[#74acdf] hover:underline transition"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div className="bg-[#003366] rounded-lg shadow-lg p-6">
            <h3 className="font-bold text-xl mb-4 border-b-2 border-white pb-2">
              About Us
            </h3>
            <p className="text-sm">
              We are dedicated to bringing you the latest updates on the
              Argentina National Football Team. Follow us for match results,
              schedules, and more!
            </p>
          </div>

          {/* Social Media Links */}
          <div className="bg-[#003366] rounded-lg shadow-lg p-6 flex flex-col items-center">
            <h3 className="font-bold text-xl mb-4 border-b-2 border-white pb-2">
              Connect With Us
            </h3>
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="#"
                className="text-white hover:text-[#74acdf] text-2xl transition"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#74acdf] text-2xl transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/shudarsan25"
                target="blank"
                className="text-white hover:text-[#74acdf] text-2xl transition"
              >
                <FaInstagram />
              </a>
            </div>
            <p className="text-sm text-center">
              Follow us on social media for the latest updates!
            </p>
          </div>
        </div>

        {/* Copyright Info */}
        <div className="text-center text-lg font-bold text-[#74acdf] mt-6">
          <p>© smokeyshawn 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
