import React from "react";
import "./Header.styles.css";

const Header = ({ src, clickHandler }) => {
  return (
    <div className="header-container">
      <h1 className="header-title">T O D O </h1>
      <img
        onClick={clickHandler}
        className="header-icon"
        alt="icon"
        src={src}
      />
    </div>
  );
};

export default Header;
