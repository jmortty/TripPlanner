import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselModal = ({ destinationData, isOpen, onClose }) => {
  // Slick Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    adaptiveHeight: true,
  };

  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Close the modal when clicking on the background
    >
      <div
        className="bg-white p-6 rounded-lg max-w-full sm:max-w-[90%] md:max-w-[75%] lg:max-w-[60%] xl:max-w-[50%] relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside the modal
        style={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-2xl text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">Search Results</h2>

        {/* Display the carousel */}
        {destinationData && destinationData.length > 0 ? (
          <Slider {...settings}>
            {destinationData.map((destination, index) => (
              <div key={index} className="p-4">
                {/* Image at the top */}
                <div>
                  <img
                    src={destination.image}
                    alt={destination.location}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                {/* Text at the bottom */}
                <div className="mt-4">
                  <h3 className="text-2xl font-bold">{destination.location}</h3>
                  <p className="text-gray-600 mt-2">
                    <strong>Country:</strong> {destination.country}
                  </p>
                  <p className="text-gray-600 mt-2">
                    <strong>Total Cost:</strong> ${destination.totalCost}
                  </p>

                  {/* Tourist Places */}
                  <h4 className="text-xl font-semibold mt-4">Tourist Places:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {destination.touristPlaces.map((place, idx) => (
                      <li key={idx}>{place}</li>
                    ))}
                  </ul>

                  {/* Hotels */}
                  <h4 className="text-xl font-semibold mt-4">Hotels:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {destination.hotels.map((hotel, idx) => (
                      <li key={idx}>{hotel}</li>
                    ))}
                  </ul>

                  {/* Food Available */}
                  <h4 className="text-xl font-semibold mt-4">Food Available:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {destination.foodAvailable.map((food, idx) => (
                      <li key={idx}>{food}</li>
                    ))}
                  </ul>

                  {/* Flights */}
                  <h4 className="text-xl font-semibold mt-4">Flights:</h4>
                  <ul className="list-disc pl-6 text-gray-700">
                    {destination.flights.map((flight, idx) => (
                      <li key={idx}>{flight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="text-center text-gray-500">No destinations found within your budget.</p>
        )}
      </div>
    </div>
  );
};

export default CarouselModal;
