import { Link } from "react-router-dom";
import { FaHome, FaPlus, FaInfoCircle, FaEdit } from "react-icons/fa";

export default function ItemNavbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Left Links */}
        <div className="flex gap-6 items-center">
          <Link
            to="/items"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200"
          >
            <FaHome /> Home
          </Link>
          <Link
            to="/items/create"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200"
          >
            <FaPlus /> Create
          </Link>
          <Link
            to="/items/detail/1"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200"
          >
            <FaInfoCircle /> Detail
          </Link>
          <Link
            to="/items/update/1"
            className="flex items-center gap-2 hover:text-yellow-300 transition-colors duration-200"
          >
            <FaEdit /> Update
          </Link>
        </div>
      </div>
    </nav>
  );
}
