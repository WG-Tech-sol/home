import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Client A",
      feedback: "Great service and support!",
      img: "./images/client2.png",
    },
    {
      name: "Client B",
      feedback: "Highly recommend WGTechSol for any project.",
      img: "./images/client3.webp",
    },
    {
      name: "Client C",
      feedback: "Outstanding experience from start to finish.",
      img: "./images/client2.png",
    },
    {
      name: "Client D",
      feedback: "Professional and efficient team!",
      img: "./images/client3.webp",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <img
                className="w-24 h-24 object-cover rounded-full mb-4"
                src={`/${testimonial.img}`}
                alt={testimonial.name}
              />
              <p className="text-gray-600 italic mb-4">
                "{testimonial.feedback}"
              </p>
              <h4 className="text-gray-800 font-bold">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
