import React from 'react';
import logo from '../../assets/img/header-image.jpg'
import '../../style/About.css'
import Fade from 'react-reveal/Fade';
const About = () => {
    return( <div>
      
         <div className="about-wrapper">
        

        <div className="about">
        <Fade left>
        <div className="about-image">
          <img src={logo} alt="LOGO" />
        </div>
        </Fade>
<Fade right>

        <div className="about-text">
        <h1 className="heading-about">About Us</h1>
        <hr className="rule-about"/>
        <i>"A person should be courageous and honest in worshipping the truth, without being concerned about receiving worldly benefits"</i>
        </div>
</Fade>

        </div>
        </div>


    </div>
    
    )
};

export default About;
