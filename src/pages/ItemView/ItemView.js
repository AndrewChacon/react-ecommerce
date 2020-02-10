import React from 'react';
import "./ItemView.scss";
import { Card, Button, Input, Form, Alert } from 'reactstrap';
import ItemImage from "../../img/image.png";

export const ItemView = () => {
  return (
    <Card className="item-view">
        <div>
          <img className="item-view__image" src={ItemImage} alt="Product" />
        </div>
        <div className="item-view__cart-details">
          <h1 className="item-view__product-name">Product Name</h1>
          <h4 className="item-view__product-price">Product Price</h4>
          <Alert color="secondary" className="item-view__product-id">
            Product ID Code
          </Alert>
          <Form inline>
            <Input className="item-view__input" type="number" name="productNumber" min="1" max="99" />
            <Button className="item-view__form-button">Add To Cart</Button>
          </Form>
        </div>
        <div className="item-view__product-details">
          <h3 className="item-view__product-heading">About This Product</h3>
          <p className="item-view__product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button className="item-view__delete-button" color="danger">Delete Product</Button>
        </div>

    </Card>
  )
}
