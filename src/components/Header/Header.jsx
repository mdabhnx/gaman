import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="logo">
          <img src="/assets/logo-nav.svg" alt="logo" />
        </div>
        <div className="navigation">
          <ul>
            <li>
              <Link to={"#"}>Home</Link>
              <span className="active"></span>
            </li>
            <li>
              <Link to={"#"}>About us</Link>
              <span className=""></span>
            </li>
            <li>
              <Link to={"#"}>Creator zone</Link>
              <span className=""></span>
            </li>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </div>

        <div className="navigation-mobile">
          <img src="/assets/hamburger.svg" alt="hamburger" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
