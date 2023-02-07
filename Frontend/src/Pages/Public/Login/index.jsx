import React from "react";
import "./Styles.scss";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../../../assets/image/login.webp";
import { IoChevronBackSharp } from "react-icons/io5";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="first_section">
        <img src={bgImage} alt="..." />
      </div>
      <div className="second_section">
        <div className="back" onClick={() => navigate(-1)}>
          <IoChevronBackSharp size={30} /> Back
        </div>
        <h1>Login</h1>
        <form>
          <div className="form_control">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className="form_control">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <div className="form_control">
            <button>Login</button>
          </div>
          Don't have an account? <Link to="/register">Register</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
