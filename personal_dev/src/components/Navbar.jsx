import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-col sm:flex-row justify-between items-center sm:items-baseline bg-[#D2D0A0] shadow-2xs p-4 w-full z-50">
        
        {/* Logo Section */}
        <div className="flex flex-col-reverse items-start w-full sm:w-auto">
          <div className="size-20 w-25 bg-[#537D5D] rounded-b-full"></div>
          <div className="size-14 w-50 bg-[#537D5D]"></div>
          <div className="size-10 w-100 bg-[#537D5D]"></div>
        </div>

        {/* Mobile menu toggle */}
        <div className="sm:hidden w-full flex justify-end mt-2">
          <button
            className="text-green-900 text-2xl font-bold px-2 py-1"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col sm:flex sm:flex-row justify-center gap-4 font-semibold text-2xl font-mono w-full sm:w-auto`}
        >
          <ul className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-2 sm:gap-4 p-2 text-xl sm:text-2xl font-semibold">
            <li className="hover:bg-[#537D5D] rounded-2xl duration-150 ease-in-out">
              <HashLink className="p-3 block" smooth to="/#">
                HOME
              </HashLink>
            </li>
            <li className="hover:bg-[#537D5D] rounded-2xl duration-150 ease-in-out">
              <HashLink className="p-3 block" smooth to="/#highlights">
                ABOUT
              </HashLink>
            </li>
            <li className="hover:bg-[#537D5D] rounded-2xl duration-150 ease-in-out">
              <HashLink className="p-3 block" smooth to="/#skills">
                SKILLS
              </HashLink>
            </li>
            <li className="hover:bg-[#537D5D] rounded-2xl duration-150 ease-in-out">
              <HashLink className="p-3 block" smooth to="/#projects">
                PROJECTS
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Contact Me Button */}
        <div className="mt-4 sm:mt-0 flex justify-center sm:justify-end w-full sm:w-auto text-white text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-bold">
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
