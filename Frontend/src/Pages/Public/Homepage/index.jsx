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
      <ProductCard />
      <About />
    </div>
  );
};

export default Homepage;
