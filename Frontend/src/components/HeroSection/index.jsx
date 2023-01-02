import React from "react";
import "./Styles.scss";
import img from "../../assets/image/leaf.png";

const Index = () => {
  return (
    <main className="main">
      <div className="overlay"></div>
      <div className="herosection">
        <h1>Connecting Farmers to Wholesalers</h1>
        <p>
          <img src={img} alt="" />
          Welcome to ChriscrownFarm
        </p>
      </div>
    </main>
  );
};

export default Index;
