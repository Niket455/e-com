import React from "react";
import { Card } from "react-bootstrap";
import "./ListView.css";
import FormatPrice from "../Helpers/FormatPrice";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <div className="list-section">
      <div className="list-container">
        {products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          return (
            <Card className="li-card">
              <div className="list-image">
                <img className="single-li-image" src={image} alt={name} />
              </div>
              <div className="li-card-desc">
                <h3>{name}</h3>
                <p>
                  <FormatPrice price={price} />
                </p>
                <p className="lv-desc">{description.slice(0, 90)}... </p>
                <Link to={`/singleproduct/${id}`}>
                  <button className="lv-sp-button">Read More</button>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ListView;
