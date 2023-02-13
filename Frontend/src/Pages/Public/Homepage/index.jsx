import React, { useEffect } from "react";
import { About, HeroSection, Navbar, ProductCard } from "../../../components";

const Homepage = () => {
  useEffect(() => {
    document.title = "Homepage";
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <HeroSection />
      <div>
        <h1 style={{ textAlign: "center" }}>Available Product</h1>
        <ProductCard />
      </div>
      <About />
    </div>
  );
};

export default Homepage;
