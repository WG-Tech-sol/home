import React, { useState } from "react";
const host = "http://localhost:5000"
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage(data.message);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setResponseMessage('Error: ' + data.message);
      }
    } catch (error) {
      setResponseMessage('Network error: ' + error.message);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./images/contact.png')" }}
    >
      <div className="container mx-auto px-4">
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </form>
          {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
