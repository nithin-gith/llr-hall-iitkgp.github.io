import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";

import Team from "../components/Sections/Team";

import Footer from "../components/Sections/Footer"
import About from "../components/Sections/About";

export default function Landing() {
  return (
    <>
      <TopNavbar /> 
      <Header />
      <About/>
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
      <Footer />
    </>
  );
}


