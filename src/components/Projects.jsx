import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Whales Market",
      description: "A market place for whales using React.",
      img: "./images/whales.png",
    },
    {
      name: "Invader PC",
      description: "A gaming PC store built with WordPress and React.",
      img: "./images/invader.png",
    },
    {
      name: "Preply Website",
      description: "An educational platform for online tutoring.",
      img: "./images/preply.png",
    },
    {
      name: "Ziaway",
      description: "A travel and tourism website.",
      img: "./images/ziaway.png",
    },
    {
      name: "Netflix Clone",
      description: "A clone of the popular streaming service built with React.",
      img: "./images/netflix.png",
    },
    {
      name: "NumTease",
      description: "A puzzle game application built with React.",
      img: "./images/numtease.png",
    },
    {
      name: "Pixology",
      description: "A photo editing and sharing platform.",
      img: "./images/pixology.png",
    },
    {
      name: "Birch",
      description: "An e-commerce website for eco-friendly products.",
      img: "./images/birch.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            >
              <img
                className="w-full h-48 object-cover rounded-t-lg mb-4"
                src={`/${project.img}`}
                alt={project.name}
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
