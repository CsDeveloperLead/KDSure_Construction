import image from "../assets/line.svg";
const Footer = () => {
  return (
    <div className="mx-4 md:mx-10">
      <div className="relative bg-[#2b2b2b] bg-cover bg-center md:h-[400px] rounded-3xl w-full mb-10">
        {/* Background Image Layer */}
        <div className="absolute inset-0 rounded-3xl" style={{ zIndex: 1 }}>
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Content Layer (if any) */}
        <div className="relative z-10 h-full flex p-6 md:p-20 items-center text-white  flex-col gap-4">
          {/* Add any content here */}

          <div className="">
            <div className="md:grid md:grid-cols-4 md:gap-20  mt-10 md:mt-0 text-center md:text-start flex flex-col items-center">
              <div className="col-span-2 flex flex-col gap-6">
                <h1 className="font-bold text-2xl md:text-6xl">
                  Make your dream home reality now
                </h1>
                <p className="text-sm md:text-base">
                  The steps towards your dream home start today. Make it happen
                  now and feel the warmth of your new home with peace and
                  happiness.
                </p>
              </div>
              <div className="col-span-1 flex flex-col gap-3">
                <h1 className="font-bold text-xl md:text-2xl my-1 md:my-4 mt-10 md:mt-0">Site Links</h1>
                <p className="text-sm md:text-base flex items-center gap-2">
                  <span>
                    <svg
                      width="11"
                      height="17"
                      viewBox="0 0 11 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.38203 1.07519L9.87508 7.51752C10.1794 7.87261 10.3824 8.27843 10.3824 8.68424C10.3824 9.03933 10.1794 9.49588 9.87508 9.80024L3.38203 16.2426C2.92548 16.6991 2.21531 16.8513 1.60658 16.5977C0.997857 16.344 0.642768 15.8368 0.642768 15.1773V2.19119C0.642768 1.58246 0.997857 0.973741 1.60658 0.720106C2.21531 0.466471 2.92548 0.618652 3.38203 1.07519Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Privacy Policy
                </p>
                <p className="text-sm md:text-base flex items-center gap-2">
                  <span>
                    <svg
                      width="11"
                      height="17"
                      viewBox="0 0 11 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.38203 1.07519L9.87508 7.51752C10.1794 7.87261 10.3824 8.27843 10.3824 8.68424C10.3824 9.03933 10.1794 9.49588 9.87508 9.80024L3.38203 16.2426C2.92548 16.6991 2.21531 16.8513 1.60658 16.5977C0.997857 16.344 0.642768 15.8368 0.642768 15.1773V2.19119C0.642768 1.58246 0.997857 0.973741 1.60658 0.720106C2.21531 0.466471 2.92548 0.618652 3.38203 1.07519Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Disclaimer
                </p>
                <p className="text-sm md:text-base flex items-center gap-2">
                  <span>
                    <svg
                      width="11"
                      height="17"
                      viewBox="0 0 11 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.38203 1.07519L9.87508 7.51752C10.1794 7.87261 10.3824 8.27843 10.3824 8.68424C10.3824 9.03933 10.1794 9.49588 9.87508 9.80024L3.38203 16.2426C2.92548 16.6991 2.21531 16.8513 1.60658 16.5977C0.997857 16.344 0.642768 15.8368 0.642768 15.1773V2.19119C0.642768 1.58246 0.997857 0.973741 1.60658 0.720106C2.21531 0.466471 2.92548 0.618652 3.38203 1.07519Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Terms & Conditions
                </p>
                <p className="text-sm md:text-base flex items-center gap-2">
                  <span>
                    <svg
                      width="11"
                      height="17"
                      viewBox="0 0 11 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.38203 1.07519L9.87508 7.51752C10.1794 7.87261 10.3824 8.27843 10.3824 8.68424C10.3824 9.03933 10.1794 9.49588 9.87508 9.80024L3.38203 16.2426C2.92548 16.6991 2.21531 16.8513 1.60658 16.5977C0.997857 16.344 0.642768 15.8368 0.642768 15.1773V2.19119C0.642768 1.58246 0.997857 0.973741 1.60658 0.720106C2.21531 0.466471 2.92548 0.618652 3.38203 1.07519Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Disclaimer
                </p>
              </div>
              <div className="col-span-1 flex flex-col gap-3">
                <h1 className="font-bold text-xl md:text-2xl my-1 md:my-4 mt-10 md:mt-0">Site Links</h1>
                <p className="text-sm md:text-base flex items-center gap-2">
                  <span>
                    <svg
                      width="11"
                      height="17"
                      viewBox="0 0 11 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.38203 1.07519L9.87508 7.51752C10.1794 7.87261 10.3824 8.27843 10.3824 8.68424C10.3824 9.03933 10.1794 9.49588 9.87508 9.80024L3.38203 16.2426C2.92548 16.6991 2.21531 16.8513 1.60658 16.5977C0.997857 16.344 0.642768 15.8368 0.642768 15.1773V2.19119C0.642768 1.58246 0.997857 0.973741 1.60658 0.720106C2.21531 0.466471 2.92548 0.618652 3.38203 1.07519Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Privacy Policy
                </p>
                <p className="text-sm md:text-base flex items-center gap-2">
                  <span>
                    <svg
                      width="11"
                      height="17"
                      viewBox="0 0 11 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.38203 1.07519L9.87508 7.51752C10.1794 7.87261 10.3824 8.27843 10.3824 8.68424C10.3824 9.03933 10.1794 9.49588 9.87508 9.80024L3.38203 16.2426C2.92548 16.6991 2.21531 16.8513 1.60658 16.5977C0.997857 16.344 0.642768 15.8368 0.642768 15.1773V2.19119C0.642768 1.58246 0.997857 0.973741 1.60658 0.720106C2.21531 0.466471 2.92548 0.618652 3.38203 1.07519Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Disclaimer
                </p>
                <p className="text-sm md:text-base flex items-center gap-2">
                  <span>
                    <svg
                      width="11"
                      height="17"
                      viewBox="0 0 11 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.38203 1.07519L9.87508 7.51752C10.1794 7.87261 10.3824 8.27843 10.3824 8.68424C10.3824 9.03933 10.1794 9.49588 9.87508 9.80024L3.38203 16.2426C2.92548 16.6991 2.21531 16.8513 1.60658 16.5977C0.997857 16.344 0.642768 15.8368 0.642768 15.1773V2.19119C0.642768 1.58246 0.997857 0.973741 1.60658 0.720106C2.21531 0.466471 2.92548 0.618652 3.38203 1.07519Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Terms & Conditions
                </p>
                <p className="text-sm md:text-base flex items-center gap-2">
                  <span>
                    <svg
                      width="11"
                      height="17"
                      viewBox="0 0 11 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.38203 1.07519L9.87508 7.51752C10.1794 7.87261 10.3824 8.27843 10.3824 8.68424C10.3824 9.03933 10.1794 9.49588 9.87508 9.80024L3.38203 16.2426C2.92548 16.6991 2.21531 16.8513 1.60658 16.5977C0.997857 16.344 0.642768 15.8368 0.642768 15.1773V2.19119C0.642768 1.58246 0.997857 0.973741 1.60658 0.720106C2.21531 0.466471 2.92548 0.618652 3.38203 1.07519Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  Disclaimer
                </p>
              </div>
            </div>
          </div>
          <hr className="text-white w-full mt-4 "></hr>
          <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between ">
            <div className="flex items-center gap-4 md:gap-8  ">
              <p className="hover:font-bold cursor-pointer">Home</p>
              <p className="hover:font-bold cursor-pointer">Sell</p>
              <p className="hover:font-bold cursor-pointer">Buy</p>
              <p className="hover:font-bold cursor-pointer">Rent</p>
              <p className="hover:font-bold cursor-pointer">Gallery</p>
              <p className="hover:font-bold cursor-pointer">Services</p>
            </div>
            <div className="flex items-center gap-4">
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 49 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.88734"
                    y="1.24818"
                    width="47.5036"
                    height="47.5036"
                    rx="23.7518"
                    fill="white"
                  />
                  <rect
                    x="0.88734"
                    y="1.24818"
                    width="47.5036"
                    height="47.5036"
                    rx="23.7518"
                    stroke="#14161B"
                    strokeWidth="1.21804"
                  />
                  <path
                    d="M17.5593 36.3838H12.2494V19.3122H17.5593V36.3838ZM14.8758 17.0284C13.2201 17.0284 11.8498 15.601 11.8498 13.8881C11.8498 11.5472 14.362 10.0627 16.4174 11.2617C17.388 11.7756 17.959 12.8033 17.959 13.8881C17.959 15.601 16.5887 17.0284 14.8758 17.0284ZM37.3715 36.3838H32.1187V28.1049C32.1187 26.1066 32.0616 23.5944 29.321 23.5944C26.5804 23.5944 26.1808 25.7069 26.1808 27.9336V36.3838H20.8709V19.3122H25.9524V21.6531H26.0095C26.7517 20.3399 28.4646 18.9125 31.0339 18.9125C36.4009 18.9125 37.4286 22.4525 37.4286 27.0201V36.3838H37.3715Z"
                    fill="#14161B"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.54921"
                    y="1.24818"
                    width="47.5036"
                    height="47.5036"
                    rx="23.7518"
                    fill="white"
                  />
                  <rect
                    x="1.54921"
                    y="1.24818"
                    width="47.5036"
                    height="47.5036"
                    rx="23.7518"
                    stroke="#14161B"
                    strokeWidth="1.21804"
                  />
                  <path
                    d="M32.3061 12.8198H36.0416L27.8807 23.1388L37.4814 37.1806H29.9641L24.0763 28.6643L17.3394 37.1806H13.6016L22.3306 26.1433L13.1206 12.8198H20.8287L26.1507 20.6041L32.3061 12.8198ZM30.9951 34.707H33.065L19.704 15.1634H17.4828L30.9951 34.707Z"
                    fill="#14161B"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.21131"
                    y="1.24818"
                    width="47.5036"
                    height="47.5036"
                    rx="23.7518"
                    fill="white"
                  />
                  <rect
                    x="1.21131"
                    y="1.24818"
                    width="47.5036"
                    height="47.5036"
                    rx="23.7518"
                    stroke="#14161B"
                    strokeWidth="1.21804"
                  />
                  <path
                    d="M31.7573 27.2485H27.4751V40.0379H21.7656V27.2485H17.0837V21.9957H21.7656V17.9419C21.7656 13.3743 24.5061 10.805 28.6741 10.805C30.6725 10.805 32.785 11.2046 32.785 11.2046V15.7152H30.4441C28.1603 15.7152 27.4751 17.0855 27.4751 18.57V21.9957H32.5566L31.7573 27.2485Z"
                    fill="#14161B"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 49 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.87318"
                    y="1.24818"
                    width="47.5036"
                    height="47.5036"
                    rx="23.7518"
                    fill="white"
                  />
                  <rect
                    x="0.87318"
                    y="1.24818"
                    width="47.5036"
                    height="47.5036"
                    rx="23.7518"
                    stroke="#14161B"
                    strokeWidth="1.21804"
                  />
                  <path
                    d="M24.6245 18.8554C28.2216 18.8554 31.1905 21.8244 31.1905 25.4214C31.1905 29.0756 28.2216 31.9874 24.6245 31.9874C20.9704 31.9874 18.0585 29.0756 18.0585 25.4214C18.0585 21.8244 20.9704 18.8554 24.6245 18.8554ZM24.6245 29.7036C26.9655 29.7036 28.8496 27.8194 28.8496 25.4214C28.8496 23.0805 26.9655 21.1964 24.6245 21.1964C22.2265 21.1964 20.3424 23.0805 20.3424 25.4214C20.3424 27.8194 22.2836 29.7036 24.6245 29.7036ZM32.9605 18.6271C32.9605 17.7706 32.2753 17.0855 31.4189 17.0855C30.5625 17.0855 29.8773 17.7706 29.8773 18.6271C29.8773 19.4835 30.5625 20.1686 31.4189 20.1686C32.2753 20.1686 32.9605 19.4835 32.9605 18.6271ZM37.2998 20.1686C37.414 22.2812 37.414 28.6188 37.2998 30.7313C37.1856 32.7868 36.7288 34.5567 35.2443 36.0983C33.7598 37.5828 31.9328 38.0396 29.8773 38.1538C27.7648 38.2679 21.4272 38.2679 19.3146 38.1538C17.2592 38.0396 15.4892 37.5828 13.9477 36.0983C12.4632 34.5567 12.0064 32.7868 11.8922 30.7313C11.778 28.6188 11.778 22.2812 11.8922 20.1686C12.0064 18.1132 12.4632 16.2861 13.9477 14.8016C15.4892 13.3172 17.2592 12.8604 19.3146 12.7462C21.4272 12.632 27.7648 12.632 29.8773 12.7462C31.9328 12.8604 33.7598 13.3172 35.2443 14.8016C36.7288 16.2861 37.1856 18.1132 37.2998 20.1686ZM34.5592 32.9581C35.2443 31.3023 35.073 27.3056 35.073 25.4214C35.073 23.5944 35.2443 19.5977 34.5592 17.8848C34.1024 16.8 33.246 15.8865 32.1612 15.4868C30.4483 14.8016 26.4516 14.9729 24.6245 14.9729C22.7404 14.9729 18.7437 14.8016 17.0879 15.4868C15.946 15.9436 15.0896 16.8 14.6328 17.8848C13.9477 19.5977 14.1189 23.5944 14.1189 25.4214C14.1189 27.3056 13.9477 31.3023 14.6328 32.9581C15.0896 34.1 15.946 34.9564 17.0879 35.4132C18.7437 36.0983 22.7404 35.927 24.6245 35.927C26.4516 35.927 30.4483 36.0983 32.1612 35.4132C33.246 34.9564 34.1595 34.1 34.5592 32.9581Z"
                    fill="#14161B"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;