import React from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger) 
const Contact = () => {
  
  useGSAP(()=>{
    gsap.from("#contact-left", { 
      opacity: 0, 
      duration:1,
      y:100,
      scrollTrigger:{
          trigger:"#contact-left",
          // scroller:"body",
          start:"top 60%",
          // end:"center 20%",
         
          
      } 
  });

  gsap.from("#contact-right", { 
    opacity: 0, 
    duration:1,
    y:100,
    scrollTrigger:{
        trigger:"#contact-right",
        // scroller:"body",
        start:"top 60%",
        // end:"center 20%",
       
        
    } 
});
})

  return (
    <div name='contact' className="w-full px-5 my-28  sm:px-20 lg:px-40 pb-10 ">
      <h1 className=" text-2xl font-bold border-b-4 border-indigo-500 w-[89px]  mb-5">
        Contact
      </h1>
      <div className="contacts-container  flex justify-between lg:flex-row xs:flex-col  gap-10  ">
        <div id="contact-left" className="leftdiv ">
          <div className=" mb-4">
            <h1 className="font-bold text-lg text-indigo-500 mb-2">EMAIL </h1>
            <p>harshkosarkar@gmail.com </p>
          </div>
          <div>
            <h1 className="font-bold text-lg text-indigo-500 mb-2">Address </h1>
            <p>Nagpur, Maharashtra, India. </p>
          </div>
        </div>
        <form id="contact-right" action="https://getform.io/f/lbkmxnkb" method="POST">
          <div className="rightdiv flex  flex-col gap-5  ">
            <div className=" flex   gap-5">
              <input
                type="text"
                name="name"
                className="  outline-none w-full placeholder:text-white  py-1 px-2 rounded-md bg-[#352651] border border-[#b035b0]  "
                required
                placeholder="Name"
              />
              <input
                className=" w-full  outline-none placeholder:text-white py-1 px-2 rounded-md bg-[#352651] border border-[#b035b0]"
                type="email"
                name="email"
                required
                placeholder="Email"
              />
            </div>
            <textarea
              className="placeholder:text-white py-1 px-2 rounded-md  outline-none bg-[#352651] border border-[#b035b0]  "
              required
              name="text"
              rows="7"
              cols="60"
              placeholder=" Message here "
            ></textarea>
            <div className=" w-full flex justify-end">
              <button
                type="submit"
                className="  px-5 rounded-md py-1 bg-[#b035b0] hover:bg-[#951b95]"
              >
                Send{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
