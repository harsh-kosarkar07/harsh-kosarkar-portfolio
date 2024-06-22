import React from "react";
import SkillsImg from "./assets/skills-img.png";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNetlify,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoGithub, IoLogoNpm } from "react-icons/io";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger) 
const Skills = () => {
  useGSAP(()=>{
    gsap.from("#left-sec3", { 
      opacity: 0, 
      duration:1,
      y:100,
      scrollTrigger:{
          trigger:"#left-sec3",
          // scroller:"body",
          start:"top 60%",
          // end:"center 20%",
          
          
      } 
  });
  gsap.from("#middle-sec3",{ 
    opacity: 0, 
    duration:1,
    y:100,
    scrollTrigger:{
        trigger:"#middle-sec3",
        // scroller:"body",
        start:"top 70%",
        // end:"center 20%",
      
        
    } 
});
  
    gsap.from("#right-sec3",{ 
      opacity: 0, 
      duration:1,
      y:100,
      scrollTrigger:{
          trigger:"#right-sec3",
          // scroller:"body",
          start:"top 60%",
          // end:"center 20%",
                    
      } 
  });
  })
  const data1 = [
    {
      icon: <SiHtml5 size={50} />,
      title: "Html5",
    },
    {
      icon: <SiCss3 size={50} />,
      title: "Css3",
    },
    {
      icon: <SiJavascript size={50} />,
      title: "Javascript",
    },
    {
      icon: <SiTailwindcss size={50} />,
      title: "TailwindCss",
    },
    {
      icon: <SiReact size={50} />,
      title: "ReactJs",
    },
  ];

  const data2 = [
    {
      icon: <VscVscode size={50} />,
      title: "Vs Code",
    },
    {
      icon: <FaGitAlt size={50} />,
      title: "Git",
    },
    {
      icon: <IoLogoGithub size={50} />,
      title: "Github",
    },
    {
      icon: <SiNetlify size={50} />,
      title: "Netlify",
    },
    {
      icon: <IoLogoNpm size={50} />,
      title: "Npm",
    },
  ];
  return (
    <div name='skills' className="w-full px-5 mt-10 sm:px-20 lg:px-40 pb-10">
      {" "}
      <h1 className=" text-2xl font-bold border-b-4 border-indigo-500 w-[58px]  mb-5">
        Skills
      </h1>
      <div className="main-div w-full flex justify-between xs:flex-col md:flex-row">
        <div className="part-1 xs:w-full md:w-[50%]  ">
          <div>
            <h1 className=" font-bold text-xl text-indigo-500 mb-2">
              Development <span className="text-[#e782f9]"> Skills</span>{" "}
            </h1>
            <div id="left-sec3" className="my-5 flex flex-wrap gap-5">
              
              {data1.map((ele, i) => (
                <div
                  key={i}
                  className="map-1 flex gap-2 flex-col border-2 border-[#e782f9]   w-[140px] h-[100px] p-3 items-center shadow-lg hover:shadow-[#d56ee7] "
                >
                  <p>
                    {ele.icon}
                    {/* <SiHtml5 size={50} /> */}
                  </p>
                  <p>{ele.title} </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1 className=" font-bold text-xl text-indigo-500 mb-2">
              Tools <span className="text-[#e782f9]"> I use </span>
            </h1>
         <div id="middle-sec3" className="my-5 flex flex-wrap gap-5">
         {  data2.map((ele2,i)=>(<div key={i} className="map-2 flex gap-2 flex-col border-2 border-[#e782f9]   w-[140px] h-[100px] p-3 items-center shadow-lg hover:shadow-[#d56ee7]">
              <span>
                {ele2.icon}
                
              </span>
              <p>{ele2.title} </p>
            </div>

         )) }
         </div>
          </div>
        </div>
        <div className=" part-2 xs:w-full md:w-[50%] flex justify-center items-center ">
          <img id="right-sec3" src={SkillsImg} alt="" className=" w-[500px] " />
        </div>
      </div>
    </div>
  );
};

export default Skills;
