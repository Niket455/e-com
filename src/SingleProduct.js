import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontext";
import MyImage from "./components/MyImage";
import FormatPrice from "./Helpers/FormatPrice";
import "./SingleProduct.css";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <div className="single-product">
      <div className="full-page">
        <div className="product-image">
          <MyImage imgs={image} />
        </div>
        <div className="product-data">
          <h2>{name}</h2>
          <Star stars={stars} reviews={reviews} />
          <p className="product-data-price">
            MRP:
            <del>
              <FormatPrice price={price + 250000} />
            </del>
          </p>
          <p className="new-product-price">
            Deal of the Day: <FormatPrice price={price} />
          </p>
          <p>{description}</p>
          <hr />

          {stock > 0 && <AddToCart product={singleProduct} />}
          <div className="product-data-info">
            <p>
              Available:{" "}
              <span>{stock > 0 ? "In Stock" : "Not Available "}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
