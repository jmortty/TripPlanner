import React from 'react';

const AboutUs = () => {
  return (
    <div id="about-us" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About Budget Planner</h2>
        <div className="flex justify-center items-center space-x-8">
          <div className="max-w-md text-left">
            <h3 className="text-2xl font-semibold mb-4">What is Budget Planner?</h3>
            <p className="text-lg">Our Budget Planner helps you plan your dream vacation with a fixed budget. Choose your destination and get the best recommendations for cities to visit, places to explore, and where to stay!</p>
          </div>
          <img src="https://time.ly/wp-content/uploads/2023/03/attract-tourists-destinations.jpg" alt="Budget Planner" className="w-64 h-64 object-cover rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
