import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
         <NavLink to="/"> <LogoIcon /></NavLink>
          <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            Lala Lajpat Rai Hall of Residence
          </h1>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <NavLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" , color:"white"}}
            to="/"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </NavLink>
        </li>
        <li className="semiBold font15 pointer">
          <NavLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" , color:"white"}}
            to="/gc"
            spy={true}
            smooth={true}
            offset={-60}
          >
            General Championship
          </NavLink>
        </li>
        <li className="semiBold font15 pointer">
          <NavLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px", color:"white" }}
            to="gallery"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Gallery
          </NavLink>
        </li>
        <li className="semiBold font15 pointer">
          <NavLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px", color:"white" }}
            to="/hallcouncil"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Hall Council
          </NavLink>
        </li>
       {/* <li className="semiBold font15 pointer">
          <NavLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px", color:"white" }}
            to="/halloffame"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Hall of Fame
          </NavLink>
        </li>*/}
        <li className="semiBold font15 pointer">
          <NavLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px", color:"white" }}
            to="/ourteam"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Our Team
          </NavLink>
        </li>
        

        {/* <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="pricing"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Pricing
          </Link>
        </li> */}

        {/* <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contact
          </Link>
        </li> */}
      </UlStyle>
     
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
