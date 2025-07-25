import { useState } from "react";
import { FiX } from "react-icons/fi";
import internshipCert from "../assets/internship.jpg";
import projectCert from "../assets/project.jpg";
import tempo from "../assets/Tempo.jpg";
import cisco from "../assets/cisco.jpg";

const About = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skills = [
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Node.js", level: "Junior" },
    { name: "Bootstrap", level: "Intermediate" },
  ];

  const certificates = [
    {
      title: "EagleLion System Technology Internship",
      image: internshipCert,
      description:
        "Completed internship with demonstrated technical and communication skills",
      date: "Sep 2024",
      details:
        "Recognized for strong commitment and professionalism during internship at EagleLion System Technology",
    },
    {
      title: "3rd Best Project Award",
      image: projectCert,
      description: "Awarded 3rd place for Outstanding Final Year Project",
      date: "Jun 2025",
      details:
        "Recognized for exceptional innovation and technical excellence for the project 'Digital Platform for Donation' by Faculty of Computing and Informatics",
    },
    {
      title: "Graduated with great distinction",
      image: tempo,
      description:
        "Graduated with strong academic performance and hands-on experience in software.",
      date: "2025",
      details:
        "Graduated with strong academic performance and handson experience in software engineering.",
    },
    {
      title: "Cisco Certificate of Completion",
      image: cisco,
      description:
        "Completed Graphics Design Training under the Cisco Networking Academy at Jimma University, gaining practical skills in visual communication, branding, and digital content",
      date: "2025",
      details:
        "Completed Graphics Design Training under the Cisco Networking Academy at Jimma University, gaining practical skills in visual communication, branding, and digital content",
    },
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="about" className="py-10 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Software Engineering graduate (Class of 2025) from Jimma
              University with a strong foundation in programming (JavaScript,
              TypeScript), problem-solving, and frontend development (React,
              Next.js, Tailwind CSS). Passionate about building scalable,
              user-centered applications that solve real-world problems.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Education
            </h3>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-gray-900 dark:text-white">
                BSc in Software Engineering
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Jimma University | CGPA: 3.85 | Graduated 2025
              </p>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Key Achievements <span >(click to view details)</span>
            </h3>
            <ul className="space-y-4 ">
              {certificates.map((cert, index) => (
                <li key={index} className="flex items-start  gap-4">
                  <button
                    onClick={() => openModal(cert)}
                    className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-md transition-all"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                  <div>
                    <button
                      onClick={() => openModal(cert)}
                      className="text-left text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      {cert.description}
                    </button>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                      {cert.date}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certificate Modal */}
        {isModalOpen && selectedCertificate && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-700 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {selectedCertificate.title}
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 p-1"
                  >
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <div className="mb-6 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-auto"
                  />
                </div>

                <div className="text-gray-700 dark:text-gray-200 mb-4">
                  {selectedCertificate.details}
                </div>

                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Awarded: {selectedCertificate.date}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
