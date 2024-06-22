import React from "react";
import myImg from "./assets/myImg.jpg";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger) 
const About = () => {
useGSAP(()=>{
  gsap.from("#left-sec2", { 
    opacity: 0, 
    duration:1,
    y:100,
    scrollTrigger:{
        trigger:"#left-sec2",
        // scroller:"body",
        start:"top 60%",
        // end:"center 20%",
        
        
    } 
});

  gsap.from("#right-sec2",{ 
    opacity: 0, 
    duration:1,
    y:100,
    scrollTrigger:{
        trigger:"#right-sec2",
        // scroller:"body",
        start:"top 60%",
        // end:"center 20%",
        
        
    } 
});
})
  return (
    <div name='about' className=" w-full px-5 sm:px-20 lg:px-40 pb-20">
      <h1 className=" text-2xl font-bold border-b-4 border-indigo-500 w-[71px] mb-7">
        About
      </h1>
      <div className=" w-full flex xs:flex-col md:flex-row gap-5">
        <div className="xs:w-full md:w-[50%]  ">
          <img id="left-sec2"
            src={myImg}
            alt=""
            className=" w-[500px] h-[400px] object-cover object-center rounded-md shadow-lg hover:shadow-[#6366F1]"
          />
        </div>
        <div id="right-sec2" className="xs:w-full md:w-[50%] text-justify ">
          <h1 className=" font-bold text-2xl text-indigo-500 mb-2">
            Hi there, I'm <span className=" text-[#B968C7]">Harsh</span>
          </h1>
          <div className=" text-justify">
            <p className="mb-3">
              Hi there! I'm a frontend engineer who has recently embarked on an
              exciting journey to learn web development. I've always been
              fascinated by how websites are designed and developed, and I
              decided to turn that curiosity into a career.
            </p>
            <p className="mb-3">
              Although there have been challenges along the way, I've enjoyed
              every step of the learning process. There's something incredibly
              satisfying about turning a blank page into a fully-functional
              website, and I love the feeling of pride that comes with writing
              clean, efficient code.
            </p>
            <p className="mb-3 ">
              In my free time, I'm always looking for new ways to improve my
              skills. I attend web development workshops, read articles and
              blogs, and experiment with different techniques and technologies.
              I'm excited to see where this journey will take me and can't wait
              to keep learning and growing as a frontend engineer.
            </p>
          </div>
          <div className=" flex gap-5 mt-4 cursor-pointer">
          <a href="https://github.com/harsh-kosarkar07" target="_blank"> <span className="hover:text-[#B968C7]">
              <SiGithub size={20} />
            </span></a>
            <a href="https://www.linkedin.com/in/harsh-kosarkar-52294a258/" target="_blank">
            <span className="hover:text-[#B968C7]">
              <BsLinkedin size={20}/>
            </span></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
