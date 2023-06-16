import React from "react";
import "./steps.scss";

const Steps = () => {
  return (
    <div className="steps-container">
      <div className="steps-wrapper">
        <div className="steps-contents">
          <div className="steps-left-contents">
            <div className="starts-container">
              <img src="/assets/stars.png" alt="stars" />
            </div>
            <div className="img-container">
              <img src="/assets/home-screen-1.png" alt="home-screen-1" />
            </div>
          </div>
          <div className="steps-right-contents">
            <div className="title">
              <p>
                Four Simple <span className="long-line"></span>
                <span className="short-line"></span> Steps
              </p>
            </div>

            <div className="per-steps">
              <div className="step">
                <div className="rank rank-active">
                  <div className="rank-no">1</div>
                </div>
                <div className="info">
                  <div className="icon-div">
                    <img
                      src="/assets/awesome-user-plus.png"
                      alt="awesome-user-plus"
                    />
                  </div>
                  <div className="content">
                    <div>Create your account</div>
                  </div>
                </div>
              </div>

              <div className="step">
                <div className="rank">
                  <div className="rank-no">2</div>
                </div>
                <div className="info">
                  <div className="icon-div">
                    <img
                      src="/assets/ionic-logo-game-controller-b.png"
                      alt="awesome-user-plus"
                    />
                  </div>
                  <div className="content">
                    <div>Select a game</div>
                  </div>
                </div>
              </div>

              <div className="step">
                <div className="rank">
                  <div className="rank-no">3</div>
                </div>
                <div className="info">
                  <div className="icon-div">
                    <img
                      src="/assets/awesome-trophy.png"
                      alt="awesome-trophy"
                    />
                  </div>
                  <div className="content">
                    <div>
                      Create your first contests <br />
                      or tournament.
                    </div>
                  </div>
                </div>
              </div>

              <div className="step">
                <div className="rank">
                  <div className="rank-no">4</div>
                </div>
                <div className="info">
                  <div className="icon-div">
                    <img src="/assets/awesome-share.png" alt="awesome-share" />
                  </div>
                  <div className="content">
                    <div>
                      Share the link with your audience and start earning
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
