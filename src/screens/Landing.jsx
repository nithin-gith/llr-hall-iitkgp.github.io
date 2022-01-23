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
      <Services />
      
      <Team />
      
      <Footer />
    </>
  );
}


