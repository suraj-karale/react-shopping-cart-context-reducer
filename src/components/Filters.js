import React from "react";

const Filters = () => {
  return (
    <div style={{ padding: "20px", width: "20%" }}>
      <h3>Filter Products</h3>
      <form>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Ascending
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Descending
          </label>
        </div>
      </form>
    </div>
  );
};

export default Filters;
