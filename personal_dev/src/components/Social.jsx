import React from "react";
import { Link } from "react-router-dom";

const Social = () => {
  const Social_data = [
    {
      link: "https://www.linkedin.com/in/akash-jadhav-5b8236259/",
      path: "src/assets/linkdin.png",
    },
    {
      link: "https://leetcode.com/u/Akash_Jadhav2003/",
      path: "src/assets/Leetcode.png",
    },
    {
      link: "https://github.com/Akash1510/",

      path: "src/assets/github.png",
    },
  ];

  return (
    <>
      <div className=" flex flex-col  bg-[#989653] py-7  fixed border-transparent top-1/3 rounded-full right-0 z-50 hover:shadow-2xl  mx-auto my-auto  ">

      {
        Social_data.map((item,index)=>(

        <Link key={index} to={item.link} className="p-3" target="_blank" rel="noopener noreferrer">
          <img src={item.path} alt={item.link} className="size-10 hover:shadow-2xl " />
        </Link>

        ))
      }
      </div>
    </>
  );
};

export default Social;
