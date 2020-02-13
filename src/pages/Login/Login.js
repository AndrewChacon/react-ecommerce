import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import "./Login.scss"
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login">
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
      <FormText color="muted">
        <Link to="/register">Dont have an account?</Link>
      </FormText>
    </Form>
    </div>
  )
}
