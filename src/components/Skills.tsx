import { motion } from "motion/react";
import { Code2, Server, Cloud } from "lucide-react";

const skills = [
  {
    icon: <Code2 className="w-6 h-6 text-orange-500" />,
    title: "Programming & Core Concepts",
    items: [
      "PYTHON",
      "JavaScript",
      "HTML, CSS",
      "OOP, OOD",
      "Algorithms, Data Structures",
      "Design Patterns",
      "Problem Solving",
    ],
  },
  {
    icon: <Server className="w-6 h-6 text-orange-500" />,
    title: "Full Stack Development",
    items: [
      "FastAPI, Django",
      "Node.js (Express.js",
      "SQL Server, PostgreSQL, MongoDB",
      "Microservices, Clean Architecture, VSA, CQRS",
      "REST APIs, gRPC, SignalR, RabbitMQ, YARP",
      "JWT Authentication, Role-Based Authorization",
      "React, Tailwind CSS, HTML, CSS, Bootstrap",
    ],
  },
  {
    icon: <Cloud className="w-6 h-6 text-orange-500" />,
    title: "Cloud, DevOps & Testing",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "Docker Compose",
      "Unit Testing (xUnit, Moq)",
      "Integration Testing",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Skills
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          A broad overview of my technical skills and experience across backend,
          frontend, cloud, and testing.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-orange-500/40 transition duration-300 ease-in-out"
          >
            <div className="flex items-center gap-4 mb-4">
              {skill.icon}
              <h3 className="text-white text-xl font-semibold">
                {skill.title}
              </h3>
            </div>
            <ul className="text-gray-300 space-y-2 text-sm sm:text-base list-disc list-inside ml-4">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
