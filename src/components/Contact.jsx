import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCoffee } from "react-icons/fi";
import { contactInfo } from "../constants";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSending(false);
    setIsSent(true);
    formRef.current.reset();
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 mb-6">
              <span className="text-blue-500 font-bold tracking-wider uppercase text-sm">
                Get in Touch
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Let&apos;s create something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                extraordinary
              </span>{" "}
              together.
            </h2>

            <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-lg leading-relaxed">
              Have a project in mind or just want to chat about tech? I&apos;m always
              open to new opportunities and interesting conversations.
            </p>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group"
                >
                  <div
                    className={`p-4 rounded-2xl ${info.bg} ${info.color} text-xl transition-transform group-hover:scale-110`}
                  >
                    <info.icon />
                  </div>
                  <div>
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-900 dark:text-white font-semibold text-lg">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Background decorations */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xzbnbqwe"
              method="POST"
              className="glass p-8 md:p-10 rounded-3xl border border-gray-200 dark:border-white/10 relative z-10"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                Send a Message <FiCoffee className="text-yellow-500" />
              </h3>

              <div className="space-y-6">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 group-focus-within:text-blue-500 transition-colors"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder="your name"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 group-focus-within:text-blue-500 transition-colors"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400"
                    placeholder="youremail@example.com"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 group-focus-within:text-blue-500 transition-colors"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSending || isSent}
                  className={`w-full py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center gap-2 transition-all ${
                    isSent
                      ? "bg-green-500"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-blue-500/25"
                  } ${isSending ? "opacity-75 cursor-not-allowed" : ""}`}
                >
                  {isSending ? (
                    "Sending..."
                  ) : isSent ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message <FiSend />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
