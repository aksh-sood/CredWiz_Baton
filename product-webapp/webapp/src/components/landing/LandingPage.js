import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ProductFeatures from "./ProductFeature";
import Footer from "../footer/Footer"
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductFeatures />
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
