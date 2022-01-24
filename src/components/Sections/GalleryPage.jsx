import React from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./Photos";

/* popout the browser and maximize to see more rows! -> */
const BasicRows = () => <Gallery photos={photos} />;

export default BasicRows;