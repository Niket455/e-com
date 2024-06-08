import React from "react";
import { useProductContext } from "./context/productcontext";
import Services from "../src/components/Services";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "FOWE",
  };
  return (
    <div>
      <Services />
    </div>
  );
};

export default About;
