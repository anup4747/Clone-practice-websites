import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarOption,setNavbarOption] = useState("home");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]); 


  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/">
            <div className="text-2xl font-bold text-black">MyBrand</div>
        </Link>
       

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" onClick={() => setNavbarOption("home")} className={`text-black hover:text-gray-500  px-3 rounded-full py-1 transition-all duration-300 ease-in-out  ${navbarOption === "home" ? "bg-black text-white" : ""}`}>Home</Link>
          <Link to="/about" onClick={() => setNavbarOption("about")} className={`text-black hover:text-gray-500  px-3 rounded-full py-1 transition-all duration-300 ease-in-out ${navbarOption === "about" ? "bg-black text-white" : ""}`}>About</Link>
          <Link to="/services" onClick={() => setNavbarOption("services")}className={`text-black hover:text-gray-500  px-3 rounded-full py-1 transition-all duration-300 ease-in-out ${navbarOption === "services" ? "bg-black text-white" : ""}`}>Services</Link>
          <Link to="/contact" onClick={() => setNavbarOption("contact")}className={`text-black hover:text-gray-500  px-3 rounded-full py-1 transition-all duration-300 ease-in-out ${navbarOption === "contact" ? "bg-black text-white" : ""}`}>Contact</Link>
        </div>

      
        {/* Right Icons */}
        <div className="flex items-center space-x-4 transition-all duration-300 ease-in-out">
          {/* Dark Mode Toggle */}
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white ">
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400 " /> : <Moon className=" w-5 h-5 text-gray-800 dark:text-white" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-black dark:text-white">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black text-black dark:text-white flex flex-col space-y-4 px-6 py-4">
          <a href="#" className="hover:text-gray-500">Home</a>
          <a href="#" className="hover:text-gray-500">About</a>
          <a href="#" className="hover:text-gray-500">Services</a>
          <a href="#" className="hover:text-gray-500">Contact</a>
        </div>
      )}
    </nav>
  );
}
