// import { Link } from '@mui/material';
import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
// import Card.css from './'
import "./HallData"
const Card = (props) => {
    return (        
<>
{/* <div>
 <figure>
    <div className="cardinfo">

		<img src={props.img} alt="Tropical beach"  className="card-img-top" style={{height:"300px", maxWidth:"270px"}}/>
		<figcaption>
            <div className="caption-title">{props.position}</div>
            <div className="caption-full">
              <p>  <br /> <br /></p>
            
              <p>Name <b>- </b>{props.name} </p>
              <p>Position <b>- </b>{props.position} </p>
            <a href={props.fb} target="_blank" rel="noreferrer" style={{ paddingRight: "10px"}}><FaFacebookSquare style={{ backgroundColor: "white", height: "25px", width: "25px" }} /></a>
            <a href={props.linkedin} target="_blank" rel="noreferrer" style= {{paddingRight:"10px"}}><FaLinkedin style ={{backgroundColor:"white",height:"25px",width:"25px"}} /></a>
            </div>
        </figcaption>
    </div>
	</figure>
    </div> */}
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

</>
    )


    };

// const figure = document.querySelectorAll('figure');
// const caption = document.querySelectorAll('figcaption');
// const fullCaption = document.querySelectorAll('.caption-full');
// const figureImage = document.querySelectorAll('figure img');
// const captiontitle = document.querySelectorAll('.caption-title');


// figure.forEach((fig, idx) => {
//     fig.addEventListener('mouseover', () => {
//         caption[idx].classList.add('expanded');
//         captiontitle[idx].classList.add('hidetitle')
//         fullCaption[idx].classList.add('visible');
//         figureImage[idx].classList.add('image-filter');
//     });
    
//     fig.addEventListener('mouseout', () => {
//         caption[idx].classList.remove('expanded');
//         captiontitle[idx].classList.remove('hidetitle')
//         fullCaption[idx].classList.remove('visible');
//         figureImage[idx].classList.remove('image-filter');
//     });
// });

export default Card;
