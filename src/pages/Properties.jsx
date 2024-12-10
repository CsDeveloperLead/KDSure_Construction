import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import propertyData from "../propertyData";
import PropertyListing from "../Components/PropertyListing";
import { Link } from "react-router-dom";

const Properties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % propertyData.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % propertyData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + propertyData.length) % propertyData.length
    );
  };

  return (
    <div className="mx-4 md:mx-10">
      <div className="w-full mt-10 rounded-[30px]">
        <div
          className="relative my-8 rounded-3xl max-md:rounded-none overflow-hidden"
          style={{
            backgroundImage: `url(${propertyData[currentIndex]?.img || ""})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center p-1 md:p-8">
            <div className="w-full md:w-full bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl max-sm:rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                {propertyData[currentIndex]?.title || "No title available"}
              </h2>
              <p className="mb-2 text-black font-bold">
                {propertyData[currentIndex]?.location || "No location available"}
              </p>
              <p className="text-2xl font-bold mb-4">
                {propertyData[currentIndex]?.price || "No price available"}
              </p>
              <p className="text-gray-700 mb-6 font-bold">
                {propertyData[currentIndex]?.config} |{" "}
                {propertyData[currentIndex]?.area}
              </p>
              <Link
                to={propertyData[currentIndex]?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="bg-[#1095d0] text-white px-6 py-3 rounded-full font-bold hover:bg-blue-500 transition duration-300 flex items-center"
                  style={{ filter: "drop-shadow(2px 2px 0.4rem black)" }}
                >
                  Get A Quote <ChevronRight className="ml-2" />
                </button>
              </Link>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={handlePrev}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={handleNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <PropertyListing />
    </div>
  );
};

export default Properties;
