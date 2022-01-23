import React from "react";
import { Helmet } from "react-helmet";
// Screens

import { Route, Routes } from "react-router-dom";
import GC from "./screens/GC";
import Landing from "./screens/Landing";
import HallCouncil from "./screens/HallCouncil";

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="gc" element={<GC />} />
        <Route path="hallcouncil" element={<HallCouncil />} />
      </Routes>
    </>
  );
}
//git
