import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 75px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>Shopping Cart</div>
      <div class="input-group mb-3" style={{ width: "500px" }}>
        <span class="input-group-text" id="basic-addon1">
          <AiOutlineSearch />
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Search for products"
          aria-label="products"
          aria-describedby="basic-addon1"
        />
      </div>
      <div>Cart</div>
    </HeaderContainer>
  );
};

export default Header;
