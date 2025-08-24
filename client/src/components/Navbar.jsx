import { Link } from "react-router-dom";
import {
  FaHome,
  FaPlus,
  FaInfoCircle,
  FaEdit,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Left Links */}
        <div className="flex gap-6 items-center">
          <Link
            to="/"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/items"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200"
          >
            <FaPlus /> Items
          </Link>
          <Link
            to="/items/detail/1"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200"
          >
            <FaInfoCircle /> Users
          </Link>
        </div>

        {/* Right Link */}
        <div>
          {!loggedIn ? (
            <Link
              to="/auth/login"
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200"
            >
              <FaSignInAlt /> Login
            </Link>
          ) : (
            <button
              onClick={logoutHandler}
              className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200"
            >
              <FaSignOutAlt /> Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
