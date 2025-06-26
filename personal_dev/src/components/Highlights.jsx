import React, { useEffect, useRef, useState } from 'react'

const Highlights = () => {


  const data = {
    "Story": `From aspiring to serve the nation through the armed forces to becoming a finalist in national-level hackathons, my path has been anything but ordinary. After three unsuccessful NDA attempts and a setback in the Assam Rifles Bharti, I found myself at a crossroads—armed only with a love for mathematics and the determination to rebuild.

Choosing engineering as a new direction, I started from scratch with zero programming knowledge, facing financial hardships and self-doubt. But resilience became my fuel. I surrounded myself with like-minded peers, embraced failure as a stepping stone, and kept learning, bit by bit.

Eventually, I led my team to secure 2nd place in a national hackathon, proving that leadership and perseverance pay off. Alongside, I remained rooted in social service—joining NSS, attending village camps, and contributing to environmental efforts.

Now in my final year of Computer Engineering, I look back not with regret, but with pride—because every setback shaped the story I stand for today: discipline, growth, and unshakable grit.`
  }

  const Images = [
    "1.jpeg",
    "2.JPG",
    "3.jpeg",
    "4.jpeg",
    "7.JPG",
    "14.JPG",
    "5.jpeg",
    "6.JPG",
    "8.JPG",
    "9.jpeg",
    "10.jpeg",
    "11.JPG",
    "12.JPG",
    "13.JPG",
    "15.JPG",

  ];


  // const ScrollEvent = useRef(null);
  // const [Ishoverd, SetIsHoverd] = useState(false);

  // useEffect(() => {
  //   const ScrollBox = ScrollEvent.current;
  //   let ScrollInterval;

  //   const StartScrolling = () => {
  //     ScrollInterval = setInterval(() => {

  //       if (!Ishoverd && ScrollBox) {
  //         ScrollBox.scrollLeft += 1;

  //         if (ScrollBox.scrollLeft + ScrollBox.ClientWidth >= ScrollBox.scrollWidth) {
  //           ScrollBox.scrollLeft = 0;
  //         }

  //       }
  //     }, 20)
  //   };

    
  //     StartScrolling()
     

  //   return () => clearInterval(ScrollInterval);
  // }, [Ishoverd])


  // Infinite Scroll
  const ScrollEvent = useRef(null);
  const [isHovered, SetIsHoverd] = useState(false);

  useEffect(() => {
    const scrollBox = ScrollEvent.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered && scrollBox) {
          scrollBox.scrollLeft += 1;

          // Reset scroll when half the scroll width is reached
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
      <div className='w-full h-250 bg-[#D2D0A0]'>

        <h1 className='text-5xl font-extrabold text-[#537D59] text-shadow-lg/30 text-center p-10 mb-25 select-none'>HIGHLIGHTS</h1>

        {/*section 1 for the Insperational  Story  */}
        <div className=' w-full h-140 p-20  flex flex-row justify-between items-center space-x-4'>

          <section className='  w-1/2 h-full space-y-7 mt-20 '>
            <h1 className='text-green-700 font-extrabold font-mono text-4xl mx-auto mt-20  text-shadow-lg/50 select-none'>MY JOURNEY</h1>
            <p className='text-sm font-mono font-bold whitespace-wrap bg-fixed select-none'>{data.Story}</p>
          </section>



          {/* Section 2 -- Highlights images of my college journey */}
          <section className="w-1/2 h-160 mx-auto mt-12 p-6 bg-[#537D59]">

            <div ref={ScrollEvent}
              onMouseEnter={() => SetIsHoverd(true)}
              onMouseLeave={() => SetIsHoverd(false)}
              className=" border-40 flex space-x-9 overflow-hidden  p-7 mt-15 bg-[#D2D0A0] saturate-150 ">
              {[...Images,...Images].map((img, index) => (
                <img
                  key={index}

                  src={`assets/LightImages/${img}`}
                  alt={`Highlight ${index + 1}`}
                  className=" h-90 w-auto  object-cover shadow-md hover:scale-105 transition-transform duration-300 flex-shrink-0"
                />
              ))}
            </div>
          </section>



        </div>



      </div>
    </>
  )
}

export default Highlights
