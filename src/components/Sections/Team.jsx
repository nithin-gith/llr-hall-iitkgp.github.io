

import React from 'react';
import warden3 from '../../assets/img/Wardens/Somjeet-Biswas.jpg'
import warden2 from '../../assets/img/Wardens/Sourav Mondal.jpg'
import warden1 from '../../assets/img/Wardens/Tapas Kumar Bandyopadhyay.jpg'
import Fade from 'react-reveal/Fade'
import '../../style/index.css'


const Team = () => {
  const cardStyle = {
    marginLeft: '25px',
    marginRight: '25px',
    paddingLeft: '5px',
    paddingRight: '5px',
    border: '1px solid rgba(0,0,0,.125)',
  }
  return (
    
    <div>
      <div id='team' className='text-center'>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title' style ={{marginRight:"auto",marginLeft:"auto"}}>
            <h2 className='text'>Wardens</h2>
          </div>
          <div id='row'>

            <div className="card-group">

              <Fade bottom>
                <div className="card" style={cardStyle}>
                  <img src={warden1} className="card-img-top" alt="football"/>
                  <div className="card-body">
                    <h5 className="card-title"><a href ="http://www.iitkgp.ac.in/department/MT/faculty/mt-tapas" target="_blank" rel="noreferrer">Dr. Tapas Kumar Bandyopadhyay</a></h5>
                    <p className = "card-text text-muted"><strong>Warden</strong></p>
                    <p className = "card-text text-muted">Associate Professor</p>
                    <p className = "card-text text-muted">Metallurgical And Materials Engineering</p>
                  </div>
                </div>
              </Fade>

              <Fade bottom>
                <div className="card" style={cardStyle}>
                  <img src={warden2} className="card-img-top" alt="football"/>
                  <div className="card-body">
                    <h5 className="card-title"><a href="http://www.iitkgp.ac.in/department/CH/faculty/ch-smondal" target="_blank" rel="noreferrer">Dr. Sourav Mondal</a></h5>
                    <p className = "card-text text-muted"><strong>Assistant Warden</strong></p>
                    <p className = "card-text text-muted">Assistant Professor Grade-I</p>
                    <p className = "card-text text-muted">Chemical Engineering</p>
                  </div>
                </div>
              </Fade> 
              
              <Fade bottom>
                <div className="card" style={cardStyle}>
                  <img src={warden3} className="card-img-top" alt="football"/>
                  <div className="card-body">
                    <h5 className="card-title"><a href="http://www.iitkgp.ac.in/department/MT/faculty/mt-somjeetbiswas" target ="_blank" rel="noreferrer">Dr. Somjeet Biswas</a></h5>
                    <p className = "card-text text-muted"><strong>Assistant Warden</strong></p>
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

















