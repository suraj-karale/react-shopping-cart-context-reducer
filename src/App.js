import axios from "axios";
import React, { useEffect, useMemo } from "react";
import { CartState } from "./reducers/Context";

import Loader from "./components/Loader";
import Filters from "./components/Filters";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import "./App.css";

function App() {
  const {
    state: { products, filters },
    dispatch,
  } = CartState();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        dispatch({ type: "FETCH_PRODUCTS", payload: res.data });
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    let currFilters = products.products;

    const {
      searchQuery = "",
      sort = "",
      stock = "",
      discount = "",
      rating = 0,
    } = filters;

    if (rating) {
      currFilters = currFilters.filter((item) => item.rating >= rating);
    }

    if (stock === "fastDelivery") {
      currFilters = currFilters.filter((item) => item.fastDelivery);
    }

    if (discount) {
      currFilters = currFilters.filter((item) => {
        return item.discountPercentage >= parseInt(discount);
      });
    }

    if (sort === "lowToHigh") {
      currFilters = currFilters.sort((a, b) => a.price - b.price);
    } else if (sort === "highToLow") {
      currFilters = currFilters.sort((a, b) => b.price - a.price);
    }

    if (searchQuery) {
      currFilters = currFilters.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }
    return currFilters;
  }, [products, filters]);

  if (products.length === 0) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <Filters />
        <ItemList products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;
