// import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
  return (
    <>
      <nav className="flex flex-row justify-between items-baseline bg-[#D2D0A0] max-h-full shadow-2xs p-4 w-full  ">
        <div className="flex flex-col-reverse ">
          {/* Add the Logo */}
          <div className='left-0 top-0 size-20 w-50 bg-[#537D5D] rounded-b-full'></div>
          <div className='left-0 top-0 size-15 w-100 bg-[#537D5D]'></div>
          <div className='left-0 top-0 size-10 w-150 bg-[#537D5D]'></div>
        </div>

        <div className='text-3xl font-mono'>
          {/* Add the list of Routes Like Home and extrea
           */}
          <ul className="flex flex-row justify-center gap-4 p-2 font-semibold space-x-4">
            <li className="hover:bg-[#537D5D] rounded-2xl duration-150 ease-in-out">
              <HashLink className="p-3" smooth to="/#">
                HOME
              </HashLink>
            </li>
            <li className="hover:bg-[#537D5D] rounded-2xl duration-150 ease-in-out ">
              <HashLink className="p-3" smooth to="/#highlights">
                ABOUT
              </HashLink>
            </li>
            <li className="hover:bg-[#537D5D] rounded-2xl duration-150 ease-in-out ">
              <HashLink className="p-3"  smooth to="/#skills">
                SKILLS
              </HashLink>
            </li>
            <li className="hover:bg-[#537D5D] rounded-2xl duration-150 ease-in-out">
              <HashLink className="p-3" smooth to="/#projects">
                PROJECTS
              </HashLink>
            </li>
          </ul>
        </div>

       <div className="flex flex-row justify-center sm:justify-end mr-4 sm:mr-10 md:mr-20 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold">
  <p className="bg-[#537d5d] hover:bg-green-900 rounded-full px-4 py-2 text-center font-mono">
    <HashLink className="block" smooth to="/#contact">
      Contact Me
    </HashLink>
  </p>
</div>

      </nav>





      
    </>
  );
};
export default Navbar;




