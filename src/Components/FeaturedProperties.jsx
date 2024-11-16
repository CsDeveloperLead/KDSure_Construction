import propertyData from "../propertyData";
import { BsArrowUpRight } from "react-icons/bs";

const FeaturedProperties = () => {
  return (
    <section className="w-full bg-gray-100 rounded-[30px] p-10 ">
      <div className="flex justify-between items-center mb-10 ">
        <h2 className="text-5xl font-bold">Featured Properties</h2>
        <button className="bg-[#c17818] rounded-3xl text-white py-2 px-6  flex items-center">
          View More{" "}
          <span className="ml-2">
            <BsArrowUpRight />
          </span>
        </button>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20">
          {propertyData.slice(0, 4).map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg  w-[280px] h-[450px]"
            >
              <div className="relative">
                <img
                  src=""
                  alt=""
                  className="w-full  object-cover rounded-2xl  h-[300px] bg-gray-300"
                />
                <span className="absolute bottom-2 right-2 bg-white text-gray-600 text-sm rounded-full px-2 py-1">
                  {property.extraImages}
                </span>
              </div>

              <div className=""></div>

              {/* Property Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-gray-500">{property.location}</p>

                {/* Property Info */}
                <div className="flex items-center space-x-2 text-gray-500 text-sm mt-2">
                  <span>🛏 {property.rooms}</span>
                  <span>🛁 {property.baths}</span>
                  <span>📐 {property.area}</span>
                  <span>{property.label}</span>
                </div>

                {/* Price */}
                <p className="text-blue-500 text-lg font-bold mt-3">
                  {property.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
