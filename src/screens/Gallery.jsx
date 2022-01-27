import React from "react";

import Gallery from "react-photo-gallery";
import { albums } from "../assets/gallery";
import { useParams } from "react-router-dom";

/* popout the browser and maximize to see more rows! -> */
const GalleryPage = () => {
  const { album } = useParams();
  const photos =
    album === "all"
      ? Object.entries(albums).reduce(
          (prev, curr) => prev.concat(curr[1].photos),
          []
        )
      : albums[album]?.photos;
  return (
    <>
      <div className="head">
        <h2 className="text">{albums[album].title}</h2>
      </div>
      <Gallery photos={photos} />
    </>
  );
};

export default GalleryPage;
