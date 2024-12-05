import React from 'react';

const CTA = () => {
  return (
    <div id="cta" className="py-20 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Planning?</h2>
      <p className="text-xl mb-6">Get in touch with us to create your ideal vacation plan.</p>
      <a href="#contact">
        <button className="bg-white text-blue-600 py-3 px-6 rounded-full hover:bg-gray-100 transition">
          Contact Us
        </button>
      </a>
    </div>
  );
};

export default CTA;
