import React from 'react';

const Hero = () => {
  return (
    <div id="hero" className="hero relative flex justify-center items-center text-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-white z-10">
        <h1 className="text-5xl font-extrabold mb-4">Plan Your Dream Vacation</h1>
        <p className="text-xl mb-6">Budget your perfect trip with ease, discover new destinations, and save money.</p>
        <a href="./UserPage">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition">
            Start Planning
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
