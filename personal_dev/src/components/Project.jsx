import {
  FaJava,
  FaPython,
  FaReact,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaArrowRight
} from "react-icons/fa";
import { BiLogoFlask } from "react-icons/bi";
// to import the logo of flutter
import { FaFlutter } from "react-icons/fa6";

import React, { useState } from "react";

const Project = () => {
  const [Seemore, SetSeemore] = useState(false);

  const IconMap = {
    FaJava: FaJava,
    FaPython: FaPython,
    FaReact: FaReact,
    FaJs: FaJs,
    BiLogoFlask: BiLogoFlask,
    FaFlutter: FaFlutter,
    FaNodeJs: FaNodeJs,
    FaDatabase: FaDatabase,
  };

  const ProjectData = [
    {
      title: "AgroAI",
      imgPath: "/assets/AgroAiimg.jpeg",
      description: [
        "Agro AI is Mobile Application that helps farmers to get real time Information about their crops affceted from any Diesease for improve their informed Decision Making.",

        "Location Based Weather Forecasting and MultiLingual Support.",

        "Focuses On the Major Crops in India Like Cotton, Sugarcane & Soyabean For Best Insights From AI Model.",

        "AI model is build Using the Tensorflow, Flask and CNN Algorithm for image Classification And Gain The Accuracy  95%.",
      ],
      skills: {
        FaJava: "cornflowerblue",
        FaPython: "yellowgreen",
        FaFlutter: "black",
        FaReact: "skyblue",
        BiLogoFlask: "black",
        FaDatabase: "red",
      },
    },
    {
      title: "EduMitra",
      imgPath: "/assets/Edumitra.png", // Replace with actual image path D:\Porfolio\personal_dev\src\assets\Edumitra.png
      description: [
        "EduMitra is a web-based Parental Engagement System designed to bridge communication gaps between teachers and parents for enhanced student outcomes.",

        "Supports features like Teacher Ratings, Class Schedules, Meeting Requests, and Real-Time Student Performance Tracking.",

        "Multilingual Interface available in English and Marathi to ensure inclusivity across regional schools in India.",

        "Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with Role-Based Login for Teachers and Parents.",

      ],
      skills: {
        FaDatabase: "red",
        FaReact: "skyblue",
        FaJs: "yellow",
        FaNodeJs: "yellowgreen",
      },
    },
  ];

  return (
    <>
      {/* background */}
      <div className="bg-[#537D59] min-h-screen w-full mx-auto my-auto  place-items-center transition-all duration-300 select-none">
        <h1 className="text-5xl font-extrabold text-[#D2D0A0]  text-shadow-lg/30 text-center  p-10">
          PROJECTS
        </h1>

        {/* Card background */}

        <div className="flex flex-row  p-20  space-x-12 ">
          {ProjectData.map((item, index) => (
            <div
              key={index}
              className="border-1 bg-green-900   max-w-75 hover:shadow-2xl text-justify  "
            >
              <img
                src={item.imgPath}
                alt="AgroAi"
                className="object-contain border-[#D2D0A0] border-b-2   md:w-full"
              />
              <h1 className="text-2xl  font-extrabold text-center text-[#e5e393] text-shadow-lg/10 p-2">
                {item.title}
              </h1>
              {(Seemore ? item.description : item.description.slice(0, 1)).map(
                (point, idx) => (
                  <ul
                    key={idx}
                    className="font-bold text-[#D2D0A0] p-2 list-disc list-inside leading-relaxed flex-wrap text-justify"
                  >
                    <li>{point}</li>
                  </ul>
                )
              )}
              {item.description.length > 1 && (
                <button
                  className="text-amber-100   cursor-pointer mt-0 p-2 flex-wrap text-center font-bold hover:text-amber-300"
                  onClick={() => SetSeemore(!Seemore)}
                >
                  {Seemore ? "SeeLess" : ".... ReadMore"}
                </button>
              )}
              <span className="flex flex-row gap-2 my-auto p-2">
                {Object.entries(item.skills).map(([skill, clr]) => {
                  const IconComponent = IconMap[skill];
                  return IconComponent ? (
                    <IconComponent
                      key={skill}
                      style={{ fontSize: 28, color: clr }}
                    />
                  ) : null;
                })}
              </span>

              <div className=" flex flex-row justify-center mx-auto my-auto p-2 ml-2 gap-2">
                <button
                  id="1"
                  type="button"
                  className="text-amber-300  flex flex-row  rounded-4xl p-2.5 cursor-pointer font-bold  border-2"
                >
                  View Project
               <FaArrowRight style={{marginLeft:3, marginTop:6}}/>
                </button>
               {/* Now use the Arrow here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;



