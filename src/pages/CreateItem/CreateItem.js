import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./CreateItem.scss";

export const CreateItem = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  return (
    <div>
        <Form className="item">
        <h1 className="item__title">Create Item</h1>
        <FormGroup>
          <Label className="item__label" for="exampleEmail">Product Name</Label>
          <Input className="item__input" type="text" value={productName} onChange={e => setProductName(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label className="item__label" for="exampleEmail">Product Price</Label>
          <Input className="item__input" type="number" min="1" value={productPrice} onChange={e => setProductPrice(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label className="item__label" for="exampleText">Product Description</Label>
          <Input className="item__input" type="textarea" value={productDescription} onChange={e => setProductDescription(e.target.value)} />
        </FormGroup>
        <FormGroup>
          <Label className="item__label" for="exampleFile">Upload Product Image</Label>
          <Input className="item__input" type="file" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  )
}
