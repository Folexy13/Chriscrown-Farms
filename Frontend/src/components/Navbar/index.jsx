import React, { useEffect, useState } from "react";
import { BiHomeAlt, BiWorld } from "react-icons/bi";
import { RiToolsLine } from "react-icons/ri";
import { AiFillDashboard, AiOutlineContacts } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { BiCartAlt } from "react-icons/bi";
// import {}
import "./Styles.scss";
import { Link } from "react-router-dom";
import { getStoredAuthToken, removeStoredAuthToken } from "../../utils";
const isLoggedIn = getStoredAuthToken();
const Navbar = () => {
  const [count, setCount] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const navbar = document.getElementById("navbar");
      if (scrollTop >= navbar.offsetTop && !isFixed) {
        setIsFixed(true);
      } else if (scrollTop < navbar.offsetTop && isFixed) {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);
  const navbarClass = isFixed
    ? "navbar-fixed navbar_container"
    : "navbar_container";

  return (
    <div className={navbarClass}>
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
          <li>
            <Link to="/">
              <BiHomeAlt /> Home
            </Link>
          </li>
          <li>
            <BiWorld /> About
          </li>
          <li>
            <RiToolsLine /> Services
          </li>
          <li>
            <AiOutlineContacts /> Contact
          </li>
        </ul>
        <ul className="second_section_right">
          {!isLoggedIn ? (
            <li>
              <Link to="/login">
                <FiLogIn /> Login
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/dashboard">
                  <AiFillDashboard /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/cart" style={{ position: "relative" }}>
                  <div className="badge">{count}</div>
                  <BiCartAlt /> Cart
                </Link>
              </li>
              <li onClick={() => removeStoredAuthToken()}>
                <FiLogOut /> Logout
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
