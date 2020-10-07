import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <div className="content">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/art" className="nav-link">
          Art
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
        <div className="text">
          <small>Created by Sara Alkhamri 2020</small>
        </div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.nav`
  margin: 2rem;
  padding: 2rem;
  text-align: center;
  .content {
    color: var(--etonBlue);
  }
  .content a {
    color: #d5bf86;
  }
`;
