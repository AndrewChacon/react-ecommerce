import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap'
import "./CartItemCard.scss"
import ProductImage from "../../img/image.png"

export const CartItemCard = () => {
  return (
    <Card className="card-item">
      <CardImg src={ProductImage} alt="Product Image" />
      <CardBody className="card-item__body">
        <CardTitle className="card-item__title">Product Title</CardTitle>
        <CardText className="card-item__price">Product Price</CardText>
        <Button color="danger">Remove &nbsp;<i className="fas fa-trash-alt"></i></Button>
      </CardBody>
    </Card>
  )
}
