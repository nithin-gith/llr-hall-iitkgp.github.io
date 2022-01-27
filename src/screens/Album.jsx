import React from "react";
import { Link } from "react-router-dom";
import { albums } from "../assets/gallery";

import Card from "@mui/material/Card"
import { CardMedia, Grid, Typography ,CardContent} from "@mui/material";
const Album = () => (
  <>
      <div className="head">
          <h2 className="text">Gallery</h2>
        </div>
    <Grid container columnGap={2} justifyContent="center">
    {Object.entries(albums).map(([key, album]) => (
      <Link to={key}>
 
     <Grid item style ={{paddingBottom:"20px"}}>
      <Card  xs={12} sm={6} md={4} sx={{ maxWidth: 445 }} >
            <CardMedia  component="img" image={album.thumbnail}
              style={{
<<<<<<< HEAD
                marginTop : '10%',
                height : '20vw',
=======
                
               height : '20vw',
>>>>>>> cd50f0b78a2bbf032ba84d287fb42f7ac40994c4
                width: '100%',
                minWidth :'200'
              }}
          />
         <CardContent><Typography align="center"><h4>{album.title}</h4></Typography></CardContent> 
          </Card>
            
         </Grid>   
      </Link>
    ))}
      
      </Grid>
  </>
);

export default Album;
