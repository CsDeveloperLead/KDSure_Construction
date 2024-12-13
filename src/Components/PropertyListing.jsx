import { useState } from "react";
import propertyData from "../propertyData";
import { Link, NavLink } from "react-router-dom";
const PropertyListing = () => {
  // Property data

  // State for search and filter
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  // Filtered properties based on search and category
  const filteredProperties = propertyData.filter((property) => {
    const matchesSearch =
      property.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || property.type === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-20">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row  items-center md:justify-between">
        <div className="flex  items-center gap-4 mb-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by type or location"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[350px] md:w-[450px] px-3 py-2 pl-14 bg-[#f0f0f1] rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <svg
                width="27"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.36167 23.9071V13.8144H0.478027V10.9308H9.12895V13.8144H6.24531V23.9071H3.36167ZM3.36167 8.04712V0.838013H6.24531V8.04712H3.36167ZM9.12895 8.04712V5.16347H12.0126V0.838013H14.8962V5.16347H17.7799V8.04712H9.12895ZM12.0126 23.9071V10.9308H14.8962V23.9071H12.0126ZM20.6635 23.9071V19.5817H17.7799V16.698H26.4308V19.5817H23.5472V23.9071H20.6635ZM20.6635 13.8144V0.838013H23.5472V13.8144H20.6635Z"
                  fill="#B6B6B7"
                />
              </svg>
            </div>
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.7929 28.286L16.6373 19.1304C15.9164 19.6831 15.0333 20.1217 13.988 20.4461C12.9427 20.7705 11.8793 20.9327 10.798 20.9327C7.93835 20.9327 5.51729 19.9415 3.53479 17.959C1.55229 15.9765 0.561035 13.5554 0.561035 10.6958C0.561035 7.83618 1.55229 5.41512 3.53479 3.43262C5.51729 1.45011 7.93835 0.458862 10.798 0.458862C13.6576 0.458862 16.0786 1.45011 18.0611 3.43262C20.0436 5.41512 21.0349 7.83618 21.0349 10.6958C21.0349 11.7772 20.8847 12.8105 20.5843 13.7957C20.2839 14.7809 19.8454 15.6581 19.2687 16.427L28.4603 25.6186L25.7929 28.286ZM10.798 17.1119C12.6002 17.1119 14.1202 16.4931 15.3577 15.2555C16.5953 14.018 17.2141 12.4981 17.2141 10.6958C17.2141 8.89351 16.5953 7.37359 15.3577 6.13603C14.1202 4.89847 12.6002 4.27969 10.798 4.27969C8.99568 4.27969 7.47577 4.89847 6.2382 6.13603C5.00064 7.37359 4.38186 8.89351 4.38186 10.6958C4.38186 12.4981 5.00064 14.018 6.2382 15.2555C7.47577 16.4931 8.99568 17.1119 10.798 17.1119Z"
                  fill="#B6B6B7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {["All", "Apartment", "Plots", "Villas", "Commercials"].map(
            (type, index) => (
              <button
                key={index}
                onClick={() => setFilterCategory(type)}
                className={`px-4 md:px-10 py-1 border border-gray-300 rounded-xl ${filterCategory === type
                    ? "bg-[#1095D0] text-sm md:text-base text-white"
                    : "bg-gray-100 text-sm md:text-base text-gray-600"
                  }`}
              >
                {type}
              </button>
            )
          )}
        </div>
      </div>

      {/* Property Type Filters */}

      {/* Property Cards */}
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 px-3 md:px-0 gap-8 md:gap-10 ">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Link
              to={
                property.link?.includes("https://teja-build-tech.vercel.app/properties")
                  ? property.link
                  : `/single-property/${property.id}`
              }
              key={property.id}
              className="bg-white rounded-2xl shadow-lg border md:hover:shadow-2xl border-[#ACACAC]  w-[320px] h-[510px]"
            >
              <div className="relative ">
                <img
                  src={property.img}
                  alt=""
                  className="w-full  object-cover rounded-2xl   h-[300px] "
                />
              </div>

              <div className=""></div>

              {/* Property Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold h-[60px]">
                  {property.title}
                </h3>
                <p className="text-gray-500">{property.location}</p>

                {/* Property Info */}
                <div className="flex items-center  text-gray-500 text-sm mt-2 border-t border-gray-400 border-b py-1">
                  <span className="flex items-center">
                    <svg
                      width="27"
                      height="28"
                      viewBox="0 0 27 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="7.78982"
                        y="7.62014"
                        width="13.5733"
                        height="14.5513"
                        rx="1.62166"
                        stroke="black"
                        strokeWidth="1.08111"
                      />
                      <line
                        x1="7.38441"
                        y1="3.72974"
                        x2="7.38441"
                        y2="5.96294"
                        stroke="black"
                        strokeWidth="0.270276"
                      />
                      <line
                        x1="22.0388"
                        y1="3.72961"
                        x2="22.0388"
                        y2="5.96281"
                        stroke="black"
                        strokeWidth="0.270276"
                      />
                      <line
                        x1="7.24927"
                        y1="4.71124"
                        x2="21.9036"
                        y2="4.71124"
                        stroke="black"
                        strokeWidth="0.270276"
                      />
                      <line
                        x1="4.10913"
                        y1="22.5769"
                        x2="6.20261"
                        y2="22.5769"
                        stroke="black"
                        strokeWidth="0.270276"
                      />
                      <line
                        x1="4.10913"
                        y1="6.94445"
                        x2="6.20261"
                        y2="6.94445"
                        stroke="black"
                        strokeWidth="0.270276"
                      />
                      <line
                        x1="5.02062"
                        y1="22.712"
                        x2="5.02062"
                        y2="7.07964"
                        stroke="black"
                        strokeWidth="0.270276"
                      />
                    </svg>
                    {property.area}
                  </span>
                  <span className="flex items-center">
                    {" "}
                    <h1 className="px-2 text-lg font-bold">|</h1>
                    {property.config}
                  </span>
                </div>

                {/* Price */}

                <span className="flex justify-between items-center text-[#1095D0] text-sm font-bold">
                  <p>{property.price}</p>
                  <NavLink
                    to={property.link}
                    className="relative group mt-3 mb-4 rounded-full p-1 bg-gradient-to-r from-white to-[#1095D0] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-[#1095D0] animate-gradient-flow"></div>

                    <p className="bg-[#1095D0] relative z-10 rounded-full w-[120px] text-white flex justify-center items-center py-1 cursor-pointer  text-lg font-bold ">
                      Get Quote
                    </p>
                  </NavLink>
                </span>
              </div>
            </Link>
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
