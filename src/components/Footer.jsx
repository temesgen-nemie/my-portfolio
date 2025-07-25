import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/temesgen-nemie",
      name: "GitHub"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      url: "https://linkedin.com/in/temesgen-nemie",
      name: "LinkedIn"
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      url: "mailto:temen9020@gmail.com",
      name: "Email"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-12"
        />

        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Temesgen Nemie
            </h2>
            <p className="text-gray-400 mt-2">Building digital experiences</p>
          </motion.div>

          {/* Social links */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-4 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <p>
            © {new Date().getFullYear()} Temesgen Nemie. All rights reserved.
          </p>
          <p className="mt-2">
            Ethiopia
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;