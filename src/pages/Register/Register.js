import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import "./Register.scss"

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  return (
    <div>
      <h1>Register</h1>
      <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={name} onChange={e => setName(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Confirm Password</Label>
        <Input type="password" value={password2} onChange={e => setPassword2(e.target.value)} />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </div>
  )
}
