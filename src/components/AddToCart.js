import React, { useState } from "react";
import "./AddToCart.css";
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div className="color-sec">
      <div className="colors">
        <p>
          Colors:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? (
                  <FaCheck className="color-check" />
                ) : null}
              </button>
            );
          })}
        </p>
      </div>

      <CartAmountToggle
        className="cartamount"
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      ></CartAmountToggle>

      <Link to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <Button className="addtocart-button">AddToCart</Button>
      </Link>
    </div>
  );
};

export default AddToCart;
