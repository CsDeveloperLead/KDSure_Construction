import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "KD sure made selling my house easy and stress-free. The team handled everything from start to finish, and I got a great offer!",
    name: "WENDY LANE",
    rating: 5,
  },
  {
    id: 2,
    text: "KD sure made selling my house easy and stress-free. The team handled everything from start to finish, and I got a great offer!",
    name: "WENDY LANE",
    rating: 5,
  },
  {
    id: 3,
    text: "KD sure made selling my house easy and stress-free. The team handled everything from start to finish, and I got a great offer!",
    name: "WENDY LANE",
    rating: 5,
  },
  {
    id: 4,
    text: "KD sure made selling my house easy and stress-free. The team handled everything from start to finish, and I got a great offer!",
    name: "WENDY LANE",
    rating: 5,
  },
  {
    id: 5,
    text: "KD sure made selling my house easy and stress-free. The team handled everything from start to finish, and I got a great offer!",
    name: "WENDY LANE",
    rating: 5,
  },
  {
    id: 6,
    text: "KD sure made selling my house easy and stress-free. The team handled everything from start to finish, and I got a great offer!",
    name: "WENDY LANE",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the total number of slides, where each slide has two testimonials
  const totalSlides = Math.ceil(testimonials.length / 2);

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
        <h2 className="text-4xl md:text-6xl font-bold">Words from Our Clients</h2>
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="p-2 text-white bg-[#c17818] rounded-full hover:bg-yellow-600"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 text-white bg-[#c17818] rounded-full hover:bg-yellow-600"
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
              className="flex-none w-full flex gap-4 px-4"
              style={{ width: "100%" }} // Adjust width to fully cover the container
            >
              {testimonials
                .slice(slideIndex * 2, slideIndex * 2 + 2) // Get 2 testimonials per slide
                .map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="flex-none w-1/2 bg-white rounded-3xl border border-[#c17818] p-4"
                  >
                    <div className="flex h-[250px]">
                      <div className="w-1/2 flex flex-col justify-between">
                        <p className="w-4/5 text-gray-700">{testimonial.text}</p>

                        {/* Image placeholder */}
                        <div className="flex flex-col">
                          <p className="font-semibold text-gray-900">
                            {testimonial.name}
                          </p>
                          <div className="flex text-[#FFB22E] text-4xl mt-1">
                            {Array.from({ length: testimonial.rating }).map(
                              (_, index) => (
                                <span key={index}>★</span>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2">
                        <div className="w-full h-full bg-gray-300 rounded-3xl"></div>
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
