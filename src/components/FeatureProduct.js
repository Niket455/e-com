import { useProductContext } from "../context/productcontext";
import Product from "./Product";
import "./FeaureProduct.css";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <div className="featureproducts">
      <div className="fp-container">
        <div className="intro-data">Check Now!</div>
        <div className="common-heading">Our Feautre Services</div>
        <div className="products">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
