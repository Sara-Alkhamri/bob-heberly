import React, { Component } from "react";
import { Link } from "react-router-dom";
import bob from "../bob.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/*“Created my free logo at LogoMakr.com” */}
        <Link to="/">
          <img src={bob} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/art" className="nav-link">
              Pastel and Oil Collection
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            Cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  /* background: var(--beige); */
  /* border-bottom: 0.02rem solid black; */

  .nav-link {
    color: var(--beige) !important;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`;
