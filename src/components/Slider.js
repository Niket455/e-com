import React from "react";
import "./Slider.css";
import PIC1 from "../images/PIC1.webp";
import PIC2 from "../images/PIC2.jpeg";
import PIC3 from "../images/PIC3.webp";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="container-page">
      <Container>
        <Carousel className="carousel">
          <Carousel.Item>
            <div className="container">
              <div>
                <img className="container-image" alt="fmage" src={PIC1}></img>
              </div>
              <div className="container-part2">
                <h1>FESTIVE SALE</h1>
                <p>GET YOUR BEST DEALS AT BEST PRICE</p>
                <Link to="/products">
                  <button className="search-button">SHOP NOW</button>
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container">
              <div>
                <img className="container-image" alt="fmage" src={PIC2}></img>
              </div>
              <div className="container-part2">
                <h1>BUDGET FRIENDLY</h1>
                <p>UPTO 20% OFF ON SELECTED PRODUCTS</p>
                <button className="search-button">SHOP NOW</button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="container">
              <div>
                <img className="container-image" alt="fmage" src={PIC3}></img>
              </div>
              <div className="container-part2">
                <h1>EXTENDED WARRANTY</h1>
                <p>GET ONE YEAR OF EXTENDED WARRANTY ON ALL PRODUCT</p>
                <button className="search-button">SHOP NOW</button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Slider;
