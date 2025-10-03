import React from "react";
import './component.css';
import { FaChevronUp } from "react-icons/fa";

const BackToTopBtn = () => {
  const top = () => {
    window.scrollTo(0, 0)
  };

  return (
    <>
      <div className="arrowUp" onClick={top}>
        <FaChevronUp className="FaChevronUp"/>
      </div>
    </>
  )
};

export default BackToTopBtn;