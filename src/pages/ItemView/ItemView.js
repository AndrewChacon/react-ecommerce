import React from 'react';
import "./ItemView.scss";
import { Card, Button, Input, Form, Alert } from 'reactstrap';
import ItemImage from "../../img/image.png";

export const ItemView = () => {
  return (
    <Card>
      <div className="item-view">
        <div>
          <img className="item-view__image" src={ItemImage} name="Item Image" />
        </div>
        <div>
          <h1>Product Name</h1>
          <h4>Product Price</h4>
          <Alert color="secondary">
            Product ID Code
          </Alert>
          <Form inline>
            <Input type="number" name="productNumber" />
            <Button>Add To Cart</Button>
          </Form>
        </div>
        <div>
          <h3>About This Product</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <Button color="danger">Delete Product</Button>
        </div>
      </div>
    </Card>
  )
}
