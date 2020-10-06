import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="navbar-nav align-items-left">
      <Link to="/">Home</Link>
      <Link to="/art">Art</Link>
      <Link to="/cart">Cart</Link>
      <div className="text">
        {/* <small>Created by Sara Alkhamri 2020</small> */}
      </div>
    </div>
  );
}
