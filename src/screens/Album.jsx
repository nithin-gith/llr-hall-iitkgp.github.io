import React from "react";
import { Link } from "react-router-dom";
import { albums } from "../assets/gallery";

import "../style/album.css";

import Card from "@mui/material/Card";
import { CardMedia, Grid, Typography, CardContent, CardActionArea } from "@mui/material";
import { height, maxHeight, minHeight, width } from "@mui/system";
const Album = () => (
  <>
    <div className="head">
      <h2 className="text">Gallery</h2>
    </div>
    <Grid container columnGap={2} justifyContent="center">
      {Object.entries(albums).map(([key, album]) => (
        <Link to={key}>
          <Grid
            item
            style={{
              width: "100%",
            }}
          >
            <Card
              xs={12}
              sm={6}
              md={4}
              sx={{
                maxWidth: 475,
              }}
            >
             <CardActionArea><CardMedia
                component="img"
                image={album.thumbnail}
                style={{
                  marginTop: "2%",
                }}
                classes={{ root: "album-thumbnail" }}
              /></CardActionArea> 
              <CardContent>
                <div className="card-title" align="center">
                  {album.title}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Link>
      ))}
    </Grid>
  </>
);

export default Album;
