import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import "./Account.scss"

export const Account = () => {
  return (
    <div className="account">
      <h1>Account</h1>
      <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value="Andrew Chacon" disabled={true} />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" value="andrew.b.chacon@gmail.com" disabled={true} />
      </FormGroup>
      <FormGroup>
        <Label>Address</Label>
        <Input type="text" value="Norwalk, CT 45 Elmwood Ave, USA" disabled={true} />
      </FormGroup>
      <Button>Edit Profile</Button>
    </Form>
    </div>
  )
}
