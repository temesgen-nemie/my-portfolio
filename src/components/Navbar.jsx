import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { navLinks, socialLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode, mounted]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-4 sm:top-6 left-0 right-0 mx-auto w-[95%] max-w-5xl z-50 transition-all duration-300 ${
        scrolled || isOpen ? "translate-y-0" : ""
      }`}
    >
      <div 
        className={`rounded-full px-6 py-3 transition-all duration-300 border ${
          scrolled || isOpen 
            ? "glass-heavy shadow-lg shadow-purple-500/10 border-gray-200 dark:border-white/10" 
            : "glass backdrop-blur-sm bg-opacity-50 border-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="flex-shrink-0"
          >
            <a
              href="#"
              className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-500 dark:to-cyan-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              TN.
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors group"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-500 dark:via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            
            <div className="h-6 w-px bg-gray-300 dark:bg-white/10" />

            <div className="flex space-x-2">
              {socialLinks.filter(link => link.name !== "Email").map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
             <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-300 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 p-2"
          >
            <div className="glass-heavy rounded-2xl p-4 space-y-2 border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden">
               {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-all font-medium"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="pt-4 mt-2 border-t border-gray-200 dark:border-white/10 flex justify-center space-x-6">
                {socialLinks.filter(link => link.name !== "Email").map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
