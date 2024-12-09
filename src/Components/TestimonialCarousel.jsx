import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "KD sure made selling my house easy and stress-free. The team handled everything from start to finish, and I got a great offer!",
    name: "Jatin Sharma",
    rating: 5,
  },
  {
    id: 2,
    text: "KD sure made selling my house easy and stress-free. The team handled everything from start to finish, and I got a great offer!",
    name: "Shivani Kumari",
    rating: 5,
  },
  {
    id: 3,
    text: "KD sure made selling my house easy and stress-free. The team handled everything from start to finish, and I got a great offer!",
    name: "Raajat Bhati",
    rating: 5,
  },
  {
    id: 4,
    text: "KD sure made selling my house easy and stress-free. The team handled everything from start to finish, and I got a great offer!",
    name: "Akash Deep",
    rating: 5,
  },
  {
    id: 5,
    text: "KD sure made selling my house easy and stress-free. The team handled everything from start to finish, and I got a great offer!",
    name: "Simarpreet singh",
    rating: 5,
  },
  {
    id: 6,
    text: "KD sure made selling my house easy and stress-free. The team handled everything from start to finish, and I got a great offer!",
    name: "Saloni Yadav",
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
                        <p className="w-[90%] md:w-4/5 text-sm md:text-lg text-gray-700">{testimonial.text}</p>

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
                        <div className="w-full h-full bg-gray-300 rounded-xl md:rounded-3xl"></div>
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
