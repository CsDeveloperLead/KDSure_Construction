import { useEffect } from "react";
import { useState } from "react";

function UpwardsCarousel({ items }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, 3000);

    return () => clearInterval(interval);

  }, [items.length])

  return (
    <div className="relative w-full h-16 md:h-24 overflow-hidden">
      <div className="flex flex-col transition-transform duration-500" style={{ transform: `translateY(-${index * 25}%)` }}>
        {
          items.map((item, i) => (
            <div key={i} className="flex w-full justify-center md:h-24 md:justify-start md:items-start text-[#1095D0] items-center h-16 font-bold">
              {item}
            </div>
          ))
        }
      </div>
    </div>
  )
}

const StatisticsSection = () => {

  const carousal = [
    "Home",
    "Residence",
    "Property",
    "Location"
  ]

  return (
    <section className="py-10 my-10">
      <div className="flex flex-col md:flex-row">
        {/* Heading Section */}
        <div className="w-full md:w-1/2 mb-8 flex flex-col items-center md:items-start justify-center gap-4 md:gap-8 ">
          <h1 className="text-3xl md:text-7xl font-bold text-gray-900">
            Find your dream <UpwardsCarousel items={carousal} />
          </h1>
          <p className="text-[#727376] text-center md:text-start text-base md:text-lg w-4/5">
            Setting a realistic budget before looking for a home will help you avoid making unsuitable choices.
            Adjust to your financial capabilities, consider installment costs, taxes.
          </p>
        </div>

        {/* Statistics Section */}
        <div className="w-full md:w-1/2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {/* Statistic Item */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-bold text-gray-900">2.8K+</h2>
            <h3 className="text-base md:text-xl font-semibold text-[#727376] mt-2">Homes Purchased</h3>
            <p className="text-[#727376] text-center md:text-start text-[10px] md:text-sm mt-1">More than 10 thousand homes have been successfully purchased through our platform.</p>
          </div>
          {/* Statistic Item */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-bold text-gray-900">30+</h2>
            <h3 className="text-base md:text-xl font-semibold text-[#727376] mt-2">Published Properties</h3>
            <p className="text-[#727376] text-center md:text-start text-[10px] md:text-sm mt-1">With a wide range of properties available, users can easily find property that fits their criteria.</p>
          </div>
          {/* Statistic Item */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-bold text-gray-900">7K+</h2>
            <h3 className="text-base md:text-xl font-semibold text-[#727376] mt-2">Active Users</h3>
            <p className="text-[#727376] text-center md:text-start text-[10px] md:text-sm mt-1">Our platform has helped thousands of people find their dream property, creating seamless experiences.</p>
          </div>
          {/* Statistic Item */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl font-bold text-gray-900">5+</h2>
            <h3 className="text-base md:text-xl font-semibold text-[#727376] mt-2">States Served</h3>
            <p className="text-[#727376] text-center md:text-start text-[10px] md:text-sm mt-1">We provide property search services that allow users to find properties in their various areas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
