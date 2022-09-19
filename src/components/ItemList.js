import axios from "axios";
import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { productReducer } from "../reducers/ProductReducer";
import Item from "./Item";
import Loader from "./Loader";

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  height: calc(100vh - 75px);
  overflow-y: scroll;
`;

const ItemList = () => {
  const [state, dispatch] = useReducer(productReducer, { products: [] });

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        dispatch({ type: "FETCH_PRODUCTS", payload: res.data });
      })
      .catch((err) => console.log(err));
  }, []);

  if (state.products.length === 0) {
    return <Loader />;
  }

  return (
    <ItemsContainer>
      {state.products.products.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ItemsContainer>
  );
};

export default ItemList;
