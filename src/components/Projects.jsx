import { FiGithub, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { projects } from "../constants";
import Image from "next/image";

const Projects = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 rounded-full border border-gray-200 dark:border-white/10 glass mb-4">
             <span className="text-cyan-600 dark:text-cyan-400 text-sm tracking-wider uppercase font-bold">Selected Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${project.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="relative glass h-full rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 flex flex-col">
                <div className="relative h-64 overflow-hidden bg-gray-100/50 dark:bg-white/5">
                  {/* Blurred background for inconsistent aspect ratios */}
                  <div className="absolute inset-0 blur-2xl opacity-20 scale-110">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="relative h-full w-full p-4 z-10 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transform group-hover:scale-110 transition-transform duration-700 p-2"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent dark:from-[#030014]/40 dark:via-transparent dark:to-transparent z-20" />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-xs text-gray-700 dark:text-gray-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors"
                      aria-label={`View ${project.title} code`}
                    >
                      <FiGithub size={20} className="mr-2" />
                      Code
                    </a>
                    
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 transition-colors group/link"
                      aria-label={`View ${project.title} demo`}
                    >
                      Live Demo
                      <FiArrowRight className="transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
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
