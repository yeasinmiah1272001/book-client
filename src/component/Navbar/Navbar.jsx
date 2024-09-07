import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/banner/logo.jpg";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md font-semibold text-xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Bookstore Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-semibold">Bookstore</span>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/Allbooks" className="text-gray-600 hover:text-gray-900">
            All Books
          </Link>
          <Link
            to="/dash"
            className="text-gray-600 hover:text-gray-900 flex gap-2"
          >
            <span>DashBoard</span>
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
          {user ? (
            <>
              <span className="text-gray-600">{user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                LogOut
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/Allbooks"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            All Books
          </Link>
          <Link
            to="/dash"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            DashBoard
          </Link>
         
          <Link
            to="/about"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Contact
          </Link>
          {user ? (
            <>
              <span className="block px-4 py-2 text-gray-600">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
              >
                LogOut
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="block w-full px-4 py-2 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
