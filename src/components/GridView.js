import React from "react";
import Product from "./Product";
import "./GridView.css";

const GridView = ({ products }) => {
  return (
    <div className="gridsection-style">
      <div className="gridcontainer-style ">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </div>
  );
};

export default GridView;
