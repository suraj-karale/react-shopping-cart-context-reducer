import React from "react";
import { Button } from "react-bootstrap";
import { CartState } from "../reducers/Context";
import Rating from "./Common/Rating";

import "./style.css";

const Filters = () => {
  const {
    state: { filters },
    dispatch,
  } = CartState();

  return (
    <div className="filters">
      <h4>Filter Products</h4>
      <form>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            onChange={() =>
              dispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            }
            checked={filters && filters.sort === "lowToHigh" ? true : false}
          />
          <label className="form-check-label">Low to high</label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={() =>
              dispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              })
            }
            checked={filters && filters.sort === "highToLow" ? true : false}
          />
          <label className="form-check-label">High to low</label>
        </div>
        <div className="mb-3">
          Customer Ratings:{" "}
          <Rating
            rating={filters && filters.rating}
            onClick={(e) =>
              dispatch({
                type: "FILTER_BY_RATING",
                payload: e + 1,
              })
            }
          />
        </div>
        <select
          className="form-select form-select-sm mb-3"
          aria-label=".form-select-sm example"
          onChange={(e) =>
            dispatch({
              type: "FILTER_BY_DISCOUNT",
              payload: e.target.value,
            })
          }
        >
          <option
            value={filters && filters.discount}
            selected={filters && filters.discount === "0"}
          >
            Select discount
          </option>
          <option value="10">10% off or more</option>
          <option value="20">20% off or more</option>
          <option value="30">30% off or more</option>
          <option value="40">40% off or more</option>
          <option value="50">50% off or more</option>
        </select>
        <Button
          variant="warning"
          onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
        >
          Clear Filters
        </Button>
      </form>
    </div>
  );
};

export default Filters;
