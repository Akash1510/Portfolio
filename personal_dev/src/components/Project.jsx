import {
  FaJava,
  FaPython,
  FaReact,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaArrowRight,
} from "react-icons/fa";
import { BiLogoFlask } from "react-icons/bi";
import { FaFlutter } from "react-icons/fa6";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      link:"https://drive.google.com/file/d/1fG_DY08oEQFGIycjJtdS847u2Y-Lly5b"
    },
    {
      title: "EduMitra",
      imgPath: "/assets/Edumitra.png",
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
      link:"https://parental-engagement.vercel.app/"
    },
  ];

  return (
    <div className="bg-[#537D59] min-h-screen w-full mx-auto my-auto transition-all duration-300 select-none px-4 py-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#D2D0A0] text-shadow-lg/30 text-center mb-10">
        PROJECTS
      </h1>

      {/* Responsive flex-wrap for cards */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-8 items-center justify-center">
        {ProjectData.map((item, index) => (
          <div
            key={index}
            className="bg-green-900 text-justify hover:shadow-2xl max-w-sm w-full rounded-lg overflow-hidden"
          >
            <div className="w-full h-52 sm:h-64 md:h-72 overflow-hidden">
              <img
                src={item.imgPath}
                alt={item.title}
                className="w-full h-full object-cover border-b-2 border-[#D2D0A0]"
              />
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-center text-[#e5e393] text-shadow-lg/10 p-2">
              {item.title}
            </h1>
            {(Seemore ? item.description : item.description.slice(0, 1)).map(
              (point, idx) => (
                <ul
                  key={idx}
                  className="font-bold text-[#D2D0A0] px-4 list-disc list-inside leading-relaxed text-sm sm:text-base"
                >
                  <li>{point}</li>
                </ul>
              )
            )}
            {item.description.length > 1 && (
              <button
                className="text-amber-100 cursor-pointer p-2 text-center font-bold hover:text-amber-300"
                onClick={() => SetSeemore(!Seemore)}
              >
                {Seemore ? "SeeLess" : ".... ReadMore"}
              </button>
            )}
            <div className="flex flex-row gap-2 px-4 pb-2">
              {Object.entries(item.skills).map(([skill, clr]) => {
                const IconComponent = IconMap[skill];
                return IconComponent ? (
                  <IconComponent
                    key={skill}
                    style={{ fontSize: 28, color: clr }}
                  />
                ) : null;
              })}
            </div>
            <div className="flex justify-center p-2">
              <button
                id={`view-${index}`}
                type="button"
                className="text-amber-300 flex flex-row items-center rounded-full px-4 py-2 cursor-pointer font-bold border-2"
              >
                <Link to={item.link} target="_blank">
                View Project 
                </Link>
                <FaArrowRight className="ml-2 mt-0.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
