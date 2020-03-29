import React, { useState } from 'react'
import "./Orders.scss"
import { Table } from 'reactstrap'

export const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNumber: 319702,
      purchaseDate: Date.now(),
      total: 99.97
    },
    {
      id: 2,
      orderNumber: 31873,
      purchaseDate: Date.now(),
      total: 20.51
    },
    {
      id: 3,
      orderNumber: 319718,
      purchaseDate: Date.now(),
      total: 420.69
    }
  ])
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
          {
            orders.length > 0 ?
              (orders.map(order => {
                const { orderNumber, purchaseDate, total } = order;
                return <tr><th scope="row">{orderNumber}</th><td>{purchaseDate}</td><td>${total}</td></tr>
              })
              ) : (<h1>You have no previous orders</h1>)
          }
        </tbody>
      </Table>
    </div>
  )
}

{/* <tr>
            <th scope="row">113-7112181-7070633</th>
            <td>2/16/2020</td>
            <td>$74.40</td>
          </tr>
          <tr>
            <th scope="row">973-5212027-2280628</th>
            <td>2/17/2020</td>
            <td>$99.97</td>
          </tr> */}