

import React from 'react';
import contact from '../../assets/img/contact-1.png'




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
                <img src={contact} className="card-img-top" alt="football"/>
    <div className="card-body">
      <h5 className="card-title"><a href ="http://www.iitkgp.ac.in/department/MT/faculty/mt-tapas" target="_blank">Tapas Kumar Bandyopadhyay</a></h5>
      <p className = "card-text text-muted">Associate Professor</p>
      <p className = "card-text text-muted">Metallurgical And Materials Engineering</p>
      {/* <p className="card-text">I like to Play as well  as Watch FootBall. I mainly follow the 'English Priemere League' , the favourite club being Manchester City,</p> */}
    </div>
    {/* <div className="card-footer">
      <small className="text-muted">My favourite player is the man in the pic, greatest of all time Cristiano Ronaldo</small>
    </div> */}
  </div>
  <div className="card">
    <img src={contact}  className="card-img-top" alt="chess"/>
    <div className="card-body">
      <h5 className="card-title"><a href="http://www.iitkgp.ac.in/department/CH/faculty/ch-smondal" target="_blank">Sourav Mondal</a></h5>
      <p className = "card-text text-muted">Assistant Professor Grade-i</p>
      <p className = "card-text text-muted">Chemical Engineering</p>
      {/* <p className="card-text">I have been playing chess from a very early age. I have also participated in various competitions and tournaments. Nowdays, I regularly play Chess</p> */}
    </div>
    {/* <div className="card-footer">
      <small className="text-muted">I follow and Admire the very famous Indian Grandmasters Vishy Anand and Vidit Gujrathi</small>
    </div> */}
  </div>
  <div className="card">
    <img src={contact} className="card-img-top" alt="politics"/>
    <div className="card-body">
      <h5 className="card-title"><a href="http://www.iitkgp.ac.in/department/MT/faculty/mt-somjeetbiswas" target ="_blank">Somjeet Biswas</a></h5>
      <p className = "card-text text-muted">Associate Professor</p>
      <p className = "card-text text-muted">Metallurgical And Materials Engineering</p>
      {/* <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis dicta animi repudiandae, quia quas doloremque molestias aliquam tempora ad ab distinctio commodi reprehenderit tempore molestiae blanditiis consectetur soluta atque. Consectetur.</p> */}
    </div>
    {/* <div className="card-footer">
      <small className="text-muted">P.S. : Not a Leftist or Rightist</small>
    </div> */}
  </div></div>

           

             
          </div>
        </div>
      </div>
    




    </div>
  )
}

export default Team;

















