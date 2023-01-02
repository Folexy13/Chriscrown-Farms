import React, { useEffect } from "react";
import { HeroSection, Navbar } from "../../../components";

const Index = () => {
  useEffect(() => {
    document.title = "Homepage";
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Index;
