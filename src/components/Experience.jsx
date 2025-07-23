const Experience = () => {
  const experiences = [
    {
      role: "Intern",
      company: "Eaglelion System Technology",
      period: "Feb 2024 - Jun 2024",
      description: [
        "Worked on NU EVENT, an event management and ticketing platform.",
        "Used Next.js, Tailwind CSS, and TypeScript.",
      ],
    },
    {
      role: "Hackathon Participant",
      company: "Stride for Ethiopia",
      period: "May 2024 - Jun 2024",
      description: [
        "Developed an AI-based disease surveillance system prototype in 48 hours.",
      ],
    },
    {
      role: "Hackathon Participant",
      company: "Venture Meda",
      period: "Nov 2024 - Dec 2024",
      description: [
        "Built WedShop, an e-commerce platform for wedding items with AR features.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {exp.role} · {exp.company}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {exp.period}
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
