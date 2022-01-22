

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';





const Team = () => {
  return (
    
    <div>
      <div id='team' className='text-center'>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title'>
            <h2 className='text'>Meet the Warden</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div id='row'>

<div className="card-group">
  <div className="card">
    <img src="../../assets/img/contact-1.png" className="card-img-top" alt="football"/>
    <div className="card-body">
      <h5 className="card-title">FootBall</h5>
      <p className="card-text">I like to Play as well  as Watch FootBall. I mainly follow the 'English Priemere League' , the favourite club being Manchester City,</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">My favourite player is the man in the pic, greatest of all time Cristiano Ronaldo</small>
    </div>
  </div>
  <div className="card">
    <img src="images/chess.jpg" className="card-img-top" alt="chess"/>
    <div className="card-body">
      <h5 className="card-title">Chess</h5>
      <p className="card-text">I have been playing chess from a very early age. I have also participated in various competitions and tournaments. Nowdays, I regularly play Chess</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">I follow and Admire the very famous Indian Grandmasters Vishy Anand and Vidit Gujrathi</small>
    </div>
  </div>
  <div className="card">
    <img src="images/politics.jpg"className="card-img-top" alt="politics"/>
    <div className="card-body">
      <h5 className="card-title">Politics and Current Affairs</h5>
      <p className="card-text">Very much interested in Day to Day happenings in the world and Follows all major Political Events happening around. </p>
    </div>
    <div className="card-footer">
      <small className="text-muted">P.S. : Not a Leftist or Rightist</small>
    </div>
  </div></div>

           

             
          </div>
        </div>
      </div>
    




    </div>
  )
}

export default Team;

















