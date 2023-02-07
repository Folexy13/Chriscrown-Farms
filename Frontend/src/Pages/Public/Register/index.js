import React from "react";
import "./Styles.scss";
import { Link, useNavigate } from "react-router-dom";
import bgImage from "../../../assets/image/img2.jpg";
import { IoChevronBackSharp } from "react-icons/io5";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="register">
      <div className="first_section">
        <img src={bgImage} alt="..." />
      </div>
      <div className="second_section">
        <div className="back" onClick={() => navigate(-1)}>
          <IoChevronBackSharp size={30} /> Back
        </div>
        <h1>Register</h1>
        <form>
          <div className="form_control">
            <label htmlFor="">Fullname</label>
            <input type="text" />
          </div>
          <div className="form_control">
            <label htmlFor="">Phone</label>
            <input type="text" />
          </div>
          <div className="form_control">
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className="form_control">
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <div className="form_control">
            <button>Register</button>
          </div>
          Already have an account? <Link to="/login">Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
