import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection"



import ProductFeatures from "./ProductLanding";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <ProductFeatures
        imageUrl={"https://picsum.photos/1200/700"}
        title="Product Title"
        description="Product Description goes here"
      />
    </>
  );
};

export default LandingPage;
