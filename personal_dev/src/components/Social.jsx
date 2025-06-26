import React from "react";
import { Link } from "react-router-dom";

const Social = () => {
  const Social_data = [
    {
      link: "https://www.linkedin.com/in/akash-jadhav-5b8236259/",
      path: "/assets/linkdin.png",
    },
    {
      link: "https://leetcode.com/u/Akash_Jadhav2003/",
      path: "/assets/Leetcode.png",
    },
    {
      link: "https://github.com/Akash1510/",
      path: "/assets/GitHub.png",
    },
  ];

  return (
    <>
      <div className="hidden sm:flex flex-col bg-[#989653] py-7 fixed border-transparent top-1/3 rounded-full right-0 z-50 hover:shadow-2xl">
        {Social_data.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="p-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={item.path}
              alt={item.link}
              className="size-10 hover:shadow-2xl"
            />
          </Link>
        ))}
      </div>

      {/* Optional: Display at bottom center on mobile */}
      <div className="flex sm:hidden flex-row justify-center gap-5 bg-[#989653] py-2 fixed bottom-0 left-0 right-0 z-50">
        {Social_data.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={item.path}
              alt={item.link}
              className="size-8 hover:shadow-xl"
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Social;
