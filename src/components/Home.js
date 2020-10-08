import React from "react";
import { Link } from "react-router-dom";
import bob from "../bob-painting.png";
import bobLogo from "../bob.png";
// import { ButtonContainer } from "./Button";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeNav classname="container-fluid">
      <div className="navbar navbar-expand-sm px-sm-5">
        <img src={bobLogo} alt="store" />
      </div>
      <div className="content d-flex justify-content-around align-items-center">
        <div className="">
          <h3 className="">Pastel and Oil</h3>
          <p>is simply dummy text of the printing and typesetting industry.</p>
          <Link to="/art" className="art-link">
            View Art Collection
          </Link>
        </div>
        <img src={bob} alt="bob painting" />
      </div>
    </HomeNav>
  );
}

const HomeNav = styled.nav`
  margin: 2rem;
  padding: 3rem;
  .content {
    color: var(--etonBlue);
  }

  .art-link {
    color: var(--beige) !important;
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-left: 0;
  }
`;
