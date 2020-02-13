import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import "./Login.scss"

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Login</h1>
      <Form>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password"  value={password} onChange={e => setPassword(e.target.value)} />
      </FormGroup>
      <Button>Login</Button>
    </Form>
    </div>
  )
}
