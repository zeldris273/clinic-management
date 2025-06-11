import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHospital, FaRegUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  // Lấy email và role từ token
  let userEmail = "User";
  let userRole = null;
  if (token) {
    try {
      const decoded = jwtDecode(token);
      userEmail =
        decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] ||
        "User";
      userRole =
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }

  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setIsHovered(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 300);
    }
  };

  const toggleUserMenu = () => {
    if (window.innerWidth < 1024) {
      setIsUserMenuOpen(!isUserMenuOpen);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setIsUserMenuOpen(false);
    setIsHovered(false);
    navigate("/auth");
  };

  return (
    <nav className="bg-white text-black p-4 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 text-blue-600 text-3xl">
          <FaHospital />
          Klinik
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
            isOpen
              ? "block flex flex-col items-center space-y-4 mt-4"
              : "hidden"
          } md:block md:flex-row md:space-y-0 md:mt-0 transition-all duration-300 ease-in-out`}
        >
          <li>
            <Link
              to="/"
              className={`px-4 py-2 ${
                location.pathname === "/"
                  ? "text-blue-400"
                  : "hover:text-blue-400"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`px-4 py-2 ${
                location.pathname === "/about"
                  ? "text-blue-400"
                  : "hover:text-blue-400"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`px-4 py-2 ${
                location.pathname === "/services"
                  ? "text-blue-400"
                  : "hover:text-blue-400"
              }`}
            >
              Services
            </Link>
          </li>

          {/* User dropdown */}
          {token ? (
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="flex items-center space-x-1 px-4 py-2 cursor-pointer"
                onClick={toggleUserMenu}
              >
                <FaRegUser className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-700 hidden md:inline">
                  {userEmail}
                </span>
              </div>
              <div
                className={`absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md text-sm text-black z-50 ${
                  window.innerWidth < 1024
                    ? isUserMenuOpen
                      ? "block"
                      : "hidden"
                    : isHovered
                    ? "block"
                    : "hidden"
                }`}
              >
                {userRole === "Doctor" ? (
                  <>
                    <Link
                      to="/medical-record-list"
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        setIsHovered(false);
                      }}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Medical Record List
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/profile"
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        setIsHovered(false);
                      }}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/medical-history"
                      onClick={() => {
                        setIsUserMenuOpen(false);
                        setIsHovered(false);
                      }}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Medical History
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </li>
          ) : (
            <li>
              <Link
                to="/auth"
                className={`flex items-center px-4 py-2 space-x-1 ${
                  location.pathname === "/auth"
                    ? "text-blue-400"
                    : "hover:text-blue-400"
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
}
