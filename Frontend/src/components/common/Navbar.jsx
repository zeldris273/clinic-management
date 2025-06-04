import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowRight, FaHospital, FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/authSlice"; // Đường dẫn slice

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  const pagesLinks = [
    "/feature",
    "/doctors",
    "/appointment",
    "/testimonial",
    "/patients",
    "/medical",
    "/staff",
    "/inventory",
    "/finance",
    "/customer",
    "/admin",
    "/reports",
  ];

  const isPagesActive = pagesLinks.includes(location.pathname);

  return (
    <nav className="bg-white text-black p-4 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 text-blue-600 text-3xl">
          <FaHospital />
          Klinik
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex md:items-center space-x-4 ${
            isOpen ? "block flex flex-col items-center space-y-4 mt-4" : "hidden"
          } md:block md:flex-row md:space-y-0 md:mt-0 transition-all duration-300 ease-in-out`}
        >
          <li>
            <Link to="/" className={`px-4 py-2 ${location.pathname === "/" ? "text-blue-400" : "hover:text-blue-400"}`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`px-4 py-2 ${location.pathname === "/about" ? "text-blue-400" : "hover:text-blue-400"}`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className={`px-4 py-2 ${location.pathname === "/services" ? "text-blue-400" : "hover:text-blue-400"}`}>
              Services
            </Link>
          </li>
          <li className="relative group">
            <span
              className={`cursor-pointer px-4 py-2 ${isPagesActive ? "text-blue-400" : "hover:text-blue-400"}`}
              onClick={() => setIsPagesOpen(!isPagesOpen)}
            >
              Pages
            </span>
            <ul
              className={`absolute ${
                isPagesOpen || isOpen ? "block" : "hidden"
              } group-hover:block bg-white text-black shadow-lg rounded p-2 w-48 z-10 left-0 md:${
                isPagesOpen ? "block" : "hidden"
              } transition-opacity duration-300 ease-in-out`}
            >
              {pagesLinks.map((path) => {
                const name = path.replace("/", "").replace(/^\w/, (c) => c.toUpperCase());
                return (
                  <li key={path}>
                    <Link
                      to={path}
                      className={`block px-4 py-2 ${
                        location.pathname === path ? "text-blue-400" : "hover:bg-gray-100"
                      }`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li>
            <Link to="/contact" className={`px-4 py-2 ${location.pathname === "/contact" ? "text-blue-400" : "hover:text-blue-400"}`}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/appointment"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center space-x-2"
            >
              <span>Appointment</span>
              <FaArrowRight className="w-4 h-4 mt-1" />
            </Link>
          </li>

          {/* ✅ Login/Logout UI */}
          {token ? (
            <>
              <li className="flex items-center space-x-1 px-4 py-2">
                <FaRegUser className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700">{user?.email || "User"}</span>
              </li>
              <li>
                <button
                  onClick={() => dispatch(logoutUser())}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to="/auth"
                className={`flex items-center px-4 py-2 space-x-1 ${
                  location.pathname === "/auth" ? "text-blue-400" : "hover:text-blue-400"
                }`}
              >
                <span>Login</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
