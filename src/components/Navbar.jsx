import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full overflow-hidden">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">WGTechSol</div>
        <div>
          <a href="#hero" className="text-white px-4">
            Home
          </a>
          <a href="#team" className="text-white px-4">
            Team
          </a>
          <a href="#projects" className="text-white px-4">
            Projects
          </a>
          <a href="#testimonials" className="text-white px-4">
            Testimonials
          </a>
          <a href="#contact" className="text-white px-4">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
