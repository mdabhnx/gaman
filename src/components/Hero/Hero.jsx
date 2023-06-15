import React from "react";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="contents">
          <div className="content">
            <div className="left-gradient"></div>
            <div className="bottom-right-gradient"></div>
            <div className="monetize">
              Monetize & Engage
              <br />
              Your <span className="fans">FANS</span> with
              <br />
              Personalized Games
            </div>
            <div className="unlock">
              Unlock the Power of play and turn your passion into
              <br />
              profits effortlessly.
            </div>
            <div className="action">
              <button>
                <img src="/assets/arrow-up.svg" alt="arrow-up" />{" "}
                <span>Get Started</span>
              </button>
              <div className="ring-container">
                <div className="ring-bg"></div>
                <div className="ring">
                  <img src="/assets/ring-one-color.png" alt="ring-one" />
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <img src="/assets/hero-image.png" alt="hero" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;