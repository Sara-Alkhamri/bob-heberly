import React from "react";
import { Link } from "react-router-dom";
import bob from "../bob-painting.png";
import bobLogo from "../bob.png";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeNav classname="py-5">
      <div className="navbar navbar-expand-sm px-sm-5">
        <img src={bobLogo} alt="store" />
      </div>
      <div className="content d-flex justify-content-around align-items-center flex-wrap pb-5">
        <div className="flex-sm-wrap p-5 ">
          {/* <h3 className="p-2">Pastel and Oil Collection</h3> */}
          {/* <p className="p-2">
            is simply dummy text of the printing and typesetting industry.
          </p> */}
          <Link to="/art" className="art-link p-2">
            Pastel and Oil Collection
          </Link>
        </div>
        <img src={bob} alt="bob painting" className="bob-main flex-sm-wrap " />
      </div>
    </HomeNav>
  );
}

const HomeNav = styled.nav`
  .art-link {
    color: var(--beige) !important;
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-left: 0;
  }
  .bob-main {
    border-radius: 0.5rem;
  }
`;
