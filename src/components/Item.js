import React from "react";
import Rating from "./Common/Rating";
import { Card, Button } from "react-bootstrap";

const Item = ({ item }) => {
  const { title, images, price, rating, fastDelivery } = item;
  return (
    <div class="card" style={{ width: "250px", marginBottom: "20px" }}>
      <img
        src={images[0]}
        class="card-img-top"
        style={{ height: "200px", padding: "5px" }}
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <Card.Subtitle style={{ paddingBottom: 10 }}>
          <span>₹ {price}</span>
          <br />
          <Rating rating={rating} />
          {fastDelivery ? <div>Fast Delivery</div> : <div>4 days delivery</div>}
        </Card.Subtitle>
        <Button class="btn btn-primary">Add to cart</Button>
      </div>
    </div>
  );
};

export default Item;
