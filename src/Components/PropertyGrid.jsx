import propertyData from "../propertyData";
import { Link } from "react-router-dom";

const PropertyGrid = () => {
  return (
    <div className="w-full md:py-12 mb-20 md:mb-0 font-satoshi">
      <div className="flex justify-between items-end ">
        <div className="w-full flex-col items-center md:items-start flex mb-10">
          <h2 className="text-3xl md:text-6xl font-semibold text-gray-900 text-left mb-4">
            Explore more property
          </h2>
          <div className="w-full flex flex-col md:flex-row items-center md:items-start md:justify-between gap-4 md:gap-0 ">
            <p className="text-gray-500 w-full md:w-2/3 text-center md:text-left  text-lg  ">
              Find thousands of property options that suit your needs. Explore
              various locations and property types, from residential to
              commercial properties.
            </p>
            {/* Button */}
            <div className="flex justify-end ">
            <Link to="/properties" className="hidden md:block relative group rounded-full p-1 bg-gradient-to-r from-white to-[#1095D0] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white to-[#1095D0] animate-gradient-flow"></div>
                <button className="flex relative z-10 items-center gap-2 bg-[#1095D0] text-white py-2 px-4 h-[40px] rounded-3xl hover:bg-blue-500">
                  View More <span className="text-lg">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 hidden">
        {propertyData.slice(0, 6).map((property) => (
          <div key={property.id} className="overflow-hidden rounded-3xl">
         <Link
         to={property.link}
         target="_blank"
         rel="noopener noreferrer"
            
            className=" rounded-3xl p-8 h-[450px] border flex flex-col hover:scale-110 transition duration-700 ease-in-out  border-[#1095D0] justify-end   relative"
            style={{
              backgroundImage: `url(${property.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="">
            {" "}
              {/* Price Tag */}
              <div className="absolute top-8 left-8 bg-[#f2f2f2]  text-gray-900 font-semibold text-sm px-6 py-2 rounded-full">
                {property.price}
              </div>

              {/* Placeholder for Image
            <div className="w-full h-40 bg-gray-300 rounded mb-4"></div> */}

              {/* Title */}
              <h3
                className="text-4xl text-white font-bold mb-1"
                style={{ filter: "drop-shadow(4px 4px 0.4rem black)" }}
              >
                {property.title}
              </h3>

              {/* Details */}
              <p
                className="text-white font-semibold text-lg"
                style={{ filter: "drop-shadow(4px 4px 0.1rem black)" }}
              >
                {property.config} | {property.area} area
              </p>
              </div>
              </Link>
              </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:hidden">
        {propertyData.slice(0, 3).map((property) => (
           <Link
           to={property.link}
           target="_blank"
           rel="noopener noreferrer"
            key={property.id}
            className=" rounded-3xl p-8 h-[450px] border flex flex-col justify-end hover:scale-110 hover:my-4 border-[#1095D0] relative "
            style={{
              backgroundImage: `url(${property.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              
            }}
          >
            {/* Price Tag */}
            <div className="absolute top-8 left-8 bg-[#f2f2f2]  text-gray-900 font-semibold text-sm px-6 py-2 rounded-full">
              {property.price}
            </div>

            {/* Placeholder for Image
            <div className="w-full h-40 bg-gray-300 rounded mb-4"></div> */}

            {/* Title */}
            <h3 className="text-4xl text-white font-bold mb-1">
              {property.title}
            </h3>

            {/* Details */}
            <p className="text-white font-semibold text-lg">
              {property.rooms} rooms | {property.baths} baths | {property.area}{" "}
              area
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PropertyGrid;
