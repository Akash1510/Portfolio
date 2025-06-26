import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      {/* Main container responsive: column on mobile, row on larger screens */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#D2D0A0] px-6 sm:px-10 py-10 space-y-10 md:space-y-0 md:space-x-8 shadow-2">
        
        {/* Left section: text + button */}
        <div className="flex flex-col space-y-8 md:space-y-10 text-start w-full md:w-1/2 px-2">
          <div className="space-y-6">
            <h1 className="font-extrabold font-serif text-3xl sm:text-4xl md:text-5xl text-green-900 text-shadow-lg/30">
              Hi, I Am Akash
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-[#144d21] text-shadow-lg/30">
              Skilled In{" "}
              <Typewriter
                words={[
                  "Full Stack Development 💻",
                  "Data Science 📊",
                  "AI & Machine Learning 🤖",
                  "DevOps & Cloud Engineering ☁️",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
          </div>

          {/* Download CV Button */}
          <div>
            <button
              type="submit"
              className="flex items-center justify-between h-10 w-fit rounded-full pr-4 bg-[#D2D0A0] border-2 border-emerald-900 text-green-900 font-bold active:scale-95 transition hover:bg-green-900 hover:text-white"
            >
              <div className="bg-green-900 ml-1 rounded-full h-7 w-7 flex items-center justify-center">
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 13 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 1v12m6-4-5.5 5L1 9"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Link
                to="https://drive.google.com/file/d/1qmYdT6Kdl0MplkWXi668POWZvV3pUGRc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-sm sm:text-base"
              >
                Download CV
              </Link>
            </button>
          </div>
        </div>

        {/* Right section: image box remains untouched except for spacing */}
        <div className="mx-2 md:mx-10 my-8 shadow-2xl bg-[#537D5D] rounded-lg p-5 w-full md:w-auto">
          <div className="box-content md:border-40 rotate-12 border-transparent bg-transparent overflow-hidden rounded-lg shadow-2xl">
            <img
              className="object-cover bg-[#D2D0A0] saturate-150 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
              src="/assets/personal.png"
              alt="Akash Jadhav"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
