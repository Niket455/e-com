import React from "react";
import { useCartContext } from "./context/cart_context";
import "./Cart.css";
import CartItem from "./components/CartItem";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import FormatPrice from "./Helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  if (cart.length === 0) {
    return (
      <div>
        <h3>No Items in Cart</h3>
      </div>
    );
  }
  return (
    <div className="maincart">
      <div className="cartcontainer">
        <div className="cart_heading">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">SubTotal</p>
          <p>Remove </p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <hr />

        <div className="cart-two-button">
          <Link to="/products">
            <Button>Continue Shopping</Button>
          </Link>
          <Button onClick={clearCart}>clear cart</Button>
        </div>
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                <FormatPrice price={total_price} />
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                <FormatPrice price={shipping_fee} />
              </p>
            </div>

            <div>
              <p>order total:</p>
              <p>
                <FormatPrice price={shipping_fee + total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
