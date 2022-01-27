import { Link } from '@mui/material';
import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

const Card = (props) => {
    return (

    
  <div class="col-sm-4-md-4"style ={{padding:"10px"}}>
    
<div className="card" style ={{alignItems:"center"}} >
                <img src={props.img} className="card-img-top" alt="football" style={{height:"300px", width:"300px"}}/>
    <div className="card-body" style ={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <h5 className="card-title">{props.name}</h5>
      <p className = "card-text text-muted" style ={{paddingBottom:"10px"}}>{props.position}</p>
      <div style ={{display:"flex"}}>
      <a href={props.fb} target="_blank" rel="noreferrer" style={{ paddingRight: "10px" }}><FaFacebookSquare style={{ backgroundColor: "white", height: "25px", width: "25px" }} /></a>
      <a href={props.linkedin} target="_blank" rel="noreferrer" style= {{paddingRight:"10px"}}><FaLinkedin style ={{backgroundColor:"white",height:"25px",width:"25px"}} /></a>
      </div>
      
    </div>
  </div>
             
              


</div>

    )
        
        
        
        
        
        
};

export default Card;
