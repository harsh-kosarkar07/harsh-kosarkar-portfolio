import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { SiGithub } from "react-icons/si";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    
    <div className="w-full  py-16  bg-[#141328]  px-5   sm:px-20 lg:px-40 pb-10 ">
      <div className=" pb-10  bg-[#141328] flex justify-between">
        <div className="bg-[#141328]">
          <h1 className="bg-[#141328] mb-1 font-semibold text-lg">Go to </h1>
          <div >
            <p className="bg-[#141328] cursor-pointer hover:text-[#951b95] "><Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className=" bg-[#141328]"
              >Home</Link></p>
            <p className="cursor-pointer bg-[#141328] hover:text-[#951b95]"><Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className=" bg-[#141328]">About</Link> </p>
            <p className="cursor-pointer bg-[#141328] hover:text-[#951b95]"><Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className=" bg-[#141328]">Skills</Link></p>
          </div>
        </div>
        <div className="bg-[#141328]">
          <h1 className=" pb-1 bg-[#141328] font-semibold text-lg">Sections  </h1>
          <div >
            <p className="bg-[#141328] cursor-pointer hover:text-[#951b95] "><Link
                to="portfolio"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className=" bg-[#141328]">Portfolio</Link> </p>
            <p className="cursor-pointer bg-[#141328] hover:text-[#951b95]"><Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className=" bg-[#141328]">Contact</Link></p>
          </div>
        </div>
        
        <div className="bg-[#141328]">
          <h1 className="bg-[#141328] mb-3 font-semibold text-lg">Follow  </h1>
          <div className="bg-[#141328] flex gap-3  cursor-pointer">
           <a href="https://github.com/harsh-kosarkar07" target="_blank"> <span className="hover:text-[#B968C7]">
              <SiGithub size={20} />
            </span></a>
           <a href="https://www.linkedin.com/in/harsh-kosarkar-52294a258/" target="_blank"> <span className="hover:text-[#B968C7]">
              <BsLinkedin size={20}/>
            </span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
