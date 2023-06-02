import React from "react";
import "./fag.scss";

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="wrapper">
        <div className="faq-content">
          <div className="faq-content-left">
            <img src="/assets/faq-image.png" alt="faq" />
          </div>
          <div className="faq-content-right">
            <div className="faq-title">FAQ Section</div>

            <div className="faq-contents"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
