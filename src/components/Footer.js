import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper className="footer">
      <div className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/art">Collection</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div className="text">
        <small>
          Made by <a href="https://saraalkhamri.com/"> Sara Alkhamri </a>
          copyright ©2020, All Rights Reserved
        </small>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.nav`
  .footer {
    position: relative;
  }

  .footer-nav {
    color: var(--etonBlue);
    /* position: absolute; */
    padding-top: 2rem;

    bottom: 0;
    width: 100%;
    /* height: 1rem; */
    text-align: center;
  }
  .footer-nav a {
    color: #d5bf86;
    margin: 1rem;
    /* padding-bottom: 1rem; */
  }
  .text {
    padding-top: 2rem;
    text-align: center;
    color: black;
  }
  .text a {
    color: var(--beige);
  }
`;
