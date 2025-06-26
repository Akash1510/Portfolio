import React, { useEffect, useRef, useState } from 'react'

const Highlights = () => {
  const data = {
    "Story": `From aspiring to serve the nation through the armed forces to becoming a finalist in national-level hackathons, my path has been anything but ordinary. After three unsuccessful NDA attempts and a setback in the Assam Rifles Bharti, I found myself at a crossroads—armed only with a love for mathematics and the determination to rebuild.

Choosing engineering as a new direction, I started from scratch with zero programming knowledge, facing financial hardships and self-doubt. But resilience became my fuel. I surrounded myself with like-minded peers, embraced failure as a stepping stone, and kept learning, bit by bit.

Eventually, I led my team to secure 2nd place in a national hackathon, proving that leadership and perseverance pay off. Alongside, I remained rooted in social service—joining NSS, attending village camps, and contributing to environmental efforts.

Now in my final year of Computer Engineering, I look back not with regret, but with pride—because every setback shaped the story I stand for today: discipline, growth, and unshakable grit.`
  }

  const Images = [
    "1.jpeg", "2.JPG", "3.jpeg", "4.jpeg", "7.JPG", "14.JPG",
    "5.jpeg", "6.JPG", "8.JPG", "9.jpeg", "10.jpeg", "11.JPG",
    "12.JPG", "13.JPG", "15.JPG",
  ];

  const ScrollEvent = useRef(null);
  const [isHovered, SetIsHoverd] = useState(false);

  useEffect(() => {
    const scrollBox = ScrollEvent.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered && scrollBox) {
          scrollBox.scrollLeft += 1;
          if (scrollBox.scrollLeft >= scrollBox.scrollWidth / 2) {
            scrollBox.scrollLeft = 0;
          }
        }
      }, 10);
    };

    startScroll();
    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  return (
    <>
      <div className="w-full bg-[#D2D0A0] py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#537D59] text-shadow-lg/30 text-center mb-10 select-none">
          HIGHLIGHTS
        </h1>

        {/* Main container: Responsive layout */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 px-4 md:px-10">
          
          {/* Journey Text */}
          <section className="w-full lg:w-1/2 space-y-6 mt-6">
            <h1 className="text-2xl sm:text-3xl text-green-700 font-extrabold font-mono text-center lg:text-left select-none">
              MY JOURNEY
            </h1>
            <p className="text-xs sm:text-sm md:text-base font-mono font-bold whitespace-wrap select-none text-justify">
              {data.Story}
            </p>
          </section>

          {/* Image Marquee */}
          <section className="w-full lg:w-1/2 mt-6 p-4 bg-[#537D59]">
            <div
              ref={ScrollEvent}
              onMouseEnter={() => SetIsHoverd(true)}
              onMouseLeave={() => SetIsHoverd(false)}
              className="flex space-x-5 overflow-hidden p-5 bg-[#D2D0A0] saturate-150 border-20  rounded-md"
            >
              {[...Images, ...Images].map((img, index) => (
                <img
                  key={index}
                  src={`assets/LightImages/${img}`}
                  alt={`Highlight ${index + 1}`}
                  className="h-40 sm:h-52 md:h-60 object-cover shadow-md hover:scale-105 transition-transform duration-300 flex-shrink-0 border-2 border-[#537D59] rounded-md"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Highlights;
