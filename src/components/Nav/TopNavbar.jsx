import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";


export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "80px" } : { height: "80px" }}>
        <NavInner className="container flexSpaceCenter" style ={{paddingRight:"0px"}}>
          <Link className="pointer flexNullCenter link-hall" to="/" smooth={true}>
            <LogoIcon />
            <h1 className="font20 extraBold " >
              Lala Lajpat Rai Hall of Residence
            </h1>
          </Link>
          
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>


          <UlWrapper className="flexNullCenter " >

            <li className="lessPadding semiBold font15 pointer " >
              <NavLink activeClassName="is-active" className="hovereffect" to="/" spy={true} smooth={true} offset={-80} >
                Home
              </NavLink>
            </li>

            <li className="lessPadding semiBold font15 pointer">
              <NavLink to="/gc"  activeClass="active"  className="hovereffect" spy={true} smooth={true} offset={-80}>
                General Championship
              </NavLink>
            </li>
            

            <li className="lessPadding semiBold font15 pointer">
              <NavLink activeClass="active" className="hovereffect"  to="/gallery" spy={true} smooth={true} offset={-80}>
                Gallery
              </NavLink>
            </li>

            <li className="lessPadding semiBold font15 pointer">
              <NavLink activeClass="active" className="hovereffect"  to="/hallcouncil" spy={true} smooth={true} offset={-80}>
                Hall Council
              </NavLink>
            </li>

            {/*<li className="lessPadding semiBold font15 pointer">
              <NavLink activeClass="active"  to="/halloffame" spy={true} smooth={true} offset={-80}>
                Hall of Fame
              </NavLink>
  </li>*/}
            
             <li className="lessPadding semiBold font15 pointer">
              <NavLink activeClass="active" className="hovereffect"  to="/ourteam" spy={true} smooth={true} offset={-80}>
                Our Team
              </NavLink>
            </li>



            {/* <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                Pricing
              </Link>
            </li> */}
            {/* <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
            </li> */}
          </UlWrapper>
          
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 1100px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 1100px) {
    display: none;
  }
`;




