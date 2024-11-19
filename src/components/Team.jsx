import React from "react";

const Team = () => {
  const members = [
    {
      name: "Zabir-ud-din",
      role: "Founder / CEO / UI/UX Designer",
      img: "./images/zabir.jpeg",
      skills: "UI/UX Design, Adobe XD, Figma",
      intro: "Focused on creating intuitive and user-friendly interfaces.",
    },
    {
      name: "Jannat Mughal",
      role: "CEO / Frontend Developer",
      img: "./images/me.png",
      skills:
        "React JS, HTML, CSS, JavaScript, Bootstrap 5, Tailwind CSS, Redux Auth, Canva, MS Word, Data Scrapping",
      intro:
        "Passionate about creating responsive and interactive web experiences.",
    },
    {
      name: "Bharti",
      role: "Backend Developer / Team Manager",
      img: "./images/bharti.jpeg",
      skills:
        "Php, Laravel, jQuery, SQL, C#, Angular, .Net, WordPress theme development",
      intro: "Experienced in building robust backend systems using Laravel.",
    },
    {
      name: "Hifsa Akram",
      role: "Frontend Developer/Graphic Designer",
      img: "./images/hifza.jpeg",
      skills:
        "Html, Css, JavaScript, Bootstrap, Laravel, Photoshop, Canva, Figma",
      intro:
        "Expertise in Frontend development for creating efficient websites.",
    },
    {
      name: "Sami Khan",
      role: "React Native Developer",
      img: "./images/sami.jpeg",
      skills: "React Native, JavaScript, Redux, Firebase, REST APIs",
      intro:
        "A passionate React Native developer focused on creating seamless and high-performance mobile applications.",
    },
    {
      name: "Hira Fatima",
      role: "Team Manager",
      img: "./images/hira.jpeg",
      skills: "Web & Mobile Design (Figma), Logo & Ad Post Design (Canva)",
      intro:
        "Designing web and mobile apps, and creating brand assets from scratch.",
    },
    {
      name: "Aiza",
      role: "MERN Stack Developer",
      img: "./images/aiza mern.jpeg",
      skills:
        "HTML, CSS, Bootstrap, JavaScript, Python, React.js, Computer Vision, Machine Learning, Data Annotation, MS Office, Visual Studio, Jupyter Notebook",
      intro:
        "Front end developer experienced in computer vision and machine learning projects.",
    },
    {
      name: "Almas Naseem",
      role: "Graphic Designer",
      img: "./images/almas.jpeg",
      skills:
        "Adobe Photoshop, Illustrator, InDesign, Branding, Print Design, UI/UX Design",
      intro:
        "A talented graphic designer specializing in creating visually stunning designs for both web and print media.",
    },
    {
      name: "Aiza",
      role: "Frontend Developer",
      img: "./images/aiza.jpeg",
      skills: "HTML, CSS, JavaScript, TypeScript, WordPress, Next.js",
      intro: "Frontend developer with a focus on modern web technologies.",
    },
    {
      name: "Anas",
      role: "MERN Stack Developer",
      img: "./images/anas.jpeg",
      skills: "HTML, CSS, JavaScript, Bootstrap, React JS",
      intro:
        "Full-stack developer specializing in modern web technologies, with a focus on building scalable and efficient applications.",
    },
    {
      name: "Muneeb Masood",
      role: "Flutter App Developer",
      img: "./images/muneeb.jpeg",
      skills:
        "Flutter App Development, Shopify Development, WordPress Development",
      intro:
        "Skilled developer with expertise in building high-performance mobile applications and e-commerce solutions.",
    },
    {
      name: "Aliza Iftikhar",
      role: "Graphic Designer",
      img: "./images/hijab.webp",
      skills:
        "Adobe Photoshop, Illustrator, InDesign, Branding, Print Design, UI/UX Design",
      intro:
        "Mainly professional in branding, logo designing, posters, brochures, banners etc.",
    },
    {
      name: "Muhammad Shah",
      role: "WordPress + Front end React Developer",
      img: "./images/shah.jpeg",
      skills:
        "HTML, CSS, JS, React, PHP, Bootstrap, Tailwind, WordPress, Java, JSP",
      intro:
        "Expertise in Frontend development for creating efficient websites.",
    },
    {
      name: "Dur-e-Sameen",
      role: "Flutter + MERN Stack Developer",
      img: "./images/hijab.webp",
      skills: "Flutter, Firebase, React.js, Node.js, MongoDB, Bootstrap, Figma",
      intro: "Expertise in development for creating efficient websites.",
    },
    {
      name: "Taybaa",
      role: "Content Writer / Video Editor",
      img: "./images/hijab.webp",
      skills: "Content Writing, Video Editing",
      intro: "Experienced content creator and video editor.",
    },
    {
      name: "Saleha Amin",
      role: "UI/UX Designer / Machine Learning Enthusiast",
      img: "./images/hijab.webp",
      skills:
        "UI/UX Design, Canva, Figma, Machine Learning, HTML, CSS, JavaScript, Bootstrap",
      intro:
        "Skilled in UI/UX design with an interest in machine learning, gained experience through an internship.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105"
            >
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                src={member.img}
                alt={member.name}
              />
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm mb-4">{member.intro}</p>
              <div className="text-gray-700 text-sm mb-4">
                <p>Skills: {member.skills}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
