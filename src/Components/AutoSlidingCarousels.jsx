import  { useState, useEffect, useRef } from "react";

const AutoSlidingCarousel = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex transition-transform duration-700 ease-in-out rounded-3xl"
        style={{
          transform: `translateX(-${currentIndex * 33.33}%)`,
          width: `${banners.length * 100}%`,
        }}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 rounded-3xl"
            style={{ width: `${100 / banners.length}%` }}
          >
            <img
              src={banner}
              alt={`Slide ${index + 1}`}
              className="w-full h-[450px] md:h-[600px] object-cover rounded-3xl"
            />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoSlidingCarousel;
