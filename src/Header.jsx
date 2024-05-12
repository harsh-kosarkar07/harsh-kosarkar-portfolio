import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaChalkboard } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(true);
  };
  const handleCross = () => {
    setMenu(false);
  };
  return (
    <div className=" bg-[#222137] border-zinc-600 border-b text-white px-5 sm:px-20 lg:px-40 xs:py-4 sm:py-5 fixed w-full top-0 left-0 z-[999] ">
      <div className=" flex items-center justify-between">
        <Link
        to="home"
        smooth={true}
        duration={500}
        offset={-70}
        activeClass="active"
        className=" bg-[#141328]"
        onClick={handleCross}
        ><div className=" cursor-pointer text-2xl font-bold text-gray-200">
          Harsh<span className="text-[#B968C7]">Kosarkar </span>
        </div>
        </Link>
        <div className="menubar hidden  list-none lg:flex gap-10 text-xl font-semibold ">
          <li className=" cursor-pointer flex items-center gap-1 hover:underline">
            <span>
              <FaHome />
            </span>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li className=" cursor-pointer flex items-center gap-1 hover:underline">
            <span>
              <FaRegUser />
            </span>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              About
            </Link>
          </li>
          <li className=" cursor-pointer flex items-center gap-1 hover:underline">
            <span>
              <FaCode />
            </span>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Skills
            </Link>
          </li>
          <li className=" cursor-pointer flex items-center gap-1 hover:underline">
            <span>
              <FaChalkboard />
            </span>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Portfolio
            </Link>
          </li>
          <li className=" cursor-pointer flex items-center gap-1 hover:underline">
            <span>
              <FaRegUserCircle />
            </span>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
            >
              Contact
            </Link>
          </li>
        </div>
        <div className="menuicon  cursor-pointer lg:hidden">
          <GiHamburgerMenu size={25} onClick={handleMenu} />
        </div>
        {menu === true && (
          <div className=" hiddenmenu  absolute top-0 right-0 bg-[#161125] w-[60%] h-[100vh]  list-none flex flex-col gap-10  items-center justify-center text-xl font-semibold">
            <span className=" cursor-pointer absolute top-10 right-10">
              <FaXmark size={25} onClick={handleCross} />
            </span>
            <li
              className="bg-[#141328]  cursor-pointer flex items-center gap-1 hover:underline"
             
            >
              <span>
                <FaHome className="bg-[#141328]" />
              </span>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className=" bg-[#141328]"
                onClick={handleCross}
              >
                Home
              </Link>
            </li>
            <li
              className="bg-[#141328]  cursor-pointer flex items-center gap-1 hover:underline"
              
            >
              <span>
                <FaRegUser className="bg-[#141328]" />
              </span>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className=" bg-[#141328]"
                onClick={handleCross}
              >
                About
              </Link>
            </li>
            <li
              className="bg-[#141328]  cursor-pointer flex items-center gap-1 hover:underline"
            
            >
              <span>
                <FaCode className="bg-[#141328]"/>
              </span>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className=" bg-[#141328]"
                onClick={handleCross}
              >
                Skills
              </Link>
            </li>
            <li
              className="bg-[#141328]  cursor-pointer flex items-center gap-1 hover:underline"
             
            >
              <span>
                <FaChalkboard className="bg-[#141328]"/>
              </span>
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className=" bg-[#141328]"
                onClick={handleCross}
              >
                Portfolio
              </Link>
            </li>
            <li
              className="bg-[#141328]  cursor-pointer flex items-center gap-1 hover:underline"
             
            >
              <span>
                <FaRegUserCircle className="bg-[#141328]"/>
              </span>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className=" bg-[#141328]"
                onClick={handleCross}
              >
                Contact
              </Link>
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
