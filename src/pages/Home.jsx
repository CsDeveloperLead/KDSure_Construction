import FeaturedProperties from "../Components/FeaturedProperties"
import HeroSection from "../Components/HeroSection"
// import PropertyGrid from "../Components/PropertyGrid"
import RealEstateServices from "../Components/RealEstateServices"
import StatisticsSection from "../Components/StatisticsSection"
// import TestimonialCarousel from "../Components/TestimonialCarousel"

const Home = () => {
  return (
    <div className="mx-10">
     <HeroSection/>
     <FeaturedProperties/>
     <StatisticsSection/>
     <div className="bg-gray-300 w-full rounded-[30px] h-[450px] mb-10"></div>
     <RealEstateServices/>
     {/* <PropertyGrid/> */}
     {/* <TestimonialCarousel/> */}

    </div>
  )
}

export default Home
