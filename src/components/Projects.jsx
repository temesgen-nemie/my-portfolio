import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import donationplatform from "../assets/donationplatform.png";
import nuevent from "../assets/nuevent.jpg";
import AIindisease from "../assets/AI in disease.png";
import { useState, useEffect } from "react";

const Projects = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const projects = [
    {
      title: "Online Donation Platform",
      description: "A digital platform connecting donors, NGOs, and volunteers to facilitate transparent donations.",
      tech: ["React", "Node.js", "express js"],
      github: "https://github.com/temesgen-nemie/Online-Donation-Platform-through-NGOs",
      demo: "https://donate-link.netlify.app/",
      image: donationplatform,
    },
    {
      title: "NU EVENT Management",
      description: "Event management and ticketing platform developed during internship.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/temesgen-nemie/nuevents-project",
      demo: "https://github.com/temesgen-nemie/nuevents-project",
      image: nuevent,
    },
    {
      title: "AI in disease surveillance",
      description: "early detection, and preventive health care.",
      tech: ["React", "AR Integration"],
      github: "#",
      demo: "#",
      image: AIindisease,
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {isHydrated && (
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            My Projects
          </motion.h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={isHydrated ? cardVariants : null}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={320}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={isHydrated ? { scale: 1.05 } : null}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={isHydrated ? { scale: 1.05 } : null}
                    whileTap={isHydrated ? { scale: 0.95 } : null}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label={`View ${project.title} code on GitHub`}
                  >
                    <FiGithub className="mr-2 text-gray-700 dark:text-gray-300" />
                    <span className="text-gray-700 dark:text-gray-300">View Code</span>
                  </motion.a>
                  <motion.a
                    whileHover={isHydrated ? { scale: 1.05 } : null}
                    whileTap={isHydrated ? { scale: 0.95 } : null}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <FiExternalLink className="mr-2" />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;