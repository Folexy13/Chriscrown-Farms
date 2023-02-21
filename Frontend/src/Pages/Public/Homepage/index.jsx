import React, { useEffect, useState } from "react";
import { About, HeroSection, Navbar, ProductCard } from "../../../components";
import userOBJ from "../../../Classes";

const Homepage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let mounted = true;
    document.title = "Homepage";
    userOBJ.get_all_products(1).then((res) => {
      if (mounted) {
        // setData(res.payload);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <div className="homepage">
      <Navbar />
      <HeroSection />
      <div>
        <h1 style={{ textAlign: "center" }}>Available Product</h1>
        <ProductCard products={data} />
      </div>
      <About />
    </div>
  );
};

export default Homepage;
