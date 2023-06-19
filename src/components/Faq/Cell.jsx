import React from "react";

const Cell = ({ name, details, isDefaultOpen }) => {
  const [isOpen, setIsOpen] = React.useState(isDefaultOpen ?? false);

  return (
    <div
      className={`faq-cell-container ${isOpen && `visible`}`}
      onClick={() => {
        setIsOpen((old) => !old);
      }}
    >
      <div className="faq-cell">
        <div className="name">{name}</div>
        <div className="action">
          {isOpen ? (
            <img src="/assets/close.png" alt="close" />
          ) : (
            <img src="/assets/open.png" alt="close" />
          )}
        </div>
      </div>
      <div className="faq-details">{details}</div>
    </div>
  );
};

export default Cell;
