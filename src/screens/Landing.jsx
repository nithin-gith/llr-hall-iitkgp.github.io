import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";

import Team from "../components/Sections/Team";

import Footer from "../components/Sections/Footer"
import About from "../components/Sections/About";
import "../style/index.css";

export default function Landing() {
  return (
    <>
      <TopNavbar /> 
      <Header />
      <About/>
      <div className="section-title" style={{marginBottom:"0px"}} ><h2 className="text" >Recent Events</h2></div>
      <Services 
          eventname= "Kite Festival" 
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                    labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et 
                    ea rebum."/>
      <Services 
          eventname= "Award Ceremony" 
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                    labore et dolore magna aliquyam erat, seddiam voluptua. At vero eos et accusam et justo duo dolores et 
                    ea rebum."
          />
      <Team />
      {/* <Footer /> */}
    </>
  );
}


