import React from "react";
import "./faq.scss";
import Cell from "./Cell";

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq-wrapper">
        <div className="left-gradient"></div>
        <div className="bottom-right-gradient"></div>
        <div className="faq-content">
          <div className="faq-content-left">
            <img src="/assets/faq-image.png" alt="faq" />
          </div>
          <div className="faq-content-right">
            <div className="faq-title">
              <div>FAQ Section</div>
            </div>

            <div className="faq-contents">
              <Cell
                name={"How is this different from other apps"}
                details={
                  " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                }
                isDefaultOpen={true}
              />

              <Cell
                name={"How is this different from other apps"}
                details={
                  " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                }
              />

              <Cell
                name={"How is this different from other apps"}
                details={
                  " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                }
              />

              <Cell
                name={"How is this different from other apps"}
                details={
                  " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
