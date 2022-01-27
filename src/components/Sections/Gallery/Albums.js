import React, { Fragment } from "react";
import "./Gallery.css";
import FbImageLibrary from "react-facebook-photo-grid";
import { Album1 } from "./Album1";

const AlbumList = () => {
  return (
    <Fragment>
      <div className="container-1">
        <div className="card-1">
          <div className="head">Memories</div>
          <FbImageLibrary images={Album1} />
        </div>

        <div className="card-1">
          <div className="head">Memories</div>
          <FbImageLibrary images={Album1} maxwidth="400" />
        </div>
        <div className="card-1">
          <div className="head">Memories</div>
          <FbImageLibrary images={Album1} />
        </div>
        <div className="card-1">
          <div className="head">Memories</div>
          <FbImageLibrary images={Album1} />
        </div>
        <div className="card-1">
          <div className="head">Memories</div>
          <FbImageLibrary images={Album1} />
        </div>
        <div className="card-1">
          <div className="head">Memories</div>
          <FbImageLibrary images={Album1} />
        </div>
        <div className="card-1">
          <div className="head">Memories</div>
          <FbImageLibrary images={Album1} />
        </div>
        <div className="card-1">
          <div className="head">Memories</div>
          <FbImageLibrary images={Album1} />
        </div>
        <div className="card-1">
          <div className="head">Memories</div>
          <FbImageLibrary images={Album1} />
        </div>
        <div className="card-1">
          <div className="head">Memories</div>
          <FbImageLibrary images={Album1} />
        </div>
        <div className="card-1">
          <div className="head">Memories</div>
          <FbImageLibrary images={Album1} />
        </div>
        <div className="card-1">
          <div className="head">Memories</div>
          <FbImageLibrary images={Album1} />
        </div>
      </div>
    </Fragment>
  );
};
export default AlbumList;
