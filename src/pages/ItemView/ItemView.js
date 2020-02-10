import React, { useState } from 'react';
import "./ItemView.scss";
import { Card, Button, Input, Form, Alert } from 'reactstrap';
import ItemImage from "../../img/image.png";

export const ItemView = () => {
  const [productNumber, setProductNumber] = useState(1);
  return (
    <Card className="item-view">
        <div className="item-view__product-display">
          <img className="item-view__image" src={ItemImage} alt="Product" />
        </div>
        <div className="item-view__cart-details">
          <h1 className="item-view__product-name">Pewdiepie's Gaming Chair</h1>
          <h4 className="item-view__product-price">$399.99</h4>
          <Alert color="secondary" className="item-view__product-id">
            SKU: 726-81-7094
          </Alert>
          <Form>
            <div className="item-view__form-group">
              <Input className="item-view__input"
                type="number" name="productNumber" min="1" max="99"
                value={productNumber}
                onChange={e => setProductNumber(e.target.value)}
              />
              <Button className="item-view__form-button">Add To Cart &nbsp;<i className="fas fa-plus"></i></Button>
            </div>
          </Form>
        </div>
        <div className="item-view__product-details">
          <h3 className="item-view__product-heading">About This Product</h3>
          <p className="item-view__product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed. Volutpat consequat mauris nunc congue nisi vitae. Fames ac turpis egestas sed tempus urna et pharetra. Auctor urna nunc id cursus metus aliquam eleifend mi. Id donec ultrices tincidunt arcu non sodales. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Eu facilisis sed odio morbi quis commodo odio aenean sed. </p>
          <Button className="item-view__delete-button" color="danger">Delete Product &nbsp;<i className="fas fa-trash-alt"></i></Button>
        </div>
    </Card>
  )
}
