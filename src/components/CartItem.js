import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import "./CartItem.css";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, name, image, price, amount, color }) => {
  const { removeItem, setIncrement, setDecrement } = useCartContext();

  return (
    <div className="cart-items">
      <div className="cart-image--name">
        <div>
          <figure>
            <img className="cart-single--image" src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      <div className="cart-hide">
        <p className="cart-single-price">
          <FormatPrice price={price} />
        </p>
      </div>
      <CartAmountToggle
        className="cartamount"
        amount={amount}
        setDecrease={() => setDecrement(id)}
        setIncrease={() => setIncrement(id)}
      ></CartAmountToggle>

      {/* SubTotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
      <div>
        <FaTrash
          className="remove_icon"
          onClick={() => removeItem(id)}
        ></FaTrash>
      </div>
    </div>
  );
};

export default CartItem;
