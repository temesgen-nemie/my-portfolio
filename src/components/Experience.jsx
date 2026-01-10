import { useState, useEffect } from "react";
import { FiCalendar, FiBriefcase, FiCode, FiAward } from "react-icons/fi";
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
        "Contributed to NU EVENT, a comprehensive event management platform.",
        "Built responsive UI components using Next.js and Tailwind CSS.",
        "Collaborated with senior developers in an agile environment.",
      ],
      icon: <FiBriefcase size={20} />,
      color: "from-blue-400 to-blue-600",
      glow: "shadow-blue-500/50"
    },
    {
      role: "Hackathon Participant",
      company: "Stride for Ethiopia",
      period: "May 2024 - Jun 2024",
      description: [
        "Developed 'AI in Disease Surveillance' prototype within 48 hours.",
        "Implemented real-time data visualization dashboards.",
        "Won recognition for innovative use of predictive analytics.",
      ],
      icon: <FiCode size={20} />,
      color: "from-purple-400 to-purple-600",
      glow: "shadow-purple-500/50"
    },
    {
      role: "Hackathon Participant",
      company: "Venture Meda",
      period: "Nov 2024 - Dec 2024",
      description: [
        "Built WedShop, an AR-enabled e-commerce platform for weddings.",
        "Integrated 3D product previews for immersive user experience.",
        "Designed mobile-first interface focusing on conversion.",
      ],
      icon: <FiAward size={20} />,
      color: "from-cyan-400 to-cyan-600",
      glow: "shadow-cyan-500/50"
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            My Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Professional experience and key milestones</p>
        </motion.div>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-cyan-500/20 md:-translate-x-1/2 rounded-full" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="md:w-1/2 pl-20 md:pl-0">
                  <div className={`glass p-8 rounded-2xl border border-gray-200 dark:border-white/5 relative group hover:bg-gray-50 dark:hover:bg-white/5 transition-colors ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.role}</h3>
                    <h4 className={`text-lg font-medium bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-4`}>{exp.company}</h4>
                    
                    <ul className={`space-y-2 text-gray-600 dark:text-gray-400 ${
                       index % 2 === 0 ? "md:items-end" : "md:items-start"
                    } flex flex-col`}>
                      {exp.description.map((desc, i) => (
                        <li key={i} className="leading-relaxed">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center p-2 bg-gray-50 dark:bg-[#030014] rounded-full z-10 border border-gray-200 dark:border-white/10 mt-6 md:mt-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} ${exp.glow} shadow-lg flex items-center justify-center text-white`}>
                    {exp.icon}
                  </div>
                </div>

                {/* Date Side */}
                <div className="md:w-1/2 pl-20 md:pl-0 flex items-center md:justify-center">
                  <div className={`flex items-center gap-2 text-gray-500 dark:text-gray-400 glass px-4 py-2 rounded-full border border-gray-200 dark:border-white/5 ${
                     index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}>
                    <FiCalendar className="text-blue-600 dark:text-blue-400" />
                    <span>{exp.period}</span>
                  </div>
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