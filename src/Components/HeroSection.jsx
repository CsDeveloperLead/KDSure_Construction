const HeroSection = () => {
  return (
    <>
    <div className="hidden md:grid grid-cols-6 grid-rows-8 gap-8 py-10 mb-10 font-satoshi  ">
      {/* Discover Your Dream Home Text */}
      <div className="col-span-4 row-span-3 row-start-1 col-start-1 flex flex-col justify-center">
        <h1 className="text-7xl font-bold leading-tight">
          Discover Your Dream Home <br /> with{" "}
          <span className="text-[#c17818]">KD SURE Infratech</span>
        </h1>
        <p className="text-gray-600 mt-2 text-xl">
          Browse our exclusive listings and find the perfect place that matches
          your lifestyle and aspirations.
        </p>
      </div>

      {/* Square Element */}
      <div className="col-span-2 row-span-5 row-start-4 row-end-9 bg-gray-300 rounded-3xl "></div>

      {/* Box with Circles */}
      <div className="col-span-2 row-span-3 col-start-3 row-start-4 flex flex-col gap-6 items-start  p-4">
        <div className="relative mb-20">
          {/* Circle Elements */}

          <div className="w-20 h-20 bg-[#c4c4c4] rounded-full flex items-center justify-center absolute left-0 border-gray-800 border-b">
            <img src="" alt="" />
          </div>
          <div className="w-20 h-20 bg-[#d3d3d3] rounded-full flex items-center justify-center absolute left-14 border-gray-800 border-b ">
            <img src="" alt="" />
          </div>
          <div className="w-20 h-20 bg-[#c4c4c4] rounded-full flex items-center justify-center absolute left-28 border-gray-800 border-b">
            <img src="" alt="" />
          </div>
          <div className="w-20 h-20 bg-[#d3d3d3] rounded-full flex items-center justify-center absolute left-40 border-gray-800 border-b">
            <img src="" alt="" />
          </div>
        </div>
        {/* Text Content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-5xl font-bold">10,000+</h3>
          <p className="text-gray-600 text-xl">
            Trusted clients have found their dream homes with us.
          </p>
        </div>
      </div>

      {/* Big Rectangular Area */}
      <div className="col-start-5 row-start-1 col-span-2 row-span-6 bg-gray-300 rounded-3xl"></div>

      {/* Watch Video Section */}
      <div className="col-span-4 row-span-2 row-start-7 row-end-9 col-start-3 flex">
        <div className="bg-gray-400 rounded-3xl w-[200px] h-full"><img src="" alt=""/></div>
        <div className="flex flex-col justify-center ml-8">
        <h2 className="text-5xl font-bold">Watch Video</h2>
        <p className="text-gray-600 mt-2 text-xl">
          Explore our top listings and see what makes our properties stand out
          in the market.
        </p>
        </div>
       
      </div>
    </div>
    <div className=" md:hidden flex flex-col items-center gap-8 py-10 mb-10 font-satoshi  ">
      {/* Discover Your Dream Home Text */}
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-center leading-tight">
          Discover Your Dream Home <br /> with{" "}
          <span className="text-[#c17818]">KD SURE Infratech</span>
        </h1>
        <p className="text-gray-600 mt-4 text-lg text-center">
          Browse our exclusive listings and find the perfect place that matches
          your lifestyle and aspirations.
        </p>
      </div>

      {/* Square Element */}
      <div className="w-full bg-gray-300 h-[300px] rounded-3xl "></div>

      {/* Box with Circles */}
      <div className="w-full flex flex-col gap-6 items-center">
        <div className="relative mb-14 flex justify-center">
          {/* Circle Elements */}

          <div className="w-14 h-14 bg-[#c4c4c4] rounded-full flex items-center justify-center absolute -left-20  border-gray-800 border-b">
            <img src="" alt="" />
          </div>
          <div className="w-14 h-14 bg-[#d3d3d3] rounded-full flex items-center justify-center absolute -left-10 border-gray-800 border-b ">
            <img src="" alt="" />
          </div>
          <div className="w-14 h-14 bg-[#c4c4c4] rounded-full flex items-center justify-center absolute left-0  border-gray-800 border-b">
            <img src="" alt="" />
          </div>
          <div className="w-14 h-14 bg-[#d3d3d3] rounded-full flex items-center justify-center absolute left-10 border-gray-800 border-b">
            <img src="" alt="" />
          </div>
        </div>
        {/* Text Content */}
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-5xl md:text-5xl font-bold">10,000+</h3>
          <p className="text-gray-600 text-xl text-center">
            Trusted clients have found their dream homes with us.
          </p>
        </div>
      </div>

      {/* Big Rectangular Area */}
      <div className="w-full h-[300px] bg-gray-300 rounded-3xl"></div>

      {/* Watch Video Section */}
      <div className="flex-col-reverse items-center gap-6 flex">
        <div className="bg-gray-400 rounded-3xl w-full h-[200px]"><img src="" alt=""/></div>
        <div className="flex flex-col items-center ">
        <h2 className="text-4xl md:text-5xl font-bold">Watch Video</h2>
        <p className="text-gray-600 mt-2 text-base text-center md:text-xl">
          Explore our top listings and see what makes our properties stand out
          in the market.
        </p>
        </div>
       
      </div>
    </div>
    </>
  );
};

export default HeroSection;