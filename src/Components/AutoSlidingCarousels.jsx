import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import propertyData from "../propertyData"; // Import propertyData

const AutoSlidingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % propertyData.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out rounded-3xl"
        style={{
          transform: `translateX(-${currentIndex * (100/propertyData.length)}%)`,
          width: `${propertyData.length * 100}%`,
        }}
      >
        {propertyData.map((property, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 rounded-3xl"
            style={{ width: `${100 / propertyData.length}%` }}
          >
            <span className="rounded-3xl w-full h-[300px] md:h-[500px] mt-2 md:mt-6 mb-10 relative">
              <div
                className="bg-gray-300 w-full rounded-[30px] h-[500px] md:h-[500px] mb-10 p-4 "
                style={{
                  backgroundImage: `url(${property.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="flex items-end md:justify-between h-full">
                
                <div className="bg-[#292929] bg-opacity-95 w-full md:w-[65%] h-[55%] md:h-[50%]  rounded-3xl p-8  flex  md:justify-between md:items-end    ">
                <div className="w-full flex flex-col items-center md:items-start justify-center md:justify-start gap-2 md:gap-0  ">
                  <h1 className="text-[#1095d0] hidden md:block text-2xl md:text-3xl font-bold text-center md:text-start">
                    {property.title}
                  </h1>
                  <p className="text-white text-base md:text-2xl font-bold text-center md:text-start my-1">
                    {property.location}
                  </p>
                  <div className=" space-y-2 md:space-y-2">
                    <p className="text-white text-base md:text-xl font-bold text-center md:text-start">
                    {property.price}
                    </p>
                    <p className="text-white text-base md:text-xl font-bold text-center md:text-start">
                      {property.area}
                    </p>
                    <p className="text-white text-base md:text-xl font-bold text-center md:text-start">
                      {property.config}
                    </p>
                    <div className="w-full">
                      <Link
                        to={property.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block md:hidden relative group rounded-full p-1 bg-gradient-to-r from-white to-[#1095D0] overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white to-[#1095D0] animate-gradient-flow"></div>
                        <button className="bg-[#1095d0] w-full relative z-10 text-sm md:text-base py-1 md:py-2 rounded-3xl px-4 md:px-8 text-white font-bold flex justify-center items-center">
                          Get Quote
                        </button>
                      </Link>
                    
                    </div>
                    </div>
                  </div>
                  <div className="w-[190px] hidden md:block">
                      <Link
                        to={property.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block relative group rounded-full p-1 bg-gradient-to-r from-white to-[#1095D0] overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white to-[#1095D0] animate-gradient-flow"></div>
                        <button className="bg-[#1095d0] w-[180px] relative z-10 text-sm md:text-base py-1 md:py-2 rounded-3xl px-4 md:px-8 text-white font-bold flex justify-center items-center">
                          Get Quote
                        </button>
                      </Link>
                    
                    </div>
                </div>
                
                </div>
              </div>
            </span>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      {/* <div className="hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2">
        {propertyData.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default AutoSlidingCarousel;
