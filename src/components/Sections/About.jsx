import React from 'react';
import logo from '../../assets/img/Hall.jfif'
import '../../style/About.css'
import Fade from 'react-reveal/Fade';
const About = () => {
    return (
      <div>
        <div className="about-wrapper">
          <div className="about">
            <Fade left>
              <div className="about-image">
                <img src={logo} alt="LOGO" />
              </div>
            </Fade>
            <Fade right>
              <div className="about-text" style={{ width: "90%" }}>
                <h1 className="heading-about">About Us</h1>
                <hr className="rule-about" />
                <p>
                  <i>
                    The hall was founded on March 18, 1967, and the name was
                    given in honour of the great freedom fighter and leader of
                    Indian Independence Movement, Lala Lajpat Rai.
                  </i>
                </p>
                <br />
                <p>
                  <i>
                    We proudly stand by our Motto, <b>"कर्मणैव हि संसिद्धि"</b>,
                    which means "Perfection is attained by performing duties".
                  </i>
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
};

export default About;
