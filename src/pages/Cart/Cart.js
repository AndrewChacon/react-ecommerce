import React from 'react' 
import "./Cart.scss"
import { CartItemCard } from '../../components/CartItemCard/CartItemCard'

function Cart(props) {
  return (
    <div className="cart">
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
    </div>
  )
}

Cart.propTypes = {

}

export default Cart

