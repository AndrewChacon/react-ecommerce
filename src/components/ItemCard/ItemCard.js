import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import './ItemCard.scss';
import { Link } from 'react-router-dom';

export const ItemCard = ({ itemName, itemPrice, itemImage }) => {
  return (
    <Link className="link" to="/item">
      <Card className="item-card">
        <CardImg style={{ width: '100%' }} src={itemImage} alt={itemName} />
        <hr />
        <CardBody>
          <CardTitle className="item-card__name">{itemName}</CardTitle>
          <CardSubtitle className="item-card__price">${itemPrice}</CardSubtitle>
        </CardBody>
      </Card>
    </Link>
  );
};
