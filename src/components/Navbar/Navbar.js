import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav-div">
      <div className="navbar">
        <ul className="ul">
          <div>
            <li>
              <Link className="title" to="/">
                Quick-List
              </Link>
            </li>
          </div>
          <div className="navbarRight">
            <li>
              <Link className="li" to="/about">
                about
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
