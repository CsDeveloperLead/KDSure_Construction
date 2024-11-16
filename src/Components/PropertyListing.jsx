import  { useState } from "react";
import propertyData from "../propertyData";
const PropertyListing = () => {
  // Property data
  

  // State for search and filter
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  // Filtered properties based on search and category
  const filteredProperties = propertyData.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || property.title === filterCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6">
      {/* Search and Filters */}
      <div className="flex items-center gap-4 mb-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search by type or location"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          {/* <span className="absolute inset-y-0 right-4 flex items-center text-gray-500">
            🔍
          </span> */}
        </div>
        {/* <button className="p-3 rounded-lg border border-gray-300">
          <span className="text-gray-500">Filter</span>
        </button> */}
      </div>

      {/* Property Type Filters */}
      <div className="flex gap-4 mb-6">
        {["All", "House", "Villa"].map((type, index) => (
          <button
            key={index}
            onClick={() => setFilterCategory(type)}
            className={`px-4 py-2 rounded-full ${
              filterCategory === type
                ? "bg-orange-500 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Property Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 px-10">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div
            key={property.id}
            className="bg-white rounded-2xl shadow-lg  w-[280px] h-[450px]"
          >
            <div className="relative">
              <img
                src=""
                alt=""
                className="w-full  object-cover rounded-2xl  h-[300px] bg-gray-300"
              />
              <span className="absolute bottom-2 right-2 bg-white text-gray-600 text-sm rounded-full px-2 py-1">
                {property.extraImages}
              </span>
            </div>

            <div className=""></div>

            {/* Property Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p className="text-gray-500">{property.location}</p>

              {/* Property Info */}
              <div className="flex items-center space-x-2 text-gray-500 text-sm mt-2">
                <span>🛏 {property.rooms}</span>
                <span>🛁 {property.baths}</span>
                <span>📐 {property.area}</span>
                <span>{property.label}</span>
              </div>

              {/* Price */}
              <p className="text-blue-500 text-lg font-bold mt-3">
                {property.price}
              </p>
            </div>
          </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No properties found.
          </p>
        )}
      </div>
    </div>
  );
};

export default PropertyListing;
