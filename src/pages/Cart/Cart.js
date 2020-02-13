import React, { useState } from 'react' 
import "./Cart.scss"
import { CartItemCard } from '../../components/CartItemCard/CartItemCard'

function Cart(props) {
  const [items, removeItem] = useState([
    {
      id: 1,
      title: "Pewdiepie's Gaming Chair",
      price: 399.99
    },
    {
      id: 2,
      title: "Software Book",
      price: 79.99
    },
    {
      id: 3,
      title: "Pewdiepie's Gaming Chair",
      price: 399.99
    },
    {
      id: 4,
      title: "Pewdiepie's Gaming Chair",
      price: 399.99
    },
  ])
  return (
    <div className="cart">
      {
        items.length > 0 ?
        (
          items.map(item => {
            return <CartItemCard
                    title={item.title} 
                    price={item.price} 
                    removeItem={(e) => removeItem(items.filter(item_ => item_.id !== item.id))}
                    />
          })
        ):
        (<h1>Cart has no items...</h1>)
      }
    </div>
  )
}

export default Cart

