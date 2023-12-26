// import { Link } from '@mui/material';
import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
// import Card.css from './'
import "./HallData"
const Card = (props) => {
    return (        
<>
<div>
 <figure>
		<img src={props.img} alt="Tropical beach"  className="card-img-top" style={{height:"300px", width:"300px"}}/>
		<figcaption>
            <div className="caption-title">{props.position}</div>
            <div className="caption-full">
              <p>  <br /> </p>
            
              <p>Name <b>- </b>{props.name} </p>
              <p>Position <b>- </b>{props.position} </p>
              {/* <br/> */}
              {/* <p>{props.position}</p> */}
            <a href={props.fb} target="_blank" rel="noreferrer" style={{ paddingRight: "10px"}}><FaFacebookSquare style={{ backgroundColor: "white", height: "25px", width: "25px" }} /></a>
            <a href={props.linkedin} target="_blank" rel="noreferrer" style= {{paddingRight:"10px"}}><FaLinkedin style ={{backgroundColor:"white",height:"25px",width:"25px"}} /></a>
            </div>
        </figcaption>
	</figure>
    </div>
</>
    )


    };

const figure = document.querySelectorAll('figure');
const caption = document.querySelectorAll('figcaption');
const fullCaption = document.querySelectorAll('.caption-full');
const figureImage = document.querySelectorAll('figure img');

figure.forEach((fig, idx) => {
    fig.addEventListener('mouseover', () => {
        caption[idx].classList.add('expanded');
        fullCaption[idx].classList.add('visible');
        figureImage[idx].classList.add('image-filter');
    });
    
    fig.addEventListener('mouseout', () => {
       caption[idx].classList.remove('expanded');
       fullCaption[idx].classList.remove('visible');
       figureImage[idx].classList.remove('image-filter');
    });
});

export default Card;
