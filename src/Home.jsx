// bg-[#382C5E]

import React, {  } from "react";
import CoderImg from "./assets/CoderImg.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
// gsap.registerPlugin(ScrollTrigger) 

const Home = () => {
useGSAP(()=>{
  
  gsap.from("#left-sec", { 
    opacity: 0, 
    x: -100, 
    delay:0.4,
    duration: 1 
});

  gsap.from("#right-sec",{ 
    opacity: 0, 
    x: 100, 
    delay:0.4,
    duration: 1 
});
})

  return (
    <div>
      {/* h-[90vh] */}
      {/* lg:py-28 */}
      <div name='home' className=" mb-16 mt-20 w-full xs:py-0 sm:py-28 px-5 sm:px-20 lg:px-40  bg-[#222137]  flex gap-5  sm:flex-row xs:flex-col justify-between items-center text-white">
        <div id="left-sec" className=" xs:w-full sm:w-[60%] justify-center flex flex-col gap-8 ">
          <div className="  leading-[0.8] xs:text-[100px]  sm:text-[150px]  lg:text-[200px] font-bold ">
            <div>HE</div>
            <div>LLO,</div>
          </div>
          <div className=" text-3xl font-bold">
            I'M <span className=" text-[#B968C7] ">HARSH KOSARKAR </span>{" "}
          </div>
        </div>
        <div className=" sm:w-[40%] ">
          <img id="right-sec"  className=" w-full " src={CoderImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
