import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaMapLocationDot } from "react-icons/fa6";
import { PiBoundingBoxDuotone } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoResizeSharp } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import propertyData from "../propertyData";
import CopyLinkButton from "./ShareBtn";

function SinglePropertyPage() {
  const [imagePopUp, setImagePopUp] = useState(false);
  const [isImages, setIsImages] = useState(false);
  const [property, setProperty] = useState({})
  const { id } = useParams()

  // Parse the area range (e.g., "935-2190 sq.ft")
  const areaRange = property?.area?.split("-") || [];
  const minArea = parseFloat(areaRange[0]?.trim()) || 0;
  const maxArea = parseFloat(areaRange[1]?.trim()) || 0;

  // Prevent error if `property.price` is undefined
  const pricePerSqFt =
    parseFloat(
      property?.price
        ?.replace("₹", "")
        ?.replace("k", "")
        ?.replace("/", "")
        ?.replace("sq.ft", "")
        ?.replace(",", "")
        ?.trim()
    ) * 1000 || 0;

  // Calculate the minimum and maximum price
  const minPrice = minArea * pricePerSqFt;
  const maxPrice = maxArea * pricePerSqFt;

  // Function to format price into crores or lakhs
  const formatPrice = (price) => {
    if (price >= 1e7) {
      return (price / 1e7).toFixed(2) + " Cr";
    }
    return (price / 1e5).toFixed(2) + " Lakh";
  };

  useEffect(() => {
    const matchedProperty = propertyData.find((item) => item.id === Number(id))
    // console.log(matchedProperty);
    setProperty(matchedProperty || {})
    if (matchedProperty?.images?.length > 0) setIsImages(true);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <div className="w-full h-auto flex flex-col px-5 sm:px-7 md:px-12 mb-20 pt-7 xl:px-40">
        <div className="w-full h-auto flex flex-col">
          <div className="w-full h-auto flex flex-col justify-between gap-2 sm:flex-row sm:gap-0 sm:items-center">
            <h1 className="text-xl font-bold text-[#1095D0] lg:text-3xl 2xl:text-4xl">
              {property.title}
            </h1>
            <div className="w-auto h-auto flex gap-2 items-end">
              <span className="text-lg font-bold">
                ₹{formatPrice(minPrice)} - {formatPrice(maxPrice)} |{" "}
              </span>
              <span className="text-sm text-gray-600">{property.price}</span>
            </div>
          </div>
          <h1 className="mt-4 md:text-lg">
            By <span className="text-[#1095D0] font-semibold">KDSure</span>
          </h1>
          <div className="w-full h-auto flex mt-2 justify-between flex-col md:mt-4 sm:flex-row gap-3 sm:gap-0">
            <span className="text-slate-600 font-semibold">
              {property.location}
            </span>
            <Link
              to={property.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-auto h-auto px-5 py-2 bg-[#1095D0] text-white font-semibold rounded-md cursor-pointer hover:bg-[#43b1e0] md:px-6 md:py-3"
            >
              Contact Now
            </Link>
          </div>
        </div>
        <div
          className="w-full sm:h-[500px] my-5 flex justify-center cursor-pointer bg-gray-200 lg:my-10"
          onClick={() => setImagePopUp(true)}
        >
          <img
            src={property.img}
            alt="property Image"
            className={`${isImages
              ? "sm:w-96 md:w-[480px] lg:w-[700px] 2xl:w-[850px]"
              : "mx-auto"
              } sm:h-[500px] object-cover flex-shrink-0 `}
          />
          {isImages && (
            <div className="hidden sm:w-full sm:h-auto sm:flex-shrink-0 sm:flex-1 sm:flex sm:flex-col">
              <img
                src={property?.images[0]}
                alt="property image"
                className="w-full bg-gray-900 h-[50%] object-cover"
              />
              <div className="w-full h-[50%] flex justify-center items-center relative">
                <img
                  src={property?.images[1]}
                  alt="property image"
                  className="w-full h-full bg-blue-300 object-cover"
                />
                <div className="w-full h-full bg-black inset-0 absolute opacity-50"></div>
                <span className="absolute text-white font-semibold md:text-lg">
                  +{property.images.length} more
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="w-full h-auto grid grid-cols-2 gap-2 md:grid-cols-4">
          <div className="w-auto px-1 py-2 h-auto flex flex-col justify-center items-center border-r border-r-gray-300">
            <h1 className="text-sm font-semibold sm:text-base lg:text-lg">
              {property.config} Apartments
            </h1>
            <span className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Configurations
            </span>
          </div>
          <div className="w-auto px-1 py-2 h-auto flex flex-col justify-center items-center md:border-r md:border-r-gray-300">
            <h1 className="text-sm font-semibold sm:text-base lg:text-lg">
              {property.possesions}{" "}
            </h1>
            <span className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Possession Status
            </span>
          </div>
          <div className="w-auto px-1 py-2 h-auto flex flex-col justify-center items-center border-r border-r-gray-300">
            <h1 className="text-sm font-semibold sm:text-base lg:text-lg">
              {property.price}
            </h1>
            <span className="text-xs text-gray-600 sm:text-sm lg:text-base">
              Avg. Price
            </span>
          </div>
          <div className="w-auto px-1 py-2 h-auto flex flex-col justify-center items-center">
            <h1 className="text-sm font-semibold sm:text-base lg:text-lg">
              {property.area}
            </h1>
            <span className="text-xs text-gray-600 sm:text-sm lg:text-base">
              (Super Builtup Area)
            </span>
          </div>
        </div>
        <div className="w-full h-auto flex my-10">
          <div className="w-full h-auto flex flex-col lg:w-[60%]">
            <div className="w-full h-auto flex flex-col border-8 rounded-xl border-[#1095D0] p-5">
              <h1 className="text-lg font-semibold">
                Why <span className="text-[#1095D0]">{property.title}</span> ?
              </h1>
              <ul className="list-inside list-disc text-xs sm:text-sm mt-5 lg:text-base">
                {property?.details?.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full h-auto flex flex-col my-6 px-2 gap-5 lg:my-10">
              <div className="w-full h-auto flex gap-5">
                <div className="w-auto h-auto flex justify-center items-center flex-shrink-0">
                  <FaMapLocationDot size={25} className="text-[#1095D0]" />
                </div>
                <div className="w-full flex-1 flex flex-col">
                  <span className="text-gray-500 text-sm font-medium">
                    Property Location
                  </span>
                  <span className="text-lg font-semibold">
                    {property?.fullLocation}
                  </span>
                </div>
              </div>
              <div className="w-full h-auto flex flex-col py-4 px-3 bg-[#f4f4f4] gap-3 rounded-lg md:p-5">
                <h1 className="text-slate-500 text-sm font-medium">
                  Around This Property
                </h1>
                <div
                  className="w-full h-auto flex gap-3 overflow-x-scroll"
                  style={{
                    scrollbarWidth: "none",
                  }}
                >
                  {property?.locality?.length > 0 ? (
                    property.locality.map((place) => (
                      <div
                        key={place.id}
                        className="min-w-full sm:min-w-60 xl:min-w-80 h-auto flex flex-col bg-white rounded-md p-3 gap-1"
                      >
                        <span className="text-sm md:text-base font-bold">
                          {place.type}
                        </span>
                        <div className="text-xs md:text-sm flex justify-between gap-4">
                          <span className="w-[70%]">{place.name}</span>
                          <span className="flex flex-col font-bold"><p>{place.distance}</p>
                            <p>{place.time}</p></span>

                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500">
                      No localities available for this property.
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full h-auto flex flex-col justify-center items-center">
                <Link to={property.mapLink} target="_blank" className="text-[#1095D0] font-medium cursor-pointer">
                  View more on Maps
                </Link>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col">
              <h1 className="text-lg font-semibold mb-2">
                {property.title} Overview
              </h1>
              <hr />
              <div className="w-full h-auto flex justify-between mt-4 ">
                <div className="w-[48%] h-auto flex flex-col gap-4 md:gap-8">
                  <div className="w-auto h-auto flex gap-3">
                    <div className="w-auto h-auto flex items-center justify-center">
                      <PiBoundingBoxDuotone size={35} />
                    </div>
                    <div className="w-auto h-auto flex flex-col text-sm font-medium lg:text-base">
                      <span className="text-gray-400">Configuration</span>
                      <span>{property.config}</span>
                    </div>
                  </div>
                  <div className="w-auto h-auto flex gap-3">
                    <div className="w-auto h-auto flex items-center justify-center">
                      <FaLocationDot size={35} />
                    </div>
                    <div className="w-auto h-auto flex flex-col text-sm font-medium lg:text-base">
                      <span className="text-gray-400">Location</span>
                      <span>{property.location}</span>
                    </div>
                  </div>
                </div>
                <div className="w-[48%] h-auto flex flex-col gap-4 md:gap-8">
                  <div className="w-auto h-auto flex gap-3">
                    <div className="w-auto h-auto flex items-center justify-center">
                      <IoResizeSharp size={35} />
                    </div>
                    <div className="w-auto h-auto flex flex-col text-sm font-medium lg:text-base">
                      <span className="text-gray-400">Sizes</span>
                      <span>{property.area}</span>
                    </div>
                  </div>
                  <div className="w-auto h-auto flex gap-3">
                    <div className="w-auto h-auto flex items-center justify-center">
                      <RiMoneyRupeeCircleFill size={35} />
                    </div>
                    <div className="w-auto h-auto flex flex-col text-sm font-medium lg:text-base">
                      <span className="text-gray-400">Price</span>
                      <span>{property.price}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-auto flex mt-7 justify-between sm:justify-center items-center sm:gap-5 md:mt-14 md:gap-10">
                <button className="">
                  <CopyLinkButton link={`https://kdsure.com/single-property/${id}`} />
                </button>
                <Link
                  to={property.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto h-auto p-2 px-5 rounded-md cursor-pointer flex items-center justify-center gap-2 bg-[#1095D0] md:hover:bg-[#4ebcec] font-medium text-white md:py-3 md:px-7 md:text-lg"
                >
                  Ask For Details
                </Link>
              </div>
            </div>
            <div className="w-full h-auto flex flex-col">
              <h1 className="text-lg md:text-xl font-bold">Project Brochure</h1>
              <hr className="my-3" />
              <div className="w-full h-40 flex justify-center items-center relative md:h-60">
                <div
                  className="w-full h-full flex overflow-x-scroll gap-2"
                  style={{ scrollbarWidth: "none" }}
                >
                  {property?.images?.length > 0 &&
                    property.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt="images"
                        className="w-full h-full object-contain"
                      />
                    ))}
                </div>
                <button
                  onClick={() => setImagePopUp(true)}
                  className="px-5 py-2 absolute text-black shadow-md font-bold border bg-white rounded-md"
                >
                  View Brochure
                </button>
              </div>
              <div className="w-full h-auto flex justify-center items-center mt-5">
                <a
                  href={property.brochure}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[#1095D0] md:hover:bg-[#4ebcec] text-white font-semibold flex items-center gap-2 rounded-md"
                >
                  <MdOutlineFileDownload size={25} />
                  Download Brochure
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {imagePopUp && (
        <div className="w-screen h-screen flex flex-col bg-black fixed top-0 z-50 py-10 sm:py-16 pl-7 md:pl-14 2xl:pl-24">
          <div className="w-full h-auto flex flex-col justify-between gap-2 sm:gap-0 sm:flex-row sm:items-center sm:pr-7 md:pr-14 2xl:pr-24">
            <div className="w-auto h-auto flex flex-col text-white gap-2">
              <h1 className="xl:text-xl font-bold">{property.title}</h1>
              <span className="text-sm xl:text-base">
                ₹{formatPrice(minPrice)} - {formatPrice(maxPrice)}{" "}
              </span>
            </div>
            <div className="w-auto h-auto flex sm:justify-center items-center">
              <Link
                to={property.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-auto h-auto px-6 py-2 bg-[#1095D0] text-white font-semibold"
              >
                Contact Now
              </Link>
            </div>
          </div>
          <h1 className="text-white mt-2">{property.location}</h1>
          <div className="w-auto h-auto absolute top-5 right-10">
            <IoClose
              size={45}
              className="text-white cursor-pointer"
              onClick={() => setImagePopUp(false)}
            />
          </div>
          <div
            className="mt-16 w-full h-auto flex gap-6 overflow-x-scroll pr-20"
            style={{ scrollbarWidth: "none" }}
          >
            {property.images.length > 0 &&
              property.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="images"
                  className="w-full h-[280px] 2xl:h-[440px] object-contain"
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SinglePropertyPage;
