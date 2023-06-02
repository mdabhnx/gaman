import React from "react";
import "./monetization.scss";

const Monetization = () => {
  return (
    <div className="monetization-container">
      <div className="monetization-wrapper-container">
        <div className="monetization-wrapper">
          <div className="monetization-left">
            <div className="monetization-left-content">
              <div className="c__">
                Monetize & Engage
                <br />
                Your <span className="fans">Fans</span> with
                <br />
                Personalized Games
                <div className="sparkles">
                  <img src="/assets/sparkles.svg" alt="sparkles" />
                </div>
              </div>
            </div>
          </div>
          <div className="monetization-right">
            <div className="monetization-right-hashtag">#gamanforcreators</div>
            <button className="monetization-right-get-started">
              Get Started with Gaman
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monetization;
