import React from "react";
import { Link } from "react-router-dom";
import bob from "../bob-painting.png";
import bobLogo from "../bob.png";
import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeNav classname="py-5">
      <div className="navbar navbar-expand-sm px-sm-5">
        <img src={bobLogo} alt="store" />
      </div>
      <div className="content d-flex justify-content-around align-items-center">
        <div className="">
          <h3 className="">Pastel and Oil</h3>
          <p>is simply dummy text of the printing and typesetting industry.</p>
          <ButtonContainer>
            <Link to="/art" className="nav-link">
              Art Collection
            </Link>
          </ButtonContainer>
        </div>
        <img src={bob} alt="bob painting" />
      </div>
    </HomeNav>
  );
}

const HomeNav = styled.nav`
  .content {
    color: var(--etonBlue);
  }

  .nav-link {
    color: var(--beige) !important;
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-left: 0;
  }
`;
