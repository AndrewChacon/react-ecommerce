import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import "./Login.scss"

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Form>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" />
      </FormGroup>
      <Button>Login</Button>
    </Form>
    </div>
  )
}
