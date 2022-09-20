import React from "react";

import Rating from "./Common/Rating";
import { Card, Button } from "react-bootstrap";
import { CartState } from "../reducers/Context";

const Item = ({ item }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const { title, images, price, rating, discountPercentage } = item;

  return (
    <div className="card" style={{ width: "230px", margin: "10px 5px" }}>
      <img
        src={images[0]}
        className="card-img-top"
        style={{ height: "200px", padding: "5px" }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Card.Subtitle style={{ paddingBottom: 10 }}>
          <span> {`₹ ${price} `}</span>
          <div>
            {discountPercentage && `with discount ${discountPercentage}%`}
          </div>
          <Rating rating={rating} />
        </Card.Subtitle>
        {cart.some((i) => i.id === item.id) ? (
          <Button
            className="btn btn-danger"
            onClick={() => {
              dispatch({
                type: "REMOVE_TO_CART",
                payload: item,
              });
            }}
          >
            Remove to cart
          </Button>
        ) : (
          <Button
            className="btn btn-primary"
            onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: item,
              });
            }}
          >
            Add to cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default Item;
