import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap'
import "./CartItemCard.scss"
import ProductImage from "../../img/image.png"

export const CartItemCard = ({ title, price, removeItem}) => {
  return (
    <Card className="card-item">
      <CardImg src={ProductImage} alt="Product Image" />
      <CardBody className="card-item__body">
  <CardTitle className="card-item__title">{title}</CardTitle>
        <CardText className="card-item__price">{price}</CardText>
        <Button onClick={e => removeItem()} color="danger">Remove &nbsp;<i className="fas fa-trash-alt"></i></Button>
      </CardBody>
    </Card>
  )
}
