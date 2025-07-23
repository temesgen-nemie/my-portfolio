const About = () => {
  const skills = [
    { name: "React", level: "Advanced" },
    { name: "Next.js", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "Node.js", level: "Junior" },
    { name: "Bootstrap", level: "Intermediate" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row gap-12">
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
              <p className="text-gray-600 dark:text-gray-400">
                Jimma University | CGPA: 3.85 | Graduated 2025
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {skill.name}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
              Achievements
            </h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 space-y-2">
              <li>
                Awarded 3rd Best Project of the Year (Online Donation Platform)
              </li>
              <li>Cisco Certificate in Graphics Design</li>
              <li>Graduated with Great Distinction – 3rd in Class (2025)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
