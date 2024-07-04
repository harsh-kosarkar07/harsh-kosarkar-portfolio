import React from "react";
import Project1 from "./assets/project-I.png";
import Project2 from "./assets/project-II.png";
import Project3 from "./assets/project-III.png";
import Project4 from "./assets/project-IV.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger) 
const Portfolio = () => {

  useGSAP(()=>{
  //   gsap.from("#cards", { 
  //     opacity: 0, 
  //     duration:1,
  //     y:100,
  //     scrollTrigger:{
  //         trigger:"#cards",
  //         // scroller:"body",
  //         start:"top 60%",
  //         // end:"center 20%",
  //     } 
  // });
  
  gsap.from("#card", { 
    opacity: 0, 
    duration:1,
    stagger:.4,
    y:100,
    scrollTrigger:{
        trigger:"#card",
        // scroller:"body",
        start:"top 60%",
        // end:"center 20%",
    } 
});

  })

  const works = [
    {
      Img:Project1,
      title:"Todo List App",
      desc:"This is Todo list app using CRUD operations where we can create, read, update and delete our tasks.",
      demo:"https://todolist-appusingreactjs.netlify.app/",
      code:"https://github.com/harsh-kosarkar07/React.js-ToDo-List-App",
    },
    {
      Img:Project2,
      title:"Ochi Presentations",
      desc:"This project is based on animations which creates eye-opening presentations.",
      demo:"https://ochi-animations.netlify.app/",
      code:"https://github.com/harsh-kosarkar07/Ochi-react-Animation-Website",
    },
    {
      Img:Project3,
      title:"TastyBites Restro",
      desc:"This is Restaurant project which contains different sections and awesome menu items.",
      demo:"https://tasty-bites-restro.netlify.app/",
      code:"https://github.com/harsh-kosarkar07/Restaurant-Website-TastyBites-",
    },
    {
      Img:Project4,
      title:"My Portfolio",
      desc:"This is my personal portfolio where is tried to describe all about me. I given my best to  create this.",
      demo:"#",
      code:"https://github.com/harsh-kosarkar07/harsh-kosarkar-portfolio",
    },
  ]
  return (
    <div name='portfolio' className="w-full  px-5 mt-10 sm:px-20 lg:px-40 pb-10">
      <h1 className=" text-2xl font-bold border-b-4 border-indigo-500 w-[200px]  mb-5">
        My Recent <span className="text-[#e782f9]">Works</span>
      </h1>
      
      <div id="cards" className="  flex justify-center flex-wrap gap-5  ">
      {
        works.map((el,i)=>(
          <div key={i} id="card" className=" border-2 w-[300px] h-[320px] p-3 rounded-md  border-[#e782f9] shadow-md hover:shadow-[#d56ee7]">
        <img
          src={el.Img}
          alt="projectImg"
          className=" object-center  object-cover"
        />
        <div className=" flex flex-col gap-2 mt-3">
          <h1 className=" font-semibold text-xl">{el.title}</h1>
          <p>{el.desc}</p>
          <div className=" flex gap-5">
            <a href={el.demo} target="_blank">
              <button className=" bg-[#C770C7] hover:bg-[#b035b0] rounded-md px-2 py-1">
                Demo
              </button>
            </a>
            <a href={el.code} target="_blank">
              <button className=" bg-[#C770C7]  hover:bg-[#b035b0] rounded-md px-2 py-1">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
        ))
      }</div>
    </div>
  );
};

export default Portfolio;
