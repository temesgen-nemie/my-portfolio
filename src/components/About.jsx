import { useState, useCallback } from "react";
import { FiX, FiAward, FiBook, FiCode, FiUser } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { skills, certificates } from "../constants";
import Image from "next/image";

const About = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback((certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 mb-4">
            About Me
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A glimpse into my journey, skills, and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Bio Card - Large */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-8 md:col-span-2 md:row-span-2 flex flex-col justify-center relative overflow-hidden group border border-gray-200 dark:border-white/10"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-75" />

            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-500/10 rounded-xl text-purple-600 dark:text-purple-400">
                <FiUser size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Who I Am
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              Software Engineering graduate (Class of 2025) from Jimma
              University with a strong foundation in{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                Full Stack Development
              </span>
              . Passionate about building scalable, user-centered applications
              that solve real-world problems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I thrive in dynamic environments where innovation meets execution.
              Whether its crafting pixel-perfect UIs with{" "}
              <span className="text-purple-600 dark:text-purple-400">
                React
              </span>{" "}
              or architecting robust backends with{" "}
              <span className="text-purple-600 dark:text-purple-400">
                Node.js
              </span>
              , I bring dedication and technical expertise to every project.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/30 transition-colors border border-gray-200 dark:border-white/10"
          >
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tr from-cyan-900/5 to-transparent opacity-50" />

            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-100 dark:bg-cyan-500/10 rounded-lg text-cyan-600 dark:text-cyan-400">
                <FiBook size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div>
              <h4 className="text-lg font-medium text-cyan-700 dark:text-cyan-200">
                BSc in Software Engineering
              </h4>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Jimma University
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300">
                  Class of 2025
                </span>
                <span className="font-bold text-2xl text-gray-900 dark:text-white">
                  3.85{" "}
                  <span className="text-sm text-gray-500 font-normal">
                    CGPA
                  </span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-3xl p-8 md:row-span-2 relative overflow-hidden border border-gray-200 dark:border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-pink-100 dark:bg-pink-500/10 rounded-lg text-pink-600 dark:text-pink-400">
                <FiCode size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Tech Stack
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors cursor-default"
                >
                  <span>{skill.icon}</span>
                  <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent mb-6" />
              <p className="text-xs text-center text-gray-500 uppercase tracking-widest">
                Constantly Learning
              </p>
            </div>
          </motion.div>

          {/* Achievements / Certificates */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-3xl p-8 md:col-span-2 border border-gray-200 dark:border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-500/10 rounded-lg text-yellow-600 dark:text-yellow-400">
                <FiAward size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Achievements
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificates.map((cert, index) => (
                <motion.button
                  key={index}
                  onClick={() => openModal(cert)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center p-3 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all text-left group"
                >
                  <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden mr-4">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-white transition-colors line-clamp-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-gray-500">{cert.date}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {isModalOpen && selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-heavy rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">
                      {selectedCertificate.title}
                    </h3>
                    <button
                      onClick={closeModal}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FiX size={24} />
                    </button>
                  </div>

                  <div className="mb-6 rounded-xl overflow-hidden border border-white/10 relative h-[400px]">
                    <Image
                      src={selectedCertificate.image}
                      alt={selectedCertificate.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {selectedCertificate.details}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FiAward className="text-yellow-500" />
                    <span>Awarded: {selectedCertificate.date}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
