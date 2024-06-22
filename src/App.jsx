import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
 
const App = () => {
 
  return (
    <div className=" overflow-x-hidden bg-[#222137] text-white">
      <Header />
      <Home />
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
