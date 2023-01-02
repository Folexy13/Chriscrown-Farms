import React from "react";
import "./Styles.scss";

const Index = () => {
  return (
    <div className="navbar_container">
      <div className="sect1">
        <div className="first_section">
          <div className="first_section_left">
            <h3>Welcome to Chriscrown Farm</h3>
          </div>
          <div className="first_section_right">
            {/* Icon */}
            chriscrownfarm@gmail.com
          </div>
        </div>
      </div>
      <div className="second_section">
        <ul className="second_section_left">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
