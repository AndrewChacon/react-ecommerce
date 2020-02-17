import React from 'react'
import "./Orders.scss"
import { Button, Form, FormGroup, Label, Input, Table } from 'reactstrap'

export const Orders = () => {
  return (
    <div className="orders">
      <h1>Orders</h1>
      <Table>
        <thead>
          <tr>
            <th>Order #</th>
            <th>Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">113-7112181-7070633</th>
            <td>2/16/2020</td>
            <td>$74.40</td>
          </tr>
          <tr>
            <th scope="row">973-5212027-2280628</th>
            <td>2/17/2020</td>
            <td>$99.97</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
