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
          eventname= " Kite Festival " 
          content="Flying kites is an unequivocal manifestation of freedom. All the boarders on the auspicious occasion of Makar Sankranti, came together in the ongoing unprecedented times to celebrate the festival of kites and get freed from all kinds of stress and rejuvenate themselves with full of good spirit and energy.
          "/>
      <Services 
          eventname= " Republic Day " 
          content="The National flag was unfurled and a series of enriching and melodious cultural programmes were conducted to induce a sense of patriotism in all the boarders on the 73rd Republic Day."
          />
      <Team />
      {/* <Footer /> */}
    </>
  );
}


