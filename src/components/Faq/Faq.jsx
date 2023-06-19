import React from "react";
import "./faq.scss";

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
              <div className="faq-cell-container visible">
                <div className="faq-cell">
                  <div className="name">
                    How is this different from other apps?
                  </div>
                  <div className="action">
                    <img src="/assets/close.png" alt="close" />
                  </div>
                </div>
                <div className="faq-details">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </div>
              </div>

              <div className="faq-cell-container">
                <div className="faq-cell">
                  <div className="name">
                    How is this different from other apps?
                  </div>
                  <div className="action">
                    <img src="/assets/open.png" alt="close" />
                  </div>
                </div>
                <div className="faq-details">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </div>
              </div>

              <div className="faq-cell-container visible">
                <div className="faq-cell">
                  <div className="name">
                    How is this different from other apps?
                  </div>
                  <div className="action">
                    <img src="/assets/open.png" alt="close" />
                  </div>
                </div>
                <div className="faq-details">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </div>
              </div>

              <div className="faq-cell-container">
                <div className="faq-cell">
                  <div className="name">
                    How is this different from other apps?
                  </div>
                  <div className="action">
                    <img src="/assets/open.png" alt="close" />
                  </div>
                </div>
                <div className="faq-details">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
