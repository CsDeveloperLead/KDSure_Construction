import propertyData from "../propertyData";
import { BsArrowUpRight } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const FeaturedProperties = () => {
  return (
    <section className="w-full bg-gray-100 rounded-[30px] p-4 md:p-10 ">
      <div className="flex justify-center md:justify-between items-center gap-10 mb-10 ">
        <h2 className="text-lg md:text-5xl font-bold">Featured Properties</h2>
        <Link to="/properties" className="hidden md:block relative group rounded-full p-1 bg-gradient-to-r from-white to-[#1095D0] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-white to-[#1095D0] animate-gradient-flow"></div>
          <button className="bg-[#1095D0] relative z-10 rounded-3xl text-white py-2 w-[90px] md:w-[160px] px-3 md:px-6 text-[10px] md:text-base  flex justify-center items-center">
            View More{" "}
            <span className="ml-2">
              <BsArrowUpRight />
            </span>
          </button>
        </Link>
      </div>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center  md:gap-20">
          {propertyData.slice(0, 29).map((property, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border md:hover:shadow-2xl duration-500 border-[#ACACAC]  w-[320px] h-[495px]"
            >
              <div className="relative">
                <img
                  src={property.img}
                  alt=""
                  className="w-full  object-cover rounded-2xl  h-[300px] bg-gray-300"
                />
                {/* <span className="absolute bottom-2 right-2 bg-white text-gray-600 text-sm rounded-full px-2 py-1">
                  {property.extraImages}
                </span> */}
              </div>

              <div className=""></div>

              {/* Property Details */}
              <div className="p-4 ">
                <h3 className="text-lg font-semibold h-[50px]">{property.title}</h3>
                <p className="text-gray-500">{property.location}</p>

                {/* Property Info */}
                <div className="flex items-center  text-gray-500 text-sm mt-2 border-t border-gray-400 border-b py-1">
                  {/* <span className="flex gap-2 items-center">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.93386 14.0005H15.448V15.2667C15.448 15.4082 15.492 15.5262 15.5799 15.6207C15.6678 15.7145 15.7781 15.7614 15.9107 15.7614C16.0432 15.7614 16.1539 15.7145 16.2425 15.6207C16.3304 15.5269 16.3744 15.4089 16.3744 15.2667V11.9348C16.3744 11.6445 16.3046 11.3412 16.165 11.0248C16.0255 10.7092 15.8336 10.4568 15.5893 10.2677V8.37398C15.5893 7.86034 15.4278 7.43119 15.1047 7.08654C14.7823 6.74262 14.38 6.57067 13.8978 6.57067H10.858C10.5859 6.57067 10.3525 6.62352 10.1578 6.72923C9.96308 6.83493 9.80747 6.97972 9.69093 7.16358C9.57439 6.97972 9.41878 6.83493 9.22408 6.72923C9.02939 6.62352 8.79562 6.57067 8.52277 6.57067H5.48513C5.00362 6.57067 4.60133 6.74262 4.27823 7.08654C3.95514 7.43119 3.79359 7.86034 3.79359 8.37398V10.2677C3.54935 10.4568 3.35745 10.7092 3.21789 11.0248C3.07832 11.3404 3.00854 11.6438 3.00854 11.9348V15.2667C3.00854 15.4082 3.0525 15.5262 3.14043 15.6207C3.22835 15.7145 3.33896 15.7614 3.47224 15.7614C3.60483 15.7614 3.71509 15.7145 3.80301 15.6207C3.89094 15.5269 3.9349 15.4089 3.9349 15.2667L3.93386 14.0005ZM3.93386 13.0123V11.8957C3.93386 11.5794 4.03434 11.3144 4.23532 11.1007C4.43629 10.8871 4.68472 10.7799 4.9806 10.7791H14.4013C14.6978 10.7791 14.9466 10.8863 15.1476 11.1007C15.3486 11.3151 15.4487 11.5801 15.448 11.8957V13.0123H3.93386ZM4.71891 9.79094V8.24557C4.71891 8.04458 4.77927 7.8797 4.9 7.75091C5.02072 7.62213 5.17494 7.55774 5.36266 7.55774H8.58348C8.77189 7.55774 8.92646 7.62213 9.04718 7.75091C9.16791 7.88044 9.22827 8.04532 9.22827 8.24557V9.79094H4.71891ZM10.1536 9.79094V8.24557C10.1536 8.04458 10.2139 7.8797 10.3347 7.75091C10.4554 7.62213 10.61 7.55774 10.7984 7.55774H14.0192C14.2069 7.55774 14.3611 7.62213 14.4819 7.75091C14.6026 7.8797 14.6629 8.04458 14.6629 8.24557V9.79094H10.1536ZM1.96075 20.8285C1.47925 20.8285 1.0773 20.6566 0.754905 20.3127C0.431811 19.968 0.270264 19.5389 0.270264 19.0252V2.53304C0.270264 2.01941 0.431811 1.59063 0.754905 1.24672C1.0773 0.902065 1.47925 0.729736 1.96075 0.729736H17.4211C17.9026 0.729736 18.3046 0.902065 18.627 1.24672C18.95 1.59063 19.1116 2.01941 19.1116 2.53304V19.0252C19.1116 19.5389 18.9504 19.9676 18.628 20.3115C18.3049 20.6562 17.9026 20.8285 17.4211 20.8285H1.96075ZM1.96075 19.7119H17.4211C17.5816 19.7119 17.7292 19.6405 17.8639 19.4975C17.9979 19.3539 18.0649 19.1964 18.0649 19.0252V2.53304C18.0649 2.36183 17.9979 2.20439 17.8639 2.06072C17.7292 1.9178 17.5816 1.84634 17.4211 1.84634H1.96075C1.80025 1.84634 1.65266 1.9178 1.51798 2.06072C1.384 2.20439 1.317 2.36183 1.317 2.53304V19.0252C1.317 19.1964 1.384 19.3539 1.51798 19.4975C1.65266 19.6405 1.80025 19.7119 1.96075 19.7119Z"
                        fill="#404040"
                      />
                    </svg>{" "}
                    {property.config}
                  </span>
                  <span className="flex gap-2 items-center">
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.97082 17.2219C7.19971 17.2219 7.39091 17.1393 7.54443 16.974C7.69796 16.8088 7.77472 16.6041 7.77472 16.3599C7.77472 16.1157 7.69761 15.9121 7.54339 15.7491C7.38847 15.5853 7.19657 15.5035 6.96768 15.5035C6.73879 15.5035 6.54794 15.5857 6.39511 15.7502C6.24159 15.9155 6.16483 16.1202 6.16483 16.3644C6.16483 16.6085 6.24194 16.8121 6.39616 16.9751C6.55108 17.1389 6.74298 17.2208 6.97187 17.2208M10.1121 17.2208C10.3403 17.2208 10.5311 17.1385 10.6847 16.974C10.8382 16.8088 10.9149 16.6041 10.9149 16.3599C10.9149 16.1157 10.8378 15.9121 10.6836 15.7491C10.5287 15.5853 10.3368 15.5035 10.1079 15.5035C9.87901 15.5035 9.68816 15.5857 9.53534 15.7502C9.38181 15.9155 9.30505 16.1202 9.30505 16.3644C9.30505 16.6085 9.38216 16.8121 9.53638 16.9751C9.6913 17.1389 9.8832 17.2208 10.1121 17.2208ZM13.2523 17.2208C13.4805 17.2208 13.6714 17.1385 13.8249 16.974C13.9784 16.8088 14.0552 16.6041 14.0552 16.3599C14.0552 16.1157 13.9781 15.9121 13.8238 15.7491C13.6689 15.5853 13.477 15.5035 13.2481 15.5035C13.0192 15.5035 12.8284 15.5857 12.6756 15.7502C12.522 15.9155 12.4453 16.1202 12.4453 16.3644C12.4453 16.6085 12.5224 16.8121 12.6766 16.9751C12.8315 17.1389 13.0234 17.2208 13.2523 17.2208ZM6.97187 13.871C7.20006 13.871 7.39091 13.7887 7.54443 13.6242C7.69796 13.459 7.77472 13.2543 7.77472 13.0101C7.77472 12.7659 7.69761 12.5623 7.54339 12.3993C7.38847 12.2356 7.19657 12.1537 6.96768 12.1537C6.73879 12.1537 6.54794 12.2359 6.39511 12.4004C6.24159 12.5657 6.16483 12.7704 6.16483 13.0146C6.16483 13.2587 6.24194 13.4623 6.39616 13.6253C6.55108 13.7891 6.74298 13.871 6.97187 13.871ZM10.1121 13.871C10.3403 13.871 10.5311 13.7887 10.6847 13.6242C10.8382 13.459 10.9149 13.2543 10.9149 13.0101C10.9149 12.7659 10.8378 12.5623 10.6836 12.3993C10.5287 12.2356 10.3368 12.1537 10.1079 12.1537C9.87901 12.1537 9.68816 12.2359 9.53534 12.4004C9.38181 12.5657 9.30505 12.7704 9.30505 13.0146C9.30505 13.2587 9.38216 13.4623 9.53638 13.6253C9.6913 13.7891 9.8832 13.871 10.1121 13.871ZM13.2523 13.871C13.4805 13.871 13.6714 13.7887 13.8249 13.6242C13.9784 13.459 14.0552 13.2543 14.0552 13.0101C14.0552 12.7659 13.9781 12.5623 13.8238 12.3993C13.6689 12.2356 13.477 12.1537 13.2481 12.1537C13.0192 12.1537 12.8284 12.2359 12.6756 12.4004C12.522 12.5657 12.4453 12.7704 12.4453 13.0146C12.4453 13.2587 12.5224 13.4623 12.6766 13.6253C12.8315 13.7891 13.0234 13.871 13.2523 13.871ZM5.52004 10.0924H14.7V9.66253C14.7 8.31815 14.2499 7.16619 13.3497 6.20666C12.4495 5.24638 11.3696 4.76624 10.11 4.76624C8.84972 4.76624 7.76983 5.24638 6.87033 6.20666C5.97014 7.16693 5.52004 8.31889 5.52004 9.66253V10.0924ZM6.49874 9.10423C6.63831 8.15512 7.04409 7.35973 7.7161 6.71806C8.38811 6.07639 9.18607 5.75518 10.11 5.75443C11.0346 5.75443 11.8329 6.07564 12.5049 6.71806C13.1769 7.36048 13.5824 8.15587 13.7213 9.10423H6.49874ZM2.37982 20.8285C1.89832 20.8285 1.49637 20.6566 1.17397 20.3127C0.850878 19.968 0.689331 19.5389 0.689331 19.0252V2.53304C0.689331 2.01941 0.850878 1.59063 1.17397 1.24672C1.49637 0.902065 1.89832 0.729736 2.37982 0.729736H17.8402C18.3217 0.729736 18.7236 0.902065 19.046 1.24672C19.3691 1.59063 19.5307 2.01941 19.5307 2.53304V19.0252C19.5307 19.5389 19.3695 19.9676 19.0471 20.3115C18.724 20.6562 18.3217 20.8285 17.8402 20.8285H2.37982ZM2.37982 19.7119H17.8402C18.0007 19.7119 18.1483 19.6405 18.2829 19.4975C18.4169 19.3539 18.4839 19.1964 18.4839 19.0252V2.53304C18.4839 2.36183 18.4169 2.20439 18.2829 2.06072C18.1483 1.9178 18.0007 1.84634 17.8402 1.84634H2.37982C2.21932 1.84634 2.07173 1.9178 1.93705 2.06072C1.80306 2.20439 1.73607 2.36183 1.73607 2.53304V19.0252C1.73607 19.1964 1.80306 19.3539 1.93705 19.4975C2.07173 19.6405 2.21932 19.7119 2.37982 19.7119Z"
                        fill="#404040"
                      />
                    </svg>
                    {property.baths}
                  </span> */}
                  <span className="flex items-center">
                    <svg
                      width="27"
                      height="28"
                      viewBox="0 0 27 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="7.78982"
                        y="7.62014"
                        width="13.5733"
                        height="14.5513"
                        rx="1.62166"
                        stroke="black"
                        strokeWidth="1.08111"
                      />
                      <line
                        x1="7.38441"
                        y1="3.72974"
                        x2="7.38441"
                        y2="5.96294"
                        stroke="black"
                        strokeWidth="0.270276"
                      />
                      <line
                        x1="22.0388"
                        y1="3.72961"
                        x2="22.0388"
                        y2="5.96281"
                        stroke="black"
                        strokeWidth="0.270276"
                      />
                      <line
                        x1="7.24927"
                        y1="4.71124"
                        x2="21.9036"
                        y2="4.71124"
                        stroke="black"
                        strokeWidth="0.270276"
                      />
                      <line
                        x1="4.10913"
                        y1="22.5769"
                        x2="6.20261"
                        y2="22.5769"
                        stroke="black"
                        strokeWidth="0.270276"
                      />
                      <line
                        x1="4.10913"
                        y1="6.94445"
                        x2="6.20261"
                        y2="6.94445"
                        stroke="black"
                        strokeWidth="0.270276"
                      />
                      <line
                        x1="5.02062"
                        y1="22.712"
                        x2="5.02062"
                        y2="7.07964"
                        stroke="black"
                        strokeWidth="0.270276"
                      />
                    </svg>
                    {property.area}
                  </span>
                  <span className="flex items-center">
                    {" "}
                    <h1 className="px-2 text-lg font-bold">|</h1>
                    {property.config}
                  </span>
                </div>

                {/* Price */}
                {/* <p className="bg-[#1095D0] rounded-full w-[120px] text-white flex justify-center items-center py-1 cursor-pointer  text-lg font-bold mt-3 mb-4">
                  Get Quote
                </p> */}
                <span className="flex justify-between items-center text-[#1095D0] font-bold">
                  <p>{property.price}</p>
                  <NavLink
                    to={`/single-property/${property.id}`}
                    className="relative group rounded-full p-0.5 bg-gradient-to-r from-white to-[#1095D0] overflow-hidden mt-3 mb-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white to-[#1095D0] animate-gradient-flow"></div>

                    <p className="bg-[#1095D0] relative z-10 rounded-full w-[120px] text-white flex justify-center items-center py-1 cursor-pointer  text-lg font-bold ">
                      Get Quote
                    </p>
                  </NavLink>
                </span>
              </div>
            </div>
          ))}
          {
            propertyData.slice(30).map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border md:hover:shadow-2xl duration-500 border-[#ACACAC]  w-[320px] h-[495px]"
              >
                <div className="relative">
                  <img
                    src={property.img}
                    alt=""
                    className="w-full  object-cover rounded-2xl  h-[300px] bg-gray-300"
                  />
                </div>

                <div className=""></div>

                {/* Property Details */}
                <div className="p-4 ">
                  <h3 className="text-lg font-semibold h-[50px]">{property.title}</h3>
                  <p className="text-gray-500">{property.location}</p>

                  {/* Property Info */}
                  <div className="flex items-center  text-gray-500 text-sm mt-2 border-t border-gray-400 border-b py-1">
                    <span className="flex items-center">
                      <svg
                        width="27"
                        height="28"
                        viewBox="0 0 27 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="7.78982"
                          y="7.62014"
                          width="13.5733"
                          height="14.5513"
                          rx="1.62166"
                          stroke="black"
                          strokeWidth="1.08111"
                        />
                        <line
                          x1="7.38441"
                          y1="3.72974"
                          x2="7.38441"
                          y2="5.96294"
                          stroke="black"
                          strokeWidth="0.270276"
                        />
                        <line
                          x1="22.0388"
                          y1="3.72961"
                          x2="22.0388"
                          y2="5.96281"
                          stroke="black"
                          strokeWidth="0.270276"
                        />
                        <line
                          x1="7.24927"
                          y1="4.71124"
                          x2="21.9036"
                          y2="4.71124"
                          stroke="black"
                          strokeWidth="0.270276"
                        />
                        <line
                          x1="4.10913"
                          y1="22.5769"
                          x2="6.20261"
                          y2="22.5769"
                          stroke="black"
                          strokeWidth="0.270276"
                        />
                        <line
                          x1="4.10913"
                          y1="6.94445"
                          x2="6.20261"
                          y2="6.94445"
                          stroke="black"
                          strokeWidth="0.270276"
                        />
                        <line
                          x1="5.02062"
                          y1="22.712"
                          x2="5.02062"
                          y2="7.07964"
                          stroke="black"
                          strokeWidth="0.270276"
                        />
                      </svg>
                      {property.area}
                    </span>
                    <span className="flex items-center">
                      {" "}
                      <h1 className="px-2 text-lg font-bold">|</h1>
                      {property.config}
                    </span>
                  </div>

                  {/* Price */}
                  {/* <p className="bg-[#1095D0] rounded-full w-[120px] text-white flex justify-center items-center py-1 cursor-pointer  text-lg font-bold mt-3 mb-4">
                  Get Quote
                </p> */}
                  <span className="flex justify-between items-center text-[#1095D0] font-bold">
                    <p>{property.price}</p>
                    <Link
                      to={property.link}
                      className="relative group rounded-full p-0.5 bg-gradient-to-r from-white to-[#1095D0] overflow-hidden mt-3 mb-4"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white to-[#1095D0] animate-gradient-flow"></div>

                      <p className="bg-[#1095D0] relative z-10 rounded-full w-[120px] text-white flex justify-center items-center py-1 cursor-pointer  text-lg font-bold ">
                        Get Quote
                      </p>
                    </Link>
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
