import React from "react";
import "./Sort.css";
import { BsList, BsFillGridFill } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const { grid_view, setGridView, setListView, sorting, filter_products } =
    useFilterContext();
  return (
    <div className="sort-section">
      <div className="sorting-list">
        <button
          className={grid_view ? "active gridfill-button" : "gridfill-button"}
          onClick={setGridView}
        >
          <BsFillGridFill className="gridfill-icons" />
        </button>
        <button
          className={!grid_view ? "active gridfill-button" : "gridfill-button"}
          onClick={setListView}
        >
          <BsList className="gridfill-icons" />
        </button>
      </div>

      <div className="product-data">
        {filter_products.length} Product Available
      </div>

      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sortselection-style"
            onCLick={sorting}
          >
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Sort;
