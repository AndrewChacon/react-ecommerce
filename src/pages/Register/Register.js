import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import "./Register.scss"

export const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" />
      </FormGroup>
      <FormGroup>
        <Label>Confirm Password</Label>
        <Input type="password" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </div>
  )
}
