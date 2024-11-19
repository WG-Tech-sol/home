import React from "react";
import { FaPalette, FaLaptopCode, FaMobileAlt } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service 1: UI/UX Design */}
          <ServiceCard
            icon={<FaPalette className="text-4xl mx-auto mb-4" />}
            title="UI/UX Design"
            description="Visualize your dream into reality with our expert UI/UX designers."
          />

          {/* Service 2: Frontend Development */}
          <ServiceCard
            icon={<FaLaptopCode className="text-4xl mx-auto mb-4" />}
            title="Frontend Development"
            description="Crafting responsive and dynamic frontend solutions using modern technologies."
          />

          {/* Service 3: Backend Development */}
          <ServiceCard
            icon={<FaLaptopCode className="text-4xl mx-auto mb-4" />}
            title="Backend Development"
            description="Building robust backend systems to support your applications."
          />

          {/* Service 4: Mobile App Development */}
          <ServiceCard
            icon={<FaMobileAlt className="text-4xl mx-auto mb-4" />}
            title="Mobile App Development"
            description="Creating native and cross-platform mobile apps tailored to your needs."
          />

          {/* Service 5: WordPress Development */}
          <ServiceCard
            icon={<FaLaptopCode className="text-4xl mx-auto mb-4" />}
            title="WordPress Development"
            description="Designing and developing scalable websites using WordPress CMS."
          />

          {/* Service 6: Graphic Designing */}
          <ServiceCard
            icon={<FaPalette className="text-4xl mx-auto mb-4" />}
            title="Graphic Designing"
            description="Creating visually appealing graphics that align with your brand."
          />

          {/* Service 7: MERN Stack Development */}
          <ServiceCard
            icon={<FaLaptopCode className="text-4xl mx-auto mb-4" />}
            title="MERN Stack Development"
            description="Building full-stack applications with MongoDB, Express.js, React, and Node.js."
          />
          {/* Service 8: PHP Development */}
          <ServiceCard
            icon={<FaLaptopCode className="text-4xl mx-auto mb-4" />}
            title="PHP Development"
            description="Dynamic web applications using PHP with Laravel, Symfony, or custom frameworks."
          />

          {/* Service 9: .NET Core Development */}
          <ServiceCard
            icon={<FaLaptopCode className="text-4xl mx-auto mb-4" />}
            title=".NET Core Development"
            description="Scalable and secure applications leveraging .NET Core and C# programming."
          />

          {/* Service 10: Java as Database Developer */}
          <ServiceCard
            icon={<FaLaptopCode className="text-4xl mx-auto mb-4" />}
            title="Java as Database Developer"
            description="Database design, optimization, and management using Java and SQL."
          />
          {/* Service 11: Mobile Responsive Design */}
          <ServiceCard
            icon={<FaMobileAlt className="text-4xl mx-auto mb-4" />}
            title="Mobile Responsive Design"
            description="Ensuring your website looks great on all devices with responsive design."
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center">
      {icon}
      <h3 className="text-xl font-bold mt-4 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ServicesSection;
