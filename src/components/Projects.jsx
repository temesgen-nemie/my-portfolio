import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Online Donation Platform",
      description:
        "A digital platform connecting donors, NGOs, and volunteers to facilitate transparent donations.",
      tech: ["React", "Node.js"],
      github: "#",
      demo: "#",
      image: "/assets/images/donation-platform.jpg", // Replace with your image path
    },
    {
      title: "NU EVENT Management",
      description:
        "Event management and ticketing platform developed during internship.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      github: "#",
      demo: "#",
      image: "/assets/images/nu-event.jpg",
    },
    {
      title: "WedShop E-commerce",
      description:
        "E-commerce platform for wedding materials with AR features.",
      tech: ["React", "AR Integration"],
      github: "#",
      demo: "#",
      image: "/assets/images/wedshop.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
