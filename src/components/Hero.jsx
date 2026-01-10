import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const mypic = "/assets/img.jpg";
const mycv = "/assets/Temesgen_Nemie_Updated_CV.pdf";

const Hero = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <section
      id="home"
      className="release relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 text-center md:text-left"
          >

            <br /> 
              <br /> 
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              I am <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-purple-400 dark:via-pink-400 dark:to-cyan-400">
                Temesgen
              </span>
            </h1>

            <div className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8 h-12">
              {isHydrated && (
                <TypeAnimation
                  sequence={[
                    "Software Engineer",
                    2000,
                    "Frontend Developer",
                    2000,
                    "Problem Solver",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-cyan-600 dark:text-cyan-400"
                />
              )}
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Crafting immersive web experiences with modern technologies. 
              Specializing in scalable, user-centric applications built with Next.js and React.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-purple-600 text-white rounded-full font-semibold overflow-hidden transition-transform hover:scale-105 shadow-lg shadow-purple-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transition-opacity" />
                <span className="relative z-10 flex items-center gap-2">
                  View My Work <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href={mycv}
                download="Temesgen_Nemie_Updated_CV.pdf"
                className="px-8 py-4 glass text-gray-900 dark:text-white rounded-full font-semibold hover:bg-gray-100/50 dark:hover:bg-white/10 transition-all hover:scale-105 flex items-center gap-2 border border-gray-200 dark:border-white/10"
                suppressHydrationWarning
              >
                Download CV
              </a>
            </div>

            <div className="mt-12 flex justify-center md:justify-start gap-6">
              {[
                { icon: FaGithub, href: "https://github.com/temesgen-nemie" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/temesgen-nemie" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-white transition-colors transform hover:-translate-y-1"
                >
                  <social.icon size={28} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center relative"
          >
            {/* Spinning Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] border border-cyan-500/20 dark:border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] border border-purple-500/20 dark:border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            </div>

            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl shadow-purple-500/20 z-10 glass">
              <img
                src={mypic}
                alt="Temesgen Nemie"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                loading="eager"
              />
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 glass px-4 py-2 rounded-xl text-sm font-medium text-cyan-700 dark:text-cyan-300 border border-cyan-500/30"
            >
              🚀 Next.js
            </motion.div>
             <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 glass px-4 py-2 rounded-xl text-sm font-medium text-purple-700 dark:text-purple-300 border border-purple-500/30"
            >
              💻 Node js 
            </motion.div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;