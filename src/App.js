import React from "react";
import ScrolltoTop from "./components/Sections/ScrolltoTop";
// Screens

import { Route, Routes } from "react-router-dom";
import GC from "./screens/GC";
import Landing from "./screens/Landing";
import HallCouncil from "./screens/HallCouncil";
import Gallery from "./screens/Gallery";
import Album from "./screens/Album";
import TopNavbar from "./components/Nav/TopNavbar";
import Footer from "./components/Sections/Footer";
import OurTeam from "./components/Sections/OurTeam";
import HallOfFame from "./screens/HallOfFame";

export default function App() {
  return (
    <>
      <ScrolltoTop>
        <TopNavbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="gc" element={<GC />} />
          <Route path="hallcouncil" element={<HallCouncil />} />
          <Route path="gallery" exact element={<Album />} />
          <Route path="gallery/:album" element={<Gallery />} />

          {/*<Route path="halloffame" exact element={<HallOfFame />}></Route>*/}

          <Route path="ourteam" element={<OurTeam />} />
        </Routes>
        <Footer />
      </ScrolltoTop>
    </>
  );
}
//git
