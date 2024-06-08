import React from "react";
import Slider from "./components/Slider";
import Services from "./components/Services";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeatureProduct />
      <Services />
    </div>
  );
};

export default Home;
