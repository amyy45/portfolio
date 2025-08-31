import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "StegoShield",
      description:
        "A deep learning based web app to detect hidden malicious payloads in image, audio, and video files using steganography techniques.",
      link: "#",
    },
    {
      title: "Network Vulnerability Scanner",
      description:
        "A Kali Linux project for scanning and reporting network vulnerabilities with automated analysis.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "This portfolio itself 🚀 — built with React, TypeScript, TailwindCSS, and Vite.",
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100 px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-10">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-blue-600">
                {project.title}
              </h2>
              <p className="mt-3 text-gray-700">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 inline-block text-sm text-blue-500 hover:text-blue-700"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
