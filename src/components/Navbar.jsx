import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Apply dark mode class to HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              <a href="#">Temesgen Nemie</a>
            </span>
          </div>

          {/* Desktop Menu (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
              </button>
              <a
                href="https://github.com/temesgen-nemie"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/temesgen-nemie"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-700 dark:text-gray-300"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/temesgen-nemie"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/temesgen-nemie"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-blue-600 dark:text-blue-400 hover:text-blue-700"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
