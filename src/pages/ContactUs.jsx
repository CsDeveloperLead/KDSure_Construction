// import con1 from "../assets/con1.png";
// import con2 from "../assets/con2.png";
// import con3 from "../assets/con3.png";
import { useEffect } from "react";
import { useRef } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_efr75bc', // replace with your EmailJS service ID
        'template_8ax1t2y', // replace with your EmailJS template ID
        form.current,
        'zjsxgaBlAE1A72O8D' // replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message.');
        }
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="px-4 md:px-20 flex flex-col md:flex-row items-center gap-10 my-10 md:my-10 font-montserrat">
        <div className="w-full md:w-[45%] h-[450px] md:h-[680px] flex flex-col items-center md:items-start bg-[#1095D0] rounded-3xl gap-10 md:gap-40 p-8">
          <div className="flex flex-col gap-3 text-white mt-10">
            <h1 className="font-bold text-2xl lg:text-4xl">Contact Information</h1>
            <p className="text-base lg:text-2xl">Say something to start a live chat!</p>
          </div>
          <div className="flex flex-col gap-6 md:gap-12">
            <div className="flex gap-4 items-center text-white font-bold">
              <span>
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.8387 16.9818H33.8912C33.8912 9.15213 27.98 3.24707 20.1396 3.24707V6.29957C26.3393 6.29957 30.8387 10.7913 30.8387 16.9818Z"
                    fill="white"
                  />
                  <path
                    d="M20.155 12.4051C23.3647 12.4051 24.7338 13.7741 24.7338 16.9838H27.7863C27.7863 12.0617 25.0772 9.35257 20.155 9.35257V12.4051ZM25.3779 20.7124C25.0846 20.4459 24.6992 20.3037 24.3031 20.316C23.907 20.3282 23.5311 20.4939 23.2548 20.7781L19.6025 24.5342C18.7234 24.3663 16.956 23.8153 15.1367 22.0006C13.3174 20.1798 12.7664 18.4078 12.6031 17.5348L16.3562 13.881C16.6407 13.6049 16.8066 13.229 16.8189 12.8327C16.8311 12.4365 16.6887 12.051 16.4218 11.7579L10.7823 5.55678C10.5153 5.26276 10.1442 5.08441 9.74776 5.05962C9.35135 5.03483 8.96089 5.16554 8.65931 5.424L5.34734 8.26435C5.08347 8.52918 4.92597 8.88164 4.90473 9.25489C4.88184 9.63645 4.44533 18.6749 11.4539 25.6865C17.568 31.7991 25.2268 32.2463 27.336 32.2463C27.6443 32.2463 27.8336 32.2372 27.884 32.2341C28.2571 32.2132 28.6094 32.055 28.873 31.79L31.7118 28.4765C31.9704 28.1751 32.1014 27.7847 32.0769 27.3883C32.0524 26.9919 31.8743 26.6207 31.5805 26.3535L25.3779 20.7124Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="text-base lg:text-xl">  (+91) 9654987500 </span>
            </div>
            <div className="flex gap-4 items-center text-white font-bold">
              <span>
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.8912 6.24219H3.36621V30.6622H33.8912V6.24219ZM30.8387 12.3472L18.6287 19.9784L6.41871 12.3472V9.29469L18.6287 16.9259L30.8387 9.29469V12.3472Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="text-base lg:text-xl">Kuldeepsingh@kdsure.com</span>
            </div>
            <div className="flex gap-4 items-center text-white font-bold">
              <span>
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6287 2.36914C15.2904 2.37308 12.09 3.70095 9.72946 6.06148C7.36893 8.422 6.04106 11.6224 6.03712 14.9607C6.03312 17.6888 6.92423 20.3428 8.57375 22.5156C8.57375 22.5156 8.91716 22.9678 8.97325 23.033L18.6287 34.4204L28.2887 23.0273C28.3391 22.9667 28.6836 22.5156 28.6836 22.5156L28.6848 22.5122C30.3335 20.3403 31.2242 17.6875 31.2203 14.9607C31.2163 11.6224 29.8884 8.422 27.5279 6.06148C25.1674 3.70095 21.967 2.37308 18.6287 2.36914ZM18.6287 19.5395C17.7231 19.5395 16.8378 19.2709 16.0849 18.7678C15.3319 18.2647 14.745 17.5496 14.3985 16.7129C14.0519 15.8763 13.9612 14.9556 14.1379 14.0674C14.3146 13.1792 14.7507 12.3634 15.391 11.723C16.0314 11.0827 16.8472 10.6466 17.7354 10.4699C18.6236 10.2933 19.5442 10.3839 20.3809 10.7305C21.2176 11.077 21.9327 11.6639 22.4358 12.4169C22.9389 13.1699 23.2074 14.0551 23.2074 14.9607C23.2059 16.1746 22.723 17.3383 21.8647 18.1967C21.0063 19.0551 19.8426 19.5379 18.6287 19.5395Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="text-base lg:text-xl">
              FF-20, French Arcade, Greater Noida West,
              Gautam Buddh Nagar-201306, Uttar Pradesh
              </span>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-full md:w-[55%] flex flex-col gap-4 bg-[#f9f9f9] rounded-3xl p-4 md:p-10">
          <h1 className="text-2xl md:text-4xl font-bold">
            Leave a Message For Us
          </h1>
          <p className="text-[#6e6e6e] text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-between">
                <div className="w-full md:w-1/2 flex flex-col gap-1 md:gap-3">
                  <label className="">First Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ex. Jatin"
                    className="border p-2 pl-4 rounded-3xl"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-1 md:gap-3">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Ex. Sharma"
                    className="border p-2 pl-4 rounded-3xl"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-between">
                <div className="w-full md:w-1/2 flex flex-col gap-1 md:gap-3">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Ex. Hello@email"
                    className="border p-2 pl-4 rounded-3xl"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-1 md:gap-3">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Ex. 1234567890"
                    className="border p-2 pl-4 rounded-3xl"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1 md:gap-3">
                <label>Message</label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Your Message"
                  className="border p-4 rounded-[20px] resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#1095D0] uppercase text-white py-3 rounded-xl w-full md:w-[220px] mt-6"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
