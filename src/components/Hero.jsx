import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Building scalable, user-centered applications with React, Next.js, and
          Tailwind CSS.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
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
    </section>
  );
};

export default Hero;
