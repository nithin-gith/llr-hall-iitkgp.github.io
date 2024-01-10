import React from 'react';
import Card2 from './Card2';
import tech2024 from "../../assets/img/Hall Council/current/Avinash.jpg";
import hp2024 from "../../assets/img/Hall Council/23-24/priyansh_shrivastava.jpeg"

import nithin from "../../assets/img/Hall Council/websecs/nithin.jpg"
import krishna from "../../assets/img/Hall Council/websecs/krishna.jpeg"
import aaditya from "../../assets/img/Hall Council/websecs/aaditya.jpeg"
import akshat from "../../assets/img/Hall Council/websecs/akshat.jpeg"
import revant from "../../assets/img/Hall Council/websecs/revant.jpg"
import suryansh from "../../assets/img/Hall Council/websecs/suryansh.jpg"

import "../../style/Card.css";
import "../../style/index.css";

const OurTeam = () => {
    return (
      

        <>
            <div className="head">
              <h2 className="text">Our Team</h2>
            </div>
            <div className=" row justify-content-center" style ={{textAlign:"left"}}>
            <Card2
                  img={hp2024}
                  name="Priyansh Srivastava"
                  position="Project Manager"
                  fb="https://www.facebook.com/profile.php?id=100065067784365"
                linkedin=""
                />
              </div>
              <div className=" row justify-content-center" style ={{textAlign:"left"}}>
                
                 
                <br />
                  <Card2
                    img={nithin}
                    name="Nithin Siriguppa"
                    position="Coordinator"
                    fb="https://www.facebook.com/nithin.siriguppa"
                    linkedin="https://www.linkedin.com/in/siriguppa-naga-nithin-3a9bba211/"
                  />
                <Card2
                  img={tech2024}
                  name="Kalepu Avinash"
                  position="Coordinator"
                  fb=""
                  linkedin=""
                />
              </div>

              <div className="row justify-content-center">
             
              <Card2
                img={krishna}
                name="Krishna Chaudhari"
                position="Web Secretary"
                fb="https://www.facebook.com/krishna.caudhari.5"
                linkedin="https://www.linkedin.com/in/krishachaudhari/"
              />
              <Card2
                img={akshat}
                name="Akshat Verma"
                position="Web Secretary"
                fb="https://www.facebook.com/profile.php?id=100050080189979"
                linkedin="https://www.linkedin.com/in/akshatvermaa/"
              />
              <Card2
                img={aaditya}
                name="Aaditya Raj Kaushik"
                position="Web Secretary"
                fb="https://www.facebook.com/profile.php?id=100086471603203"
                linkedin="https://www.linkedin.com/in/aditya-raj-kaushik-28827b253/"
              />
              <Card2
                img={revant}
                name="Revant"
                position="Web Secretary"
                fb="https://www.facebook.com/profile.php?id=100009213304015"
                linkedin="https://www.linkedin.com/in/revanth-suddala-118101252/"
              />
              <Card2
                img={suryansh}
                name="Suryansh Singh"
                position="Web Secretary"
                fb="https://www.facebook.com/profile.php?id=100035611026597"
                linkedin="https://www.linkedin.com/in/suryansh-singh-131685263/"
              />
            </div>  

        </>
        )
    }
   



export default OurTeam;
