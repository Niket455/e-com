import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <Link to={`/singleproduct/${id}`}>
      <div className="single-card">
        <figure>
          <img className="img" src={image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>
        <div className="card-data">
          <h3>{name}</h3>
          <p>{<FormatPrice price={price} />}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
