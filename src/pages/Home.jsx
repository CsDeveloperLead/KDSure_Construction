import FeaturedProperties from "../Components/FeaturedProperties";
import HeroSection from "../Components/HeroSection";
import PropertyGrid from "../Components/PropertyGrid";
import RealEstateServices from "../Components/RealEstateServices";
import StatisticsSection from "../Components/StatisticsSection";
import TestimonialCarousel from "../Components/TestimonialCarousel";
import img from "../assets/prop2.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mx-4 md:mx-10">
      <HeroSection />
      <FeaturedProperties />
      <StatisticsSection />
      <div
        className="bg-gray-300 w-full rounded-[30px] h-full md:h-[450px] mb-10 p-4"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" bg-[#292929] bg-opacity-95 w-full md:w-1/2 h-full rounded-3xl p-8 flex flex-col gap-4">
          <h1 className="text-[#1095d0] text-3xl md:text-6xl font-bold text-center md:text-start">Royal Court</h1>
          <p className="text-white text-base md:text-4xl font-bold text-center md:text-start">Sector-16 B</p>
          <div className="md:mt-10 space-y-2 md:space-y-6">
            <p className="text-white text-base md:text-xl font-boldtext-center md:text-start">
            6.81 K - ₹9.15 K/sq.ft
            </p>
            <p className="text-white text-base md:text-xl font-boldtext-center md:text-start">1230-1855 sq.ft</p>
            <p className="text-white text-base md:text-xl font-boldtext-center md:text-start">2/3 BHK</p>
            <span className="flex justify-between">
              <Link  to={"https://wa.link/xyu1c6"}
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-[#1095d0] text-sm md:text-base py-1 md:py-2 rounded-3xl px-4 md:px-8 text-white font-bold flex justify-center items-center">
                Get Quote
              </button>{" "}
              </Link>
              <Link to="/properties">
                <button className="bg-[#1095d0] text-sm md:text-base py-1 md:py-2 rounded-3xl px-4 md:px-8 text-white font-bold flex justify-center items-center">
                  More Properties
                </button>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <RealEstateServices />
      <PropertyGrid />
      <TestimonialCarousel />
    </div>
  );
};

export default Home;
