import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "../../assets/svg/Logo";
import FacebookIcon from '@mui/icons-material/FacebookSharp';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }


  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container" style={{padding:"0"}}>
          <InnerWrapper  style={{ display:"flex",justifyContent:"space-between",padding: "30px 0" ,height:"150px"}}>
            <Link className="flexCenter animate pointer"  to="home" smooth={true} offset={-80}>
              <LogoImg />
              <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                Lala Lajpat Rai Hall of Residence
              </h1>
            </Link>
            {/* <FacebookIcon/> */}
            <div className="flexColumn" style ={{display:"flex",justifyContent:"space-between"}}>
              {/* <h1 className="whiteColor font20" style={{textDecoration:"under-lined"}}>Social Connect</h1> */}
              <div style ={{display:"flex",paddingTop:"30px"}}>

                <a href="https://www.facebook.com/Lajpatian/" target="_blank" rel="noreferrer" style= {{paddingRight:"10px"}}><FaFacebookSquare style ={{color:"white",height:"25px",width:"25px"}}/></a>
                <a href ="https://www.linkedin.com/company/lala-lajpat-rai-hall-of-residence-iit-kharagpur/about/" target="_blank" rel="noreferrer"><FaLinkedin style ={{color:"white",height:"25px",width:"25px"}}/></a>
              </div>
              
              <StyleP className="whiteColor font13" style = {{marginTop:"auto"}}>
                © {getCurrentYear()} - <span className="purpleColor font13">Lala Lajpat Rai Hall of Residence</span> All Right Reserved
              </StyleP>
            </div>
            {/* <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link> */}
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;