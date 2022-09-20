import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  Badge,
  FormControl,
  Button,
} from "react-bootstrap";
import { CartState } from "../reducers/Context";

import "./style.css";

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand href="#home">Shopping Cart</Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            type="search"
            placeholder="Search a product..."
            className="m-auto"
            aria-label="Search"
            onChange={(e) => {
              dispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
          />
        </Navbar.Text>
        <div>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="warning">
                <FaShoppingCart color="white" fontSize="25px" />
                <Badge>{cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  minWidth: 370,
                  left: "-278px",
                }}
              >
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <span className="cartitem" key={prod.id}>
                        <img
                          src={prod.images[0]}
                          className="cartItemImg"
                          alt={prod.title}
                        />
                        <div className="cartItemDetail">
                          <span>{prod.title}</span>
                          <span>₹ {prod.price}</span>
                        </div>
                        <AiFillDelete
                          fontSize="20px"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </span>
                    ))}
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is empty</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
