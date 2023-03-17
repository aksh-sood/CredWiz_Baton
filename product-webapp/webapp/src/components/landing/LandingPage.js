import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeatureCard from "./FeatureCard"
import ProductFeatures from "./ProductFeature";
import ProductValues from "../mui/modules/views/ProductValues";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductValues />
      <ProductFeatures
        imageUrl={"https://picsum.photos/1200/700"}
        title="Product Title"
        description="Sending and receiving money with CredWiz is fast and secure. Whether you're splitting the bill with friends or sending money to family members, CredWiz makes it easy to transfer funds instantly. Plus, with our advanced security measures, you can rest assured that your money is always safe."
      />
      <FeatureCard imageUrl="https://picsum.photos/1200/700" title="Hello Feature" desc="This is a feature description and this must be lengthy"/>
    </>
  );
};

export default LandingPage;
