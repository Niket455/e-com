import React from "react";
import "./Product.css";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";
import { useFilterContext } from "./context/filter_context";

function Products() {
  const { filter_products } = useFilterContext;
  return (
    <div className="all-products">
      <div className="product-container">
        <div>
          <FilterSection />
        </div>
        <div className="product-viewsort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
