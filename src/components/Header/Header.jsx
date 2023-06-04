import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="logo">
          <img src="/assets/logo-nav.svg" alt="logo" />
        </div>
        <div className="navigation">navigation</div>
      </div>
    </div>
  );
};

export default Header;
