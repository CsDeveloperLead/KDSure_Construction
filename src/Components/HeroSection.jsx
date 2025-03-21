import img1 from "../assets/hero1.png";
import img2 from "../assets/hero2.png";
import img3 from "../assets/small.png";
import img5 from "../assets/av1.avif";
import img6 from "../assets/av2.avif";
import img7 from "../assets/av3.avif";
import img8 from "../assets/av4.avif";
import { useState, useEffect } from "react";
import AutoSlidingCarousel from "./AutoSlidingCarousels";
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"
import { useRef } from "react";

const banners = [
  banner1,
  banner2,
  banner3,
];

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

const HeroSection = () => {

  const carousal = [
    "Home",
    "Residence",
    "Property",
    "Location"
  ]

  const RollingNumber = ({ targetNumber, duration, stepTime }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      const totalSteps = duration / stepTime;
      const stepValue = targetNumber / totalSteps;

      const interval = setInterval(() => {
        setCurrentNumber(prevNumber => {
          if (prevNumber >= targetNumber) {
            clearInterval(interval);
            return targetNumber;
          }
          return Math.min(prevNumber + stepValue, targetNumber);
        });
      }, stepTime);

      return () => clearInterval(interval);
    }, [targetNumber, duration, stepTime]);

    return <h1 className="text-5xl font-bold font-montserrat">{Math.floor(currentNumber)} +</h1>
  };

  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible1(true);
          observer1.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.5 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
          observer2.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (imageRef1.current) {
      observer1.observe(imageRef1.current);
    }

    if (imageRef2.current) {
      observer2.observe(imageRef2.current);
    }

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);
  return (
    <>
      <section className="w-full h-[450px] md:h-[300px] mt-4 md:mb-10">
        <AutoSlidingCarousel banners={banners} className="rounded-3xl" />
      </section>
      <div className="hidden md:grid grid-cols-6 grid-rows-8 gap-8 pb-10  mb-10 font-satoshi overflow-x-hidden ">
        {/* Discover Your Dream Home Text */}
        <div className="col-span-4 row-span-3 row-start-1 col-start-1 flex flex-col justify-center">
          <h1 className="text-7xl font-bold leading-tight">
            Discover Your Dream <UpwardsCarousel items={carousal} /> with{" "}
            <span className="text-[#1095D0] typewriter">KDSURE Infratech</span>
          </h1>
          <p className="text-gray-600 mt-2 text-xl">
            Browse our exclusive listings and find the perfect place that matches
            your lifestyle and aspirations.
          </p>
        </div>

        {/* Square Element */}
        <div ref={imageRef1}
          className={`col-span-2 row-span-5 row-start-4 row-end-9 rounded-3xl ${isVisible1 ? "animate-fadeInLeft" : "opacity-0"
            } transition-opacity duration-500`}>
          <img src={img1} alt="" className="w-full h-full object-cover rounded-3xl" />
        </div>

        {/* Box with Circles */}
        <div className="col-span-2 row-span-3 col-start-3 row-start-4 flex flex-col gap-6 items-start  p-4">
          <div className="relative mb-20">
            {/* Circle Elements */}

            <div className="w-20 h-20 bg-[#c4c4c4] rounded-full flex items-center justify-center absolute left-0 border-gray-800 border-b">
              <img src={img5} alt="" className=" object-cover w-20 h-20 rounded-full border-gray-800 border-b-2" />
            </div>
            <div className="w-20 h-20 bg-[#d3d3d3] rounded-full flex items-center justify-center absolute left-14 border-gray-800 border-b ">
              <img src={img6} alt="" className=" object-cover w-20 h-20 rounded-full border-gray-800 border-b-2" />
            </div>
            <div className="w-20 h-20 bg-[#c4c4c4] rounded-full flex items-center justify-center absolute left-28 border-gray-800 border-b">
              <img src={img7} alt="" className=" object-cover w-20 h-20 rounded-full border-gray-800 border-b-2" />
            </div>
            <div className="w-20 h-20 bg-[#d3d3d3] rounded-full flex items-center justify-center absolute left-40 border-gray-800 border-b">
              <img src={img8} alt="" className=" object-cover w-20 h-20 rounded-full border-gray-800 border-b-2" />
            </div>
          </div>
          {/* Text Content */}
          <div className="flex flex-col gap-2">
            <h3 className="text-5xl font-bold">
              <RollingNumber targetNumber={1350} duration={1000} stepTime={10} />

            </h3>
            <p className="text-gray-600 text-xl">
              Trusted clients have found their dream homes with us.
            </p>
          </div>
        </div>

        {/* Big Rectangular Area */}
        <div ref={imageRef2}
          className={`col-start-5 row-start-1 col-span-2 row-span-6 bg-gray-300 rounded-3xl ${isVisible2 ? "animate-fadeInRight" : "opacity-0"
            } transition-opacity duration-500`}>
          <img src={img2} alt="" className="w-full h-full object-cover rounded-3xl" />
        </div>

        {/* Watch Video Section */}
        <div className="col-span-4 row-span-2 row-start-7 row-end-9 col-start-3 flex">
          <div className="bg-gray-400 rounded-3xl w-[200px] h-full"><img src={img3} alt="" className="w-full h-full object-cover rounded-3xl" /></div>
          <div className="flex flex-col justify-center ml-8">
            <h2 className="text-5xl font-bold">Get your dream <span className="text-[#1095D0]">Home</span> done</h2>
            <p className="text-gray-600 mt-2 text-xl">
              Explore our top listings and see what makes our properties stand out
              in the market.
            </p>
          </div>

        </div>
      </div>
      <div className=" md:hidden flex flex-col items-center gap-8 py-10 pt-20 mb-10 font-satoshi  ">
        {/* Discover Your Dream Home Text */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-center fade-in leading-tight">
            Discover Your Dream Home <br /> with{" "}
            <span className="text-[#1095D0]">KD SURE Infratech</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg text-center">
            Browse our exclusive listings and find the perfect place that matches
            your lifestyle and aspirations.
          </p>
        </div>

        {/* Square Element */}
        <div className="w-full  h-[300px] rounded-3xl animate-fadeInLeft ">
          <img src={img1} alt="img" className="w-full h-full object-cover rounded-3xl" />
        </div>

        {/* Box with Circles */}
        <div className="w-full flex flex-col gap-6 items-center">
          <div className="relative mb-14 flex justify-center">
            {/* Circle Elements */}

            <div className="w-14 h-14 bg-[#c4c4c4] rounded-full flex items-center justify-center absolute -left-20  border-gray-800 border-b">
              <img src={img5} alt="" className=" object-cover w-14 h-14 rounded-full border-gray-800 border-b-2" />
            </div>
            <div className="w-14 h-14 bg-[#d3d3d3] rounded-full flex items-center justify-center absolute -left-10 border-gray-800 border-b ">
              <img src={img6} alt="" className=" object-cover w-14 h-14 rounded-full border-gray-800 border-b-2" />
            </div>
            <div className="w-14 h-14 bg-[#c4c4c4] rounded-full flex items-center justify-center absolute left-0  border-gray-800 border-b">
              <img src={img7} alt="" className=" object-cover w-14 h-14 rounded-full border-gray-800 border-b-2" />
            </div>
            <div className="w-14 h-14 bg-[#d3d3d3] rounded-full flex items-center justify-center absolute left-10 border-gray-800 border-b">
              <img src={img8} alt="" className=" object-cover w-14 h-14 rounded-full border-gray-800 border-b-2" />
            </div>
          </div>
          {/* Text Content */}
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-5xl md:text-5xl font-bold"> <RollingNumber targetNumber={1350} duration={1000} stepTime={10} /></h3>
            <p className="text-gray-600 text-xl text-center">
              Trusted clients have found their dream homes with us.
            </p>
          </div>
        </div>

        {/* Big Rectangular Area */}
        <div className="w-full h-[300px] bg-gray-300 rounded-3xl">
          <img src={img2} alt="img" className="w-full h-full object-cover rounded-3xl" />

        </div>

        {/* Watch Video Section */}
        <div className="flex-col-reverse items-center gap-6 flex">
          <div className="bg-gray-400 rounded-3xl w-full h-[200px]"><img src={img3} alt="" className="w-full h-full object-cover rounded-3xl" /></div>
          <div className="flex flex-col items-center ">
            <h2 className="text-4xl md:text-5xl font-bold text-center">Get your dream <span className="text-[#1095D0]">Home</span> done</h2>
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
