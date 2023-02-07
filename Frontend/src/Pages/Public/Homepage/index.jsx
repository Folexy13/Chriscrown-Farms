import React, { useEffect } from "react";
import { About, HeroSection, Navbar } from "../../../components";

const Homepage = () => {
  useEffect(() => {
    document.title = "Homepage";
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
};

export default Homepage;
