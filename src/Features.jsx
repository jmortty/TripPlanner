import React, { useState } from "react";

const Features = () => {
  // Sample data for the cards
  const cards = [
    { id: 1, name: "Card 1", title: "United Kingdom England, Scotland, Wales", price: "$5,000", image: "https://img.freepik.com/free-photo/view-famous-tower-bridge-sunrise-london_268835-1392.jpg?t=st=1733198848~exp=1733202448~hmac=73c0e7be5543bbbc82faf724c21fc1bbfce957a4d4f0db887f9a9f195fe2047c&w=900" },
    { id: 2, name: "Card 2", title: "Greece Santorini, Athens", price: "$3,000", image: "https://media.istockphoto.com/id/510967662/photo/santorini-sunset-at-dawn-village-of-oia-greece.jpg?s=612x612&w=0&k=20&c=O05ZFOTQmVs7m34iL7-WTlPIW7XcWH55V9WCm03i1JI=" },
    { id: 3, name: "Card 3", title: "Italy Rome, Venice, Milan", price: "$200", image: "https://img.freepik.com/free-photo/couple-honeymoon-venice_1303-5709.jpg?t=st=1733251412~exp=1733255012~hmac=aec006a6a537002c191b1c1004b6d131400a324ea453b7b1314e8e5f729bef39&w=900" },
    { id: 4, name: "Card 4", title: "India Banglo, Delhi, Shimla", price: "$5,600", image: "https://img.freepik.com/free-photo/beautiful-vertical-shot-taj-mahal-building-agra-india-clear-sky_181624-21517.jpg?t=st=1733251607~exp=1733255207~hmac=85bc63c9f6442952a3f45365d63b179621cdce50171b5c2d7656e488922fc663&w=900" },
    { id: 5, name: "Card 5", title: "Kenya Nairobi, Massai", price: "$7,000", image: "https://i0.wp.com/imaraafricasafaris.com/wp-content/uploads/2020/11/image-147.png?resize=1000%2C565&ssl=1" },
    { id: 6, name: "Card 6", title: "Maldives", price: "$4,000", image: "https://www.travelplusstyle.com/wp-content/gallery/maldives-best-hotels-2020/17196_soneva-jani-2-1100-bedroom-water-reserve-with-slide.jpg" },
    { id: 7, name: "Card 7", title: "Ghana Accra, Kumasi", price: "$6,780", image: "https://media.istockphoto.com/id/1952312091/photo/accra-skyline.jpg?s=612x612&w=0&k=20&c=13a5Kj9nwXR-xQawy-Z33XsIq9hFrja1IjseXMm-W3g=" },
    { id: 8, name: "Card 8", title: "China Beijing, Guanzhou", price: "$920", image: "https://img.freepik.com/premium-photo/tianyuan-temple-with-blue-sky-most-famous-place-tourist-taiwan_33799-3411.jpg?w=900" },
  ];

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the cards based on the search query
  const filteredCards = cards.filter((card) => {
    const query = searchQuery.toLowerCase();
    return (
      card.name.toLowerCase().includes(query) ||
      card.title.toLowerCase().includes(query) ||
      card.price.toLowerCase().includes(query) ||
      card.image.toLowerCase().includes(query)
    );
  });

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Search Input */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by name, price, or title..."
            className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Collection</h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <img src={card.image} alt={card.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-gray-600 mt-2">{card.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center">No results found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
