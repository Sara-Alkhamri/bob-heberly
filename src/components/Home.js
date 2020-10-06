import React from "react";
import { Link } from "react-router-dom";
import bob from "../bob-painting.png";
import bobLogo from "../bob.png";

import styled from "styled-components";

export default function Home() {
  return (
    <HomeNav className="container">
      <img src={bobLogo} alt="store" className="" />

      <div className="content">
        <div className="text-content">
          <h3 className="">Pastel and Oil</h3>
          <p>is simply dummy text of the printing and typesetting industry.</p>

          <Link to="/art" className="nav-link">
            Art Collection
          </Link>
        </div>
        <img src={bob} alt="bob painting" className="bob-img" />
      </div>
    </HomeNav>
  );
}

const HomeNav = styled.nav`
  .container {
    background: var(--white);

    display: flex;
  }
  .nav-link {
    color: var(--etonBlue) !important;
    font-size: 2rem;
    text-transform: capitalize;
    text-decoration-line: underline;
    /* margin-left: 3rem; */
  }
  .content {
  }
  .text-content {
    display: inline-flex;
    flex-direction: column;
  }
  .bob-img {
    transform: translate(22em, 0);
  }
`;
