import { useState, useEffect } from "react";
import { FiCalendar, FiAward, FiCode, FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

const Experience = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const experiences = [
    {
      role: "Intern",
      company: "Eaglelion System Technology",
      period: "Feb 2024 - Jun 2024",
      description: [
        "Worked on NU EVENT, an event management and ticketing platform.",
        "Used Next.js, Tailwind CSS, and TypeScript.",
        "Collaborated with cross-functional teams in agile development.",
      ],
      icon: <FiCode className="text-xl" />,
      color: "text-blue-500"
    },
    {
      role: "Hackathon Participant",
      company: "Stride for Ethiopia",
      period: "May 2024 - Jun 2024",
      description: [
        "Developed an AI-based disease surveillance system prototype in 48 hours.",
        "Implemented real-time data visualization and predictive analytics.",
      ],
      icon: <FiAward className="text-xl" />,
      color: "text-purple-500"
    },
    {
      role: "Hackathon Participant",
      company: "Venture Meda",
      period: "Nov 2024 - Dec 2024",
      description: [
        "Built WedShop, an e-commerce platform for wedding items with AR features.",
        "Integrated 3D product previews",
        "Designed mobile-first UI with Tailwind CSS components.",
      ],
      icon: <FiUsers className="text-xl" />,
      color: "text-emerald-500"
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {isHydrated && (
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
          >
            Professional <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </motion.h2>
        )}
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500 to-blue-500/20 dark:from-blue-400/20 dark:via-blue-400 dark:to-blue-400/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={isHydrated ? { opacity: 0, y: 20 } : false}
                whileInView={isHydrated ? { opacity: 1, y: 0 } : false}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-10 md:pl-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 md:left-1/2 top-1 w-4 h-4 rounded-full ${exp.color} bg-white dark:bg-gray-800 border-4 border-blue-100 dark:border-blue-900/50 transform -translate-x-1/2 z-10`}></div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${exp.color} bg-opacity-10`}>
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.role} <span className="font-medium">@ {exp.company}</span>
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-1">
                        <FiCalendar className={exp.color} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 pl-2">
                    {exp.description.map((item, i) => (
                      <motion.li 
                        key={i}
                        whileHover={isHydrated ? { x: 5 } : null}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span className={`${exp.color} mt-1.5 flex-shrink-0`}>•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;