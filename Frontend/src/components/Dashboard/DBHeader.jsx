import React from "react";
import { BsSearch, BsBell } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import userImg from "../../assets/image/user.jpg";
import "../../Pages/Private/Main/Styles.scss";
const DBHeader = () => {
  return (
    <div className="section">
      <div className="search_page">
        <div className="search">
          <BsSearch size={22} />
          <input type="text" placeholder="Search here..." />
        </div>
        <div className="other">
          <div className="icon">
            <BsBell size={22} />
            <FiMessageSquare size={22} />
          </div>
          <div>
            <img src={userImg} width={60} height={60} alt=".." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DBHeader;
