import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
