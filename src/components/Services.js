import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BiShieldQuarter } from "react-icons/bi";
import { GiPayMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="left-box">
        <TbTruckDelivery className="icons" />
        <p>Super Fast and Free Delivery</p>
      </div>
      <div className="middle-box">
        <div className="box1">
          <BiShieldQuarter className="icons" />
          <p>Non-Contact Shipping</p>
        </div>
        <div className="box2">
          <GiPayMoney className="icons" />
          <p>Money-Back Gaurantee</p>
        </div>
      </div>
      <div className="right-box">
        <RiSecurePaymentLine className="icons" />
        <p>Super Secure Payment System</p>
      </div>
    </div>
  );
};

export default Services;
