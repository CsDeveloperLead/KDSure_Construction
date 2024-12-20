import img from "../assets/serviceimg.png";
const RealEstateServices = () => {
  return (
    <div className="flex flex-col items-start gap-8 font-satoshi my-20">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-start">
        <h1 className="text-3xl md:text-7xl font-semibold md:leading-[80px] ">
          Real Estate <span className="text-[#1095D0]">Services</span> Tailored
          for You
        </h1>
        <p className="text-gray-500 text-base md:text-xl mt-2 md:mt-4">
          Whether you&apos;re buying, selling, or renting, we’re here to
          simplify the journey
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-10 mt-10">
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service Card 1 */}
            <div
              className="bg-[#f0f0f1] relative h-44 sm:h-auto shadow-lg rounded-3xl flex flex-col items-start overflow-hidden before:absolute 
            before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%]
            before:bg-[conic-gradient(transparent,transparent,#00a6ff)]
            before:animate-spin
            "
            >
              <div className="absolute top-[2px] right-[2px] left-[2px] border border-[#1095d0] bottom-[2px] rounded-3xl p-6 bg-[#f0f0f1]">
                <div className=" text-4xl mb-4 flex gap-4 items-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 63 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M61.8479 28.9461L33.7894 0.958405C33.2001 0.365894 32.4291 0.0371094 31.6289 0.0371094C30.8288 0.0371094 30.0578 0.365894 29.4685 0.958405L1.41003 28.9461C0.932136 29.4228 0.597096 30.0466 0.448888 30.7355C0.300679 31.4244 0.34623 32.1463 0.579559 32.8063C0.812889 33.4664 1.22309 34.0338 1.75632 34.4341C2.28955 34.8343 2.92088 35.0487 3.56744 35.0492H8.04589V63.0568C8.04589 63.5846 8.23743 64.0908 8.57838 64.464C8.91933 64.8372 9.38175 65.0469 9.86393 65.0469H25.2688C25.751 65.0469 26.2134 64.8372 26.5544 64.464C26.8953 64.0908 27.0869 63.5846 27.0869 63.0568V46.0612H36.1468V63.0568C36.1468 63.5846 36.3383 64.0908 36.6793 64.464C37.0202 64.8372 37.4826 65.0469 37.9648 65.0469H53.3697C53.8519 65.0469 54.3143 64.8372 54.6553 64.464C54.9962 64.0908 55.1878 63.5846 55.1878 63.0568V35.0492H59.6723C60.3188 35.0487 60.9501 34.8343 61.4834 34.4341C62.0166 34.0338 62.4268 33.4664 62.6601 32.8063C62.8935 32.1463 62.939 31.4244 62.7908 30.7355C62.6426 30.0466 62.3076 29.4228 61.8297 28.9461H61.8479ZM54.7272 4.05636H42.3766L56.5634 18.1796V6.06638C56.5658 5.80168 56.52 5.53911 56.4286 5.29404C56.3372 5.04897 56.202 4.82633 56.031 4.63915C55.86 4.45197 55.6566 4.30401 55.4327 4.20394C55.2089 4.10387 54.969 4.0537 54.7272 4.05636Z"
                      fill="#1095D0"
                    />
                  </svg>

                  <h3 className="font-semibold text-xl">Property Buying & Selling</h3>
                </div>

                <p className="text-gray-500 text-sm mt-2">
                  Our team guides you through every step, helping you find a
                  home that fits your vision and budget.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div
              className="bg-[#f0f0f1] relative h-44 sm:h-auto shadow-lg rounded-3xl  flex flex-col items-start overflow-hidden before:absolute 
            before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%]
            before:bg-[conic-gradient(transparent,transparent,#00a6ff)]
            before:animate-spin
            "
            >
              <div className="relative top-[2px] w-[99%] h-[97%] right-[2px] left-[2px] border border-[#1095d0] bottom-[2px] rounded-3xl p-6 bg-[#f0f0f1] ">
                <div className=" text-4xl mb-4 flex gap-4 items-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 64 58"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M63.1683 1.75181V8.46088C63.1683 8.90572 62.9946 9.33234 62.6854 9.64689C62.3763 9.96144 61.9569 10.1381 61.5197 10.1381C61.0825 10.1381 60.6631 9.96144 60.354 9.64689C60.0448 9.33234 59.8711 8.90572 59.8711 8.46088V5.8108L42.8907 23.0531C42.7435 23.2143 42.5647 23.3423 42.366 23.4289C42.1672 23.5156 41.9529 23.559 41.7367 23.5563H32.7683L23.3714 39.5239C23.2385 39.7408 23.0603 39.9254 22.8495 40.0645C22.6386 40.2037 22.4003 40.2939 22.1514 40.329H21.9536C21.7374 40.3317 21.523 40.2883 21.3243 40.2016C21.1255 40.115 20.9468 39.9869 20.7996 39.8258L14.6669 33.6199H2.17056C1.73333 33.6199 1.314 33.4432 1.00483 33.1286C0.695663 32.8141 0.521973 32.3875 0.521973 31.9426C0.521973 31.4978 0.695663 31.0712 1.00483 30.7566C1.314 30.4421 1.73333 30.2654 2.17056 30.2654H15.3593C15.5755 30.2627 15.7898 30.3061 15.9886 30.3927C16.1873 30.4794 16.3661 30.6074 16.5133 30.7685L21.6239 35.9345L30.4273 21.0068C30.5753 20.7596 30.7836 20.5555 31.0321 20.4144C31.2805 20.2733 31.5606 20.2001 31.8451 20.2018H41.0442L57.5301 3.42908H54.9254C54.4881 3.42908 54.0688 3.25236 53.7596 2.93781C53.4505 2.62327 53.2768 2.19665 53.2768 1.75181C53.2768 1.30697 53.4505 0.880349 53.7596 0.5658C54.0688 0.251251 54.4881 0.074539 54.9254 0.074539H61.5197C61.7256 0.0246328 61.9402 0.0246328 62.1462 0.074539C62.547 0.247773 62.8661 0.572462 63.0364 0.980264C63.1529 1.21901 63.1987 1.48706 63.1683 1.75181ZM63.1683 21.879V55.4244C63.1683 55.8692 62.9946 56.2959 62.6854 56.6104C62.3763 56.9249 61.9569 57.1017 61.5197 57.1017H51.6282C51.1909 57.1017 50.7716 56.9249 50.4624 56.6104C50.1533 56.2959 49.9796 55.8692 49.9796 55.4244V21.879C49.9796 21.4342 50.1533 21.0076 50.4624 20.693C50.7716 20.3785 51.1909 20.2018 51.6282 20.2018H61.5197C61.9569 20.2018 62.3763 20.3785 62.6854 20.693C62.9946 21.0076 63.1683 21.4342 63.1683 21.879ZM46.6824 28.5881V55.4244C46.6824 55.8692 46.5087 56.2959 46.1996 56.6104C45.8904 56.9249 45.4711 57.1017 45.0338 57.1017H35.1423C34.7051 57.1017 34.2857 56.9249 33.9766 56.6104C33.6674 56.2959 33.4937 55.8692 33.4937 55.4244V28.5881C33.4937 28.1433 33.6674 27.7166 33.9766 27.4021C34.2857 27.0875 34.7051 26.9108 35.1423 26.9108H45.0338C45.4711 26.9108 45.8904 27.0875 46.1996 27.4021C46.5087 27.7166 46.6824 28.1433 46.6824 28.5881ZM30.1965 45.3608V55.4244C30.1965 55.8692 30.0229 56.2959 29.7137 56.6104C29.4045 56.9249 28.9852 57.1017 28.548 57.1017H18.6564C18.2192 57.1017 17.7999 56.9249 17.4907 56.6104C17.1815 56.2959 17.0078 55.8692 17.0078 55.4244V45.3608C17.0078 44.9159 17.1815 44.4893 17.4907 44.1748C17.7999 43.8602 18.2192 43.6835 18.6564 43.6835H28.548C28.9852 43.6835 29.4045 43.8602 29.7137 44.1748C30.0229 44.4893 30.1965 44.9159 30.1965 45.3608ZM13.7107 38.6517V55.4244C13.7107 55.8692 13.537 56.2959 13.2278 56.6104C12.9186 56.9249 12.4993 57.1017 12.0621 57.1017H2.17056C1.73333 57.1017 1.314 56.9249 1.00483 56.6104C0.695663 56.2959 0.521973 55.8692 0.521973 55.4244V38.6517C0.521973 38.2069 0.695663 37.7803 1.00483 37.4657C1.314 37.1511 1.73333 36.9744 2.17056 36.9744H12.0621C12.4993 36.9744 12.9186 37.1511 13.2278 37.4657C13.537 37.7803 13.7107 38.2069 13.7107 38.6517Z"
                      fill="#1095D0"
                    />
                  </svg>
                  <h3 className="font-semibold text-xl">Property Banking</h3>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Buying a property with confidence. We use market insights and targeted
                  strategies to get the best value for your property.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div
              className="bg-[#f0f0f1] relative h-44 sm:h-auto shadow-lg rounded-3xl flex flex-col items-start overflow-hidden before:absolute 
            before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%]
            before:bg-[conic-gradient(transparent,transparent,#00a6ff)]
            before:animate-spin
            "
            >
              <div className="absolute top-[2px] right-[2px] left-[2px] border border-[#1095d0] bottom-[2px] rounded-3xl p-6 bg-[#f0f0f1] ">
                <div className=" text-4xl mb-4 flex gap-4 items-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 64 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M59.8862 61.6162H56.7535V3.5836C56.7535 1.5354 55.5003 0.169922 53.6207 0.169922H9.76185C7.88218 0.169922 6.62907 1.5354 6.62907 3.5836V61.6162H3.4963C1.61663 61.6162 0.363525 62.9817 0.363525 65.0299C0.363525 67.0781 1.61663 68.4436 3.4963 68.4436H59.8862C61.7659 68.4436 63.019 67.0781 63.019 65.0299C63.019 62.9817 61.7659 61.6162 59.8862 61.6162ZM22.2929 13.8247H25.4257C27.3054 13.8247 28.5585 15.1901 28.5585 17.2383C28.5585 19.2865 27.3054 20.652 25.4257 20.652H22.2929C20.4133 20.652 19.1602 19.2865 19.1602 17.2383C19.1602 15.1901 20.4133 13.8247 22.2929 13.8247ZM19.1602 30.8931C19.1602 28.8449 20.4133 27.4794 22.2929 27.4794H25.4257C27.3054 27.4794 28.5585 28.8449 28.5585 30.8931C28.5585 32.9413 27.3054 34.3068 25.4257 34.3068H22.2929C20.4133 34.3068 19.1602 32.9413 19.1602 30.8931ZM41.0896 61.6162H22.2929V44.5478C22.2929 42.4996 23.5461 41.1341 25.4257 41.1341H37.9568C39.8365 41.1341 41.0896 42.4996 41.0896 44.5478V61.6162ZM41.0896 34.3068H37.9568C36.0771 34.3068 34.824 32.9413 34.824 30.8931C34.824 28.8449 36.0771 27.4794 37.9568 27.4794H41.0896C42.9692 27.4794 44.2224 28.8449 44.2224 30.8931C44.2224 32.9413 42.9692 34.3068 41.0896 34.3068ZM41.0896 20.652H37.9568C36.0771 20.652 34.824 19.2865 34.824 17.2383C34.824 15.1901 36.0771 13.8247 37.9568 13.8247H41.0896C42.9692 13.8247 44.2224 15.1901 44.2224 17.2383C44.2224 19.2865 42.9692 20.652 41.0896 20.652Z"
                      fill="#1095D0"
                    />
                  </svg>
                  <h3 className="font-semibold text-xl">Commercials</h3>
                </div>
                <p className="text-gray-500 text-sm mt-2">
                  Looking for flexibility? We offer a range of rental options
                  suited for both short and long-term needs.
                </p>
              </div>
            </div>

            {/* Service Card 4 */}
            <div
              className="bg-[#f0f0f1] relative h-44 sm:h-auto shadow-lg rounded-3xl  flex flex-col items-start overflow-hidden before:absolute 
            before:top-[-50%] before:right-[-50%] before:bottom-[-50%] before:left-[-50%]
            before:bg-[conic-gradient(transparent,transparent,#00a6ff)]
            before:animate-spin
            "
            >
              <div className="relative top-[2px] w-[99%] h-[97%] right-[2px] left-[2px] border border-[#1095d0] bottom-[2px] rounded-3xl p-6 bg-[#f0f0f1] ">
                <div className=" text-4xl mb-4 flex gap-4 items-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 52 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M35.8299 19.7349H49.953L32.6201 2.12642V16.4741C32.6201 18.4306 33.904 19.7349 35.8299 19.7349ZM35.8299 26.2566C30.3732 26.2566 26.2004 22.0175 26.2004 16.4741V0.169922H10.1514C4.69472 0.169922 0.521973 4.409 0.521973 9.95242V55.6041C0.521973 61.1475 4.69472 65.3866 10.1514 65.3866H42.2495C47.7062 65.3866 51.8789 61.1475 51.8789 55.6041V26.2566H35.8299ZM16.571 19.7349H19.7808C21.7067 19.7349 22.9906 21.0392 22.9906 22.9957C22.9906 24.9522 21.7067 26.2566 19.7808 26.2566H16.571C14.6451 26.2566 13.3612 24.9522 13.3612 22.9957C13.3612 21.0392 14.6451 19.7349 16.571 19.7349ZM35.8299 52.3432H16.571C14.6451 52.3432 13.3612 51.0389 13.3612 49.0824C13.3612 47.1259 14.6451 45.8216 16.571 45.8216H35.8299C37.7558 45.8216 39.0397 47.1259 39.0397 49.0824C39.0397 51.0389 37.7558 52.3432 35.8299 52.3432ZM35.8299 39.2999H16.571C14.6451 39.2999 13.3612 37.9956 13.3612 36.0391C13.3612 34.0826 14.6451 32.7782 16.571 32.7782H35.8299C37.7558 32.7782 39.0397 34.0826 39.0397 36.0391C39.0397 37.9956 37.7558 39.2999 35.8299 39.2999Z"
                      fill="#1095D0"
                    />
                  </svg>
                  <h3 className="font-semibold text-xl">Consulting</h3>
                </div>

                <p className="text-gray-500 text-sm mt-2">
                  Our experienced consultants provide expert advice to help you
                  make informed real estate decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-1/2 h-64 lg:h-[400px] bg-gray-200 rounded-lg">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Placeholder for the image or content */}
    </div>
  );
};

export default RealEstateServices;
