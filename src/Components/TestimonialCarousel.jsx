import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import test1 from "../assets/test1.jpg";
import test2 from "../assets/test2.jpg";
import test3 from "../assets/test3.jpg";
import test4 from "../assets/test4.jpg";

const testimonials = [
  {
    id: 1,
    text: "Buying a luxury plot with KD Realtors was the best decision ever. They understood my requirements and showed me the perfect location within days. Highly recommended!",
    name: "Aman Khurana",
    rating: 5,
    img: test1,
  },
  {
    id: 2,
    text: "KD Realtors ki team bahut professional hai. Mujhe ek industrial plot chahiye tha aur unhone mujhe best location aur deal dikhayi. Process bilkul transparent tha.",
    name: "Vivek Gupta",
    rating: 5,
    img: test2,
  },
  {
    id: 3,
    text: "We bought a residential villa through KD Realtors, and it was such a seamless process. The property was exactly as advertised, and the team guided us with all the legalities.",
    name: "Shreya Malhotra",
    rating: 5,
    img: test3,
  },
  {
    id: 4,
    text: "Main ek luxury plot kharidna chah raha tha for investment, aur KD Realtors ne mujhe ek prime location ka option diya. Unka expertise and service bahut achha laga!",
    name: "Ramesh Agarwal",
    rating: 4.9,
    img: test4,
  },
  {
    id: 5,
    text: "KD Realtors made my dream of owning a villa come true. The property was exactly what I was looking for, and they even helped with the financing process!",
    name: "Priyanka Sharma",
    rating: 5,
  },
  {
    id: 6,
    text: "Industrial plot ka search karte waqt mujhe KD Realtors ke baare me pata chala. Professional team, smooth paperwork, aur reasonable pricing ne meri deal perfect banayi.",
    name: "Siddharth Mehta",
    rating: 5,
  },
  {
    id: 7,
    text: "If you are looking for prime luxury plots, KD Realtors is the go-to place. Their team provided excellent service and showed us properties in top-notch locations.",
    name: "Tanya Kapoor",
    rating: 5,
  },
  {
    id: 8,
    text: "Mujhe ek gated community me villa chahiye tha, aur KD Realtors ki team ne mujhe ek aise villa ka option diya jo mere budget aur expectations ko pura karta hai.",
    name: "Ravi Verma",
    rating: 4.8,
  },
  {
    id: 9,
    text: "KD Realtors ki wajah se main ek industrial plot secure kar paaya in a prime area. Unka guidance aur assistance paperwork ke har step me tha. Highly professional!",
    name: "Rajeev Singh",
    rating: 5,
  },
  {
    id: 10,
    text: "Looking for a luxury plot was never this easy! KD Realtors provided us with multiple options, and we are so happy with our purchase. Thank you for your excellent service!",
    name: "Meenal Ahuja",
    rating: 5,
  },
];


const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate total slides dynamically based on the number of testimonials and viewport size
  const itemsPerSlide = window.innerWidth < 768 ? 1 : 2; // 1 item for mobile (<768px), 2 for larger screens
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full mb-14 flex flex-col items-center">
      {/* Header and Navigation Buttons */}
      <div className="flex justify-between items-center w-full mb-8">
        <h2 className="text-2xl md:text-6xl font-bold">Words from Our Clients</h2>
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="p-1.5 md:p-3 text-black hover:text-white hover:bg-[#1095D0] rounded-full "
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-1.5 md:p-3 text-black hover:text-white hover:bg-[#1095D0] rounded-full "
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="flex-none w-full flex gap-4 px-0 md:px-4"
              style={{ width: "100%" }} // Adjust width to fully cover the container
            >
              {testimonials
                .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                .map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-none w-full md:w-1/2 bg-white rounded-3xl border border-[#1095D0] p-3 md:p-4"
                  >
                    <div className="flex h-[250px]">
                      <div className="w-1/2 flex flex-col justify-between">
                        <p className="w-[90%] md:w-4/5 text-sm lg:text-base text-gray-700">{testimonial.text}</p>

                        {/* Image placeholder */}
                        <div className="flex flex-col">
                          <p className="font-semibold text-gray-900">
                            {testimonial.name}
                          </p>
                          <div className="flex text-[#FFB22E] text-2xl md:text-4xl mt-1">
                            {Array.from({ length: testimonial.rating }).map(
                              (_, index) => (
                                <span key={index}>★</span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="w-full h-full bg-gray-300 rounded-xl md:rounded-3xl">
                          <img src={testimonial.img} alt="" className="w-full h-full object-cover rounded-3xl"/>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
