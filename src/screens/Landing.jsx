import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Services1 from "../components/Sections/Services1";
import Services2 from "../components/Sections/Services2"

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
          eventname= " Inter Wing Cricket '23" 
          content="Late Prof. Joydeep Bhattacharya Inter Wing Cricket Tournament was successfully organized in our Hall.The event saw great enthusiasm and participation from all the boarders.
          We wish to continue this legacy and have many more exciting events like this in the future.Congratulations to all the winners.   
          "/>
      <Services1
      eventname = "Republic Day '23"
      content="The National flag was unfurled and a series of enriching and melodious cultural programmes were conducted to induce a sense of patriotism in all the boarders on the 74th Republic Day."
      />
               <Services2
          eventname= "Illumination '22" 
          content="On the auspicious occasion of Diwali, as a part of our culture we celebrated this eve with great joy and made the Illumination as the representation of our unity and strength."
          />
      <Team />
      {/* <Footer /> */}
    </>
  );
}


