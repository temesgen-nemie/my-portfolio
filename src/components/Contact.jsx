import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Get In Touch
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-4" />
                  <span className="text-gray-700 dark:text-gray-300">
                    temen9020@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <FaGithub className="h-5 w-5 text-gray-700 dark:text-gray-300 mr-4" />
                  <a
                    href="https://github.com/temesgen-nemie"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    github.com/temesgen-nemie
                  </a>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-4" />
                  <a
                    href="https://linkedin.com/in/temesgen-nemie"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    linkedin.com/in/temesgen-nemie
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
