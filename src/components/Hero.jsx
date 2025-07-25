import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import mypic from "../assets/img.jpg";
import mycv from "../assets/Temesgen_Nemie_Updated_CV.pdf";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content (Left Side) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm <span className="text-blue-600">Temesgen Nemie</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Frontend Developer",
                1000,
                "Problem Solver",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0">
            Building scalable, user-centered applications with React, Next.js,
            and Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition text-center"
            >
              Contact Me
            </a>
            <a
              href={mycv}
              download="Temesgen_Nemie_Updated_CV.pdf"
              className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-center flex items-center justify-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download CV
            </a>
          </div>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
            <a
              href="https://github.com/temesgen-nemie"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="h-6 w-6 text-gray-700 dark:text-gray-300 hover:text-blue-600" />
            </a>
            <a
              href="https://linkedin.com/in/temesgen-nemie"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="h-6 w-6 text-blue-600 dark:text-blue-400 hover:text-blue-700" />
            </a>
          </div>
        </div>

        {/* Photo (Right Side) */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-blue-600 rounded-full opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute inset-0 border-4 border-blue-600 rounded-full opacity-10"></div>
            <div className="relative h-full w-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img
                src={mypic}
                alt="Temesgen Nemie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
