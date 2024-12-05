// CarouselModal.js
import React from 'react';

const CarouselModal = ({ destination }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2">
        <h3 className="text-2xl font-bold">{destination.city}, {destination.country}</h3>
        <img src={destination.image} alt={destination.city} className="w-full h-48 object-cover"/>
        <p className="mt-4">Cost: ${destination.cost}</p>
        <p className="mt-2">Places: {destination.places.join(", ")}</p>
        <p className="mt-2">Hotels: {destination.hotels.join(", ")}</p>
        <p className="mt-2">Food: {destination.food.join(", ")}</p>
        <p className="mt-2">Flights: {destination.flights}</p>
        <p className="mt-2">Total Budgeted Cost: ${destination.cost}</p>
        <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-full">Close</button>
      </div>
    </div>
  );
};

export default CarouselModal;
