import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      {/* My aim To create the left side information and right side images */}

      {/* Left side section with Information*/}
      <div className="flex flex-row justify-between items-center bg-[#D2D0A0] p-10 space-x-8  shadow-2">
        <div className="p-15 my-9 mx-2 flex flex-col justify-between items-start space-y-10">
          <div className="  p-5  space-y-10 ">
            <h1 className="font-extrabold font-serif text-5xl text-green-900 text-start text-shadow-lg/30">
              Hi, I Am Akash
            </h1>

            <p className="text-2xl font-serif font-semibold text-[#144d21] overflow-hidden w-full text-shadow-lg/30">
              Skilled In {""}
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

          <div className="mx-6">
            <button
              type="submit"
              className=" flex items-center justify-between text-sm h-10 w-39 rounded-full pr-7 bg-[##D2D0A0] border-2 border-emerald-900 text-green-900 font-bold active:scale-95 transition hover:bg-green-900 hover:text-white object-cover"
            >
              <div className="bg-green-900 ml-1 rounded-full h-7 w-7  flex items-center justify-center">
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
              <Link to="src\assets\Akash_Jadhav_CV.pdf" target="_blank">
                Download CV
              </Link>
            </button>
          </div>
        </div>

        {/* <div className="mx-15 my-8">
          <div className="box-content md:border-8 border-emerald-700 overflow-hidden   rounded-full  shadow-2xl ">
            <img
              className="object-cover"
              src="/src/assets/personal.png"
              alt="Akash Jadhav"
            />
          </div>
        </div> */}
        <div className="mx-15 my-8  shadow-2xl  bg-[#537D5D] rounded-lg  p-5  ">
          <div className="box-content md:border-40 rotate-12 border-transparent bg-transparent overflow-hidden   rounded-lg  shadow-2xl ">
            <img
              className="object-cover bg-[#D2D0A0] saturate-150 rounded-lg "
              src="\src\assets\personal.png"
              alt="Akash Jadhav"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
