import React from "react";
import { Link } from "react-router-dom";
import { albums } from "../assets/gallery";

const Album = () => (
  <div>
    {Object.entries(albums).map(([key, album]) => (
      <Link to={key}>
        <div>
          <img src={album.thumbnail} />
          {album.title}
        </div>
      </Link>
    ))}
  </div>
);

export default Album;
