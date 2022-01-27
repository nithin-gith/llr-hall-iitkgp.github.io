

import React from 'react';
import warden3 from '../../assets/img/Wardens/Somjeet-Biswas.jpg'
import warden2 from '../../assets/img/Wardens/Sourav Mondal.jpg'
import warden1 from '../../assets/img/Wardens/Tapas Kumar Bandyopadhyay.jpg'
import Fade from 'react-reveal/Fade'
import '../../style/index.css'


const Team = () => {
  return (
    
    <div>
      <div id='team' className='text-center'>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title' style ={{marginRight:"auto",marginLeft:"auto"}}>
            <h2 className='text'>About the Wardens</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div id='row'>

            <div className="card-group">

              <Fade bottom>
                <div className="card">
                  <img src={warden1} className="card-img-top" alt="football"/>
                  <div className="card-body">
                    <h5 className="card-title"><a href ="http://www.iitkgp.ac.in/department/MT/faculty/mt-tapas" target="_blank" rel="noreferrer">Tapas Kumar Bandyopadhyay</a></h5>
                    <p className = "card-text text-muted">Associate Professor</p>
                    <p className = "card-text text-muted">Metallurgical And Materials Engineering</p>
                  </div>
                </div>
              </Fade>

              <Fade bottom>
                <div className="card">
                  <img src={warden2} className="card-img-top" alt="football"/>
                  <div className="card-body">
                    <h5 className="card-title"><a href="http://www.iitkgp.ac.in/department/CH/faculty/ch-smondal" target="_blank" rel="noreferrer">Sourav Mondal</a></h5>
                    <p className = "card-text text-muted">Assistant Professor Grade-i</p>
                    <p className = "card-text text-muted">Chemical Engineering</p>
                  </div>
                </div>
              </Fade> 
              
              <Fade bottom>
                <div className="card">
                  <img src={warden3} className="card-img-top" alt="football"/>
                  <div className="card-body">
                    <h5 className="card-title"><a href="http://www.iitkgp.ac.in/department/MT/faculty/mt-somjeetbiswas" target ="_blank" rel="noreferrer">Somjeet Biswas</a></h5>
                    <p className = "card-text text-muted">Associate Professor</p>
                    <p className = "card-text text-muted">Metallurgical And Materials Engineering</p>
                  </div>
                </div>
              </Fade>
              
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Team;

















