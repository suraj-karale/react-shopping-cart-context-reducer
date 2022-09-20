import React from "react";
import styled from "styled-components";
import Item from "./Item";

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 80%;
  height: calc(100vh - 75px);
  overflow-y: scroll;
  padding: 2px 20px;
`;

const ItemList = ({ products }) => {
  return (
    <ItemsContainer>
      {products ? (
        products.map((item) => <Item item={item} key={item.id} />)
      ) : (
        <div>No data found</div>
      )}
    </ItemsContainer>
  );
};

export default ItemList;
