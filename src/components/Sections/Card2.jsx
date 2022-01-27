import { Link } from '@mui/material';
import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

const Card = (props) => {
    return (

    
  <div class="col-md-3">
    
<div className="card">
                <img src={props.img} className="card-img-top" alt="football" style={{height:"300px", width:"300px"}}/>
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className = "card-text text-muted">{props.position}</p>
     
      <a href={props.fb} target="_blank" rel="noreferrer" style={{ paddingRight: "10px" }}><FaFacebookSquare style={{ backgroundColor: "white", height: "25px", width: "25px" }} /></a>
      <a href={props.linkedin} target="_blank" rel="noreferrer" style= {{paddingRight:"10px"}}><FaLinkedin style ={{backgroundColor:"white",height:"25px",width:"25px"}} /></a>
    </div>
  </div>
             
              


</div>

    )
        
        
        
        
        
        
};

export default Card;
