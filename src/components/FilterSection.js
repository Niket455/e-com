import React from "react";
import { useFilterContext } from "../context/filter_context";
import "./FilterSection.css";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    all_products,
    updateFilterValue,
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return curElem[attr];
    });

    if (attr === "colors") {
      //return (newVal = ["all", ...new Set([].concat(...newVal))]);
      newVal = newVal.flat();
    }
    return (newVal = ["all", ...new Set(newVal)]);
  };

  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <div className="filter-sec">
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilterValue}
            placeholder="search"
          />
        </form>
      </div>
      <div className="filter-category">
        <h3>Category</h3>
        <div className="category-items">
          {categoryOnlyData.map((curElem, index) => {
            return (
              <button
                key={index}
                type="buttom"
                name="category"
                value={curElem}
                onClick={updateFilterValue}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company-select"
            onClick={updateFilterValue}
          >
            {companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name="company">
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="filter-colors">
        <h3>Colors</h3>
        <div className="filter-color-styles">
          {colorsData.map((curColor, index) => {
            if (curColor === "all") {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  onClick={updateFilterValue}
                >
                  all
                </button>
              );
            } else {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  style={{ backgroundColor: curColor }}
                  className={
                    color === curColor ? "btnStyle active" : "btnStyle"
                  }
                  onClick={updateFilterValue}
                >
                  {color === curColor ? (
                    <FaCheck className="checkStyle" />
                  ) : null}
                </button>
              );
            }
          })}
        </div>
      </div>
      <div className="filter_price">
        <h3>Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
        />
      </div>
      <div className="filter-clear">
        <button onClick={clearFilters}>Clear Filters </button>
      </div>
    </div>
  );
};

export default FilterSection;
