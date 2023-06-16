import React from "react";
import "./steps.scss";

const Steps = () => {
  return (
    <div className="steps-container">
      <div className="steps-wrapper">
        <div className="steps-contents">
          <div className="steps-left-contents">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            aut reiciendis, eveniet possimus dicta voluptatibus sed iure labore
            culpa nisi?
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
                <div className="rank">
                  <div className="rank-no">1</div>
                </div>
                <div className="info"></div>
              </div>

              <div className="step">
                <div className="rank">
                  <div className="rank-no">2</div>
                </div>
                <div className="info"></div>
              </div>

              <div className="step">
                <div className="rank">
                  <div className="rank-no">3</div>
                </div>
                <div className="info"></div>
              </div>

              <div className="step">
                <div className="rank">
                  <div className="rank-no">4</div>
                </div>
                <div className="info"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
