import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1>ROBERT HEBERLY</h1>
        <h3>PASTEL AND OIL</h3>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/art" className="nav-link">
              Enter
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
