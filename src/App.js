import React from "react";
import ScrolltoTop from "./components/Sections/ScrolltoTop";
// Screens

import { Route, Routes } from "react-router-dom";
import GC from "./screens/GC";
import Landing from "./screens/Landing";
import HallCouncil from "./screens/HallCouncil";
import Gallery from "./screens/Gallery";

export default function App() {
  return (
    <>
      <ScrolltoTop>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="gc" element={<GC />} />
          <Route path="hallcouncil" element={<HallCouncil />} />
          <Route path="gallery" element={<Gallery />} />
        </Routes>
      </ScrolltoTop>
    </>
  );
}
//git
