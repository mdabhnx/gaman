import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="wrapper">
          <div className="footer-content">
            <div className="footer-logo">
              <div className="logo-container">
                <img src="/assets/logo.svg" alt="logo" />
              </div>
              <div className="logo-desc">Made with 🤍 in India</div>
            </div>
            <div className="footer-navigation">
              <div className="left-links">
                <ul>
                  <li>About us</li>
                  <li>Privacy policy</li>
                  <li>Terms & condition</li>
                  <li>Careers</li>
                  <li>Creator zone</li>
                </ul>
              </div>
              <div className="right-links">
                <div className="follow-us">
                  <div className="name">Follow us on</div>
                  <div className="icons">
                    <img
                      src="/assets/insta-icon.svg"
                      alt="icons"
                      lazy={"true"}
                      srcSet=""
                    />
                    <img
                      src="/assets/fb-icon.svg"
                      alt="icons"
                      lazy={"true"}
                      srcSet=""
                    />
                    <img
                      src="/assets/tweeter-icon.svg"
                      alt="icons"
                      lazy={"true"}
                      srcSet=""
                    />
                    <img
                      src="/assets/li-icon.svg"
                      alt="icons"
                      lazy={"true"}
                      srcSet=""
                    />
                    <img
                      src="/assets/yt-icon.svg"
                      alt="icons"
                      lazy={"true"}
                      srcSet=""
                    />
                  </div>
                </div>
                <div className="contact-us">
                  <div>support@gaman.in</div>
                  <button>CONTACT US</button>
                </div>
              </div>
            </div>
            <div className="follow-us-mobile">
              <div className="fum-wrapper">
                <div className="name">Follow us on</div>
                <div className="icons">
                  <img
                    src="/assets/insta-icon.svg"
                    alt="icons"
                    lazy={"true"}
                    srcSet=""
                  />
                  <img
                    src="/assets/fb-icon.svg"
                    alt="icons"
                    lazy={"true"}
                    srcSet=""
                  />
                  <img
                    src="/assets/tweeter-icon.svg"
                    alt="icons"
                    lazy={"true"}
                    srcSet=""
                  />
                  <img
                    src="/assets/li-icon.svg"
                    alt="icons"
                    lazy={"true"}
                    srcSet=""
                  />
                  <img
                    src="/assets/yt-icon.svg"
                    alt="icons"
                    lazy={"true"}
                    srcSet=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-write-container">
          <div className="cw-content">
            {" "}
            Copyright © 2023 Gaman Pvt. Ltd. All Rights Reserved.{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
