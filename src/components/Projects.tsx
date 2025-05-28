import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Inventory Management System",
    description:
      "inventory management system built with Django and React, designed to help businesses efficiently track their inventory, manage suppliers.",
    link: "https://github.com/shreif92/Inventory",
    image: "/projects/ecommerce.webp",
    tech: [
      "Django 5.1",
      "Django REST Framework",
      "SQLite Database",
      "Django Filters",
      "Widget Tweaks",
      "Jazzmin (Admin Interface)",
    ],
  },
  {
    title: "Django job board project",
    description:
      "A feature-rich job board platform built with Django, allowing employers to post jobs and job seekers to apply for positions..",
    link: "https://github.com/shreif92/job-board-improved",
    image: "/projects/Django job board .PNG",
    tech: [
      "Django 5.0",
      "SQLite3",
      "HTML, CSS, JavaScript",
      "Django Authentication System",
      "Django Filters",
    ],
  },
  {
    title: "DRF API Project",
    description:
      "This project is a Django-based API built using Django Rest Framework (DRF). It provides endpoints for managing books and categories, including filtering, searching, and pagination.",
    link: "https://github.com/shreif92/DRF_API",
    image: "/projects/books.jpg",
    tech: ["Django Rest Framework", "SQLite3"],
  },
  {
    title: "Product and Supplier Management API",
    description:
      "A FastAPI-based REST API for managing products and suppliers with SQLite database backend.",
    link: "https://github.com/shreif92/react-fastapi-learning",
    image: "/projects/Product and Supplier.jpg",
    tech: ["FastAPI", "SQLite", "Tortoise ORM", "Pydantic for data validation"],
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio built with React and TailwindCSS to showcase projects, and skills — made with vibe coding.",
    link: "https://github.com/shreif92/Portfolio-Website",
    image: "/projects/portfolio.webp",
    tech: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Vite"],
  },
  {
    title: "MERN Stack Reservation App",
    description:
      "A RESTful API built with Node.js, Express, and MongoDB for a hotel reservation app, managing hotels, rooms, and bookings.",
    link: "https://github.com/shreif92/Reservation-App",
    image: "/projects/HMS-Blog-hero.jpg",
    tech: ["MERN", "Mongoose", "JWT", "bcryptjs ", "Vite"],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto px-4 sm:px-6 lg:px-10 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          Projects
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          A selection of my recent work, showcasing problem-solving, design, and
          full-stack development skills.
        </p>
      </motion.div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg group hover:shadow-orange-500/40 transition duration-300 ease-in-out"
          >
            <div className="overflow-hidden h-48 bg-gray-900">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover opacity-95 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
              />
            </div>
            <div className="p-6">
              <h3 className="text-white text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange-500 hover:underline"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
