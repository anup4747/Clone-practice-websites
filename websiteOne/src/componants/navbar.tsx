import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, Search, Turtle, Flashlight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarOption, setNavbarOption] = useState("home");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Logic
    setSearchQuery("");
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div  onClick={() => setMenuOpen(false)}   className="text-2xl font-bold font-poppins text-black">
            MyBrand
          </div>
        </Link>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            onClick={() => setNavbarOption("home")}
            className={`text-black font-poppins hover:text-gray-500  px-3 rounded-full py-1 transition-all duration-300 ease-in-out  ${
              navbarOption === "home" ? "bg-black text-white" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setNavbarOption("about")}
            className={`text-black font-poppins hover:text-gray-500  px-3 rounded-full py-1 transition-all duration-300 ease-in-out ${
              navbarOption === "about" ? "bg-black text-white" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => setNavbarOption("services")}
            className={`text-black font-poppins hover:text-gray-500  px-3 rounded-full py-1 transition-all duration-300 ease-in-out ${
              navbarOption === "services" ? "bg-black text-white" : ""
            }`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setNavbarOption("contact")}
            className={`text-black font-poppins hover:text-gray-500  px-3 rounded-full py-1 transition-all duration-300 ease-in-out ${
              navbarOption === "contact" ? "bg-black text-white" : ""
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center relative">
            <form action="" className="flex item-center">
              <input
                type="text"
                name="search"
                id=""
                value={searchQuery}
                placeholder="Search ..."
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-full px-4 py-9 focus:outline-dashed  w-64"
              />
            </form>

            <button
              type="submit"
              className="bg-gray-100 dark:bg-gray-800 ml text-black dark:text-black p-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors "
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 transition-all duration-300 ease-in-out">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400 " />
            ) : (
              <Moon className=" w-5 h-5 text-gray-800 dark:text-white" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white text-black flex flex-col space-y-4 px-6 py-4">
          <Link to="/"  onClick={() => setMenuOpen(!menuOpen)}  className="hover:text-gray-500">
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(!menuOpen)}  className="hover:text-gray-500">
            About
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(!menuOpen)}  className="hover:text-gray-500">
            Services
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(!menuOpen)}  className="hover:text-gray-500">
            Contact
          </Link>
        </div>
      )}
      {/* Search Icon (Mobile) */}
    

      {showSearch && (
        <div className="md:hidden px-6 py-2 bg-white dark:bg-gray-900">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-l-full px-4 py-2 focus:outline-none flex-grow"
            />
            <button
              type="submit"
              className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-r-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

     
    </nav>
  );
}
