import React, { useState } from "react";
import CarouselModal from "./CarouselModal";
import destinations from "../public/data/destinations"; // Ensure the path is correct!

const UserPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
  });
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter destinations by budget
    const results = destinations.filter((destination) => {
      return (
        formData.budget &&
        destination.totalCost <= parseInt(formData.budget, 10)
      );
    });

    setFilteredDestinations(results); // Set filtered results
    setModalOpen(true); // Open the modal with the results
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">Plan Your Next Trip</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-lg"
      >
        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Budget */}
        <div className="mb-4">
          <label
            htmlFor="budget"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Budget (in USD)
          </label>
          <input
            type="number"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your budget"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Search
          </button>
        </div>
      </form>

      {/* Carousel Modal */}
      <CarouselModal
        destinationData={filteredDestinations}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default UserPage;
