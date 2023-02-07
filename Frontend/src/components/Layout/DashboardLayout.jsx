import React from "react";
import "./Styles.scss";
import { useState } from "react";
import logo from "../../assets/image/logo.jpg";
import { RiDashboardFill } from "react-icons/ri";
import { MdPayment } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { Card, DBHeader } from "../../components";
const DashboardLayout = ({ children }) => {
  const [active, setActive] = useState("dashboard");
  return (
    <div className="dashboard">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="" width={50} height={50} />
          <h1>hriscrown Farm</h1>
        </div>
        <ul>
          <li
            className={active === "dashboard" ? "active" : ""}
            onClick={() => setActive("dashboard")}
          >
            <a href="#">
              {" "}
              <RiDashboardFill
                size={25}
                color={active === "dashboard" ? "#fff" : ""}
              />
              Dashboard
            </a>
          </li>
          <li
            className={active === "payment" ? "active" : ""}
            onClick={() => setActive("payment")}
          >
            <a href="#">
              <MdPayment size={25} color={active === "payment" ? "#fff" : ""} />{" "}
              Payment
            </a>
          </li>
          <li
            className={active === "profile" ? "active" : ""}
            onClick={() => setActive("profile")}
          >
            <a href="#">
              <FaUser size={25} color={active === "profile" ? "#fff" : ""} />{" "}
              Profile
            </a>
          </li>
          <li>
            <a href="#" style={{ color: "red" }}>
              <BiLogOut size={25} color={"red"} /> Logout
            </a>
          </li>
        </ul>
      </div>
      <DBHeader />
      <div className="container">{children}</div>
    </div>
  );
};

export default DashboardLayout;
